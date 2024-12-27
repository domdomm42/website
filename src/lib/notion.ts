import { uploadImageToS3 } from "@/utils/s3";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// Gets all the posts from notion database
export async function getPostsData() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error("Missing NOTION_DATABASE_ID environment variable");
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    filter: {
      property: "Status",
      select: {
        equals: "Done",
      },
    },
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => ({
      id: page.id,
      slug: (page.properties.Slug as { rich_text: { plain_text: string }[] })
        .rich_text[0]?.plain_text,
      title: (page.properties.Title as { title: { plain_text: string }[] })
        .title[0]?.plain_text,
      date: (page.properties.Date as { date: { start: string } }).date?.start,
      excerpt: (
        page.properties.Excerpt as { rich_text: { plain_text: string }[] }
      ).rich_text[0]?.plain_text,
    }));
}

// Gets a single post from notion database given the slug
export async function getPostData(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error("Missing NOTION_DATABASE_ID environment variable");
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  if (!response.results[0]) {
    return null;
  }

  // Get the page and convert it to markdown
  const page = response.results[0];
  const mdblocks = await n2m.pageToMarkdown(page.id);

  for (const block of mdblocks) {
    if (block.type === "image") {
      const notionImageUrl = block.parent;

      const urlParts = notionImageUrl.split("?")[0].split("/");
      const originalFileName = urlParts[urlParts.length - 1];

      const fileName = `${slug}-${originalFileName
        .replace(/[^a-zA-Z0-9.-]/g, "-")
        .toLowerCase()}`;

      const s3Url = `https://${process.env.AWS_BUCKET_NAME}.s3-${process.env.AWS_REGION}.amazonaws.com/blog-images/${fileName}`;

      try {
        const response = await fetch(s3Url);
        if (!response.ok) {
          await uploadImageToS3(notionImageUrl, fileName);
        }
        block.parent = `![${fileName}](${s3Url})`;
      } catch (error) {
        console.error("Error checking/uploading image:", error);
        await uploadImageToS3(notionImageUrl, fileName);
        block.parent = `![${fileName}](${s3Url})`;
      }
    }
  }

  const markdown = n2m.toMarkdownString(mdblocks);

  return {
    id: page.id,
    slug,
    title:
      "properties" in page
        ? (page.properties.Title as { title: { plain_text: string }[] })
            .title[0]?.plain_text
        : null,
    date:
      "properties" in page
        ? (page.properties.Date as { date: { start: string } }).date?.start
        : null,
    excerpt:
      "properties" in page
        ? (page.properties.Excerpt as { rich_text: { plain_text: string }[] })
            .rich_text[0]?.plain_text
        : null,
    content: markdown.parent,
  };
}

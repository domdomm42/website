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

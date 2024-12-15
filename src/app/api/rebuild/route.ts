import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { revalidatePath } from "next/cache";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET(request: Request) {
  try {
    // GET TOKEN FROM URL
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (token !== process.env.REVALIDATE_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check for "Done" pages
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        select: {
          equals: "Done",
        },
      },
    });

    // Update status and trigger rebuild if needed
    if (response.results.length > 0) {
      revalidatePath("/blog");

      // Update statuses to Published
      for (const page of response.results) {
        await notion.pages.update({
          page_id: page.id,
          properties: {
            Status: {
              select: {
                name: "Published",
              },
            },
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to rebuild" }, { status: 500 });
  }
}

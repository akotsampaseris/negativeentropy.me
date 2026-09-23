import { authorName, siteName, siteUrl } from "@/assets/site";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import { PostType } from "@/types/posts";

export const revalidate = 3600;

const escapeXml = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

async function getPosts(): Promise<PostType[]> {
    try {
        return await client.fetch(blogPostsQuery);
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function GET() {
    const posts = await getPosts();

    const items = posts
        .map((post) => {
            const url = `${siteUrl}/blog/${post.slug}`;
            return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ""}
      ${post.description ? `<description>${escapeXml(post.description)}</description>` : ""}
      ${post.category?.name ? `<category>${escapeXml(post.category.name)}</category>` : ""}
    </item>`;
        })
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${authorName} — ${siteName}`)}</title>
    <link>${siteUrl}/blog</link>
    <description>Writing on physics, software, politics, and philosophy.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
}

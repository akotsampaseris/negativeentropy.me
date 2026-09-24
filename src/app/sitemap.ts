import type { MetadataRoute } from "next";
import { siteUrl } from "@/assets/site";
import { client } from "@/sanity/lib/client";
import { sitemapPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 3600;

type SitemapPost = { slug: string; publishedAt: string; updatedAt: string };

async function getPosts(): Promise<SitemapPost[]> {
    try {
        return await client.fetch(sitemapPostsQuery);
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getPosts();

    const pages: MetadataRoute.Sitemap = ["", "/about", "/now", "/projects", "/blog", "/photos"].map((path) => ({
        url: `${siteUrl}${path}`,
        changeFrequency: path === "/blog" || path === "/now" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
    }));

    const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt ?? post.publishedAt,
        changeFrequency: "yearly",
        priority: 0.6,
    }));

    return [...pages, ...postPages];
}

import { type Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/features/Blog/BlogPost";
import { PostType } from "@/types/posts";
import ReadingProgressBar from "@/components/ui/Blog/ReadingProgressBar";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";

async function getPost(slug: string): Promise<PostType> {
    const post = await client.fetch(postBySlugQuery, { slug });
    if (!post) return notFound();
    return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    const url = `https://negativeentropy.me/blog/${slug}`;
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: url,
            types: {
                "application/rss+xml": "/feed.xml",
            },
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            siteName: "negativeentropy.me",
            locale: "en_US",
            type: "article",
            publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
            authors: ["Antony Kotsampaseris"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    return (
        <div>
            <ReadingProgressBar />
            <BlogPost post={post} />
        </div>
    );
}

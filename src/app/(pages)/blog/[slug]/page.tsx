import { type Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/features/Blog/BlogPost";
import { PostType } from "@/types/posts";
import ReadingProgressBar from "@/components/ui/Blog/ReadingProgressBar";
import { dateFormatter } from "@/utils/formatter";
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
    const image = "https://negativeentropy.me/symbol_original.png";
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            siteName: "negativeentropy.me",
            locale: "en_US",
            type: "article",
            publishedTime: dateFormatter(post.publishedAt),
            authors: ["Antony Kotsampaseris"],
            images: [{ url: image, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [image],
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

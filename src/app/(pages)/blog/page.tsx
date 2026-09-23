import { type Metadata } from "next";
import Blog from "@/components/features/Blog/Blog";
import { PostType } from "@/types/posts";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery, blogPostsByCategoryQuery } from "@/sanity/lib/queries";

async function getPosts(category?: string): Promise<PostType[]> {
    try {
        return await client.fetch(category ? blogPostsByCategoryQuery : blogPostsQuery, { category });
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const title = "Blog";
    const description = "Writing on physics, software,  politics, and philosophy. A glimpse into my mind.";
    const url = "https://negativeentropy.me/blog";
    const image = "https://negativeentropy.me/symbol_original.png";

    return {
        title,
        description,
        alternates: {
            canonical: url,
            types: {
                "application/rss+xml": "/feed.xml",
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "negativeentropy.me",
            locale: "en_US",
            authors: ["Antony Kotsampaseris"],
            images: [
                {
                    url: image,
                    alt: `${title} - negativeentropy.me`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

interface BlogPageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const { category } = await searchParams;
    const posts: PostType[] = await getPosts(category);

    return (
        <div>
            <div className="flex items-baseline gap-4 py-2 mb-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Blog</h1>
                {category && (
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#4ade8099" }}>
                        ⟶ {category}
                    </span>
                )}
            </div>
            <Blog posts={posts} activeCategory={category} />
        </div>
    );
}

import { type Metadata } from "next";
import Blog from "@/components/features/Blog/Blog";
import { PostType } from "@/types/posts";

interface PostFilters {
    sort?: string;
    limit?: number;
    page?: number;
    "where[category.name][equals]"?: string;
}

async function getPosts(pagination: boolean = true, page: number = 1, postsPerPage: number = 5, sortBy: string = "-publishedAt", category?: string) {
    const apiUrl = process.env.CMS_API_URL;
    const filters: PostFilters = { sort: sortBy };

    if (pagination) {
        filters.page = page;
        filters.limit = postsPerPage;
    }

    if (category) {
        filters["where[category.name][equals]"] = category;
    }

    const fullPath = `${apiUrl}/posts?${Object.entries(filters)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&")}`;

    try {
        const res = await fetch(fullPath, { cache: "no-store" });
        const data = await res.json();
        return (data.docs as PostType[]) ?? [];
    } catch (e) {
        console.log(e);
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
    const posts: PostType[] = await getPosts(false, 1, 5, "-publishedAt", category);

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

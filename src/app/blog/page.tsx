import { type Metadata } from "next";
import Blog from "@/src/components/features/Blog/Blog";
import { PostType } from "@/src/types/posts";

export const metadata: Metadata = {
    title: "Blog",
    description: "Writing on physics, software,  politics, and philosophy. A glimpse into my mind.",
};

interface PostFilters {
    sort?: string;
    limit?: number;
    page?: number;
    // "where[category.name][equals]"?: string;
}

async function getPosts(pagination: boolean = true, page: number = 1, postsPerPage: number = 5, sortBy: string = "-publishedAt") {
    const apiUrl = process.env.CMS_API_URL;
    const filters: PostFilters = { sort: sortBy };

    if (pagination) {
        filters.page = page;
        filters.limit = postsPerPage;
    }

    // if (category) {
    //     filters["where[category.name][equals]"] = category;
    // }

    const fullPath = `${apiUrl}/posts?${Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;

    console.log(fullPath);
    try {
        const res = await fetch(fullPath);
        const data = await res.json();
        const posts: PostType[] = data.docs;
        return posts;
    } catch (e) {
        console.log(e);
        return [];
    }
}

// interface BlogPageProps {
//     searchParams: Promise<{ category?: string }>;
// }

export default async function BlogPage() {
    // const { category } = await searchParams;
    const posts: PostType[] = await getPosts(false, 1, 5, "-publishedAt");

    return (
        <div>
            <div className="flex items-baseline gap-4 py-2 mb-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Blog</h1>
                {/* {category && (
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#4ade8099" }}>
                        ⟶ {category}
                    </span>
                )} */}
            </div>
            <Blog posts={posts} />
        </div>
    );
}

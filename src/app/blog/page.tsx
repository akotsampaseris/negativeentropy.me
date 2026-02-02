import { type Metadata } from "next";

import Blog from "@/src/components/features/Blog/Blog";
import { PostType } from "@/src/types/posts";

export const metadata: Metadata = {
    title: "Blog",
};

interface PostFilters {
    sort?: string;
    limit?: number;
    page?: number;
}

async function getPosts(
    pagination: boolean = true,
    page: number = 1,
    postsPerPage: number = 5,
    sortBy: string = "-publishedAt",
) {
    const apiUrl = process.env.CMS_API_URL;

    const filters: PostFilters = {
        sort: sortBy,
    };

    if (!!pagination) {
        filters.page = page;
        filters.limit = postsPerPage;
    }

    const fullPath = `${apiUrl}/posts?${Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;

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

export default async function BlogPage() {
    const pagination = false;
    const page = 1;
    const postsPerPage = 5;
    const sortBy = "-publishedAt";
    const posts: PostType[] = await getPosts(
        pagination,
        page,
        postsPerPage,
        sortBy,
    );

    // TODO: Implement loadMore functionality
    // const loadMore = async () => {
    //   "use server";
    //   const nextPage = page + 1;
    //   const nextPosts = await getPosts(
    //     pagination,
    //     nextPage,
    //     postsPerPage,
    //     sortBy,
    //   );
    //   posts.push(...nextPosts);
    // };

    return (
        <div>
            <h1>Blog</h1>
            <Blog posts={posts} />
        </div>
    );
}

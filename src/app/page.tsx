import LatestBlogPosts from "../components/features/Blog/LatestBlogPost";
import Currently from "../components/features/Currently/Currently";
import { PostType } from "../types/posts";
import HeroText from "../components/features/Home/HeroText";

async function getLatestPosts() {
    const apiUrl = process.env.CMS_API_URL;
    const filters = {
        sort: "-publishedAt",
        page: 1,
        limit: 3,
    };
    const fullPath = `${apiUrl}/posts?${Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;
    try {
        const res = await fetch(fullPath);
        const data = await res.json();
        const posts: PostType[] = data.docs;
        return posts;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default async function HomePage() {
    const posts: PostType[] = await getLatestPosts();

    return (
        <div className="w-fit space-y-10">
            {/* Intro */}
            <div className="space-y-5">
                <h1 className="py-2 text-3xl font-bold tracking-tight text-white">Antony Kotsampaseris</h1>
                <HeroText />
            </div>

            {/* Currently */}
            <Currently />
            {/* Latest Posts */}
            <LatestBlogPosts posts={posts} />
        </div>
    );
}

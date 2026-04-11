import LatestBlogPosts from "@/components/features/Blog/LatestBlogPost";
import Currently from "@/components/features/Currently/Currently";
import { PostType } from "@/types/posts";
import HeroText from "@/components/features/Home/HeroText";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";

async function getLatestPosts(): Promise<PostType[]> {
    try {
        return await client.fetch(latestPostsQuery);
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
                <h1 className="py-2 font-bold tracking-tight text-white">Antony Kotsampaseris</h1>
                <HeroText />
            </div>
            {/* Currently */}
            <Currently />
            {/* Latest Posts */}
            <LatestBlogPosts posts={posts} />
        </div>
    );
}

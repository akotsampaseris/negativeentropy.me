import LatestBlogPosts from "@/components/features/Blog/LatestBlogPost";
import Currently from "@/components/features/Currently/Currently";
import { PostType } from "@/types/posts";
import HeroText from "@/components/features/Home/HeroText";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";
import { formatLastUpdated, getNow } from "@/sanity/lib/now";

// Fallback only; the Sanity webhook (api/revalidate) refreshes this page on publish
export const revalidate = 3600;

async function getLatestPosts(): Promise<PostType[]> {
    try {
        return await client.fetch(latestPostsQuery);
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default async function HomePage() {
    const [posts, now] = await Promise.all([getLatestPosts(), getNow()]);
    const currentlyItems = (now?.sections ?? [])
        .filter((section) => section.currentlyLabel)
        .map((section) => ({ icon: section.glyph, label: section.currentlyLabel!, content: section.short ?? section.title }));
    if (currentlyItems.length > 0 && now?.lastUpdated) {
        currentlyItems.push({ icon: "↻", label: "Updated", content: formatLastUpdated(now.lastUpdated) });
    }
    return (
        <div className="w-fit space-y-10">
            {/* Intro */}
            <div className="space-y-5">
                <h1 className="py-2 font-bold tracking-tight text-white">Antony Kotsampaseris</h1>
                <HeroText />
            </div>
            {/* Currently */}
            {currentlyItems.length > 0 && <Currently items={currentlyItems} />}
            {/* Latest Posts */}
            <LatestBlogPosts posts={posts} />
        </div>
    );
}

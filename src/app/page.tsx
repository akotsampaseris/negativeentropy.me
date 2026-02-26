import SocialBar from "../components/ui/SocialBar/SocialBar";
import LatestBlogPosts from "../components/features/Blog/LatestBlogPost";
import Currently from "../components/features/Currently/Currently";
import { PostType } from "../types/posts";
import { GreenLink } from "../components/ui/GreenLink/GreenLink";

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
                <p className="text-sm leading-relaxed text-gray-300 max-w-xl">
                    Hey, I am Antony, a <strong className="text-gray-100 font-semibold">theoretical physicist</strong> turned{" "}
                    <strong className="text-gray-100 font-semibold">software engineer</strong>. If you catch me daydreaming, I am most likely thinking about{" "}
                    <strong className="text-gray-100 font-semibold">physics</strong>, <strong className="text-gray-100 font-semibold">software</strong>, and{" "}
                    <strong className="text-gray-100 font-semibold">politics</strong>. I write about these topics <GreenLink href="/blog">here</GreenLink>. I am looking for the
                    truth no matter how difficult or uncomfortable it may be.
                </p>
            </div>

            {/* Contact + Social */}
            <div className="space-y-4">
                <p className="text-sm text-gray-300">
                    Send me a message at <GreenLink href="mailto:a.kotsampaseris@gmail.com">a.kotsampaseris@gmail.com</GreenLink> or follow me in the apps below.
                </p>
                <SocialBar withTitle={true} />
            </div>

            {/* Currently */}
            <Currently />

            {/* Latest Posts */}
            <LatestBlogPosts posts={posts} />
        </div>
    );
}

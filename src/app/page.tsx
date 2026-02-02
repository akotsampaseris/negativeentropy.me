import Link from "next/link";
import type { Metadata } from "next";

import SocialBar from "../components/ui/SocialBar/SocialBar";
import { FrequentlyAskedQuestions } from "../components/features/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import LatestBlogPost from "../components/features/Blog/LatestBlogPost";
import type { PostType } from "../types/posts";

export const metadata: Metadata = {
    title: "Antony Kotsampaseris",
};

async function getLatestPost() {
    const apiUrl = process.env.CMS_API_URL;

    const filters = {
        sort: "-publishedAt",
        page: 1,
        limit: 1,
    };

    const fullPath = `${apiUrl}/posts?${Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;

    try {
        const res = await fetch(fullPath);
        const data = await res.json();
        const post: PostType = data.docs[0];

        return post;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export default async function HomePage() {
    const post: PostType | null = await getLatestPost();

    return (
        <div className="w-fit space-y-4">
            <div>
                <h1 className="py-2">Antony Kotsampaseris</h1>
                <p>
                    Hey, I am Antony Kotsampaseris,{" "}
                    <strong>software engineer</strong> and{" "}
                    <strong>theoretical phycisist</strong>. Check out{" "}
                    <Link href={"/about"}>my full story</Link>, it{"'"}s pretty
                    fun.
                </p>
            </div>
            <div>
                <p>
                    If you catch me daydreaming, I am most likely thinking about{" "}
                    <strong>physics</strong>, <strong>software</strong>,{" "}
                    <strong>crypto</strong>, and <strong>politics</strong>. From
                    now on, I will also be writing about those topics in my{" "}
                    <Link href={"/blog"}>Blog</Link>, but watch out because I
                    have very strong opinions about the things I care about.
                    Reach out if you want to talk about it.
                </p>
            </div>
            <div className="space-y-4">
                <p>You can connect with me on these apps</p>
                <SocialBar withTitle={true} />
                <p>
                    or send me an e-mail at{" "}
                    <Link href="mailto:a.kotsampaseris@gmail.com">
                        a.kotsampaseris@gmail.com
                    </Link>
                    .
                </p>
            </div>
            {post && (
                <div>
                    <div className="flex-wrap gap-4 py-4">
                        <h3>Latest Post</h3>
                        <span className="text-xs">
                            <Link href={"/blog"}>View all posts</Link>
                        </span>
                    </div>
                    <div className="px-2 border rounded-xl">
                        <LatestBlogPost post={post} />
                    </div>
                </div>
            )}
            <div className="py-4">
                <h3>Frequently Asked Questions</h3>
                <FrequentlyAskedQuestions />
            </div>
        </div>
    );
}

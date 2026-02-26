"use client";

import React from "react";
import Link from "next/link";
import { PostType } from "@/src/types/posts";
import PostCard from "../../ui/Blog/PostCard";

interface LatestBlogPostsProps {
    posts: PostType[];
}

const LatestBlogPosts = ({ posts }: LatestBlogPostsProps) => {
    if (!posts || posts.length === 0)
        return (
            <div className="text-xs font-mono tracking-widest uppercase" style={{ color: "#4ade8055" }}>
                No posts yet.
            </div>
        );

    return (
        <div className="py-6">
            {/* Header — identical to Currently */}
            <div className="flex items-center gap-3 mb-2">
                <h3 className="text-base font-semibold tracking-[0.2em] uppercase" style={{ color: "#4ade80" }}>
                    Recent Posts
                </h3>
                <div
                    className="flex-1 h-px"
                    style={{
                        background: "linear-gradient(to right, #4ade8033, transparent)",
                    }}
                />
            </div>

            {/* Post list */}
            <div>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* View all */}
            <div className="group flex items-center gap-2 pt-4">
                <Link
                    href="/blog"
                    className="text-xs font-mono tracking-widest uppercase transition-colors duration-200"
                    style={{ color: "#4ade80cb" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#4ade80cb")}>
                    View all posts
                </Link>
                <span className="text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" style={{ color: "#4ade80" }}>
                    ⟶
                </span>
            </div>
        </div>
    );
};

export default LatestBlogPosts;

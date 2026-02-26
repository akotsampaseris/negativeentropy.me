"use client";

import React from "react";

import { GreenLink } from "../../ui/GreenLink/GreenLink";
import { PostType } from "@/src/types/posts";
import PostCard from "../../ui/Blog/PostCard";

interface BlogProps {
    posts: PostType[];
    activeCategory?: string;
}

const Blog: React.FC<BlogProps> = ({ posts, activeCategory }) => {
    if (!posts || !posts.length) {
        return (
            <div className="py-8 font-mono text-sm">
                {activeCategory ? (
                    <span>
                        No posts in <span style={{ color: "#4ade80" }}>{activeCategory}</span>. <GreenLink href="/blog">View all posts</GreenLink>
                    </span>
                ) : (
                    "No posts yet."
                )}
            </div>
        );
    }

    return (
        <div>
            {activeCategory && (
                <div className="flex items-center gap-3 mb-4">
                    <GreenLink href="/blog">⟵ All posts</GreenLink>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #4ade8022, transparent)" }} />
                </div>
            )}
            <div className="divide-y divide-white/5">
                {posts.map((post: PostType) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;

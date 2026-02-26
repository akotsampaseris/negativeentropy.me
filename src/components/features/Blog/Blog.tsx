"use client";
import React from "react";
import Link from "next/link";
import { PostType } from "@/src/types/posts";
import PostCard from "../../ui/Blog/PostCard";

interface BlogProps {
    posts: PostType[];
    activeCategory?: string;
}

const Blog: React.FC<BlogProps> = ({ posts, activeCategory }) => {
    if (!posts || !posts.length) {
        return (
            <div className="py-8 font-mono text-sm" style={{ color: "#4ade8066" }}>
                {activeCategory ? (
                    <span>
                        No posts in <span style={{ color: "#4ade80" }}>{activeCategory}</span>.{" "}
                        <Link href="/blog" className="border-b border-dotted transition-colors duration-200" style={{ color: "#4ade80", borderColor: "#4ade8055" }}>
                            View all posts
                        </Link>
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
                    <Link
                        href="/blog"
                        className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-colors duration-200"
                        style={{ color: "#4ade8066" }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8066")}>
                        ⟵ All posts
                    </Link>
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

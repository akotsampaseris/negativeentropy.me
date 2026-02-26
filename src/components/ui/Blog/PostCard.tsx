"use client";
import React from "react";
import Link from "next/link";

import { ShareButton } from "@/components/ui/ShareButton/ShareButton";
import { PostType } from "@/types/posts";
import { dateFormatter } from "@/utils/formatter";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

interface PostCardProps {
    post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const descriptionCutoffLimitChars: number = 300;

    return (
        <div className="group relative flex items-stretch py-1 focus-within:[--active:1]">
            {/* Animated left border */}
            <div
                className="w-px mr-5 flex-shrink-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                style={{
                    background: "linear-gradient(to bottom, transparent, #4ade80, transparent)",
                }}
            />

            {/* Card content */}
            <div className="flex-1 py-5 border-b border-white/5 group-hover:border-white/10 group-focus-within:border-white/10 transition-colors duration-300">
                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <h3
                        className="relative text-base font-semibold leading-snug mb-3 text-gray-100 group-hover:text-white group-focus-within:text-white transition-all duration-200 group-hover:translate-x-5 group-focus-within:translate-x-5"
                        style={{ fontFamily: "monospace", letterSpacing: "0.01em" }}>
                        <span
                            className="absolute -left-5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200"
                            style={{ color: "#4ade80" }}>
                            ⟶
                        </span>
                        {post.title}
                    </h3>
                </Link>

                {/* Description */}
                {!!post.description && (
                    <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 group-focus-within:text-gray-300 transition-colors duration-200 mb-4">
                        {post.description.length > descriptionCutoffLimitChars ? `${post.description.slice(0, descriptionCutoffLimitChars)}...` : post.description}
                    </p>
                )}

                {/* Meta row */}
                <div className="flex items-center gap-3 text-xs font-mono">
                    {post.category?.name && (
                        <>
                            <GreenLink href={`/blog?category=${post.category.name}`}>{post.category.name}</GreenLink>
                            <span className="text-white/10">—</span>
                        </>
                    )}
                    <span className="text-white/30">{dateFormatter(post.publishedAt)}</span>
                    <ShareButton title={post.title} slug={post.slug} />
                </div>
            </div>
        </div>
    );
};

export default PostCard;

"use client";
import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { PostType } from "@/src/types/posts";
import { dateFormatter } from "@/src/utils/formatter";
import { GreenLink } from "../../ui/GreenLink/GreenLink";

interface BlogPostProps {
    post: PostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4 pb-6 border-b" style={{ borderColor: "#4ade8022" }}>
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white">{post.title}</h1>
                {/* Meta row — category + date */}
                <div className="flex items-center gap-3">
                    {post.category?.name && (
                        <>
                            <GreenLink href={`/blog?category=${post.category.name}`}>{post.category.name}</GreenLink>
                            <span className="text-white/10">—</span>
                        </>
                    )}
                    <span className="text-xs font-mono text-white/50">{dateFormatter(post.publishedAt)}</span>
                </div>
                {/* Bottom accent line */}
                <div className="h-px w-16 mt-2" style={{ background: "linear-gradient(to right, #4ade80, transparent)" }} />
            </div>

            {/* Body */}
            <div
                className="prose prose-invert prose-sm sm:prose-base max-w-none
                    prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white
                    prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
                    prose-p:text-gray-400 prose-p:leading-relaxed
                    prose-a:border-b prose-a:border-dotted prose-a:no-underline prose-a:transition-colors prose-a:duration-200
                    prose-strong:text-gray-100
                    prose-code:text-xs prose-code:font-mono prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
                    prose-blockquote:border-l-2 prose-blockquote:text-gray-500 prose-blockquote:italic"
                style={
                    {
                        "--tw-prose-links": "#4ade80",
                        "--tw-prose-code-bg": "#ffffff0d",
                        "--tw-prose-quote-borders": "#4ade8055",
                    } as React.CSSProperties
                }>
                <RichText data={post.body} />
            </div>
        </div>
    );
};

export default BlogPost;

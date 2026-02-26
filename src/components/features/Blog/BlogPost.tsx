"use client";
import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { PostType } from "@/types/posts";
import { dateFormatter } from "@/utils/formatter";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";
import { ShareButton } from "@/components/ui/ShareButton/ShareButton";

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
                    <span className="text-xs font-mono text-white/80">{dateFormatter(post.publishedAt)}</span>
                    <span className="text-white/10">—</span>
                    {post.category?.name && (
                        <>
                            <GreenLink href={`/blog?category=${post.category.name}`} className="text-sm">
                                {post.category.name}
                            </GreenLink>
                            <span className="text-white/10">—</span>
                        </>
                    )}
                    <ShareButton title={post.title} slug={post.slug} />
                </div>
                {/* Bottom accent line */}
                <div className="h-px w-16 mt-2" style={{ background: "linear-gradient(to right, #4ade80, transparent)" }} />
            </div>
            <div className="rich-text">
                <RichText data={post.body} />
            </div>
        </div>
    );
};

export default BlogPost;

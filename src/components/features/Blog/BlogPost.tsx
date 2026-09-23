"use client";
import React, { useMemo } from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PostType } from "@/types/posts";
import { dateFormatter } from "@/utils/formatter";
import { extractHeadings } from "@/utils/headings";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";
import { ShareButton } from "@/components/ui/ShareButton/ShareButton";
import TableOfContents from "@/components/ui/Blog/TableOfContents";

interface BlogPostProps {
    post: PostType;
}

const minHeadingsForToc = 2;

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    const headings = useMemo(() => extractHeadings(post.body), [post.body]);
    const showToc = headings.length >= minHeadingsForToc;

    const components = useMemo<PortableTextComponents>(() => {
        const idFor = (key?: string) => headings.find((h) => h.key === key)?.id;
        return {
            block: {
                h2: ({ children, value }) => (
                    <h2 id={idFor(value._key)} className="scroll-mt-8">
                        {children}
                    </h2>
                ),
                h3: ({ children, value }) => (
                    <h3 id={idFor(value._key)} className="scroll-mt-8">
                        {children}
                    </h3>
                ),
            },
        };
    }, [headings]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4 pb-6 border-b" style={{ borderColor: "#4ade8022" }}>
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white">{post.title}</h1>
                {/* Meta row — date + reading time + category */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono text-white/80">{dateFormatter(post.publishedAt)}</span>
                    <span className="text-white/10">—</span>
                    {post.readingTime !== undefined && (
                        <>
                            <span className="text-xs font-mono text-white/60">{Math.max(1, post.readingTime)} min read</span>
                            <span className="text-white/10">—</span>
                        </>
                    )}
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
            <div className={showToc ? "lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12 space-y-6 lg:space-y-0" : undefined}>
                {showToc && (
                    <aside className="lg:order-last">
                        <TableOfContents headings={headings} />
                    </aside>
                )}
                <div className="rich-text min-w-0">
                    <PortableText value={post.body} components={components} />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;

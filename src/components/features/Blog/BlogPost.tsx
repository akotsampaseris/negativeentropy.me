"use client";

import React from "react";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { PostType } from "@/src/types/posts";
import { dateFormatter } from "@/src/utils/formatter";

interface BlogPostProps {
  post: PostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="space-y-4">
      <div>
        <h1>{post.title}</h1>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Link href={`/blog?category=${post.category?.name}`}>
            {post.category?.name}
          </Link>
          <span>|</span>
          <span>{dateFormatter(post.publishedAt)}</span>
        </div>
      </div>
      <RichText data={post.body} />
    </div>
  );
};

export default BlogPost;

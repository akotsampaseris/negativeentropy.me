"use client";

import React from "react";

import { PostType } from "@/src/types/posts";
import PostCard from "../../ui/Blog/PostCard";

interface BlogProps {
  posts: PostType[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  if (!posts.length) return <div>No posts yet.</div>;

  return (
    <div className="divide-y">
      {posts.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;

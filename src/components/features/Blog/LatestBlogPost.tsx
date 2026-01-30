"use client";

import React from "react";

import { PostType } from "@/src/types/posts";
import PostCard from "../../ui/Blog/PostCard";

interface LatestBlogPostProps {
  post: PostType;
}

const LatestBlogPost: React.FC<LatestBlogPostProps> = ({ post }) => {
  if (!post) return <div>No posts yet.</div>;

  return (
    <PostCard key={post.id} post={post} />
  );
};

export default LatestBlogPost;

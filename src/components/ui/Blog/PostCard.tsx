import React from "react";
import Link from "next/link";

import { PostType } from "@/src/types/posts";
import { dateFormatter } from "@/src/utils/formatter";

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const descriptionCutoffLimitChars: number = 300;

  return (
    <div className="py-8 flex flex-col justify-around">
      <div className="flex justify-between items-center text-sm">
        <Link href={`/blog?category=${post.category?.name}`}>
          {post.category?.name}
        </Link>
        <p>{dateFormatter(post.publishedAt)}</p>
      </div>
      <div className="space-y-2">
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <div className="text-base">
          {!!post.description &&
          post.description?.length > descriptionCutoffLimitChars ? (
            <p>{post.description?.slice(0, descriptionCutoffLimitChars)}...</p>
          ) : (
            <p>{post.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

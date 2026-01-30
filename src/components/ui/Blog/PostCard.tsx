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
    <div className="py-4 flex flex-col justify-around">
      <div className="py-2">
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <div className="text-base py-2">
          {!!post.description &&
            post.description?.length > descriptionCutoffLimitChars ? (
            <p>{post.description?.slice(0, descriptionCutoffLimitChars)}...</p>
          ) : (
            <p>{post.description}</p>
          )}
        </div>
        <div className="flex gap-4">
          <Link href={`/blog?category=${post.category?.name}`}>
            {post.category?.name}
          </Link>
          <span>|</span>
          <p>{dateFormatter(post.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

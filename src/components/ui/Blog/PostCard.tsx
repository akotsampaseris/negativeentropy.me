import React from "react";
import Link from "next/link";

interface PostCardProps {
    id: number,
    title: string,
    description?: string,
    category?: string,
    publishedAt: string,
}

const PostCard: React.FC<PostCardProps>= ({ 
    id,
    title, 
    category, 
    description, 
    publishedAt 
}) => {
    const descriptionCutoffLimitChars: number = 180;

    return (
        <div className="py-4 flex flex-col justify-around">
            <div className="flex justify-between items-center text-sm">
                <Link href={`/blog?category=${category}`}>{category}</Link>
                <p>{publishedAt}</p>
            </div>
            <div className="space-y-2">
                <Link href={`/blog/${id}`}>
                    <h3>{title}</h3>
                </Link>
                <div className="text-base">
                    { !!description && description?.length > descriptionCutoffLimitChars ?
                    <p>{description?.slice(0, descriptionCutoffLimitChars)}...</p>
                    :
                    <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default PostCard
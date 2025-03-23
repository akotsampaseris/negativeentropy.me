import React from "react";
import Link from "next/link";

interface PostCardProps {
    id: number,
    title: string,
    description: string,
    category: string,
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
        <div className="px-4 py-8 space-y-4 flex flex-col justify-around">
            <div className="flex justify-between items-center">
                <div className="h-5 w-fit px-2 flex items-center bg-accent/90 hover:bg-accent-hover rounded">
                    <p className="font-semibold text-white text-xs">
                        {category}
                    </p>
                </div>
                <p className="text-sm text-accent">{publishedAt}</p>
            </div>
            <div className="space-y-2">
                <Link href={`/blog/posts/${id}`}>
                    <h2 className="text-2xl font-bold text-white">
                        {title}
                    </h2>
                </Link>
                <div className="text-base">
                    {description?.length > descriptionCutoffLimitChars ?
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
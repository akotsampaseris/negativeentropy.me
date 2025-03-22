import React from "react";

interface PostCardProps {
    title: string,
    description: string,
    category: string,
    publishedAt: string,
}

const PostCard: React.FC<PostCardProps>= ({ title, category, description, publishedAt }) => {
    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <div className="h-5 w-fit px-2 flex items-center bg-accent/90 hover:bg-accent-hover rounded">
                    <p className="font-semibold text-white text-xs">
                        {category}
                    </p>
                </div>
                <p className="text-sm text-accent">{publishedAt}</p>
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">
                    {title}
                </h2>
                <div className="text-base">
                    {description?.length > 150 ?
                    <p>{description?.slice(0, 150)}...</p>
                    :
                    <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default PostCard
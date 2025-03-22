"use client"

import React from "react";
import useSWR from "swr";

import { fetcher } from "@/src/utils/apiHelpers";
import { dateFormatter } from "@/src/utils/formatter";

import { PostType } from "@/src/types/posts";
import PostCard from "../../ui/Blog/PostCard";

const Blog: React.FC = () => {
	const { data, error } = useSWR('/api/posts', fetcher, {
		refreshInterval: 1000 * 60 * 10, // refetch every 10 minutes
	})

	if (error) return <div>Something went wrong...</div>
	if (!data) return <div>Loading...</div>

    const posts: PostType[] = data?.docs

    if (!posts.length) return <div>No posts yet.</div>

    const lorem: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor eaque officia consectetur deleniti earum aperiam consequatur sit possimus adipisci. Fuga, eum rem omnis laboriosam dolorum voluptatibus nisi minima ratione."

	return (
		<div className="divide-y">
			{posts.map((post: PostType)=> (
                <PostCard 
                    key={post.id} 
                    id={post.id}
                    title={post.title}
                    category={"Crypto"}
                    description={lorem}
                    publishedAt={dateFormatter(post.createdAt)} />
            ))}
		</div>
	);
}

export default Blog
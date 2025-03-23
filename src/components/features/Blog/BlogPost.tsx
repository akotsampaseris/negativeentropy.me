"use client"

import React from "react";
import useSWR from "swr";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { fetcher } from "@/src/utils/apiHelpers";
import { dateFormatter } from "@/src/utils/formatter";

import { PostType } from "@/src/types/posts";

interface BlogPostProps {
    postID: number,
}

const BlogPost: React.FC<BlogPostProps> = ({ postID }) => {
	const { data, error } = useSWR(`/api/posts/${postID}`, fetcher, {
		refreshInterval: 1000 * 60 * 10, // refetch every 10 minutes
	})

	console.log(data)

	if (error) return <div>Something went wrong...</div>
	if (!data) return <div>Loading...</div>

    const post: PostType = data

	return (
		<div className="space-y-4">
            <div>
				<h1>{post.title}</h1>
				<span className="text-sm text-accent">
					{dateFormatter(post.createdAt)}
				</span>
			</div>
			<div>
				<Markdown remarkPlugins={[remarkGfm]}>
					{post.body}
				</Markdown>
			</div>
		</div>
	);
}

export default BlogPost
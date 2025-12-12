import { type Metadata } from "next";

import Blog from "@/src/components/features/Blog/Blog";
import { PostType } from "@/src/types/posts";

export const metadata: Metadata = {
	title: "Blog"
}

async function getPosts() {
	const res = await fetch(`https://cms.negativeentropy.me/api/posts`,{
		next: { revalidate: 60 }
	})
	const data = await res.json()
	const posts: PostType[] = data.docs
	
	return posts
}

export default async function BlogPage() {
	const posts: PostType[] = await getPosts()

	return (
		<div>
			<h1>Blog</h1>
			<Blog posts={posts} />
		</div>
	);
}

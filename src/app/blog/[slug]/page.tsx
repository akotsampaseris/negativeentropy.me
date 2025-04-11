import { type Metadata } from "next";
import { notFound } from "next/navigation";

import BlogPost from "@/src/components/features/Blog/BlogPost";
import { PostType } from "@/src/types/posts";


async function getPost(slug: string) {
	const res = await fetch(`https://cms.negativeentropy.me/api/posts?slug=${slug}`,{
		cache: 'force-cache'
	})
	const data = await res.json()
	if(data.docs && data.docs.length===1){
		const post: PostType = data.docs[0]
		if (post.slug === slug) return post
	}
	return notFound()
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata>{
	const { slug } = await params
	const post = await getPost(slug)

	return {
		title: post.title,
		description: post.description
	}
}

export default async function BlogPostPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }){
	const { slug } = await params
	const post = await getPost(slug)

	return (
		<div>
			<BlogPost post={post} />
		</div>
	);
}

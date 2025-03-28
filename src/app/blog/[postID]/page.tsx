import { type Metadata } from "next";
import BlogPost from "@/src/components/features/Blog/BlogPost";

export const metadata: Metadata = {
	title: "Blog"
}

export default async function BlogPostPage({
    params,
  }: {
    params: Promise<{ postID: number }>
  }) {
	const { postID } = await params
	return (
		<div>
			<BlogPost postID={postID} />
		</div>
	);
}

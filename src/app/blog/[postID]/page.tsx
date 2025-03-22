import BlogPost from "@/src/components/features/Blog/BlogPost";

export default async function BlogPostPage({
    params,
  }: {
    params: Promise<{ postID: number }>
  }) {
	const { postID } = await params
	return (
		<div>
			<BlogPost postId={postID} />
		</div>
	);
}

import { type Metadata } from "next";

import Blog from "@/src/components/features/Blog/Blog";

export const metadata: Metadata = {
	title: "Blog"
}

export default function BlogPage() {
	return (
		<div>
			<h1>Blog</h1>
			<Blog />
		</div>
	);
}

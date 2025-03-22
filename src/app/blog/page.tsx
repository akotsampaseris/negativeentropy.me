import { type Metadata } from "next";

import Blog from "@/src/components/features/Blog/Blog";
import PageTitle from "@/src/components/ui/Page/PageTitle";

export const metadata: Metadata = {
	title: "Blog"
}

export default function BlogPage() {
	return (
		<div>
			<PageTitle titleText="Blog" />
			<Blog />
		</div>
	);
}

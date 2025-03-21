import Link from "next/link";
import type { Metadata } from "next";

import PageTitle from "../components/ui/Page/PageTitle";
import SectionHeader from "../components/ui/Page/SectionHeader";
import SocialBar from "../components/ui/SocialBar/SocialBar";
import { FrequentlyAskedQuestions } from "../components/features/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

export const metadata: Metadata = {
	title: "Antony Kotsampaseris"
};

export default function HomePage() {
	return (
		<div className="w-fit">
			<PageTitle titleText="Antony Kotsampaseris" />
			<div className="py-2">
				<p>Hey, I am Antony Kotsampaseris, <strong>software engineer</strong> and <strong>theoretical phycisist</strong>. Check out <Link href={'/about'}>my full story</Link>, it{"'"}s pretty fun.</p>
			</div>
			<div className="py-2">
				<p>If you catch me daydreaming, I am most likely thinking about <strong>physics</strong>, <strong>software</strong>, <strong>crypto</strong>, and <strong>politics</strong>. Now I also write about them in my <Link href={'/blog'}>Blog</Link>, but watch out because I have very strong opinions about the things I claim to know. Reach out if you want to talk about it.</p>
			</div>
			<div className="py-2 space-y-4">
				<p>You can find me on the following apps or email me at <Link href="mailto:a.kotsampaseris@gmail.com">a.kotsampaseris@gmail.com</Link>.</p>
				<SocialBar withTitle={true} />
			</div>
			<div className="py-2">
				<SectionHeader headerText="Frequently Asked Questions" />
				<FrequentlyAskedQuestions />
			</div>
		</div>
	);
}

import Link
 from "next/link";
export default function HomePage() {
	return (
		<div className="w-fit">
			<div className="py-4">
				<h1 className="text-5xl font-bold text-white">Antony K.</h1>
			</div>
			<div className="py-2">
				<p>Hey, I am Antony Kotsampaseris, software engineer and theoretical phycisist.</p>
				<p>Check out <Link href={'/about'}>my story</Link>, its pretty fun.</p>
			</div>
			<div className="py-2">
				<p>If you catch me daydreaming, I am most likely thinking about <span className="font-bold text-white">physics, software, crypto, and politics</span>.</p>
				<p>Now I also write about them in my <Link href={'/blog'}>Blog</Link>, which is heavily opinionated. Reach out in <Link href={'mailto:a.kotsampaseris@gmail.com'}>a.kotsampaseris@gmail.com</Link> if you want to talk about it.</p>
			</div>
		</div>
	);
}

import { Metadata } from "next";

import Projects from "@/components/features/Projects/Projects";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Projects";
    const description = "A collection of my most recent projects, contributions on open source software, and physics research.";
    const url = "https://negativeentropy.me/projects";
    const image = "https://negativeentropy.me/symbol_original.png";

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "negativeentropy.me",
            locale: "en_US",
            authors: ["Antony Kotsampaseris"],
            images: [
                {
                    url: image,
                    alt: `${title} - negativeentropy.me`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export default function ProjectsPage() {
    return <Projects />;
}

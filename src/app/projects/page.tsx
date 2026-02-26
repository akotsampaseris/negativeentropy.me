import { Metadata } from "next";

import Projects from "@/components/features/Projects/Projects";

export async function generateMetadata(): Promise<Metadata> {
    const url = "https://negativeentropy.me/projects";
    const image = "https://negativeentropy.me/full_width_banner.png";

    return {
        title: "Projects",
        description: "A collection of my most recent projects, contributions on open source software, and physics research.",
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: "Projects",
            description: "A collection of my most recent projects, contributions on open source software, and physics research.",
            url,
            siteName: "negativeentropy.me",
            locale: "en_US",
            authors: ["Antony Kotsampaseris"],
            images: [
                {
                    url: image,
                    alt: "Projects - negativeentropy.me",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Projects",
            description: "A collection of my most recent projects, contributions on open source software, and physics research.",
            images: [image],
        },
    };
}

export default function ProjectsPage() {
    return <Projects />;
}

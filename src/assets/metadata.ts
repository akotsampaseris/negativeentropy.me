import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    title: {
        template: "%s | Antony Kotsampaseris",
        default: "Antony Kotsampaseris - Physics, Software Engineering, and Politics",
    },
    description: "Physicist who codes. Exploring hard determinism, quantum theory, and where software engineering meets fundamental science.",
    generator: "Next.js",
    applicationName: "negativeentropy.me",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Antony Kotsampaseris", url: "https://negativeentropy.me" }],
    creator: "Antony Kotsampaseris",
    publisher: "Antony Kotsampaseris",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://negativeentropy.me"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: {
            template: "%s | Antony Kotsampaseris",
            default: "Antony Kotsampaseris - Physics, Software Engineering, and Politics",
        },
        description: "Physicist who codes. Exploring hard determinism, quantum theory, and where software engineering meets fundamental science.",
        siteName: "negativeentropy.me",
        url: "https://negativeentropy.me",
        images: [
            {
                url: "https://negativeentropy.me/symbol_original.png",
                width: 800,
                height: 800,
                alt: "Antony Kotsampaseris — negativeentropy.me",
            },
            {
                url: "https://negativeentropy.me/full_width_banner.png",
                width: 1335,
                height: 600,
                alt: "Antony Kotsampaseris — negativeentropy.me",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: {
            template: "%s | Antony Kotsampaseris",
            default: "Antony Kotsampaseris - Physics, Software Engineering, and Politics",
        },
        description: "Physicist who codes. Exploring hard determinism, quantum theory, and where software engineering meets fundamental science.",
        images: ["https://negativeentropy.me/symbol_original.png", "https://negativeentropy.me/full_width_banner.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

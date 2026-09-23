import type { Metadata } from "next";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";
import { formatLastUpdated, getNow } from "@/sanity/lib/now";

// Fallback only; the Sanity webhook (api/revalidate) refreshes this page on publish
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    const title = "Now";
    const description =
        "What Antony Kotsampaseris is focused on right now, including location, reading, building, and thinking.";
    const url = "https://negativeentropy.me/now";
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

export default async function NowPage() {
    const now = await getNow();
    const sections = now?.sections ?? [];

    return (
        <div className="py-8 space-y-10">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse inline-block" />
                    <span className="text-xs font-mono tracking-widest uppercase text-[#4ade8088]">
                        NOW
                    </span>
                </div>
                <h1 className="text-2xl font-bold text-white leading-tight">
                    What I am doing right now
                </h1>
                {now?.lastUpdated && (
                    <p className="text-sm font-mono text-[#4ade8066]">
                        Last updated — {formatLastUpdated(now.lastUpdated)}
                    </p>
                )}
                <p className="text-sm text-gray-400 leading-relaxed">
                    A{" "}
                    <GreenLink
                        href="https://nownownow.com/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        /now page
                    </GreenLink>{" "}
                    is a snapshot of what someone is focused on at this point in
                    their life.
                </p>
            </div>

            {/* Gradient divider */}
            <div
                className="h-px w-full"
                style={{
                    background:
                        "linear-gradient(to right, #4ade8033, transparent)",
                }}
            />

            {/* Sections */}
            <div className="space-y-8">
                {sections.length === 0 && (
                    <p className="text-sm text-gray-400">Nothing here yet.</p>
                )}
                {sections.map((section) => (
                    <div key={section._key} className="group space-y-2">
                        {/* Label row */}
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ade8066] font-mono text-sm select-none">
                                {section.glyph}
                            </span>
                            <span className="text-xs font-mono tracking-widest uppercase text-[#4ade8066]">
                                {section.label}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="pl-5 border-l border-[#4ade8022] group-hover:border-[#4ade8055] transition-colors duration-300 space-y-1">
                            <h2 className="text-base font-semibold text-gray-100">
                                {section.title}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {section.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer note */}
            <div
                className="h-px w-full"
                style={{
                    background:
                        "linear-gradient(to right, #4ade8033, transparent)",
                }}
            />
            <p className="text-xs font-mono text-gray-400 leading-relaxed">
                Inspired by{" "}
                <GreenLink
                    href="https://nownownow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    nownownow.com
                </GreenLink>
                . I update this when something significant changes.
            </p>
        </div>
    );
}

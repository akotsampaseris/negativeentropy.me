import type { Metadata } from "next";
import Link from "next/link";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Now";
    const description = "What Antony Kotsampaseris is focused on right now, including location, reading, building, and thinking.";
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

const lastUpdated = "February 2026";

const sections = [
    {
        glyph: "⟁",
        label: "FOCUS",
        title: "Founder phase",
        body: "This is the chapter where I stop building for others and start building for myself. I have a stealth fintech idea I am nursing quietly, which I am not ready to talk about yet, but it occupies most of my waking hours. Everything else is in service of that.",
    },
    {
        glyph: "◈",
        label: "LOCATION",
        title: "Rural Greece",
        body: "Somewhere quiet in Greece, far from the noise. The kind of place where you can actually think. I find that the best ideas come when you remove the friction of city life and replace it with long walks and slow internet speeds.",
    },
    {
        glyph: "∿",
        label: "READING",
        title: "The End of Time by Julian Barbour",
        body: "Barbour's argument that time is an illusion, that what we perceive as temporal flow is just a sequence of static configurations called 'Nows', maps uncomfortably well onto my own intuitions about determinism. If he is right, free will isn't just constrained, it doesn't exist as a concept. I am not convinced yet.",
    },
    {
        glyph: "⟴",
        label: "THINKING",
        title: "Determinism and entanglement",
        body: "I keep returning to the question of whether quantum entanglement could emerge from a deeper deterministic substrate. Bell's theorem rules out local hidden variables, but only if we require statistical independence to be true. I am wondering what would happen if we removed it from the assumptions.",
    },
    {
        glyph: "◉",
        label: "BUILDING",
        title: "Animal volunteering platform, then fintech",
        body: (
            <>
                Currently finishing a pro bono platform for an animal volunteering group I co-founded. It's a full Next.js and Sanity.io stack for adoption listings, foster
                applications, and volunteer coordination. Once that ships, everything pivots to the fintech idea.{" "}
                <Link href="/projects" className="text-[#4ade80] border-b border-dotted border-[#4ade8055] hover:text-[#86efac] transition-colors duration-200">
                    See projects →
                </Link>
            </>
        ),
    },
    {
        glyph: "∎",
        label: "LIFE",
        title: "Timos",
        body: "I adopted an elderly English Setter named Timos who was abandoned by a hunter in the wilderness. He was only found because a fire broke out in that forest and firemen happened to go there. He doesn't see too well, he moves slowly, and he has clearly decided that sleeping on a bed is much better. He is right.",
    },
];

export default function NowPage() {
    return (
        <div className="py-8 space-y-10">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse inline-block" />
                    <span className="text-xs font-mono tracking-widest uppercase text-[#4ade8088]">NOW</span>
                </div>
                <h1 className="text-2xl font-bold text-white leading-tight">What I am doing right now</h1>
                <p className="text-sm font-mono text-[#4ade8066]">Last updated — {lastUpdated}</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                    A{" "}
                    <GreenLink href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
                        /now page
                    </GreenLink>{" "}
                    is a snapshot of what someone is focused on at this point in their life.
                </p>
            </div>

            {/* Gradient divider */}
            <div className="h-px w-full" style={{ background: "linear-gradient(to right, #4ade8033, transparent)" }} />

            {/* Sections */}
            <div className="space-y-8">
                {sections.map((section) => (
                    <div key={section.label} className="group space-y-2">
                        {/* Label row */}
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ade8066] font-mono text-sm select-none">{section.glyph}</span>
                            <span className="text-xs font-mono tracking-widest uppercase text-[#4ade8066]">{section.label}</span>
                        </div>

                        {/* Content */}
                        <div className="pl-5 border-l border-[#4ade8022] group-hover:border-[#4ade8055] transition-colors duration-300 space-y-1">
                            <h2 className="text-base font-semibold text-gray-100">{section.title}</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">{section.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer note */}
            <div className="h-px w-full" style={{ background: "linear-gradient(to right, #4ade8033, transparent)" }} />
            <p className="text-xs font-mono text-gray-400 leading-relaxed">
                Inspired by{" "}
                <GreenLink href="https://nownownow.com" target="_blank" rel="noopener noreferrer">
                    nownownow.com
                </GreenLink>
                . I update this when something significant changes.
            </p>
        </div>
    );
}

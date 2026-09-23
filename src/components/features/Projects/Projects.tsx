"use client";

import { useEffect, useState } from "react";

import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

type Category = "all" | "software" | "physics" | "open-source";
type Status = "in-progress" | "completed" | "archived";

interface Publication {
    journal?: string;
    volume?: string;
    pages?: string;
    doi?: string;
    coAuthors?: string[];
    preprint?: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    stack?: string[];
    status: Status;
    category: Omit<Category, "all">;
    links: { github?: string; live?: string; paper?: string };
    year: number;
    publication?: Publication;
}

const PROJECTS: Project[] = [
    {
        id: "volunteering-website",
        title: "Animal Volunteering Website (eeach.gr)",
        description:
            "A full-stack platform for an animal volunteering organisation. Features adoption listings, foster and volunteer application forms, and a success stories showcase. Designed to reduce friction between animals in need and the people who can help them.",
        stack: ["Next.js", "Typescript", "Sanity.io", "Tailwind"],
        status: "completed",
        category: "software",
        links: { live: "https://www.eeach.gr" },
        year: 2026,
    },
    {
        id: "openadopt",
        title: "OpenAdopt",
        description:
            "A federated platform for animal rights organisations, inspired by Mastodon's decentralised model. Supports adoption listings, foster and volunteer applications, and success stories — designed so any shelter or rescue group can run their own instance while remaining part of a wider network.",
        stack: ["FastAPI", "React", "TypeScript"],
        status: "in-progress",
        category: "open-source",
        links: { github: "https://github.com/akotsampaseris/openadopt" },
        year: 2026,
    },
    {
        id: "git-analyzer",
        title: "git-analyzer",
        description:
            "A fast CLI tool for analyzing Git repository statistics and contributor metrics. Surfaces commit counts, line changes, author rankings, and per-contributor deep dives across any local repository. Processes ~300 commits per second with linear time scaling.",
        stack: ["Rust", "git2-rs", "clap"],
        status: "completed",
        category: "open-source",
        links: { github: "https://github.com/akotsampaseris/git-analyzer" },
        year: 2026,
    },
    {
        id: "negativeentropy-me",
        title: "NegativeEntropy.me",
        description:
            "This website. A personal blog and portfolio built with Next.js and Sanity, exploring physics, software, and philosophy. Designed with a custom dark aesthetic and entropy-themed animations.",
        stack: ["Next.js", "TypeScript", "Sanity.io", "Tailwind", "Vercel"],
        status: "completed",
        category: "software",
        links: {
            github: "https://github.com/akotsampaseris/negativeentropy.me",
            live: "https://negativeentropy.me",
        },
        year: 2025,
    },
    {
        id: "spatiotemporal-dispersion-saturable",
        title: "Relativistic and pseudorelativistic formulation of nonlinear envelope equations with spatiotemporal dispersion. II. Saturable systems",
        description:
            "Derives exact bright and gray soliton solutions for scalar wave systems with spatiotemporal dispersion and generic saturable nonlinearity. Shows that classical nonlinear Schrödinger predictions emerge asymptotically as subsets of the more general spatiotemporal solutions, with soliton robustness verified via integral stability criteria, symmetry principles, and numerical analysis.",
        stack: ["LaTeX"],
        status: "completed",
        category: "physics",
        links: {
            paper: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.98.053843",
        },
        year: 2018,
        publication: {
            journal: "Physical Review A",
            volume: "98, 053843",
            doi: "10.1103/PhysRevA.98.053843",
            coAuthors: [
                "J. M. Christian",
                "G. S. McDonald",
                "M. J. Lundie",
                "A. Kotsampaseris",
            ],
        },
    },
    {
        id: "spatiotemporal-dispersion-cubic-quintic",
        title: "Relativistic and pseudorelativistic formulation of nonlinear envelope equations with spatiotemporal dispersion. I. Cubic-quintic systems",
        description:
            "Proposes a generic envelope equation for scalar pulse evolution in systems with spatiotemporal dispersion and cubic-quintic nonlinearity, with application to waveguide optics. Derives exact analytical bright and gray solitons via coordinate transformations and direct integration, showing that nonlinear Schrödinger solitons emerge as asymptotic subsets of the more general spatiotemporal solutions.",
        stack: ["LaTeX"],
        status: "completed",
        category: "physics",
        links: {
            paper: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.98.053842",
        },
        year: 2018,
        publication: {
            journal: "Physical Review A",
            volume: "98, 053842",
            doi: "10.1103/PhysRevA.98.053842",
            coAuthors: [
                "J. M. Christian",
                "G. S. McDonald",
                "A. Kotsampaseris",
            ],
        },
    },
];

// Text colors, all at least 4.5:1 on the terminal background
const COLORS = {
    accent: "#4ade80",
    accentDim: "#4ade80b3",
    accentLight: "#86efac",
    title: "#e5e7eb",
    text: "#9ca3af",
    punctuation: "#6b7280",
    border: "#4ade8022",
    borderFaint: "#4ade8011",
};

const STATUS_SYMBOL: Record<Status, { symbol: string; color: string; label: string }> = {
    "in-progress": { symbol: "◉", color: COLORS.accent, label: "in progress" },
    completed: { symbol: "✓", color: COLORS.accentDim, label: "completed" },
    archived: { symbol: "◇", color: COLORS.text, label: "archived" },
};

const CATEGORIES: Category[] = ["all", "software", "physics", "open-source"];

const commandFor = (category: Category) => (category === "all" ? "ls ./projects" : `ls ./projects --filter=${category}`);

const prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types out `text` once when `animate` is true; otherwise shows it immediately.
function useTypewriter(text: string, animate: boolean, speed: number = 14) {
    const [displayed, setDisplayed] = useState(animate ? "" : text);

    useEffect(() => {
        if (!animate) {
            setDisplayed(text);
            return;
        }
        setDisplayed("");
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, animate, speed]);

    return { displayed, done: displayed === text };
}

// Inline flow so long commands wrap onto the next line on narrow screens
const Prompt = ({ children }: { children?: React.ReactNode }) => (
    <div className="font-mono text-sm break-words">
        <span className="whitespace-nowrap" style={{ color: COLORS.accentDim }}>
            ~/projects ${" "}
        </span>
        {children}
    </div>
);

const PublicationBlock = ({ pub }: { pub: Publication }) => {
    type Field = { key: string; value: React.ReactNode };
    const candidates: (Field | null)[] = [
        pub.coAuthors?.length ? { key: "authors", value: pub.coAuthors.join(" and ") } : null,
        pub.journal ? { key: "journal", value: pub.journal } : null,
        pub.volume ? { key: "volume", value: pub.volume } : null,
        pub.pages ? { key: "pages", value: pub.pages } : null,
        pub.doi
            ? {
                  key: "doi",
                  value: (
                      <GreenLink href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                          {pub.doi}
                      </GreenLink>
                  ),
              }
            : null,
        pub.preprint ? { key: "preprint", value: pub.preprint } : null,
    ];
    const fields = candidates.filter((f): f is Field => f !== null);

    return (
        <div className="text-xs font-mono p-3 rounded-sm space-y-1.5 overflow-x-auto" style={{ backgroundColor: "#4ade8008", border: `1px solid ${COLORS.border}` }}>
            {fields.map(({ key, value }) => (
                <div key={key} className="grid grid-cols-[4.5rem_1fr] gap-2">
                    <span style={{ color: COLORS.accentDim }}>{key}</span>
                    <span className="break-words" style={{ color: COLORS.accentLight }}>
                        {value}
                    </span>
                </div>
            ))}
        </div>
    );
};

const ProjectLinks = ({ links }: { links: Project["links"] }) => {
    const items = [
        { label: "github", href: links.github },
        { label: "live", href: links.live },
        { label: "paper", href: links.paper },
    ].filter((l): l is { label: string; href: string } => !!l.href);

    if (items.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono">
            {items.map((item) => (
                <GreenLink key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label} ⟶
                </GreenLink>
            ))}
        </div>
    );
};

const ProjectEntry = ({ project, index, animate }: { project: Project; index: number; animate: boolean }) => {
    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(!animate);
    const status = STATUS_SYMBOL[project.status];
    const detailsId = `${project.id}-details`;
    const meta = [project.year, project.category as string, project.publication?.journal ?? status.label];

    useEffect(() => {
        if (!animate) return;
        const timeout = setTimeout(() => setVisible(true), index * 60);
        return () => clearTimeout(timeout);
    }, [animate, index]);

    return (
        <article
            className="group py-4 border-b last:border-b-0 transition-all duration-300"
            style={{
                borderColor: COLORS.borderFaint,
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateX(-6px)",
            }}
        >
            <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={detailsId} className="w-full text-left space-y-1.5 cursor-pointer">
                {/* Title */}
                <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-4 text-sm font-mono leading-[1.4rem]" style={{ color: status.color }} title={status.label}>
                        {status.symbol}
                    </span>
                    {/* Inline sizes: the global h2 rule in globals.css would otherwise override Tailwind classes */}
                    <h2
                        className="flex-1 min-w-0 font-mono transition-colors duration-150 group-hover:text-white"
                        style={{ color: expanded ? COLORS.accentLight : COLORS.title, fontSize: "1rem", fontWeight: 600, lineHeight: 1.4, padding: 0 }}
                    >
                        {project.title}
                    </h2>
                </div>

                {/* Meta */}
                <div className="pl-7 flex flex-wrap items-center gap-x-2 text-xs font-mono" style={{ color: COLORS.text }}>
                    {meta.map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            {i > 0 && <span style={{ color: COLORS.punctuation }}>·</span>}
                            {item}
                        </span>
                    ))}
                </div>

                {/* Description: two lines collapsed, full when expanded */}
                <p className={`pl-7 text-sm leading-relaxed ${expanded ? "" : "line-clamp-2"}`} style={{ color: COLORS.text }}>
                    {project.description}
                </p>
            </button>

            {/* Links and details toggle */}
            <div className="pl-7 pt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                <ProjectLinks links={project.links} />
                <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={detailsId} className="text-xs font-mono cursor-pointer hover:underline" style={{ color: COLORS.accentDim }}>
                    {expanded ? "[−] less" : "[+] details"}
                </button>
            </div>

            {/* Expanded details */}
            {expanded && (
                <div id={detailsId} className="pl-7 pt-4 space-y-4">
                    {project.publication && <PublicationBlock pub={project.publication} />}
                    {project.stack && (
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-mono px-2 py-0.5 rounded-sm"
                                    style={{ color: COLORS.accentDim, backgroundColor: COLORS.borderFaint, border: `1px solid ${COLORS.border}` }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </article>
    );
};

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    // The intro animation plays once on first load; switching tabs is instant.
    const [animateIntro, setAnimateIntro] = useState(true);

    useEffect(() => {
        if (prefersReducedMotion()) setAnimateIntro(false);
    }, []);

    const command = commandFor(activeCategory);
    const { displayed, done } = useTypewriter(command, animateIntro);
    const filtered = PROJECTS.filter((p) => activeCategory === "all" || p.category === activeCategory);
    const countFor = (category: Category) => PROJECTS.filter((p) => category === "all" || p.category === category).length;

    const selectCategory = (category: Category) => {
        setAnimateIntro(false);
        setActiveCategory(category);
    };

    return (
        <div className="w-full max-w-2xl space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Projects</h1>
                <p className="text-sm font-mono" style={{ color: COLORS.accentDim }}>
                    A selection of things I have built, researched, and contributed to.
                </p>
                <div className="h-px w-24" style={{ background: "linear-gradient(to right, #4ade80, transparent)" }} />
            </div>

            {/* Terminal window */}
            <div className="rounded-lg overflow-hidden border" style={{ backgroundColor: "#0a0a0a", borderColor: COLORS.border, boxShadow: "0 0 40px #4ade8008" }}>
                {/* Title bar */}
                <div className="flex items-start gap-3 px-4 py-2 border-b" style={{ borderColor: "#4ade8015", backgroundColor: "#0d0d0d" }}>
                    <div className="flex items-center gap-1.5 flex-shrink-0 h-4" aria-hidden>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade8033" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade8022" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade8011" }} />
                    </div>
                    <span className="flex-1 min-w-0 text-center text-xs leading-4 font-mono break-words" style={{ color: COLORS.accentDim }}>
                        antony@negativeentropy <span className="whitespace-nowrap">— portfolio</span>
                    </span>
                    <div className="w-10 flex-shrink-0" />
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap items-center gap-1 px-3 sm:px-4 py-2 border-b" style={{ borderColor: COLORS.borderFaint }} role="tablist">
                    {CATEGORIES.map((cat) => {
                        const active = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                role="tab"
                                aria-selected={active}
                                onClick={() => selectCategory(cat)}
                                className="text-xs font-mono px-2.5 py-1 rounded-sm transition-colors duration-200 whitespace-nowrap cursor-pointer hover:text-white"
                                style={{
                                    color: active ? COLORS.accent : COLORS.text,
                                    backgroundColor: active ? COLORS.borderFaint : "transparent",
                                    border: `1px solid ${active ? "#4ade8033" : "transparent"}`,
                                }}
                            >
                                ./{cat} <span style={{ color: active ? COLORS.accentDim : COLORS.punctuation }}>{countFor(cat)}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Terminal body */}
                <div className="px-3 sm:px-5 py-4">
                    <Prompt>
                        {/* Keep each word whole so "--filter=…" never splits at its hyphens */}
                        <span style={{ color: COLORS.accent }}>
                            {displayed.split(" ").map((word, i) => (
                                <span key={i}>
                                    {i > 0 && " "}
                                    <span className="whitespace-nowrap">{word}</span>
                                </span>
                            ))}
                        </span>
                        {!done && <span className="inline-block w-2 h-4 ml-0.5 align-middle animate-pulse" style={{ backgroundColor: COLORS.accent }} />}
                    </Prompt>

                    {done && (
                        <>
                            <div className="pt-2">
                                {filtered.map((project, i) => (
                                    <ProjectEntry key={project.id} project={project} index={i} animate={animateIntro} />
                                ))}
                            </div>

                            <div className="pt-3 text-xs font-mono" style={{ color: COLORS.text }}>
                                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                            </div>
                            <div className="pt-3">
                                <Prompt>
                                    <span className="inline-block w-2 h-4 align-middle animate-pulse" style={{ backgroundColor: COLORS.accentDim }} />
                                </Prompt>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

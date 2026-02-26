"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
        status: "in-progress",
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
            "This website. A personal blog and portfolio built with Next.js and PayloadCMS, exploring physics, software, and philosophy. Designed with a custom dark aesthetic and entropy-themed animations.",
        stack: ["Next.js", "TypeScript", "PayloadCMS", "Tailwind"],
        status: "in-progress",
        category: "software",
        links: { github: "https://github.com/akotsampaseris/negativeentropy.me", live: "https://negativeentropy.me" },
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
        links: { paper: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.98.053843" },
        year: 2018,
        publication: {
            journal: "Physical Review A",
            volume: "98, 053843",
            doi: "10.1103/PhysRevA.98.053843",
            coAuthors: ["J. M. Christian", "G. S. McDonald", "M. J. Lundie", "A. Kotsampaseris"],
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
        links: { paper: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.98.053842" },
        year: 2018,
        publication: {
            journal: "Physical Review A",
            volume: "98, 053842",
            doi: "10.1103/PhysRevA.98.053842",
            coAuthors: ["J. M. Christian", "G. S. McDonald", "A. Kotsampaseris"],
        },
    },
];

const STATUS_SYMBOL: Record<Status, { symbol: string; color: string; label: string }> = {
    "in-progress": { symbol: "◉", color: "#4ade80", label: "in-progress" },
    completed: { symbol: "✓", color: "#86efac99", label: "completed" },
    archived: { symbol: "◇", color: "#4ade8044", label: "archived" },
};

const CATEGORY_COMMANDS: Record<string, string> = {
    all: "ls -la ./projects",
    software: "ls -la ./projects --filter=software",
    physics: "ls -la ./projects --filter=physics",
    "open-source": "ls -la ./projects --filter=open-source",
};

function useTypewriter(text: string, speed: number = 18, startDelay: number = 0) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        setDisplayed("");
        setDone(false);
        let i = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    setDone(true);
                    clearInterval(interval);
                }
            }, speed);
            return () => clearInterval(interval);
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [text, speed, startDelay]);

    return { displayed, done };
}

const TerminalPrompt = ({ command, delay = 0, onDone }: { command: string; delay?: number; onDone?: () => void }) => {
    const { displayed, done } = useTypewriter(command, 22, delay);

    useEffect(() => {
        if (done && onDone) onDone();
    }, [done, onDone]);

    return (
        <div className="flex items-center gap-2 font-mono text-sm">
            <span style={{ color: "#4ade8066" }}>~/projects</span>
            <span style={{ color: "#4ade8044" }}>$</span>
            <span style={{ color: "#4ade80" }}>{displayed}</span>
            {!done && <span className="inline-block w-2 h-4 animate-pulse" style={{ backgroundColor: "#4ade80" }} />}
        </div>
    );
};

const PublicationBlock = ({ pub, id }: { pub: Publication; id: string }) => (
    <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs" style={{ color: "#4ade8055" }}>
            <span>$</span>
            <span>cat {id}/publication.bib</span>
        </div>
        <div className="text-xs font-mono space-y-1 p-3 rounded-sm" style={{ backgroundColor: "#4ade8008", border: "1px solid #4ade8018" }}>
            {pub.coAuthors && pub.coAuthors.length > 0 && (
                <div className="flex gap-2">
                    <span style={{ color: "#4ade8055" }}>authors</span>
                    <span style={{ color: "#9ca3af" }}>=</span>
                    <span style={{ color: "#86efac99" }}>
                        {"{"}
                        {pub.coAuthors.join(" and ")}
                        {"}"}
                    </span>
                </div>
            )}
            {pub.journal && (
                <div className="flex gap-2">
                    <span style={{ color: "#4ade8055" }}>journal</span>
                    <span style={{ color: "#9ca3af" }}>=</span>
                    <span style={{ color: "#86efac99" }}>{"{" + pub.journal + "}"}</span>
                </div>
            )}
            {pub.volume && (
                <div className="flex gap-2">
                    <span style={{ color: "#4ade8055" }}>volume </span>
                    <span style={{ color: "#9ca3af" }}>=</span>
                    <span style={{ color: "#86efac99" }}>{"{" + pub.volume + "}"}</span>
                </div>
            )}
            {pub.pages && (
                <div className="flex gap-2">
                    <span style={{ color: "#4ade8055" }}>pages </span>
                    <span style={{ color: "#9ca3af" }}>=</span>
                    <span style={{ color: "#86efac99" }}>{"{" + pub.pages + "}"}</span>
                </div>
            )}
            {pub.doi && (
                <div className="flex gap-2">
                    <span style={{ color: "#4ade8055" }}>doi </span>
                    <span style={{ color: "#9ca3af" }}>=</span>
                    <Link
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200"
                        style={{ color: "#4ade80" }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#86efac")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade80")}>
                        {"{" + pub.doi + "}"}
                    </Link>
                </div>
            )}
            {pub.preprint && (
                <div className="flex gap-2">
                    <span style={{ color: "#4ade8055" }}>preprint</span>
                    <span style={{ color: "#9ca3af" }}>=</span>
                    <span style={{ color: "#86efac99" }}>{"{" + pub.preprint + "}"}</span>
                </div>
            )}
        </div>
    </div>
);

const ProjectEntry = ({ project, index, visible }: { project: Project; index: number; visible: boolean }) => {
    const [expanded, setExpanded] = useState(false);
    const status = STATUS_SYMBOL[project.status];

    return (
        <div
            className="transition-all duration-300 font-mono"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-6px)",
                transitionDelay: `${index * 60}ms`,
            }}>
            {/* Main row */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full text-left group flex items-start gap-3 py-1.5 hover:bg-white/[0.02] rounded transition-colors duration-150 px-1">
                <span className="flex-shrink-0 mt-0.5 text-xs" style={{ color: status.color }}>
                    {status.symbol}
                </span>
                <span className="flex-shrink-0 text-xs" style={{ color: "#4ade8033" }}>
                    {project.category as string}
                </span>
                <span className="flex-shrink-0 text-xs w-10 text-right" style={{ color: "#4ade8033" }}>
                    {project.year}
                </span>
                <span className="text-sm flex-1 transition-colors duration-150" style={{ color: expanded ? "#86efac" : "#e5e7eb" }}>
                    {project.title}
                </span>
                <span
                    className="flex-shrink-0 text-xs transition-all duration-200"
                    style={{
                        color: "#4ade8055",
                        transform: expanded ? "rotate(90deg)" : "none",
                    }}>
                    ▶
                </span>
            </button>

            {/* Expanded details */}
            {expanded && (
                <div className="ml-6 mt-1 mb-3 space-y-3 border-l pl-4" style={{ borderColor: "#4ade8022" }}>
                    {/* Description */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs" style={{ color: "#4ade8055" }}>
                            <span>$</span>
                            <span>cat {project.id}/README.md</span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                            {project.description}
                        </p>
                    </div>

                    {/* Publication block — only for physics */}
                    {project.publication && <PublicationBlock pub={project.publication} id={project.id} />}

                    {/* Stack */}
                    {project.stack && (
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs" style={{ color: "#4ade8055" }}>
                                <span>$</span>
                                <span>cat {project.id}/.stack</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-0.5 rounded-sm"
                                        style={{
                                            color: "#4ade8088",
                                            backgroundColor: "#4ade8011",
                                            border: "1px solid #4ade8022",
                                        }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Status */}
                    <div className="flex items-center gap-2 text-xs">
                        <span style={{ color: "#4ade8055" }}>$ echo $STATUS</span>
                        <span style={{ color: status.color }}>
                            {status.symbol} {status.label}
                        </span>
                    </div>

                    {/* Links */}
                    {Object.keys(project.links).length > 0 && (
                        <div className="space-y-1">
                            <div className="text-xs" style={{ color: "#4ade8055" }}>
                                $ ls {project.id}/links/
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {project.links.github && (
                                    <Link
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                                        style={{ color: "#4ade8066" }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                                        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8066")}>
                                        github.lnk <span>⟶</span>
                                    </Link>
                                )}
                                {project.links.live && (
                                    <Link
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                                        style={{ color: "#4ade8066" }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                                        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8066")}>
                                        live.lnk <span>⟶</span>
                                    </Link>
                                )}
                                {project.links.paper && (
                                    <Link
                                        href={project.links.paper}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                                        style={{ color: "#4ade8066" }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                                        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8066")}>
                                        paper.lnk <span>⟶</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [commandDone, setCommandDone] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);

    const filtered = PROJECTS.filter((p) => activeCategory === "all" || p.category === activeCategory);

    const command = CATEGORY_COMMANDS[activeCategory];

    useEffect(() => {
        setCommandDone(false);
        setProjectsVisible(false);
    }, [activeCategory]);

    return (
        <div className="w-full max-w-2xl space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Projects</h1>
                <p className="text-sm font-mono" style={{ color: "#4ade8066" }}>
                    A selection of things I have built, researched, and contributed to.
                </p>
                <div className="h-px w-24" style={{ background: "linear-gradient(to right, #4ade80, transparent)" }} />
            </div>

            {/* Terminal window */}
            <div
                className="rounded-lg overflow-hidden border"
                style={{
                    backgroundColor: "#0a0a0a",
                    borderColor: "#4ade8022",
                    boxShadow: "0 0 40px #4ade8008",
                }}>
                {/* Title bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "#4ade8015", backgroundColor: "#0d0d0d" }}>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade8033" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade8022" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade8011" }} />
                    </div>
                    <span className="text-xs font-mono" style={{ color: "#4ade8044" }}>
                        antony@negativeentropy — portfolio
                    </span>
                    <div className="w-12" />
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-1 px-4 py-2 border-b overflow-x-auto" style={{ borderColor: "#4ade8011" }}>
                    {(["all", "software", "physics", "open-source"] as Category[]).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="text-xs font-mono tracking-widest px-3 py-1 rounded-sm transition-all duration-200 whitespace-nowrap"
                            style={{
                                color: activeCategory === cat ? "#4ade80" : "#4ade8044",
                                backgroundColor: activeCategory === cat ? "#4ade8011" : "transparent",
                                border: activeCategory === cat ? "1px solid #4ade8033" : "1px solid transparent",
                            }}>
                            ./{cat}
                        </button>
                    ))}
                </div>

                {/* Terminal body */}
                <div className="p-4 space-y-4">
                    <TerminalPrompt
                        command={command}
                        delay={0}
                        onDone={() => {
                            setCommandDone(true);
                            setTimeout(() => setProjectsVisible(true), 200);
                        }}
                    />

                    {commandDone && (
                        <div
                            className="text-xs font-mono grid gap-x-3 pb-1 border-b"
                            style={{
                                color: "#4ade8044",
                                borderColor: "#4ade8011",
                                gridTemplateColumns: "16px 80px 40px 1fr 20px",
                            }}>
                            <span>st</span>
                            <span>category</span>
                            <span className="text-right">year</span>
                            <span>name</span>
                            <span />
                        </div>
                    )}

                    {commandDone && (
                        <div className="space-y-0.5">
                            {filtered.map((project, i) => (
                                <ProjectEntry key={project.id} project={project} index={i} visible={projectsVisible} />
                            ))}
                        </div>
                    )}

                    {commandDone && (
                        <div className="text-xs font-mono pt-2" style={{ color: "#4ade8033" }}>
                            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                        </div>
                    )}

                    {commandDone && (
                        <div className="flex items-center gap-2 font-mono text-sm">
                            <span style={{ color: "#4ade8066" }}>~/projects</span>
                            <span style={{ color: "#4ade8044" }}>$</span>
                            <span className="inline-block w-2 h-4 animate-pulse" style={{ backgroundColor: "#4ade8044" }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

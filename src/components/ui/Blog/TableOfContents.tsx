"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/utils/headings";

interface TableOfContentsProps {
    headings: Heading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const elements = headings.map((h) => document.getElementById(h.id)).filter((el): el is HTMLElement => !!el);
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: "0px 0px -70% 0px" },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [headings]);

    const links = (
        <ul className="space-y-2">
            {headings.map((heading) => {
                const isActive = heading.id === activeId;
                return (
                    <li key={heading.key} className={heading.level === 3 ? "pl-4" : ""}>
                        <a
                            href={`#${heading.id}`}
                            className="block text-sm leading-snug transition-colors duration-200 border-l pl-3 -ml-px"
                            style={{
                                color: isActive ? "#4ade80" : "#9ca3af",
                                borderColor: isActive ? "#4ade80" : "transparent",
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                );
            })}
        </ul>
    );

    const label = <span className="text-xs font-mono tracking-widest uppercase text-[#4ade8099]">Contents</span>;

    return (
        <>
            {/* Mobile / narrow: collapsible, above the post */}
            <details className="xl:hidden group rounded-lg border border-[#4ade8022] px-4 py-3">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                    {label}
                    <span className="text-[#4ade80] font-mono text-sm transition-transform duration-200 group-open:rotate-90">›</span>
                </summary>
                <nav className="pt-4 border-l border-white/5">{links}</nav>
            </details>

            {/* Desktop: sticky sidebar */}
            <nav className="hidden xl:block sticky top-8 space-y-4">
                {label}
                <div className="border-l border-white/5">{links}</div>
            </nav>
        </>
    );
};

export default TableOfContents;

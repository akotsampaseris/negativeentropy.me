"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ENTROPY_CHARS = "∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≈≉⟁⟂⟃⟇⟈⟉⟊⟋∫∬∭∮∯∰∱∲∳∇∆∂∃∄∅∆∇∈∉∊∋∌∍";

const SEGMENTS = [
    { text: "Hey, I am Antony, a ", bold: false, link: null },
    { text: "theoretical physicist", bold: true, link: null },
    { text: " turned ", bold: false, link: null },
    { text: "software engineer", bold: true, link: null },
    { text: ". If you catch me daydreaming, I am most likely thinking about ", bold: false, link: null },
    { text: "physics", bold: true, link: null },
    { text: ", ", bold: false, link: null },
    { text: "software", bold: true, link: null },
    { text: ", and ", bold: false, link: null },
    { text: "politics", bold: true, link: null },
    { text: ". I write about these topics ", bold: false, link: null },
    { text: "here", bold: false, link: "/blog" },
    { text: ". I am looking for the truth no matter how difficult or uncomfortable it may be. You can follow me on ", bold: false, link: null },
    { text: "GitHub", bold: false, link: "https://github.com/akotsampaseris" },
    { text: ", ", bold: false, link: null },
    { text: "LinkedIn", bold: false, link: "https://linkedin.com/in/akotsampaseris" },
    { text: ", ", bold: false, link: null },
    { text: "Bluesky", bold: false, link: "https://bsky.app/profile/negativeentropy.me" },
    { text: ", or reach me at ", bold: false, link: null },
    { text: "a.kotsampaseris@gmail.com", bold: false, link: "mailto:a.kotsampaseris@gmail.com" },
    { text: ".", bold: false, link: null },
];

const PLAIN_TEXT = SEGMENTS.map((s) => s.text).join("");

function useEntropyReveal(text: string, delay: number = 0) {
    const [displayed, setDisplayed] = useState(() =>
        text
            .split("")
            .map(() => ENTROPY_CHARS[Math.floor(Math.random() * ENTROPY_CHARS.length)])
            .join(""),
    );
    const [done, setDone] = useState(false);

    useEffect(() => {
        const resolved = new Array(text.length).fill(false);
        const current = text.split("").map(() => ENTROPY_CHARS[Math.floor(Math.random() * ENTROPY_CHARS.length)]);

        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                const batchSize = Math.ceil(text.length / 40);
                for (let b = 0; b < batchSize; b++) {
                    if (i < text.length) {
                        resolved[i] = true;
                        i++;
                    }
                }

                const next = current.map((c, idx) => {
                    if (resolved[idx]) return text[idx];
                    return ENTROPY_CHARS[Math.floor(Math.random() * ENTROPY_CHARS.length)];
                });

                setDisplayed(next.join(""));

                if (i >= text.length) {
                    setDisplayed(text);
                    setDone(true);
                    clearInterval(interval);
                }
            }, 28);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return { displayed, done };
}

const HeroText: React.FC = () => {
    const { displayed, done } = useEntropyReveal(PLAIN_TEXT, 200);

    let cursor = 0;
    const renderedSegments = SEGMENTS.map((seg, si) => {
        const slice = displayed.slice(cursor, cursor + seg.text.length);
        cursor += seg.text.length;
        const content = done ? seg.text : slice;

        if (seg.link) {
            const isExternal = seg.link.startsWith("http") || seg.link.startsWith("mailto");
            return (
                <Link
                    key={si}
                    href={seg.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="border-b border-dotted transition-colors duration-200"
                    style={{ color: "#4ade80", borderColor: "#4ade8055" }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = "#86efac";
                        e.currentTarget.style.borderColor = "#86efac";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = "#4ade80";
                        e.currentTarget.style.borderColor = "#4ade8055";
                    }}>
                    {content}
                </Link>
            );
        }

        if (seg.bold) {
            return (
                <strong key={si} className="text-gray-100 font-semibold">
                    {content}
                </strong>
            );
        }

        return <span key={si}>{content}</span>;
    });

    return (
        <p className="text-sm leading-relaxed w-full max-w-xl font-mono break-words overflow-hidden" style={{ color: "#9ca3af" }}>
            {renderedSegments}
        </p>
    );
};

export default HeroText;

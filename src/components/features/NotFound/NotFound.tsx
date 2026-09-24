"use client";

import { useEffect, useState } from "react";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

const ENTROPY_CHARS = "∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟⟁⟂⟃⟄⟇⟈⟉⟊⟋⟌⟍⟎⟏⟐⟑⟒⟓⟔⟕⟖⟗⟘⟙⟚⟛⟜⟝⟞⟟";

function useGlitch(text: string, active: boolean) {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        if (!active) {
            setDisplay(text);
            return;
        }
        let frame = 0;
        const interval = setInterval(() => {
            if (frame > 12) {
                setDisplay(text);
                clearInterval(interval);
                return;
            }
            setDisplay(
                text
                    .split("")
                    .map((char) => (Math.random() < 0.35 ? ENTROPY_CHARS[Math.floor(Math.random() * ENTROPY_CHARS.length)] : char))
                    .join(""),
            );
            frame++;
        }, 40);
        return () => clearInterval(interval);
    }, [active, text]);

    return display;
}

export default function NotFound() {
    const [glitching, setGlitching] = useState(false);
    const [visible, setVisible] = useState(false);

    const title404 = useGlitch("404", glitching);
    const titleText = useGlitch("PAGE NOT FOUND", glitching);

    useEffect(() => {
        // Staggered entrance
        setTimeout(() => setVisible(true), 100);
        // Auto-glitch on load
        setTimeout(() => setGlitching(true), 600);
        setTimeout(() => setGlitching(false), 1200);
    }, []);

    const triggerGlitch = () => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 600);
    };

    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 60% 50% at 50% 50%, #4ade8008 0%, transparent 70%)",
                }}
            />

            {/* Content */}
            <div
                className="relative z-10 text-center space-y-8 px-6 transition-all duration-700"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                }}>
                {/* 404 */}
                <div className="cursor-pointer select-none" onMouseEnter={triggerGlitch} onClick={triggerGlitch}>
                    <div
                        className="text-[8rem] sm:text-[12rem] font-bold leading-none font-mono tracking-tighter transition-all duration-100"
                        style={{
                            color: glitching ? "#86efac" : "#4ade80",
                            textShadow: glitching ? "0 0 40px #4ade8088, 2px 0 #ff000044, -2px 0 #0000ff44" : "0 0 40px #4ade8033",
                        }}>
                        {title404}
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 justify-center">
                    <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #4ade8055)" }} />
                    <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#4ade8099" }}>
                        {titleText}
                    </span>
                    <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #4ade8055)" }} />
                </div>

                {/* Message */}
                <p className="text-sm font-mono max-w-sm mx-auto leading-relaxed" style={{ color: "#4ade8066" }}>
                    This page has collapsed into a state of maximum entropy. <br className="hidden sm:block" />
                    The information is gone. The disorder remains.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <GreenLink href="/">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" style={{ color: "#4ade80" }}>
                            ⟵
                        </span>
                        Return home
                    </GreenLink>

                    <span style={{ color: "#4ade8022" }} className="hidden sm:block font-mono">
                        |
                    </span>

                    <GreenLink href="/blog">
                        Read the blog
                        <span className="transition-transform duration-200 group-hover:translate-x-1">⟶</span>
                    </GreenLink>
                </div>
            </div>
        </div>
    );
}

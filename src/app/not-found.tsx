"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
                    .map((char, i) => (Math.random() < 0.35 ? ENTROPY_CHARS[Math.floor(Math.random() * ENTROPY_CHARS.length)] : char))
                    .join(""),
            );
            frame++;
        }, 40);
        return () => clearInterval(interval);
    }, [active, text]);

    return display;
}

const EntropyField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const chars = ENTROPY_CHARS.split("");
        const fontSize = 13;
        const cols = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(cols)
            .fill(0)
            .map(() => Math.random() * -100);

        const draw = () => {
            ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                const opacity = Math.random() * 0.4 + 0.05;
                ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`;
                ctx.font = `${fontSize}px monospace`;
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 0.4;
            }
        };

        const animation = setInterval(draw, 60);
        return () => clearInterval(animation);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" />;
};

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
            {/* Falling entropy characters background */}
            <EntropyField />

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
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-200 border-b border-dotted pb-0.5"
                        style={{ color: "#4ade80", borderColor: "#4ade8055" }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.color = "#86efac";
                            e.currentTarget.style.borderColor = "#86efac";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.color = "#4ade80";
                            e.currentTarget.style.borderColor = "#4ade8055";
                        }}>
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" style={{ color: "#4ade80" }}>
                            ⟵
                        </span>
                        Return home
                    </Link>

                    <span style={{ color: "#4ade8022" }} className="hidden sm:block font-mono">
                        |
                    </span>

                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-200"
                        style={{ color: "#4ade8066" }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8066")}>
                        Read the blog
                        <span className="transition-transform duration-200 group-hover:translate-x-1">⟶</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

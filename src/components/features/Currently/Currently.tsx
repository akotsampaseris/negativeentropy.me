"use client";

import { useEffect, useState } from "react";

const currentItems = [
    {
        icon: "⟁",
        label: "Building",
        content: "A website for an animal volunteering organization",
        color: "#4ade80",
    },
    {
        icon: "◈",
        label: "Reading",
        content: "The End of Time — Julian Barbour",
        color: "#4ade80",
    },
    {
        icon: "⟴",
        label: "Starting soon",
        content: "A synthetic data generation app for fintech",
        color: "#4ade80",
    },
    {
        icon: "∿",
        label: "Exploring",
        content: "Quantum foundations & superdeterminism",
        color: "#4ade80",
    },
];

const Currently = () => {
    const [visible, setVisible] = useState<boolean[]>(new Array(currentItems.length).fill(false));

    useEffect(() => {
        currentItems.forEach((_, i) => {
            setTimeout(() => {
                setVisible((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                });
            }, i * 120);
        });
    }, []);

    return (
        <div className="py-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
                <div className="relative flex items-center justify-center w-2 h-2 flex-shrink-0">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "#4ade80" }} />
                    <span className="relative inline-flex w-2 h-2 rounded-full" style={{ backgroundColor: "#4ade80" }} />
                </div>
                <h3 className="text-base font-semibold tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: "#4ade80" }}>
                    Currently
                </h3>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #4ade8033, transparent)" }} />
            </div>

            {/* Items */}
            <div className="space-y-0">
                {currentItems.map((item, i) => (
                    <div
                        key={item.label}
                        className="group relative flex items-stretch transition-all duration-500"
                        style={{
                            opacity: visible[i] ? 1 : 0,
                            transform: visible[i] ? "translateX(0)" : "translateX(-8px)",
                            transitionDelay: `${i * 60}ms`,
                        }}>
                        {/* Left border accent */}
                        <div
                            className="w-px mr-4 flex-shrink-0 transition-all duration-300 group-hover:opacity-100 opacity-30"
                            style={{ background: "linear-gradient(to bottom, transparent, #4ade80, transparent)" }}
                        />

                        {/* Content — stacks on mobile, row on sm+ */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-3 flex-1 border-b border-white/5 group-hover:border-white/10 transition-colors duration-200">
                            {/* Glyph + label row */}
                            <div className="flex items-center gap-2">
                                <span
                                    className="text-lg leading-none select-none transition-transform duration-200 group-hover:scale-110 flex-shrink-0"
                                    style={{ color: "#4ade80", fontFamily: "monospace" }}>
                                    {item.icon}
                                </span>
                                <span className="text-xs font-mono tracking-widest uppercase transition-colors duration-200 sm:min-w-[80px]" style={{ color: "#4ade8099" }}>
                                    {item.label}
                                </span>
                            </div>

                            {/* Content text — indented on mobile to align under label */}
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200 leading-relaxed pl-6 sm:pl-0">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Currently;

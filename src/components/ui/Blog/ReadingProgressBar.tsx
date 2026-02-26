"use client";

import { useEffect, useState } from "react";

const ReadingProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(pct, 100));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50 h-px w-full" style={{ backgroundColor: "#4ade8011" }}>
            {/* Progress fill */}
            <div
                className="h-full transition-all duration-75 ease-out"
                style={{
                    width: `${progress}%`,
                    background: "linear-gradient(to right, #4ade8066, #4ade80, #86efac)",
                    boxShadow: "0 0 8px #4ade8088",
                }}
            />

            {/* Glowing tip */}
            {progress > 0 && progress < 100 && (
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                    style={{
                        left: `calc(${progress}% - 2px)`,
                        backgroundColor: "#86efac",
                        boxShadow: "0 0 6px #4ade80, 0 0 12px #4ade8088",
                    }}
                />
            )}
        </div>
    );
};

export default ReadingProgressBar;

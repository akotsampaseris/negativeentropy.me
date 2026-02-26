"use client";

import Link from "next/link";

export const GreenLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="border-b border-dotted transition-colors duration-200"
        style={{ color: "#4ade80", borderColor: "#4ade8055" }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#86efac")}
        onMouseOut={(e) => (e.currentTarget.style.color = "#4ade80")}>
        {children}
    </Link>
);

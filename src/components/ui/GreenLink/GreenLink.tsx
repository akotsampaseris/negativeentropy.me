"use client";
import Link from "next/link";
import React from "react";

interface GreenLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    dimmed?: boolean;
    target?: string;
    rel?: string;
}

export const GreenLink = ({ href, children, className, dimmed, target, rel }: GreenLinkProps) => (
    <Link
        href={href}
        target={target}
        rel={rel}
        className={`border-b border-dotted transition-colors duration-200 
            ${dimmed ? "text-[#4ade8066] hover:text-[#86efac]" : "text-[#4ade80] hover:text-[#86efac]"}
            border-[#4ade8055]
            ${className ?? ""}`}>
        {children}
    </Link>
);

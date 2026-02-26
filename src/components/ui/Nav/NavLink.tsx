"use client";
import React from "react";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

interface NavLinkProps {
    url: string;
    title: string;
    onClick?: () => void;
    variant?: "mobile" | "desktop";
}

const NavLink: React.FC<NavLinkProps> = ({ url, title, onClick, variant = "mobile" }) => {
    if (variant === "desktop") {
        return (
            <GreenLink href={url} onClick={onClick} className="group relative text-xs font-mono tracking-[0.2em] uppercase border-none">
                {title}
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 bg-[#4ade80]" />
            </GreenLink>
        );
    }

    return (
        <GreenLink href={url} onClick={onClick} className="group flex items-center justify-between w-full px-6 py-3">
            <span className="text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-200 text-[#4ade8099] group-hover:text-[#4ade80]">{title}</span>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 text-[#4ade80]">⟶</span>
        </GreenLink>
    );
};

export default NavLink;

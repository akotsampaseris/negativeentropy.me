"use client";
import React from "react";
import Link from "next/link";

interface NavLinkProps {
    url: string;
    title: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ url, title, onClick }) => {
    return (
        <Link href={url} onClick={onClick} className="group flex items-center justify-between w-full px-6 py-3 transition-colors duration-200">
            <span
                className="text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-200"
                style={{ color: "#4ade8099" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8099")}>
                {title}
            </span>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" style={{ color: "#4ade80" }}>
                ⟶
            </span>
        </Link>
    );
};

export default NavLink;

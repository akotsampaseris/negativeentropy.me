"use client";
import React, { useState } from "react";

import Logo from "@/components/ui/Logo/Logo";
import NavLink from "@/components/ui/Nav/NavLink";
import NavButton from "@/components/ui/Nav/NavButton";
import SocialBar from "@/components/ui/SocialBar/SocialBar";

const navLinks = [
    { url: "/about", title: "About" },
    { url: "/now", title: "Now" },
    { url: "/projects", title: "Projects" },
    { url: "/blog", title: "Blog" },
    // { url: "/photos", title: "Photos" },
];

const Header: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => setNavbarOpen(!isNavbarOpen);

    return (
        <header className="py-6">
            {/* Top bar */}
            <div className="flex justify-between items-center">
                <Logo />

                <div className="flex items-center gap-6">
                    {/* Desktop nav */}
                    <nav className="hidden sm:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink key={link.url} url={link.url} title={link.title} variant="desktop" />
                        ))}
                    </nav>

                    <SocialBar />

                    {/* Mobile hamburger */}
                    <div className="sm:hidden">
                        <NavButton onClickAction={toggleNavbar} isOpen={isNavbarOpen} />
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isNavbarOpen && (
                <div
                    className="sm:hidden w-full mt-4 rounded-lg overflow-hidden border"
                    style={{
                        backgroundColor: "#0d0d0d",
                        borderColor: "#4ade8022",
                        boxShadow: "0 0 24px #4ade8011",
                    }}>
                    <div
                        className="h-px w-full"
                        style={{
                            background: "linear-gradient(to right, transparent, #4ade8055, transparent)",
                        }}
                    />
                    <div className="divide-y" style={{ borderColor: "#4ade8011" }}>
                        {navLinks.map((link) => (
                            <NavLink key={link.url} url={link.url} title={link.title} onClick={toggleNavbar} variant="mobile" />
                        ))}
                    </div>
                    <div
                        className="h-px w-full"
                        style={{
                            background: "linear-gradient(to right, transparent, #4ade8055, transparent)",
                        }}
                    />
                </div>
            )}
        </header>
    );
};

export default Header;

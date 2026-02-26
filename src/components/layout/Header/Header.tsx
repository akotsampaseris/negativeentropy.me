'use client';
import React, { useState } from "react";
import Logo from "../../ui/Logo/Logo";
import NavLink from "../../ui/Nav/NavLink";
import NavButton from "../../ui/Nav/NavButton";
import SocialBar from "../../ui/SocialBar/SocialBar";

const Header: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => setNavbarOpen(!isNavbarOpen);

    return (
        <header className="py-6">
            {/* Top bar */}
            <div className="flex justify-between items-center">
                <Logo />
                <div className="flex items-center gap-4">
                    <SocialBar />
                    <NavButton onClickAction={toggleNavbar} isOpen={isNavbarOpen} />
                </div>
            </div>

            {/* Dropdown menu */}
            {isNavbarOpen && (
                <div
                    className="w-full mt-4 rounded-lg overflow-hidden border"
                    style={{
                        backgroundColor: "#0d0d0d",
                        borderColor: "#4ade8022",
                        boxShadow: "0 0 24px #4ade8011",
                    }}
                >
                    {/* Top accent line */}
                    <div
                        className="h-px w-full"
                        style={{
                            background: "linear-gradient(to right, transparent, #4ade8055, transparent)",
                        }}
                    />

                    <div className="divide-y" style={{ borderColor: "#4ade8011" }}>
                        <NavLink onClick={toggleNavbar} url="/about" title="About" />
                        <NavLink onClick={toggleNavbar} url="/blog" title="Blog" />
                        <NavLink onClick={toggleNavbar} url="/photos" title="Photos" />
                    </div>

                    {/* Bottom accent line */}
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
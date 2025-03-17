'use client';

import React, { useState } from "react";

import Logo from "../../ui/Logo/Logo"
import NavLink from "../../ui/Nav/NavLink"
import NavButton from "../../ui/Nav/NavButton";
import SocialBar from "../../ui/SocialBar/SocialBar"

const Header: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    }
    
    return (
        <header className="py-6 px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <Logo />
                <div className="flex items-center gap-2">
                    <SocialBar />
                    <NavButton onClickAction={toggleNavbar} />
                </div>
            </div>
            { !!isNavbarOpen &&
            <div className="w-full flex flex-col items-center justify-center mx-auto mt-4 py-4 gap-2 divide-y rounded-lg bg-[#111] border border-[#222] font-bold">
                <NavLink onClick={toggleNavbar} url="/about" title="About"/>
                <NavLink onClick={toggleNavbar} url="/blog" title="Blog"/>
                <NavLink onClick={toggleNavbar} url="/photos" title="Photos"/>
            </div>
            }
        </header>
    )
}

export default Header
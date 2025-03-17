'use client';

import React from "react";
import Link from "next/link";

interface NavLinkProps {
    url: string;
    title: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ url, title, onClick }) => {
    
    return (
        <Link 
            href={url}
            onClick={onClick}
            className="p-2 text-text hover:text-text-hover">
            {title}
        </Link>
    )
}

export default NavLink
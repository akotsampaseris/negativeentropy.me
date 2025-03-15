import React from "react";
import Link from "next/link";

interface NavLinkProps {
    url: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, title }) => {
    
    return (
        <Link 
            href={url}
            className="hover:text-text-hover">
            {title}
        </Link>
    )
}

export default NavLink
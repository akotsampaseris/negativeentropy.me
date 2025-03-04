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
            className="font-bold text-lg text-gray-200 hover:text-green-300 focus:text-green-400" >
            {title}
        </Link>
    )
}

export default NavLink
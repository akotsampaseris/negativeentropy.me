import React from "react";

import NavLink from "./NavLink";


const NavBar: React.FC = () => {
    
    return (
        <nav className="flex w-fit items-center justify-around p-6 lg:px-8 gap-x-8">
            <NavLink url="/" title="Home"/>
            <NavLink url="/about-me" title="About Me"/>
            <NavLink url="/blog" title="Blog"/>
        </nav>
    )
}

export default NavBar
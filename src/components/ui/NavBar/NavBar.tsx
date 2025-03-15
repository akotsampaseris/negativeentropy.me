import React from "react";

import NavLink from "./NavLink";


const NavBar: React.FC = () => {
    
    return (
        <nav className="flex w-fit items-center justify-around px-2 lg:px-4 gap-x-4">
            <NavLink url="/about" title="About"/>
            <NavLink url="/blog" title="Blog"/>
            <NavLink url="/projects" title="Projects"/>
        </nav>
    )
}

export default NavBar
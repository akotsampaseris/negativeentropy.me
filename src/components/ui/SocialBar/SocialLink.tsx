import React from "react";
import Link from "next/link";

import { SocialLinkType } from "@/src/types/socialLink";


interface SocialLinkProps {
    socialLink: SocialLinkType;
    withTitle?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ socialLink, withTitle }) => {
    
    return (
        <Link 
            href={socialLink.url} target="_blank" 
            aria-label={socialLink.title} 
            className="text-text hover:text-text-hover flex items-center gap-1">
            <socialLink.icon className="text-2xl" />
            {withTitle &&
            <span>{socialLink.title}</span>
            }
        </Link>
    )
}

export default SocialLink
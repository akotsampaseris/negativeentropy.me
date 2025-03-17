import React from "react";
import Link from "next/link";

import { CustomIconType } from "@/src/types/icon";


interface SocialLinkProps {
    url: string;
    Icon: CustomIconType;
    title?: string;
    withTitle?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, Icon, title, withTitle }) => {
    
    return (
        <Link 
            href={url} target="_blank" 
            aria-label={title} 
            className="text-text hover:text-text-hover flex items-center gap-1">
            <Icon className="text-2xl" />
            {withTitle &&
            <span>{title}</span>
            }
        </Link>
    )
}

export default SocialLink
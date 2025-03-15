import React from "react";
import Link from "next/link";

import { CustomIconType } from "@/src/types/icon";


interface SocialLinkProps {
    url: string;
    Icon: CustomIconType;
    alt?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, Icon, alt }) => {
    
    return (
        <Link 
            href={url} target="_blank" 
            aria-label={alt} 
            className="text-2xl text-text hover:text-text-hover">
            <Icon />
        </Link>
    )
}

export default SocialLink
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
            className="font-bold text-2xl text-gray-200 hover:text-green-300 focus:text-green-400">
            <Icon />
        </Link>
    )
}

export default SocialLink
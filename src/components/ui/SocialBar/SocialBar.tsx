import React from "react";

import SocialLink from "./SocialLink";
import { socialLinks } from "@/src/data/socialLinks";

interface SocialBarProps {
    withTitle?: boolean;
}

const SocialBar: React.FC<SocialBarProps> = ( {withTitle} ) => {
    return (
        <div className="flex flex-wrap w-fit items-center gap-4">
            {socialLinks.map((socialLink) => (
                <SocialLink key={socialLink.title} socialLink={socialLink} withTitle={withTitle} />
            ))}
        </div>
    )
}

export default SocialBar
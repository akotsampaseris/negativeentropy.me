import React from "react";
import { SocialLinkType } from "@/src/types/socialLink";
import { GreenLink } from "../GreenLink/GreenLink";

interface SocialLinkProps {
    socialLink: SocialLinkType;
    withTitle?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ socialLink, withTitle }) => {
    return (
        <GreenLink href={socialLink.url}>
            <socialLink.icon className="text-xl transition-transform duration-200 group-hover:scale-110" />
            {withTitle && <span className="text-xs font-mono tracking-widest uppercase">{socialLink.title}</span>}
        </GreenLink>
    );
};

export default SocialLink;

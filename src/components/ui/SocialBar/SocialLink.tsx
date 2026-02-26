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
            href={socialLink.url}
            target="_blank"
            aria-label={socialLink.title}
            className="group flex items-center gap-2 transition-all duration-200"
            style={{ color: "#4ade80cb" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#4ade80cb")}>
            <socialLink.icon className="text-xl transition-transform duration-200 group-hover:scale-110" />
            {withTitle && <span className="text-xs font-mono tracking-widest uppercase">{socialLink.title}</span>}
        </Link>
    );
};

export default SocialLink;

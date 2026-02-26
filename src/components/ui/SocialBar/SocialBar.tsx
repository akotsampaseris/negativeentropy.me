"use client";

import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "@/src/assets/socialLinks";

interface SocialBarProps {
    withTitle?: boolean;
}

const SocialBar: React.FC<SocialBarProps> = ({ withTitle }) => {
    return (
        <div className="flex items-center gap-5">
            {/* Left fade line */}
            <div
                className="h-px w-6 flex-shrink-0"
                style={{
                    background: "linear-gradient(to right, transparent, #4ade8033)",
                }}
            />

            {socialLinks.map((socialLink, i) => (
                <React.Fragment key={socialLink.title}>
                    <SocialLink socialLink={socialLink} withTitle={withTitle} />
                    {/* Dot separator between links */}
                    {i < socialLinks.length - 1 && <span className="w-0.5 h-0.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#4ade8033" }} />}
                </React.Fragment>
            ))}

            {/* Right fade line */}
            <div
                className="h-px flex-1"
                style={{
                    background: "linear-gradient(to right, #4ade8033, transparent)",
                }}
            />
        </div>
    );
};

export default SocialBar;

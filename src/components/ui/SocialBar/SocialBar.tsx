import React from "react";
import { RiGithubLine, RiInstagramLine, RiLinkedinBoxFill, RiBlueskyLine } from "react-icons/ri";

import SocialLink from "./SocialLink";

interface SocialBarProps {
    withTitle?: boolean;
}

const SocialBar: React.FC<SocialBarProps> = ( {withTitle} ) => {
    return (
        <div className="flex flex-wrap w-fit items-center gap-4">
            <SocialLink url="https://github.com/akotsampaseris" Icon={RiGithubLine} title={"Github"} withTitle={withTitle} />
            <SocialLink url="https://linkedin.com/in/akotsampaseris" Icon={RiLinkedinBoxFill} title={"LinkedIn"} withTitle={withTitle} />
            <SocialLink url="https://instagram.com/negativeentropy_" Icon={RiInstagramLine} title={"Instagram"} withTitle={withTitle} />
            <SocialLink url="https://bsky.app/profile/negativeentropy.me" Icon={RiBlueskyLine} title={"BlueSky"} withTitle={withTitle} />
        </div>
    )
}

export default SocialBar
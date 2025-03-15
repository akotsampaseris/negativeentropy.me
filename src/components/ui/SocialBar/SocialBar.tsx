import React from "react";
import { RiGithubLine, RiInstagramLine, RiLinkedinBoxFill, RiBlueskyLine } from "react-icons/ri";

import SocialLink from "./SocialLink";

const SocialBar: React.FC = () => {
    return (
        <div className="flex w-fit items-center justify-around px-2 lg:px-4 gap-x-4">
            <SocialLink url="https://github.com/akotsampaseris" Icon={RiGithubLine} alt={"Github Profile"}/>
            <SocialLink url="https://linkedin.com/in/akotsampaseris" Icon={RiLinkedinBoxFill} alt={"LinkedIn Profile"}/>
            <SocialLink url="https://instagram.com/negativeentropy_" Icon={RiInstagramLine} alt={"Instagram Profile"}/>
            <SocialLink url="https://bsky.app/profile/thenegativeentropy.bsky.social" Icon={RiBlueskyLine} alt={"BlueSky Profile"}/>
        </div>
    )
}

export default SocialBar
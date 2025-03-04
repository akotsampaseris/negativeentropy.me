import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import SocialLink from "./SocialLink";

const SocialBar: React.FC = () => {
    return (
        <div className="flex w-fit items-center justify-around p-6 lg:px-8 gap-x-8">
            <SocialLink url="https://github.com/akotsampaseris" Icon={FaGithub} alt={"Github Profile"}/>
            <SocialLink url="https://linkedin.com/in/akotsampaseris" Icon={FaLinkedin} alt={"LinkedIn Profile"}/>
            <SocialLink url="https://instagram.com/negativeentropy_" Icon={FaInstagram} alt={"Instagram Profile"}/>
        </div>
    )
}

export default SocialBar
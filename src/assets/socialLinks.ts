import { RiGithubLine, RiInstagramLine, RiLinkedinBoxFill, RiBlueskyLine } from "react-icons/ri";
import { SocialLinkType } from "../types/socialLink";

export const socialLinks: SocialLinkType[] = [
    {
        title: "GitHub",
        url: "https://github.com/akotsampaseris",
        icon: RiGithubLine,
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com/in/akotsampaseris",
        icon: RiLinkedinBoxFill,
    },
    {
        title: "Instagram",
        url: "https://instagram.com/negativeentropy_",
        icon: RiInstagramLine,
    },
    {
        title: "Bluesky",
        url: "https://bsky.app/profile/negativeentropy.me",
        icon: RiBlueskyLine,
    },
  ];
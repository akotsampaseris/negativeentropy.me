import { RiGithubLine, RiInstagramLine, RiLinkedinBoxFill, RiBlueskyLine, RiMastodonFill } from "react-icons/ri";
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
        url: "https://instagram.com/negativeentropy.me",
        icon: RiInstagramLine,
    },
    {
        title: "Bluesky",
        url: "https://bsky.app/profile/negativeentropy.me",
        icon: RiBlueskyLine,
    },
    {
        title: "Mastodon",
        url: "https://mas.to/@negativeentropy",
        icon: RiMastodonFill,
    },
  ];
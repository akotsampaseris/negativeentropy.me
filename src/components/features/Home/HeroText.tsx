import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

const HeroText: React.FC = () => {
    return (
        <p className="text-sm leading-relaxed w-full max-w-xl font-mono break-words" style={{ color: "#9ca3af" }}>
            Hey, I am Antony, a <strong className="text-gray-100 font-semibold">theoretical physicist</strong> turned{" "}
            <strong className="text-gray-100 font-semibold">software engineer</strong>. If you catch me daydreaming, I am most likely thinking about{" "}
            <strong className="text-gray-100 font-semibold">physics</strong>, <strong className="text-gray-100 font-semibold">software</strong>, and{" "}
            <strong className="text-gray-100 font-semibold">politics</strong>. I write about these topics{" "}
            <GreenLink href="/blog" ariaLabel="Read my blog">
                in my blog
            </GreenLink>
            . I am looking for the truth no matter how difficult or uncomfortable it may be. You can follow me on{" "}
            <GreenLink href="https://github.com/akotsampaseris" target="_blank" rel="noopener noreferrer">
                GitHub
            </GreenLink>
            ,{" "}
            <GreenLink href="https://linkedin.com/in/akotsampaseris" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </GreenLink>
            ,{" "}
            <GreenLink href="https://bsky.app/profile/negativeentropy.me" target="_blank" rel="noopener noreferrer">
                Bluesky
            </GreenLink>
            , or reach me at <GreenLink href="mailto:a.kotsampaseris@gmail.com">a.kotsampaseris@gmail.com</GreenLink>.
        </p>
    );
};

export default HeroText;

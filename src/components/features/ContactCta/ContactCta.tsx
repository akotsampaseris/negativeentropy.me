import { RiFileDownloadLine, RiMailLine } from "react-icons/ri";

import { contactEmail, cvDownloadName, cvUrl } from "@/assets/site";

interface ContactCtaProps {
    className?: string;
}

const BUTTON =
    "inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]";

// Shared by the Home and About pages. Plain <a> tags (not next/link) so `download` reaches the rendered HTML.
const ContactCta = ({ className }: ContactCtaProps) => (
    <section
        aria-labelledby="contact-cta-heading"
        className={`rounded-lg border px-5 py-5 sm:px-6 space-y-3 ${className ?? ""}`}
        style={{ backgroundColor: "#0a0a0a", borderColor: "#4ade8022", boxShadow: "0 0 40px #4ade8008" }}>
        {/* Inline sizes: the global h2 rule in globals.css would otherwise override Tailwind classes */}
        <h2 id="contact-cta-heading" className="font-mono" style={{ color: "#f3f4f6", fontSize: "1rem", fontWeight: 600, lineHeight: 1.4, padding: 0 }}>
            Working on something ambitious?
        </h2>
        <p className="text-sm leading-relaxed text-gray-400">
            I&apos;m a <strong className="text-gray-100 font-semibold">senior software engineer</strong> and{" "}
            <strong className="text-gray-100 font-semibold">tech lead</strong>. I take products from a blank repo to production (fintech platforms, IoT
            systems, startup MVPs) and build the teams behind them. If that sounds useful, let&apos;s talk.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
                href={`mailto:${contactEmail}`}
                className={`${BUTTON} text-[#4ade80] bg-[#4ade8011] border-[#4ade8055] hover:text-[#86efac] hover:bg-[#4ade801a] hover:border-[#4ade80]`}>
                <RiMailLine size={14} aria-hidden />
                Get in touch
            </a>
            <a
                href={cvUrl}
                download={cvDownloadName}
                className={`${BUTTON} text-[#4ade80b3] border-[#4ade8022] hover:text-[#86efac] hover:border-[#4ade8055]`}>
                <RiFileDownloadLine size={14} aria-hidden />
                Download CV
            </a>
        </div>
    </section>
);

export default ContactCta;

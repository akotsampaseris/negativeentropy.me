import { cvDownloadName, cvUrl } from "@/assets/site";

const Footer = () => {
    return (
        <footer className="mt-16 py-8">
            <div className="h-px w-full mb-8" style={{ background: "linear-gradient(to right, transparent, #4ade8033, transparent)" }} />
            <div className="flex flex-col items-center gap-3">
                {/* Plain <a> (not next/link) so `download` reaches the rendered HTML */}
                <a
                    href={cvUrl}
                    download={cvDownloadName}
                    className="text-xs font-mono tracking-widest uppercase border-b border-dotted border-[#4ade8055] text-[#4ade80b3] hover:text-[#86efac] transition-colors duration-200">
                    Download CV
                </a>
                <span className="block text-xs text-center font-mono tracking-widest text-[#4ade80]">© 2025 – 2026 Antony Kotsampaseris. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;

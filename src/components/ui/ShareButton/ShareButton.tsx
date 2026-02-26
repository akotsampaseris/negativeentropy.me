"use client";

import { useState } from "react";
import { RiShareLine, RiCheckDoubleLine } from "react-icons/ri";

interface ShareButtonProps {
    title: string;
    slug: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, slug }) => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = `${window.location.origin}/blog/${slug}`;

        if (navigator.share) {
            try {
                await navigator.share({ title, url });
            } catch {
                // User cancelled
            }
            return;
        }

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API not available
        }
    };

    return (
        <button
            onClick={handleShare}
            className={`flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase py-1 rounded-sm transition-all duration-200 cursor-pointer ${
                copied ? "text-[#4ade80]" : "text-[#4ade80] hover:text-[#86efac]"
            }`}>
            {copied ? (
                <>
                    <RiCheckDoubleLine size={15} /> copied
                </>
            ) : (
                <>
                    <RiShareLine size={15} /> share
                </>
            )}
        </button>
    );
};

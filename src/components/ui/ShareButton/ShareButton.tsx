"use client";

import { useState } from "react";

interface ShareButtonProps {
    title: string;
    slug: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, slug }) => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = `${window.location.origin}/blog/${slug}`;

        // Mobile — use native share sheet if available
        if (navigator.share) {
            try {
                await navigator.share({ title, url });
            } catch {
                // User cancelled — do nothing
            }
            return;
        }

        // Desktop — copy to clipboard
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API not available — nothing we can do
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-all duration-200"
            style={{ color: copied ? "#4ade80" : "#4ade8044" }}
            onMouseOver={(e) => {
                if (!copied) (e.currentTarget as HTMLElement).style.color = "#4ade8099";
            }}
            onMouseOut={(e) => {
                if (!copied) (e.currentTarget as HTMLElement).style.color = "#4ade8044";
            }}>
            {copied ? <>∎ copied</> : <>⟐ share</>}
        </button>
    );
};

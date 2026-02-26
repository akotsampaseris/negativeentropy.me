import React from "react";
import { GreenLink } from "@/components/ui/GreenLink/GreenLink";

interface BreadcrumbsItemProps {
    title: string;
    url?: string;
}

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({ title, url }) => {
    return (
        <li className="inline-flex items-center">
            {!!url ? (
                <GreenLink href={url} className="text-xs font-mono tracking-widest uppercase" dimmed>
                    {title}
                </GreenLink>
            ) : (
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#4ade80" }}>
                    {title}
                </span>
            )}
        </li>
    );
};

export default BreadcrumbsItem;

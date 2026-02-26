import React from "react";
import Link from "next/link";

interface BreadcrumbsItemProps {
    title: string;
    url?: string;
}

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({ title, url }) => {
    return (
        <li className="inline-flex items-center">
            {!!url ? (
                <Link
                    href={url}
                    className="text-xs font-mono tracking-widest uppercase transition-colors duration-200"
                    style={{ color: "#4ade8066" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#4ade8066")}>
                    {title}
                </Link>
            ) : (
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#4ade80" }}>
                    {title}
                </span>
            )}
        </li>
    );
};

export default BreadcrumbsItem;

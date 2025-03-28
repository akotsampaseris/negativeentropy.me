import React from "react";
import Link from "next/link";

interface BreadcrumbsItemProps {
    title: string;
    url?: string;
}

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({ title, url }) => {
  return (
    <li className="inline-flex items-center">
        {!!url ? 
        <Link href={url}>
            <span>{title}</span>
        </Link>
        :
        <span>{title}</span>
        }
        
    </li>
  )
};

export default BreadcrumbsItem;

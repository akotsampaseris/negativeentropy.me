import React from "react";

const BreadcrumbsSeparator: React.FC = () => {
    return (
        <li className="inline-flex items-center" aria-hidden="true">
            <span className="text-xs font-mono mx-1" style={{ color: "#4ade8033" }}>
                /
            </span>
        </li>
    );
};

export default BreadcrumbsSeparator;

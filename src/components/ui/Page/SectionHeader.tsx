import React from "react";


interface SectionHeaderProps {
    headerText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headerText }) => {
    return (
        <div className="py-2">
            <h1 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-gray-600">
                {headerText}
            </h1>
        </div>
    )
}

export default SectionHeader
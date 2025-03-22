import React from "react";


interface SectionHeaderProps {
    headerText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headerText }) => {
    return (
        <div className="py-2">
            <h3>{headerText}</h3>
        </div>
    )
}

export default SectionHeader
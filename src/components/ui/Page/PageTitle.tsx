import React from "react";


interface PageTitleProps {
    titleText: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ titleText }) => {
    return (
        <div className="py-4">
			<h1>{titleText}</h1>
		</div>
    )
}

export default PageTitle
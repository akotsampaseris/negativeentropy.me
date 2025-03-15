import React from "react";
import Image from "next/image";
import Link from "next/link";


const Logo: React.FC = () => {
    const DEFAULT_LOGO_FILENAME = "logo.svg"
    const DEFAULT_LOGO_DIR = "/"
    const DEFAULT_LOGO_PATH = DEFAULT_LOGO_DIR + DEFAULT_LOGO_FILENAME
    
    return (
        <Link href="/">
            <Image
            src={DEFAULT_LOGO_PATH}
            alt="Main Website Logo"
            width={40}
            height={50}
            priority
            />
        </Link>
    )
}

export default Logo
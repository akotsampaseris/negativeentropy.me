import React from "react";
import Image from "next/image";
import Link from "next/link";


interface LogoProps {
    withText?: boolean;
}


const Logo: React.FC<LogoProps> = ( {withText = true} ) => {
    const DEFAULT_LOGO_FILENAME = "logo_transparent.png"
    const DEFAULT_LOGO_DIR = "/"
    const DEFAULT_LOGO_PATH = DEFAULT_LOGO_DIR + DEFAULT_LOGO_FILENAME
    
    return (
        <Link href="/">
            <div className="flex items-center">
                <Image
                src={DEFAULT_LOGO_PATH}
                alt="Main Website Logo"
                width={100}
                height={100}
                priority
                />
                {!!withText &&
                <span className="text-2xl font-bold tracking-wide">negativeentropy.me</span>
                }
            </div>
        </Link>
    )
}

export default Logo
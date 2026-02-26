import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
    const DEFAULT_LOGO_FILENAME = "logo.webp";
    const DEFAULT_LOGO_DIR = "/";
    const DEFAULT_LOGO_PATH = DEFAULT_LOGO_DIR + DEFAULT_LOGO_FILENAME;

    return (
        <Link href="/" aria-label="negativeentropy.me home">
            <Image src={DEFAULT_LOGO_PATH} alt="negativeentropy.me logo" width={40} height={50} priority sizes="40px" />
        </Link>
    );
};

export default Logo;

import "@/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import { roboto } from "./fonts";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ParticleContainer from "@/components/ui/Particles/ParticleContainer";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import { defaultMetadata } from "@/assets/metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const environment = process.env.ENV ?? "dev";
    const analyticsHostUrl = process.env.ANALYTICS_HOST_URL ?? null;
    const analyticsWebsiteId = process.env.ANALYTICS_WEBSITE_ID ?? null;

    return (
        <html lang="en">
            <head>
                <style>{`body { background-color: #121212; }`}</style>
            </head>
            <body className={`${roboto.variable} font-roboto`}>
                {environment === "prod" && analyticsHostUrl && analyticsWebsiteId && (
                    <Script src={analyticsHostUrl} data-website-id={analyticsWebsiteId} strategy="afterInteractive" />
                )}
                <ParticleContainer />
                <div className="z-10 text-left px-6">
                    <Header />
                    <main className="content py-4 rounded-lg bg-background-mask">
                        <Breadcrumbs />
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

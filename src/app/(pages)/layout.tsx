import "@/styles/globals.css";
import Script from "next/script";
import { roboto } from "../fonts";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ParticleContainer from "@/components/ui/Particles/ParticleContainer";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const environment = process.env.ENV ?? "dev";
    const analyticsHostUrl = process.env.ANALYTICS_HOST_URL ?? null;
    const analyticsWebsiteId = process.env.ANALYTICS_WEBSITE_ID ?? null;

    return (
        <>
            <head>
                <style>{`body { background-color: #121212; color: #ccc; }`}</style>
            </head>
            {environment === "prod" && analyticsHostUrl && analyticsWebsiteId && <Script src={analyticsHostUrl} data-website-id={analyticsWebsiteId} strategy="afterInteractive" />}
            <ParticleContainer />
            <div className="z-10 text-left px-6">
                <Header />
                <main className="content py-4 rounded-lg bg-[rgba(18,18,18,0.6)]">
                    <Breadcrumbs />
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

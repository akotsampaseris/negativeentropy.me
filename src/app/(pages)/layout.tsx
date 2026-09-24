import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ParticleContainer from "@/components/ui/Particles/ParticleContainer";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <head>
                <style>{`body { background-color: #121212; color: #ccc; }`}</style>
            </head>
            <ParticleContainer />
            <div className="z-10 text-left px-6">
                <Header />
                <main className="content relative py-4 rounded-lg bg-[rgba(18,18,18,0.6)]">
                    <Breadcrumbs />
                    {children}
                </main>
                <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
        </>
    );
}

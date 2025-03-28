import "@/src/styles/globals.css";
import type { Metadata } from "next";

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import ParticleContainer from "../components/ui/Particles/ParticleContainer";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";
import { defaultMetadata } from "../assets/metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-medium font-roboto">
        <ParticleContainer />
        <div className="z-10 text-left">
            <Header />
            <main className="content px-8 py-4 rounded-lg bg-background/80">
            <Breadcrumbs />
            {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}

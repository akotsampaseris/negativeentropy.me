import "@/src/styles/globals.css";
import type { Metadata } from "next";

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import ParticleContainer from "../components/ui/Particles/ParticleContainer";

export const metadata: Metadata = {
  title: "Antony Kotsampaseris | negativeentropy.me",
  description: "Explore the world of software, blockchain, crypto, and physics through the insights of Antony Kotsampaseris. Join the conversation about cutting-edge topics in science and technology.",
};

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
            <main className="content px-8 py-4">
            {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}

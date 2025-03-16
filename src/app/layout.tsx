import "@/src/styles/globals.css";
import type { Metadata } from "next";

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "negativeentropy.me",
  description: "Hey guys, I am Antony K. and welcome to my crib!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-medium font-roboto">
        <div className="text-left">
            <Header />
            <main className="content py-8 flex flex-col items-center justify-top p-6">
            {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}

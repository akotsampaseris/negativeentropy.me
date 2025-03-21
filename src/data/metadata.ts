import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | negativeentropy.me",
    default: "negativeentropy.me",
  },
  description:
    "Explore the world of software, blockchain, crypto, and physics through the insights of Antony Kotsampaseris. Join the conversation about cutting-edge topics in science and technology.",
  generator: "Next.js",
  applicationName: "negativeentropy.me",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Antony Kotsampaseris"},
  ],
  creator: "Antony Kotsampaseris",
  publisher: "Antony Kotsampaseris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    siteName: "negativeentropy.me",
    images: [
      {
        url: "https://negativeentropy.me/symbol_original.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

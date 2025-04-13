import "@/src/styles/globals.css";
import type { Metadata } from "next";

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import ParticleContainer from "../components/ui/Particles/ParticleContainer";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";
import { defaultMetadata } from "../assets/metadata";

const environment = process.env.ENV ?? "dev"

const includeAnalyticsScript = () => {
  const analyticsHostUrl = process.env.ANALYTICS_HOST_URL ?? null
  const analyticsWebsiteId = process.env.ANALYTICS_WEBSITE_ID ?? null

  if (environment === "prod" && analyticsHostUrl && analyticsWebsiteId) {
    return (
      <head>
          <script defer src={analyticsHostUrl} data-website-id={analyticsWebsiteId}></script>
      </head>
    )
  }
}

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {includeAnalyticsScript()}
      <body className="bg-background text-text font-medium font-roboto">
        <ParticleContainer />
        <div className="z-10 text-left px-6">
            <Header />
            <main className="content py-4 rounded-lg bg-background/50">
              <Breadcrumbs />
              {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}

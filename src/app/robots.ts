import type { MetadataRoute } from "next";
import { siteUrl } from "@/assets/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/studio",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}

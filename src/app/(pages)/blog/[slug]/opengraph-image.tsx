import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteName } from "@/assets/site";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { PostType } from "@/types/posts";
import { dateFormatter } from "@/utils/formatter";

export const alt = "Blog post on negativeentropy.me";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const green = "#4ade80";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post: PostType | null = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
    const logo = await readFile(join(process.cwd(), "public/logo_symbol_only_transparent.png"));
    const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

    const title = post?.title ?? siteName;
    const meta = [
        post?.publishedAt && dateFormatter(post.publishedAt),
        post?.category?.name,
        post?.readingTime && `${Math.max(1, post.readingTime)} min read`,
    ].filter(Boolean);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    backgroundColor: "#121212",
                    backgroundImage: `radial-gradient(circle at 85% 20%, ${green}22, transparent 45%)`,
                    color: "#ccc",
                    position: "relative",
                }}
            >
                {/* Watermark logo */}
                <img src={logoSrc} alt="" width={520} height={520} style={{ position: "absolute", right: -60, bottom: -80, opacity: 0.07 }} />

                {/* Site label */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: green, boxShadow: `0 0 16px ${green}` }} />
                    <div style={{ fontSize: 28, letterSpacing: 3, color: green, fontFamily: "monospace" }}>{siteName}</div>
                </div>

                {/* Title */}
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <div style={{ width: 96, height: 3, backgroundImage: `linear-gradient(to right, ${green}, transparent)` }} />
                    <div
                        style={{
                            fontSize: title.length > 60 ? 56 : 68,
                            fontWeight: 700,
                            color: "#fff",
                            lineHeight: 1.15,
                            letterSpacing: -1,
                            maxWidth: 980,
                        }}
                    >
                        {title}
                    </div>
                </div>

                {/* Meta row */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, fontFamily: "monospace" }}>
                    <div style={{ color: "#fff" }}>Antony Kotsampaseris</div>
                    {meta.map((item) => (
                        <div key={item as string} style={{ display: "flex", gap: 20 }}>
                            <div style={{ color: "#ffffff33" }}>—</div>
                            <div style={{ color: `${green}cc` }}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        size,
    );
}

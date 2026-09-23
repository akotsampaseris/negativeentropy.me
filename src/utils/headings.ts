import type { PortableTextBlock } from "@portabletext/react";
import { toPlainText } from "@portabletext/react";

export type Heading = {
    key: string;
    id: string;
    text: string;
    level: 2 | 3;
};

const slugify = (text: string) =>
    text
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "") || "section";

// Collects h2/h3 blocks from a Portable Text body and assigns each a unique anchor id.
export const extractHeadings = (body: PortableTextBlock[] = []): Heading[] => {
    const seen = new Map<string, number>();

    return body
        .filter((block) => block._type === "block" && (block.style === "h2" || block.style === "h3") && block._key)
        .map((block) => {
            const text = toPlainText(block);
            const base = slugify(text);
            const count = seen.get(base) ?? 0;
            seen.set(base, count + 1);
            return {
                key: block._key!,
                id: count ? `${base}-${count}` : base,
                text,
                level: block.style === "h2" ? 2 : 3,
            };
        });
};

import type { PortableTextBlock } from "@portabletext/react";

export type PostCategory = {
    id: number;
    name: string;
};

export type PostType = {
    id: number;
    title: string;
    slug: string;
    description?: string;
    category: PostCategory;
    body: PortableTextBlock;
    publishedAt: Date;
};

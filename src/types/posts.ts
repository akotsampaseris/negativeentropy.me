import type { PortableTextBlock } from "@portabletext/react";

export type PostCategory = {
    _id: string;
    name: string;
};

export type PostType = {
    _id: string;
    title: string;
    slug: string;
    description?: string;
    category: PostCategory;
    body: PortableTextBlock[];
    publishedAt: Date;
    readingTime?: number;
};

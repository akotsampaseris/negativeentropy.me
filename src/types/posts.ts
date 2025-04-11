import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type PostCategory = {
    id: number;
    name: string;
}

export type PostType = {
    id: number;
    title: string;
    slug: string;
    description?: string;
    category: PostCategory;
    body: SerializedEditorState;
    createdAt: Date;
    updatedAt: Date;
}
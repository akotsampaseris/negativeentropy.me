import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type PostType = {
    id: number;
    title: string;
    description?: string;
    category?: string;
    body: SerializedEditorState;
    createdAt: Date;
    updatedAt: Date;
}
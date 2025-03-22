export type PostType = {
    id: number;
    title: string;
    description?: string;
    category?: string;
    body?: string;
    createdAt: Date;
    updatedAt: Date;
}
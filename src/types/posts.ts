export type PostCategory = {
    id: number;
    name: string;
}

export type PostType = {
    id: number;
    title: string;
    description?: string;
    category?: PostCategory;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}
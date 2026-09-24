export type PhotoType = {
    _id: string;
    _createdAt: string;
    description?: string;
    location?: string;
    url: string;
    width: number;
    height: number;
    lqip?: string;
};

export type PhotoPage = {
    photos: PhotoType[];
    // Pass back to fetch the next page; null when there are no more photos
    nextCursor: string | null;
};

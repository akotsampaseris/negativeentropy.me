import { client } from "@/sanity/lib/client";
import { photoCountQuery, photosQuery } from "@/sanity/lib/queries";
import { PhotoPage, PhotoType } from "@/types/photos";

export const PHOTOS_PAGE_SIZE = 24;

// Cursor format: "<_createdAt>|<_id>" of the last photo on the previous page
const encodeCursor = (photo: PhotoType) => `${photo._createdAt}|${photo._id}`;
const decodeCursor = (cursor?: string | null) => {
    const [createdAt, id] = cursor?.split("|") ?? [];
    return createdAt && id ? { createdAt, id } : { createdAt: null, id: null };
};

export async function getPhotos(cursor?: string | null): Promise<PhotoPage> {
    const photos: PhotoType[] = await client.fetch(photosQuery, {
        ...decodeCursor(cursor),
        limit: PHOTOS_PAGE_SIZE + 1,
    });
    const hasMore = photos.length > PHOTOS_PAGE_SIZE;
    const page = photos.slice(0, PHOTOS_PAGE_SIZE);
    return { photos: page, nextCursor: hasMore ? encodeCursor(page[page.length - 1]) : null };
}

export async function getPhotoCount(): Promise<number> {
    return client.fetch(photoCountQuery);
}

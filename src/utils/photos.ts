import { PhotoType } from "@/types/photos";

// Sanity's image CDN resizes and picks the best format (WebP/AVIF) on the fly
export const photoUrl = (photo: PhotoType, width: number) => `${photo.url}?w=${width}&fit=max&auto=format&q=80`;

export const photoSrcSet = (photo: PhotoType, widths: number[]) =>
    widths
        .filter((w, i) => w <= photo.width || i === 0)
        .map((w) => `${photoUrl(photo, w)} ${w}w`)
        .join(", ");

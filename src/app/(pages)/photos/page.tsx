import type { Metadata } from "next";
import PhotoGallery from "@/components/features/Photos/PhotoGallery";
import { getPhotoCount, getPhotos } from "@/sanity/lib/photos";
import { PhotoPage } from "@/types/photos";

// Fallback only; the Sanity webhook (api/revalidate) refreshes this page on publish
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    const title = "Photos";
    const description = "Photos by Antony Kotsampaseris, mostly from rural Greece.";
    const url = "https://negativeentropy.me/photos";
    const image = "https://negativeentropy.me/symbol_original.png";

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "negativeentropy.me",
            locale: "en_US",
            authors: ["Antony Kotsampaseris"],
            images: [
                {
                    url: image,
                    alt: `${title} - negativeentropy.me`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

async function getInitialPhotos(): Promise<PhotoPage & { total: number }> {
    try {
        const [page, total] = await Promise.all([getPhotos(), getPhotoCount()]);
        return { ...page, total };
    } catch (e) {
        console.error(e);
        return { photos: [], nextCursor: null, total: 0 };
    }
}

export default async function PhotosPage() {
    const { photos, nextCursor, total } = await getInitialPhotos();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Photos</h1>
                <p className="text-sm font-mono" style={{ color: "#4ade80b3" }}>
                    Moments worth keeping.
                </p>
                <div className="h-px w-24" style={{ background: "linear-gradient(to right, #4ade80, transparent)" }} />
            </div>

            <PhotoGallery initialPhotos={photos} initialCursor={nextCursor} total={total} />
        </div>
    );
}

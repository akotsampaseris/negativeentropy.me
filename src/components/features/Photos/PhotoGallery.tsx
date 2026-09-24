"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PhotoPage, PhotoType } from "@/types/photos";
import MasonryGrid from "@/components/features/Photos/MasonryGrid";
import Lightbox from "@/components/features/Photos/Lightbox";

interface PhotoGalleryProps {
    initialPhotos: PhotoType[];
    initialCursor: string | null;
    total: number;
}

const PhotoGallery = ({ initialPhotos, initialCursor, total }: PhotoGalleryProps) => {
    const [photos, setPhotos] = useState(initialPhotos);
    const [cursor, setCursor] = useState(initialCursor);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const loadingRef = useRef(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    const loadMore = useCallback(async () => {
        if (!cursor || loadingRef.current) return;
        loadingRef.current = true;
        setLoading(true);
        setError(false);
        try {
            const res = await fetch(`/api/photos?cursor=${encodeURIComponent(cursor)}`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const page: PhotoPage = await res.json();
            setPhotos((prev) => {
                const seen = new Set(prev.map((p) => p._id));
                return [...prev, ...page.photos.filter((p) => !seen.has(p._id))];
            });
            setCursor(page.nextCursor);
        } catch (e) {
            console.error(e);
            setError(true);
        } finally {
            loadingRef.current = false;
            setLoading(false);
        }
    }, [cursor]);

    // Load the next page as the bottom of the grid approaches the viewport
    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel || !cursor || error) return;
        const observer = new IntersectionObserver((entries) => entries[0].isIntersecting && loadMore(), { rootMargin: "800px 0px" });
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [cursor, error, loadMore]);

    const close = useCallback(() => setOpenIndex(null), []);

    if (photos.length === 0) {
        return <p className="text-sm text-gray-400">No photos yet.</p>;
    }

    return (
        <>
            <MasonryGrid photos={photos} onOpen={setOpenIndex} />

            <div ref={sentinelRef} className="py-8 text-center text-xs font-mono" style={{ color: "#4ade80b3" }}>
                {loading && <span className="animate-pulse">loading more…</span>}
                {error && (
                    <button onClick={loadMore} className="cursor-pointer hover:underline">
                        Couldn&apos;t load more photos. Try again
                    </button>
                )}
                {!cursor && photos.length > 0 && <span className="text-gray-500">— end —</span>}
            </div>

            {openIndex !== null && (
                <Lightbox photos={photos} index={openIndex} total={total} hasMore={!!cursor} onClose={close} onNavigate={setOpenIndex} onNearEnd={loadMore} />
            )}
        </>
    );
};

export default PhotoGallery;

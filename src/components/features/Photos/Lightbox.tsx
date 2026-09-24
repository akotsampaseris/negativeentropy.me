"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PhotoType } from "@/types/photos";
import { photoSrcSet, photoUrl } from "@/utils/photos";

interface LightboxProps {
    photos: PhotoType[];
    index: number;
    total: number;
    hasMore: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
    onNearEnd: () => void;
}

const FULL_WIDTHS = [1080, 1600, 2400];
const SWIPE_THRESHOLD = 50;

const ArrowButton = ({ direction, disabled, onClick }: { direction: "prev" | "next"; disabled: boolean; onClick: () => void }) => (
    <button
        onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}
        disabled={disabled}
        aria-label={direction === "prev" ? "Previous photo" : "Next photo"}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === "prev" ? "left-2 sm:left-4" : "right-2 sm:right-4"} z-10 w-11 h-11 flex items-center justify-center rounded-full font-mono text-lg transition-all duration-200 cursor-pointer disabled:opacity-0 disabled:pointer-events-none hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]`}
        style={{ color: "#4ade80", backgroundColor: "rgba(10,10,10,0.7)", border: "1px solid #4ade8033" }}
    >
        {direction === "prev" ? "←" : "→"}
    </button>
);

const Lightbox = ({ photos, index, total, hasMore, onClose, onNavigate, onNearEnd }: LightboxProps) => {
    const photo = photos[index];
    const [loaded, setLoaded] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    const hasPrev = index > 0;
    const hasNext = index < photos.length - 1;

    const prev = useCallback(() => hasPrev && onNavigate(index - 1), [hasPrev, index, onNavigate]);
    const next = useCallback(() => hasNext && onNavigate(index + 1), [hasNext, index, onNavigate]);

    // Reset the loading state when the photo changes
    useEffect(() => setLoaded(false), [photo?._id]);

    // Load the next page before reaching the last loaded photo
    useEffect(() => {
        if (hasMore && index >= photos.length - 3) onNearEnd();
    }, [hasMore, index, photos.length, onNearEnd]);

    // Preload neighbours so arrow navigation feels instant
    useEffect(() => {
        [photos[index - 1], photos[index + 1]].forEach((p) => {
            if (!p) return;
            const img = new Image();
            img.sizes = "100vw";
            img.srcset = photoSrcSet(p, FULL_WIDTHS);
        });
    }, [index, photos]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, prev, next]);

    // Lock page scroll and manage focus while open
    useEffect(() => {
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialogRef.current?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus();
        };
    }, []);

    if (!photo) return null;

    // Portal to <body> so no ancestor stacking context or background can show through
    return createPortal(
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            tabIndex={-1}
            onClick={onClose}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchStartX.current;
                if (dx > SWIPE_THRESHOLD) prev();
                else if (dx < -SWIPE_THRESHOLD) next();
                touchStartX.current = null;
            }}
            className="fixed inset-0 z-[100] flex flex-col focus:outline-none"
            style={{ backgroundColor: "#0a0a0a" }}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 font-mono text-xs" style={{ color: "#4ade80b3" }}>
                <span>
                    {index + 1} / {total}
                </span>
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="w-9 h-9 flex items-center justify-center rounded-full text-lg cursor-pointer hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]"
                >
                    ✕
                </button>
            </div>

            {/* Image */}
            <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16">
                <ArrowButton direction="prev" disabled={!hasPrev} onClick={prev} />
                {/* eslint-disable-next-line @next/next/no-img-element -- resized by Sanity's image CDN */}
                <img
                    key={photo._id}
                    src={photoUrl(photo, 1600)}
                    srcSet={photoSrcSet(photo, FULL_WIDTHS)}
                    sizes="100vw"
                    alt={photo.description || photo.location || ""}
                    onLoad={() => setLoaded(true)}
                    onClick={(e) => e.stopPropagation()}
                    className="max-w-full max-h-full object-contain rounded-sm transition-opacity duration-300 select-none"
                    style={{
                        opacity: loaded ? 1 : 0.6,
                        aspectRatio: `${photo.width} / ${photo.height}`,
                        backgroundImage: photo.lqip ? `url(${photo.lqip})` : undefined,
                        backgroundSize: "cover",
                    }}
                    draggable={false}
                />
                <ArrowButton direction="next" disabled={!hasNext} onClick={next} />
            </div>

            {/* Caption */}
            <div className="px-4 pt-3 pb-5 min-h-16 text-center space-y-1" onClick={(e) => e.stopPropagation()}>
                {photo.description && <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">{photo.description}</p>}
                {photo.location && (
                    <p className="text-xs font-mono" style={{ color: "#4ade80b3" }}>
                        ◈ {photo.location}
                    </p>
                )}
            </div>
        </div>,
        document.body,
    );
};

export default Lightbox;

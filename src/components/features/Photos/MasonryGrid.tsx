"use client";

import { PhotoType } from "@/types/photos";
import { photoSrcSet, photoUrl } from "@/utils/photos";

interface MasonryGridProps {
    photos: PhotoType[];
    onOpen: (index: number) => void;
}

const TILE_WIDTHS = [320, 480, 640, 960, 1280];

// Column layouts rendered for each breakpoint; CSS shows exactly one, so there is no layout jump on load.
// The content column is at most 680px wide, so tiles never exceed ~220px on larger screens.
const LAYOUTS = [
    { columns: 2, className: "flex md:hidden", sizes: "50vw" },
    { columns: 3, className: "hidden md:flex", sizes: "220px" },
];

// Greedily place each photo in the currently shortest column. Appending photos never moves existing ones.
const distribute = (photos: PhotoType[], columns: number) => {
    const cols: { photo: PhotoType; index: number }[][] = Array.from({ length: columns }, () => []);
    const heights = new Array(columns).fill(0);
    photos.forEach((photo, index) => {
        const shortest = heights.indexOf(Math.min(...heights));
        cols[shortest].push({ photo, index });
        heights[shortest] += photo.height / photo.width;
    });
    return cols;
};

const PhotoTile = ({ photo, sizes, onClick }: { photo: PhotoType; sizes: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="group relative block w-full overflow-hidden rounded-md cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]"
        style={{
            aspectRatio: `${photo.width} / ${photo.height}`,
            backgroundColor: "#1a1a1a",
            backgroundImage: photo.lqip ? `url(${photo.lqip})` : undefined,
            backgroundSize: "cover",
        }}
        aria-label={photo.description || photo.location || "Open photo"}
    >
        {/* eslint-disable-next-line @next/next/no-img-element -- resized by Sanity's image CDN */}
        <img
            src={photoUrl(photo, 640)}
            srcSet={photoSrcSet(photo, TILE_WIDTHS)}
            sizes={sizes}
            width={photo.width}
            height={photo.height}
            alt={photo.description || photo.location || ""}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {photo.location && (
            <span className="absolute inset-x-0 bottom-0 px-3 pt-8 pb-2 text-left text-xs font-mono text-white/90 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                ◈ {photo.location}
            </span>
        )}
    </button>
);

const MasonryGrid = ({ photos, onOpen }: MasonryGridProps) => (
    <>
        {LAYOUTS.map((layout) => (
            <div key={layout.columns} className={`${layout.className} gap-3`}>
                {distribute(photos, layout.columns).map((column, i) => (
                    <div key={i} className="flex-1 min-w-0 flex flex-col gap-3">
                        {column.map(({ photo, index }) => (
                            <PhotoTile key={photo._id} photo={photo} sizes={layout.sizes} onClick={() => onOpen(index)} />
                        ))}
                    </div>
                ))}
            </div>
        ))}
    </>
);

export default MasonryGrid;

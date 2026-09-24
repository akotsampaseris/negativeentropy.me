import { type NextRequest, NextResponse } from "next/server";
import { getPhotos } from "@/sanity/lib/photos";

// Next page of photos for the infinite scroll on /photos
export async function GET(req: NextRequest) {
    try {
        const page = await getPhotos(req.nextUrl.searchParams.get("cursor"));
        return NextResponse.json(page);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Failed to load photos" }, { status: 500 });
    }
}

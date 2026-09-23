import { client } from "@/sanity/lib/client";
import { nowQuery } from "@/sanity/lib/queries";
import { NowType } from "@/types/now";

export async function getNow(): Promise<NowType | null> {
    try {
        return await client.fetch(nowQuery);
    } catch (e) {
        console.error(e);
        return null;
    }
}

// "2026-09-01" -> "September 2026"
export const formatLastUpdated = (date: string) =>
    new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

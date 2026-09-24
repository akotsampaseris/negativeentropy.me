import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Unknown URLs would otherwise render not-found.tsx under the root layout only, without the
// site header, styles, or background. Catching them here renders it inside the (pages) layout.

// Streamed metadata comes from this route, not not-found.tsx, so it needs the same title.
export const metadata: Metadata = {
    title: "Page not found",
};

export default function CatchAll() {
    notFound();
}

import { notFound } from "next/navigation";

// Unknown URLs would otherwise render not-found.tsx under the root layout only, without the
// site header, styles, or background. Catching them here renders it inside the (pages) layout.
export default function CatchAll() {
    notFound();
}

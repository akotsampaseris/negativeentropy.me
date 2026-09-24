import type { Metadata } from "next";
import NotFound from "@/components/features/NotFound/NotFound";

export const metadata: Metadata = {
    title: "Page not found",
};

export default function NotFoundPage() {
    return <NotFound />;
}

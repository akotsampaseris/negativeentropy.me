import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Called by a Sanity webhook on publish/unpublish/delete.
// Webhook projection: {_type, "slug": slug.current}

type WebhookPayload = {
    _type: string;
    slug?: string;
};

const pathsFor = ({ _type, slug }: WebhookPayload): string[] => {
    switch (_type) {
        case "now":
            return ["/", "/now"];
        case "post":
            return ["/", "/blog", "/sitemap.xml", "/feed.xml", ...(slug ? [`/blog/${slug}`] : [])];
        case "postCategory":
            return ["/", "/blog", "/feed.xml"];
        default:
            return [];
    }
};

export async function POST(req: NextRequest) {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
        return NextResponse.json({ message: "Missing SANITY_REVALIDATE_SECRET" }, { status: 500 });
    }

    try {
        const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret, true);

        if (!isValidSignature) {
            return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
        }
        if (!body?._type) {
            return NextResponse.json({ message: "Missing _type" }, { status: 400 });
        }

        const paths = pathsFor(body);
        if (paths.length === 0) {
            // Unknown document type: refresh the whole site
            revalidatePath("/", "layout");
        } else {
            paths.forEach((path) => revalidatePath(path));
        }

        return NextResponse.json({ revalidated: paths.length ? paths : ["/ (layout)"], now: Date.now() });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}

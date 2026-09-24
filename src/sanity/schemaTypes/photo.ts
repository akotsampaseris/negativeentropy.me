import { defineField, defineType } from "sanity";

export const photo = defineType({
    name: "photo",
    title: "Photo",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),
    ],
    orderings: [
        {
            title: "Newest first",
            name: "createdDesc",
            by: [{ field: "_createdAt", direction: "desc" }],
        },
    ],
    preview: {
        select: { media: "image", description: "description", location: "location" },
        prepare: ({ media, description, location }) => ({
            title: description || location || "Untitled photo",
            subtitle: description ? location : undefined,
            media,
        }),
    },
});

import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton backing the /now page and the "Currently" block on the home page.
export const now = defineType({
    name: "now",
    title: "Now",
    type: "document",
    fields: [
        defineField({
            name: "lastUpdated",
            title: "Last Updated",
            type: "date",
            description: "Shown as month and year on the /now page and the home page.",
            options: { dateFormat: "MMMM YYYY" },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                defineArrayMember({
                    name: "nowSection",
                    title: "Section",
                    type: "object",
                    fields: [
                        defineField({
                            name: "glyph",
                            title: "Glyph",
                            type: "string",
                            description: "A single symbol, e.g. ∿ ◉ ⟁",
                            validation: (Rule) => Rule.required().max(2),
                        }),
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description: "Small uppercase label, e.g. READING",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "body",
                            title: "Body",
                            type: "text",
                            rows: 4,
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "currentlyLabel",
                            title: "Currently Label",
                            type: "string",
                            description: "Set this to show the section in the home page's Currently block under this label, e.g. Reading. Leave empty to hide it there.",
                        }),
                        defineField({
                            name: "short",
                            title: "Short Text",
                            type: "string",
                            description: "Shorter phrasing for the Currently block. Falls back to the title.",
                            hidden: ({ parent }) => !parent?.currentlyLabel,
                        }),
                    ],
                    preview: {
                        select: { glyph: "glyph", label: "label", title: "title", currentlyLabel: "currentlyLabel" },
                        prepare: ({ glyph, label, title, currentlyLabel }) => ({
                            title: `${glyph ?? ""} ${label ?? ""}`.trim(),
                            subtitle: currentlyLabel ? `${title} · on home as “${currentlyLabel}”` : title,
                        }),
                    },
                }),
            ],
        }),
    ],
    preview: {
        prepare: () => ({ title: "Now" }),
    },
});

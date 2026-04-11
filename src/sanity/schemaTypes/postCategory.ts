import { defineField, defineType } from "sanity";

export const postCategory = defineType({
    name: "postCategory",
    title: "Post Category",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "name" },
    },
});

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, singletonTypes } from "@/sanity/schemaTypes";

// Actions allowed on singletons: no duplicate or delete.
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
    name: "default",
    title: "negativeentropy.me",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    basePath: "/studio",
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([
                        S.listItem().title("Now").id("now").child(S.document().schemaType("now").documentId("now")),
                        S.divider(),
                        ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? "")),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
        // Hide singletons from the global "New document" menu
        templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },
    document: {
        actions: (input, context) =>
            singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input,
    },
});

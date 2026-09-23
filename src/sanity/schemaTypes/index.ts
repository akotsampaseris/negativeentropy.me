import { postCategory } from "./postCategory";
import { post } from "./post";
import { now } from "./now";

export const schemaTypes = [post, postCategory, now];

// Document types that exist exactly once, with a fixed document id equal to the type name.
export const singletonTypes = new Set(["now"]);

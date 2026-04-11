// sanity/lib/queries.ts
import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name },
    body
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name },
    body
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "postCategory"] | order(name asc) {
    _id,
    name
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0..2] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name }
  }
`;

export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name }
  }
`;

export const blogPostsByCategoryQuery = groq`
  *[_type == "post" && category->name == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name }
  }
`;

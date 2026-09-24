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
    "readingTime": round(length(pt::text(body)) / 5 / 180),
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
    "readingTime": round(length(pt::text(body)) / 5 / 180),
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
    category-> { _id, name },
    "readingTime": round(length(pt::text(body)) / 5 / 180)
  }
`;

export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name },
    "readingTime": round(length(pt::text(body)) / 5 / 180)
  }
`;

export const blogPostsByCategoryQuery = groq`
  *[_type == "post" && category->name == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    category-> { _id, name },
    "readingTime": round(length(pt::text(body)) / 5 / 180)
  }
`;

export const sitemapPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    "updatedAt": _updatedAt
  }
`;

export const nowQuery = groq`
  *[_type == "now" && _id == "now"][0] {
    lastUpdated,
    sections[] {
      _key,
      glyph,
      label,
      title,
      body,
      currentlyLabel,
      short
    }
  }
`;

// Keyset pagination: newest first, with _id as a tiebreaker for identical timestamps.
// Pass $createdAt = null for the first page. Fetches one extra to know if there are more.
export const photosQuery = groq`
  *[_type == "photo" && defined(image.asset)
    && ($createdAt == null || _createdAt < $createdAt || (_createdAt == $createdAt && _id < $id))
  ] | order(_createdAt desc, _id desc) [0...$limit] {
    _id,
    _createdAt,
    description,
    location,
    "url": image.asset->url,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    "lqip": image.asset->metadata.lqip
  }
`;

export const photoCountQuery = groq`count(*[_type == "photo" && defined(image.asset)])`;

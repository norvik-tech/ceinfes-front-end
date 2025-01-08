import { defineQuery } from "next-sanity"

// Investigation Posts Queries
export const INVESTIGATION_POSTS_QUERY = defineQuery(`
  *[
    _type == "investigationPost" &&
    defined(slug.current) &&
    (!defined($search) || title match $search || categories[]->title match $search)
  ] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    publishedAt,
    views,
    thumbnail,
    categories[] -> {
      _id,
      title,
      thumbnail,
      description
    },
    body
  }
`)

export const INVESTIGATION_POST_BY_ID_QUERY = defineQuery(`
  *[
    _type == "investigationPost" &&
    _id == $id
  ][0] {
    _id,
    title,
    description,
    slug,
    publishedAt,
    views,
    thumbnail,
    categories[] -> {
      _id,
      title,
      thumbnail,
      bannerImage,
      description
    },
    body
  }
`)

export const INVESTIGATION_POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "investigationPost" &&
    $categoryId in categories[]._ref
  ] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    publishedAt,
    views,
    thumbnail,
    categories[] -> {
      _id,
      title,
      thumbnail,
      description
    },
    body
  }
`)

export const INVESTIGATION_CATEGORIES_QUERY = defineQuery(`
  *[_type == "investigationCategory"] | order(title asc) {
    _id,
    title,
    description,
    thumbnail,
    bannerImage,
    "slug": slug.current,
    "postCount": count(*[
      _type == "investigationPost" &&
      references(^._id)
    ])
  }
`)

export const INVESTIGATION_CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "investigationCategory" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    description,
    thumbnail,
    bannerImage,
    "slug": slug.current,
    "posts": *[
      _type == "investigationPost" &&
      references(^._id)
    ] | order(publishedAt desc) {
      _id,
      title,
      description,
      slug,
      publishedAt,
      views,
      mainImage,
      categories[] -> {
        _id,
        title
      }
    }
  }
`)

export const INVESTIGATION_POST_VIEW_QUERY = defineQuery(`
  *[
    _type == "investigationPost" &&
    _id == $id
  ][0] {
    _id,
    views
  }
`)

// Post Queries
export const POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    (!defined($search) || title match $search || categories[]->title match $search)
  ] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    publishedAt,
    views,
    thumbnail,
    categories[] -> {
      _id,
      title,
      description
    },
    body
  }
`)

export const POST_BY_ID_QUERY = defineQuery(`
  *[
    _type == "post" &&
    _id == $id
  ][0] {
    _id,
    title,
    description,
    slug,
    publishedAt,
    views,
    thumbnail,
    categories[] -> {
      _id,
      title,
      description
    },
    body
  }
`)

export const POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "post" &&
    $categoryId in categories[]._ref
  ] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    publishedAt,
    views,
    thumbnail,
    categories[] -> {
      _id,
      title,
      description
    },
    body
  }
`)

export const POST_CATEGORIES_QUERY = defineQuery(`
  *[_type == "postCategory"] | order(title asc) {
    _id,
    title,
    description,
    "slug": slug.current,
    "postCount": count(*[
      _type == "post" &&
      references(^._id)
    ])
  }
`)

export const POST_CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "postCategory" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    description,
    "slug": slug.current,
    "posts": *[
      _type == "post" &&
      references(^._id)
    ] | order(publishedAt desc) {
      _id,
      title,
      description,
      slug,
      publishedAt,
      views,
      thumbnail,
      categories[] -> {
        _id,
        title
      }
    }
  }
`)

export const POST_VIEW_QUERY = defineQuery(`
  *[
    _type == "post" &&
    _id == $id
  ][0] {
    _id,
    views
  }
`)
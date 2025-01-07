import { Post, PostCategory } from "./sanity"

export type PostType = Omit<Post, `categories`> & {
  categories: PostCategory[]
}

export type CategoryType = Omit<PostCategory, "slug"> & {
  slug: string
}

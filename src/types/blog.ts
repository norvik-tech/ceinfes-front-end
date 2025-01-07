import { Post, PostCategory } from "./sanity";

export type PostType = Omit<Post, `categories`> & {
    categories: PostCategory[]
}
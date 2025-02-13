import { sanityFetch } from "@modules/blog/sanity/lib/live"
import { POSTS_QUERY } from "@modules/blog/sanity/lib/queries"
import { HomePage } from "@modules/home/HomePage"
import { Metadata } from "next"
import { PostType } from "types/blog"

export const metadata: Metadata = {
  title: "Ceinfes | Inicio",
  description: "Ceinfes website",
}

export default async function Home() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
    params: { search: null, start: 1, end: 2 },
  })

  return <HomePage posts={posts as PostType[]} />
}

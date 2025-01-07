import { sanityFetch, SanityLive } from "@modules/blog/sanity/lib/live"
import { POSTS_QUERY } from "@modules/blog/sanity/lib/queries"
import { BlogPage } from "@modules/blog/templates/events-page"
import { Metadata } from "next"
import { PostType } from "types/blog"

type BlogProps = {
  searchParams: Promise<{ query?: string }>
}

export const metadata: Metadata = {
  title: "Ceinfes | Blog",
  description: "Ceinfes Blog",
}

const Blog = async (props: BlogProps) => {
  const categoryQuery = (await props.searchParams).query

  const params = { search: categoryQuery || null }

  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
    params,
  })

  return (
    <>
      <BlogPage posts={posts as PostType[]} />
      <SanityLive />
    </>
  )
}

export default Blog

import { sanityFetch, SanityLive } from "@modules/blog/sanity/lib/live"
import { POSTS_QUERY, TOTAL_POSTS_QUERY } from "@modules/blog/sanity/lib/queries"
import { BlogPage } from "@modules/blog/templates/blog-page"
import { Metadata } from "next"
import { PostType } from "types/blog"
const ITEMS_PER_PAGE = 3

type BlogProps = {
  searchParams: Promise<{
    query?: string
    page?: string
  }>
}

export const metadata: Metadata = {
  title: "Ceinfes | Blog",
  description: "Ceinfes Blog",
}

const Blog = async (props: BlogProps) => {

  const { query: categoryQuery, page } = await props.searchParams
  const currentPage = Number(page) || 1
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const params = {
    search: categoryQuery || null,
    start,
    end,
  }
  
  
  const [{ data: posts }, { data: total }] = await Promise.all([
    sanityFetch({
      query: POSTS_QUERY,
      params,
    }),
    sanityFetch({
      query: TOTAL_POSTS_QUERY,
      params: { search: categoryQuery || null },
    })
  ])

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  return (
    <>
      <BlogPage currentPage={currentPage} totalPages={totalPages} posts={posts as PostType[]} query={categoryQuery} />
      <SanityLive />
    </>
  )
}

export default Blog

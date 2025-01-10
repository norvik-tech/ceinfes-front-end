import { usePagination } from "@modules/blog/hooks/usePagination"
import { sanityFetch, SanityLive } from "@modules/blog/sanity/lib/live"
import {
  POSTS_QUERY,
  TOTAL_POSTS_QUERY,
} from "@modules/blog/sanity/lib/queries"
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
  const { posts, totalPages, currentPage, categoryQuery } = await usePagination(
    {
      searchParams: props.searchParams,
      items_per_page: ITEMS_PER_PAGE,
      posts_query: POSTS_QUERY,
      total_posts_query: TOTAL_POSTS_QUERY,
    }
  )

  return (
    <>
      <BlogPage
        currentPage={currentPage}
        totalPages={totalPages}
        posts={posts as PostType[]}
        query={categoryQuery}
      />
      <SanityLive />
    </>
  )
}

export default Blog

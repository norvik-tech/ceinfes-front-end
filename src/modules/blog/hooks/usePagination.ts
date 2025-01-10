import { sanityFetch } from "../sanity/lib/live"

type InvestigationPostProps = {
  searchParams: Promise<{
    query?: string
    page?: string
  }>
  items_per_page: number
  posts_query: string
  total_posts_query: string
}

export const usePagination = async ({
  searchParams,
  items_per_page,
  posts_query,
  total_posts_query,
}: InvestigationPostProps) => {
  const { query: categoryQuery, page } = await searchParams
  const currentPage = Number(page) || 1
  const start = (currentPage - 1) * items_per_page
  const end = start + items_per_page

  const params = {
    search: categoryQuery || null,
    start,
    end,
  }

  const [{ data: posts }, { data: total }] = await Promise.all([
    sanityFetch({
      query: posts_query,
      params,
    }),
    sanityFetch({
      query: total_posts_query,
      params: { search: categoryQuery || null },
    }),
  ])

  const totalPages = Math.ceil(total / items_per_page)

  return {
    posts,
    totalPages,
    currentPage,
    categoryQuery,
  }
}

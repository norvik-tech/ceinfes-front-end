import { usePagination } from "@modules/blog/hooks/usePagination"
import { SanityLive } from "@modules/blog/sanity/lib/live"
import {
  INVESTIGATION_POSTS_QUERY,
  TOTAL_INVESTIGATION_POSTS_QUERY,
} from "@modules/blog/sanity/lib/queries"
import { InvestigationPublicationPage } from "@modules/blog/templates/investigation-publication-page"
import { Metadata } from "next"
import React from "react"
import { InvestigationPostType } from "types/investigation-post"

export const metadata: Metadata = {
  title: "Ceinfes | Publicaciones",
  description: "Ceinfes Publicaciones",
}

type InvestigationPostProps = {
  searchParams: Promise<{
    query?: string
    page?: string
  }>
}

const ITEMS_PER_PAGE = 4

const Publications = async (props: InvestigationPostProps) => {
  const { posts, totalPages, currentPage, categoryQuery } = await usePagination(
    {
      searchParams: props.searchParams,
      items_per_page: ITEMS_PER_PAGE,
      posts_query: INVESTIGATION_POSTS_QUERY,
      total_posts_query: TOTAL_INVESTIGATION_POSTS_QUERY,
    }
  )

  return (
    <>
      <InvestigationPublicationPage
        totalPages={totalPages}
        currentPage={currentPage}
        posts={posts as InvestigationPostType[]}
        query={categoryQuery}
      />
      <SanityLive />
    </>
  )
}

export default Publications

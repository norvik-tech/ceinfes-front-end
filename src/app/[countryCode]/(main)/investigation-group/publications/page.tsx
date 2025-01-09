import { sanityFetch, SanityLive } from "@modules/blog/sanity/lib/live"
import {
  INVESTIGATION_POSTS_QUERY,
  TOTAL_INVESTIGATION_POSTS_QUERY,
} from "@modules/blog/sanity/lib/queries"
import { InvestigationPublicationPage } from "@modules/blog/templates/investigation-publication-page"
import { Metadata } from "next"
import React from "react"
import { InvestigationPostType } from "types/investigation-post"

const ITEMS_PER_PAGE = 3

type InvestigationPostProps = {
  searchParams: Promise<{
    query?: string
    page?: string
  }>
}

export const metadata: Metadata = {
  title: "Ceinfes | Publicaciones",
  description: "Ceinfes Publicaciones",
}

const Publications = async (props: InvestigationPostProps) => {
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
      query: INVESTIGATION_POSTS_QUERY,
      params,
    }),
    sanityFetch({
      query: TOTAL_INVESTIGATION_POSTS_QUERY,
      params: { search: categoryQuery || null },
    }),
  ])

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

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

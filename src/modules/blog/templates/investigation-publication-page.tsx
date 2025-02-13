import React from "react"
import { sanityFetch } from "../sanity/lib/live"
import { INVESTIGATION_CATEGORIES_QUERY } from "../sanity/lib/queries"
import {
  InvestigationCategoryType,
  InvestigationPostType,
} from "types/investigation-post"
import { BlogFilter } from "../components/BlogFilter"
import { ClearFilters } from "../components/ClearFilters"
import { FeaturedPosts } from "../components/FeaturedPosts"
import { BlogPagination } from "../components/BlogPagination"

interface Props {
  posts: InvestigationPostType[]
  query?: string
  currentPage: number
  totalPages: number
}

export const InvestigationPublicationPage = async ({
  posts,
  query,
  currentPage,
  totalPages,
}: Props) => {
  const { data: categories } = await sanityFetch({
    query: INVESTIGATION_CATEGORIES_QUERY,
  })

  return (
    <main className="flex flex-col gap-y-12 py-6">
      <section className="min-h-[500px] border border-dark flex flex-col justify-center items-start px-20">
        <p>Ceinfes</p>
        <h2 className="text-[84px] font-semibold">Publicaciones</h2>
        <p>{posts?.length} posts</p>
      </section>
      <article className="content-container flex flex-col gap-y-12">
        <aside className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BlogFilter
              query={query}
              categories={categories as unknown as InvestigationCategoryType[]}
            />
            {query && <ClearFilters />}
          </div>
          <BlogPagination
            totalPages={totalPages}
            currentPage={currentPage}
            query={query}
          />
        </aside>
        <FeaturedPosts posts={posts} query={query} />
      </article>
      <BlogPagination
        totalPages={totalPages}
        currentPage={currentPage}
        query={query}
      />
    </main>
  )
}

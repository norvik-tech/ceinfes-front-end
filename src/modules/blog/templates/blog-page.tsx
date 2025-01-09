import { BlogFilter } from "../components/featured-posts/BlogFilter"
import { FeaturedPosts } from "../components/featured-posts/FeaturedPosts"
import { CategoryType, PostType } from "types/blog"
import { sanityFetch } from "../sanity/lib/live"
import { POST_CATEGORIES_QUERY } from "../sanity/lib/queries"
import { ClearFilters } from "../components/ClearFilters"

interface Props {
  posts: PostType[]
  query?: string
  currentPage: number
  totalPages: number
}

export const BlogPage = async ({ posts, query, currentPage, totalPages }: Props) => {
  const { data: categories } = await sanityFetch({
    query: POST_CATEGORIES_QUERY,
  })

  return (
    <main className="flex flex-col gap-y-12 py-6">
      <section className="min-h-[500px] border border-dark flex flex-col justify-center items-start px-20">
        <p>Ceinfes</p>
        <h2 className="text-[84px] font-semibold">Blog</h2>
        <p>{posts?.length} posts</p>
      </section>
      <article className="content-container flex flex-col gap-y-12">
        <aside className="flex items-center gap-4">
          <BlogFilter query={query} categories={categories as unknown as CategoryType[]} />
          <ClearFilters />
        </aside>
        <FeaturedPosts currentPage={currentPage} totalPages={totalPages} posts={posts} query={query} />
      </article>
    </main>
  )
}

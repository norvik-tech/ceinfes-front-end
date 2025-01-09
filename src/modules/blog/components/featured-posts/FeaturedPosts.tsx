"use client"
import { PostCard } from "../PostCard"
import { PostsSkeleton } from "@modules/blog/skeletons/templates/PostsSkeleton"
import { Suspense } from "react"
import { PostType } from "types/blog"
import { InvestigationPostType } from "types/investigation-post"
import { Pagination } from "@nextui-org/react"
import { useRouter, useSearchParams } from "next/navigation"

interface Props {
  posts: PostType[] | InvestigationPostType[]
  query?: string
  totalPages: number
  currentPage: number
}

export const FeaturedPosts = ({ 
  posts, 
  query, 
  totalPages,
  currentPage 
}: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
console.log(totalPages)
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    if (query) {
      params.set("search", query)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="space-y-8">
      <p className="font-semibold text-xl">
        {query ? `Search results for "${query}"` : "All blog posts"}
      </p>
      
      <section className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
        {posts.length > 0 ? (
          <Suspense fallback={<PostsSkeleton />}>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </Suspense>
        ) : (
          <p className="">No posts found</p>
        )}
      </section>

      <div className="flex justify-center mt-8">
        <Pagination
          total={totalPages}
          page={currentPage}
          color="secondary"
          onChange={handlePageChange}
          classNames={{
            wrapper: "gap-2"
          }}
        />
      </div>
    </div>
  )
}
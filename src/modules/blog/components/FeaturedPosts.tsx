import { PostCard } from "./PostCard"
import { PostsSkeleton } from "@modules/blog/skeletons/templates/PostsSkeleton"
import { Suspense } from "react"
import { PostType } from "types/blog"
import { InvestigationPostType } from "types/investigation-post"

interface Props {
  posts: PostType[] | InvestigationPostType[]
  query?: string
}

export const FeaturedPosts = ({ posts, query }: Props) => {
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
    </div>
  )
}

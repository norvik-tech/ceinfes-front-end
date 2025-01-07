import { PostCard } from "../PostCard"
import { PostsSkeleton } from "@modules/blog/skeletons/templates/PostsSkeleton"
import { Suspense } from "react"
import { PostType } from "types/blog"

interface Props {
  events: PostType[]
}

export const FeaturedEvents = ({ events }: Props) => {
  return (
    <section className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
      <Suspense fallback={<PostsSkeleton />}>
        {events.map((event) => (
          <PostCard post={event} />
        ))}
      </Suspense>
    </section>
  )
}

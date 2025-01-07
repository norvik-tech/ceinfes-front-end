import { EventsFilter } from "../components/featured-events/EventsFilter"
import { FeaturedEvents } from "../components/featured-events/FeaturedEvents"
import { PostType } from "types/blog"

interface Props {
  posts: PostType[]
}

export const BlogPage = ({ posts }: Props) => {
  return (
    <main className="flex flex-col gap-y-12 py-6">
      <section className="min-h-[500px] border border-dark flex flex-col justify-center items-start px-12">
        <p>Ceinfes</p>
        <h2 className="text-[84px] font-semibold">Blog</h2>
        <p>{posts?.length} posts</p>
      </section>
      <article className="content-container flex flex-col gap-y-12">
        <EventsFilter />
        <FeaturedEvents events={posts} />
      </article>
    </main>
  )
}

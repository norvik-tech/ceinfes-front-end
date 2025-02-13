import { Image } from "@heroui/react"
import { InvestigationPostType } from "types/investigation-post"
import { AuthorCard } from "./AuthorCard"
import { SectionCard } from "./SectionCard"

export const PublicationPage = ({ post }: { post: InvestigationPostType }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Image
        alt="Publication header"
        className=" w-full h-full rounded-xl"
        src={post.thumbnail || "https://via.placeholder.com/1200x400"}
      />

      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap gap-4">
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-8">{post.body}</p>
      </div>

      {/* Subtitle Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Subtítulo de la publicación</h2>
        <div className="grid gap-6">
          {post?.sections?.length > 0 &&
            post.sections?.map((section, index) => (
              <SectionCard key={index} section={section} />
            ))}
        </div>
      </div>
    </div>
  )
}

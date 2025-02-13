import { Card, CardBody, CardHeader, Chip } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { PostType } from "types/blog"

export const NewCard = ({ post }: { post: PostType }) => {
  const { countryCode } = useParams()

  return (
    <Card
      as={Link}
      href={`${countryCode}/blog/${post?.slug?.current}`}
      className="rounded-[12px] shadow-md shadow-secondary/20 mx-auto w-[340px] md:min-w-[400px] h-[350px] lg:h-[400px] hover:shadow-lg transition-all"
    >
      <CardHeader className="h-1/2 w-full md:px-5 relative">
        <div className="relative w-full h-full">
          <Image
            src={post.thumbnail || "/placeholder.svg"}
            alt={post.title || "Nuevo post"}
            fill
            className="rounded-[10px]"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 340px, 400px"
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardBody className="md:px-5">
        <ul className="mb-2">
          {post?.categories?.map((category) => (
            <Chip size="sm" as={"li"} key={category?._id} color="primary">
              {category.title}
            </Chip>
          ))}
        </ul>
        <h3 className="text-[24px] font-semibold text-secondary mb-1 truncate">
          {post.title}
        </h3>
        <p className="text-dark text-[14px] font-light line-clamp-3">
          {post.description}
        </p>
      </CardBody>
    </Card>
  )
}

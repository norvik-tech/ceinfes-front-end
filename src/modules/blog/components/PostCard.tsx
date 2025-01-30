import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react"
import { PostType } from "types/blog"
import { InvestigationPostType } from "types/investigation-post"

interface Props {
  post: PostType | InvestigationPostType
}

export const PostCard = ({ post }: Props) => {
  return (
    <Card className="py-4 max-w-sm">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h3 className="text-2xl font-bold line-clamp-2">{post.title}</h3>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="w-full max-h-[180px] object-cover"
          classNames={{
            wrapper: '!max-w-none'
          }}
          src={post.thumbnail}
        />
        <p className="text-small text-default-500 mt-4 line-clamp-3">
          {post.description}
        </p>
        <Button color="secondary" className="w-full mt-4 text-white">
          Leer más
        </Button>
      </CardBody>
    </Card>
  )
}

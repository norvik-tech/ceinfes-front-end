import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { Event, Post } from "types/sanity"

interface Props {
  post: Event | Post
}

export const PostCard = ({ post }: Props) => {
  console.log(post)

  return (
    <Card className="py-4 max-w-sm">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h3 className="text-2xl font-bold">{post.title}</h3>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={post.thumbnail}
          height={180}
        />
        <p className="text-small text-default-500 mt-4">{post.description}</p>
        <Button color="secondary" className="w-full mt-4 text-white">
          Leer más
        </Button>
      </CardBody>
    </Card>
  )
}

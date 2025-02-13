import { Card, CardBody, Image } from "@heroui/react"

type SectionCardProps = {
  section: {
    title: string
    description: string
    image: string
  }
}

export const SectionCard = ({ section }: SectionCardProps) => {
  const { title, description, image } = section

  return (
    <Card className="w-full mb-6" radius="none" shadow="none">
      <CardBody>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full h-full md:w-1/3">
            <Image
              alt={title}
              className="object-cover w-full rounded-lg"
              src={image || "https://via.placeholder.com/300x200"}
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

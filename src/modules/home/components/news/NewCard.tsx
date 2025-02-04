import { Card, CardBody, CardHeader, Image } from "@heroui/react"
import React from "react"
import { NewsItem } from "types/home"

const NewCard = ({ item }: { item: NewsItem }) => {
  return (
    <Card className="max-h-[425px] rounded-[12px] shadow-lg mx-auto w-[340px] min-w-[320px]  border-2 border-blue-100">
      <CardHeader className="p-5 w-full">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full mx-auto"
        />
      </CardHeader>
      <CardBody className="p-4">
        <p className="text-gray-500 font-light text-[14px]">Lorem ipsum</p>
        <h3 className="text-[24px] font-semibold text-secondary mb-4">
          {item.title}
        </h3>
        <p className="text-dark text-[14px] font-light">{item.description}</p>
      </CardBody>
    </Card>
  )
}

export default NewCard

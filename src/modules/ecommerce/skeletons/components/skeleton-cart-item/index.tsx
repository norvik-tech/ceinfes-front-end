"use client"

import { Card, CardBody } from "@heroui/react"

const SkeletonCartItem = () => {
  return (
    <Card className="w-full mb-2">
      <CardBody className="flex flex-row items-center p-4 gap-4">
        <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse" />

        <div className="flex-grow">
          <div className="flex flex-col gap-y-2">
            <div className="w-32 h-4 bg-gray-200 animate-pulse" />
            <div className="w-24 h-4 bg-gray-200 animate-pulse" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-6 h-8 bg-gray-200 animate-pulse" />
          <div className="w-14 h-10 bg-gray-200 animate-pulse" />
        </div>

        <div className="w-12 h-6 bg-gray-200 animate-pulse" />

        <div className="flex justify-end">
          <div className="w-12 h-6 bg-gray-200 animate-pulse" />
        </div>
      </CardBody>
    </Card>
  )
}

export default SkeletonCartItem

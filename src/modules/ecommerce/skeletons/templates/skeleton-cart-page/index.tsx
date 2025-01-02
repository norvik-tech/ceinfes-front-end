"use client"

import repeat from "@lib/util/repeat"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import SkeletonCartItem from "@modules/ecommerce/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/ecommerce/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/ecommerce/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (
    <div className="py-12">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
          <div className="flex flex-col bg-white p-6 gap-y-6">
            <div className="bg-white flex items-start justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="w-60 h-8 bg-gray-200 animate-pulse" />
                <div className="w-48 h-6 bg-gray-200 animate-pulse" />
              </div>
              <div>
                <div className="w-14 h-8 bg-gray-200 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="pb-3 flex items-center">
                <div className="w-20 h-12 bg-gray-200 animate-pulse" />
              </div>
              <Card>
                <CardHeader className="grid grid-cols-12 gap-4 border-b border-gray-200">
                  <div className="col-span-3">
                    <div className="w-10 h-6 bg-gray-200 animate-pulse" />
                  </div>
                  <div className="col-span-3"></div>
                  <div className="col-span-2">
                    <div className="w-16 h-6 bg-gray-200 animate-pulse" />
                  </div>
                  <div className="col-span-2">
                    <div className="w-12 h-6 bg-gray-200 animate-pulse" />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <div className="w-12 h-6 bg-gray-200 animate-pulse" />
                  </div>
                </CardHeader>
                <CardBody className="p-0">
                  {repeat(4).map((index) => (
                    <SkeletonCartItem key={index} />
                  ))}
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <SkeletonOrderSummary />
            <SkeletonCodeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage

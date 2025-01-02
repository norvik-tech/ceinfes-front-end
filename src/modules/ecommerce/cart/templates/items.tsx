"use client"

import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import Item from "@modules/ecommerce/cart/components/item"
import SkeletonLineItem from "@modules/ecommerce/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items

  return (
    <div className="w-full">
      <div className="pb-3 flex items-center">
        <h3 className="text-[2rem] leading-[2.75rem]">Cart</h3>
      </div>

      <Card>
        <CardHeader className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-200">
          <div className="col-span-4 text-gray-600 font-medium">Item</div>
          <div className="col-span-2"></div>
          <div className="col-span-2 text-gray-600 font-medium">Quantity</div>
          <div className="hidden small:block col-span-2 text-gray-600 font-medium">
            Price
          </div>
          <div className="col-span-2 text-right text-gray-600 font-medium">
            Total
          </div>
        </CardHeader>
        <CardBody>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    currencyCode={cart?.currency_code}
                  />
                ))
            : repeat(5).map((i) => <SkeletonLineItem key={i} />)}
        </CardBody>
      </Card>
    </div>
  )
}

export default ItemsTemplate

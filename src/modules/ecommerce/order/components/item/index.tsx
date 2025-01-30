"use client"

import { HttpTypes } from "@medusajs/types"
import { Card, CardBody } from "@heroui/react"
import LineItemOptions from "@modules/ecommerce/common/components/line-item-options"
import LineItemPrice from "@modules/ecommerce/common/components/line-item-price"
import LineItemUnitPrice from "@modules/ecommerce/common/components/line-item-unit-price"
import Thumbnail from "@modules/ecommerce/products/components/thumbnail"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  currencyCode: string
}

const Item = ({ item, currencyCode }: ItemProps) => {
  return (
    <Card className="w-full mb-2" data-testid="product-row">
      <CardBody className="flex flex-row items-center p-4 gap-4">
        <div className="w-24 !pl-0">
          <div className="flex w-16">
            <Thumbnail thumbnail={item.thumbnail} size="square" />
          </div>
        </div>

        <div className="flex-grow text-left">
          <p className="text-base font-medium" data-testid="product-name">
            {item.title}
          </p>
          <LineItemOptions
            variant={item.variant}
            data-testid="product-variant"
          />
        </div>

        <div className="flex flex-col items-end justify-center">
          <span className="flex gap-x-1">
            <p className="text-gray-600">
              <span data-testid="product-quantity">{item.quantity}</span>x{" "}
            </p>
            <LineItemUnitPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </span>

          <LineItemPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default Item

"use client"

import { HttpTypes } from "@medusajs/types"
import { Card, CardBody } from "@nextui-org/react"
import Item from "@modules/ecommerce/cart/components/item"
import SkeletonLineItem from "@modules/ecommerce/skeletons/components/skeleton-line-item"
import { cn } from "@nextui-org/react"
import repeat from "@modules/ecommerce/common/util/repeat"

type ItemsTemplateProps = {
  cart: HttpTypes.StoreCart
}

const ItemsPreviewTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart.items
  const hasOverflow = items && items.length > 4

  return (
    <div
      className={cn({
        "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
          hasOverflow,
      })}
    >
      <Card>
        <CardBody data-testid="items-table" className="gap-2">
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    type="preview"
                    currencyCode={cart.currency_code}
                  />
                ))
            : repeat(5).map((i) => <SkeletonLineItem key={i} />)}
        </CardBody>
      </Card>
    </div>
  )
}

export default ItemsPreviewTemplate

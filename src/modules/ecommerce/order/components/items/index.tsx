import { HttpTypes } from "@medusajs/types"

import Divider from "@modules/ecommerce/common/components/divider"
import repeat from "@modules/ecommerce/common/util/repeat"
import Item from "@modules/ecommerce/order/components/item"
import SkeletonLineItem from "@modules/ecommerce/skeletons/components/skeleton-line-item"
import { Card, CardBody } from "@nextui-org/react"

type ItemsProps = {
  order: HttpTypes.StoreOrder
}

const Items = ({ order }: ItemsProps) => {
  const items = order.items

  return (
    <div className="flex flex-col">
      <Divider className="!mb-0" />
      <Card>
        <CardBody data-testid="products-table">
          {items?.length
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      currencyCode={order.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </CardBody>
      </Card>
    </div>
  )
}

export default Items

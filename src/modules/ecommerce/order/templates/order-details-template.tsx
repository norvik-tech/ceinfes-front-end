"use client"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import Help from "@modules/ecommerce/order/components/help"
import Items from "@modules/ecommerce/order/components/items"
import OrderDetails from "@modules/ecommerce/order/components/order-details"
import OrderSummary from "@modules/ecommerce/order/components/order-summary"
import ShippingDetails from "@modules/ecommerce/order/components/shipping-details"
import React from "react"

type OrderDetailsTemplateProps = {
  order: HttpTypes.StoreOrder
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-2xl-semi">Order details</h1>
        <LocalizedClientLink
          href="/account/orders"
          className="flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base"
          data-testid="back-to-overview-button"
        >
          <i
            className="icon-[heroicons--x-mark-16-solid]"
            role="img"
            aria-hidden="true"
          ></i>{" "}
          Back to overview
        </LocalizedClientLink>
      </div>
      <div
        className="flex flex-col gap-4 h-full bg-white w-full"
        data-testid="order-details-container"
      >
        <OrderDetails order={order} showStatus />
        <Items order={order} />
        <ShippingDetails order={order} />
        <OrderSummary order={order} />
        <Help />
      </div>
    </div>
  )
}

export default OrderDetailsTemplate

"use client"

import { Card, CardBody } from "@nextui-org/react"
import { Select, SelectItem } from "@nextui-org/react"
import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import ErrorMessage from "@modules/ecommerce/checkout/components/error-message"
import DeleteButton from "@modules/ecommerce/common/components/delete-button"
import LineItemOptions from "@modules/ecommerce/common/components/line-item-options"
import LineItemPrice from "@modules/ecommerce/common/components/line-item-price"
import LineItemUnitPrice from "@modules/ecommerce/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import Spinner from "@modules/ecommerce/common/icons/spinner"
import Thumbnail from "@modules/ecommerce/products/components/thumbnail"
import { useState } from "react"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (value: string) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity: parseInt(value),
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  return (
    <Card className="w-full mb-4">
      <CardBody className="flex flex-row items-center gap-4 p-4">
        <div className="w-24">
          <LocalizedClientLink
            href={`/products/${item.product_handle}`}
            className={type === "preview" ? "w-16" : "small:w-24 w-12"}
          >
            <Thumbnail
              thumbnail={item.thumbnail}
              images={item.variant?.product?.images}
              size="square"
            />
          </LocalizedClientLink>
        </div>

        <div className="flex-grow">
          <p className="text-lg font-medium" data-testid="product-title">
            {item.product_title}
          </p>
          <LineItemOptions
            variant={item.variant}
            data-testid="product-variant"
          />
        </div>

        {type === "full" && (
          <div className="flex items-center gap-2">
            <DeleteButton id={item.id} data-testid="product-delete-button" />
            <Select
              size="sm"
              value={item.quantity.toString()}
              onChange={(e) => changeQuantity(e.target.value)}
              className="w-20"
              data-testid="product-select-button"
            >
              {Array.from({ length: Math.min(maxQuantity, 10) }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </Select>
            {updating && <Spinner />}
          </div>
        )}

        {type === "full" && (
          <div className="hidden small:block">
            <LineItemUnitPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </div>
        )}

        <div className={type === "preview" ? "flex flex-col items-end" : ""}>
          {type === "preview" && (
            <span className="flex gap-x-1">
              <span className="text-gray-500">{item.quantity}x </span>
              <LineItemUnitPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
              />
            </span>
          )}
          <LineItemPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
        </div>
      </CardBody>
      {error && (
        <ErrorMessage error={error} data-testid="product-error-message" />
      )}
    </Card>
  )
}

export default Item

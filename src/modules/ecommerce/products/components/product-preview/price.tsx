import { cn } from "@heroui/react"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <>
      {price.price_type === "sale" && (
        <p
          className="line-through text-ui-fg-muted"
          data-testid="original-price"
        >
          {price.original_price}
        </p>
      )}
      <p
        className={cn("text-ui-fg-muted", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </p>
    </>
  )
}

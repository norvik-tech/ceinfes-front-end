import PaymentWrapper from "@modules/ecommerce/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/ecommerce/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/ecommerce/checkout/templates/checkout-summary"
import { retrieveCart } from "@modules/ecommerce/common/data/cart"
import { retrieveCustomer } from "@modules/ecommerce/common/data/customer"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const cart = await retrieveCart()

  if (!cart) {
    return notFound()
  }

  const customer = await retrieveCustomer()

  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      <PaymentWrapper cart={cart}>
        <CheckoutForm cart={cart} customer={customer} />
      </PaymentWrapper>
      <CheckoutSummary cart={cart} />
    </div>
  )
}

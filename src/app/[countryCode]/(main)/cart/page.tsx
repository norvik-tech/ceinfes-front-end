import CartTemplate from "@modules/ecommerce/cart/templates"
import { retrieveCart } from "@modules/ecommerce/common/data/cart"
import { retrieveCustomer } from "@modules/ecommerce/common/data/customer"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default async function Cart() {
  const cart = await retrieveCart()
  const customer = await retrieveCustomer()

  if (!cart) {
    return notFound()
  }

  return <CartTemplate cart={cart} customer={customer} />
}

import { Metadata } from "next"

import Overview from "@modules/auth/account/components/overview"
import { notFound } from "next/navigation"
import { retrieveCustomer } from "@modules/ecommerce/common/data/customer"
import { listOrders } from "@modules/ecommerce/common/data/orders"

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
}

export default async function OverviewTemplate() {
  const customer = await retrieveCustomer().catch(() => null)
  const orders = (await listOrders().catch(() => null)) || null

  if (!customer) {
    notFound()
  }

  return <Overview customer={customer} orders={orders} />
}

import { Toaster } from "sonner"
import AccountLayout from "@modules/auth/account/templates/account-layout"
import { retrieveCustomer } from "@modules/ecommerce/common/data/customer"

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = await retrieveCustomer().catch(() => null)

  return (
    <AccountLayout customer={customer}>
      {customer ? dashboard : login}
      <Toaster richColors />
    </AccountLayout>
  )
}

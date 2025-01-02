import { retrieveCustomer } from "@lib/data/customer"
import { Toaster } from "sonner"
import AccountLayout from "@modules/auth/account/templates/account-layout"

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

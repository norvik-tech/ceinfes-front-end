import { Suspense } from "react"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import ToggleNav from "@modules/layout/components/toggle-nav"

export default async function Nav() {
  return (
    <ToggleNav>
      <Suspense
        fallback={
          <div
            key="navbar-button"
            className="hidden small:flex items-center gap-x-6 h-full min-w-[67.3px]"
          >
            <LocalizedClientLink
              className="flex gap-2"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Carrito (0)
            </LocalizedClientLink>
          </div>
        }
      >
        <CartButton />
      </Suspense>
    </ToggleNav>
  )
}

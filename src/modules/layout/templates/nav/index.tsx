import { Suspense } from "react"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import ToggleNav from "@modules/layout/components/toggle-nav"
import { Button } from "@heroui/react"

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
              <Button
                className="gap-2 bg-primary text-white rounded-lg text-sm xl:text-base"
                startContent={
                  <i
                    className="icon-[ri--shopping-cart-2-line] text-lg"
                    role="img"
                    aria-hidden="true"
                  />
                }
              >
                <p>Tienda (0)</p>
              </Button>
            </LocalizedClientLink>
          </div>
        }
      >
        <CartButton />
      </Suspense>
    </ToggleNav>
  )
}

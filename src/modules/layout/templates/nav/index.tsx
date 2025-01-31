import { Suspense } from "react"

import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { listRegions } from "@modules/ecommerce/common/data/regions"
import ToggleNav from "@modules/layout/components/toggle-nav"

export default async function Nav() {
  // const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="relative mx-auto duration-200 bg-[#F7F8FA]">
        {/* <div className="h-full">
              <SideMenu regions={regions} />
            </div> */}
        <ToggleNav>
          <Suspense
            fallback={
              <div className="hidden small:flex items-center gap-x-6 h-full min-w-[67.3px]">
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
      </header>
    </div>
  )
}

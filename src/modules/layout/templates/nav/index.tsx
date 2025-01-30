import { Suspense } from "react"

import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Image } from "@heroui/react"
import { NAVBAR_LINKS } from "@modules/layout/config/constants/navbar-links"
import { listRegions } from "@modules/ecommerce/common/data/regions"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="relative mx-auto duration-200 bg-[#F7F8FA]">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            {/* <div className="h-full">
              <SideMenu regions={regions} />
            </div> */}
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src="/ceinfes-logo.png"
                radius="none"
                width={240}
                height={70}
                alt="Ceinfes"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex flex-1 items-center gap-x-10 h-full text-base font-light basis-0 justify-end">
            {NAVBAR_LINKS().map((link, index) => (
              <LocalizedClientLink
                href={link.href}
                data-testid="nav-account-link"
              >
                <div
                  key={`${link.name}-${index}`}
                  className="relative group transition-colors hover:text-secondary cursor-pointer"
                >
                  {link.name}
                  <div className="absolute h-1 bg-secondary left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300 origin-left" />
                </div>
              </LocalizedClientLink>
            ))}

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
          </div>
        </nav>
      </header>
    </div>
  )
}

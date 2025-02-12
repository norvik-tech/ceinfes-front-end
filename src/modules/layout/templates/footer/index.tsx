import { Image } from "@heroui/react"

import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import { listCollections } from "@modules/ecommerce/common/data/collections"
import { listCategories } from "@modules/ecommerce/common/data/categories"
import Link from "next/link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const categories = await listCategories()

  return (
    <footer className="border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6 xsmall:flex-row items-start justify-between py-10">
          {/* Logo Section */}
          <div>
            <LocalizedClientLink href="/" className="block">
              <Image
                src="/ceinfes-logo.png"
                alt="Ceinfes"
                width={240}
                height={70}
                radius="none"
              />
            </LocalizedClientLink>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16 text-sm">
            {/* Categories Section */}
            {categories && categories.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-gray-900">Categories</span>
                <ul className="grid grid-cols-1 gap-2">
                  {categories.slice(0, 6).map((category) => {
                    if (category.parent_category) return null

                    return (
                      <li key={category.id} className="flex flex-col gap-2">
                        <LocalizedClientLink
                          href={`/categories/${category.handle}`}
                        >
                          {category.name}
                        </LocalizedClientLink>
                        {category.category_children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {category.category_children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  href={`/categories/${child.handle}`}
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections Section */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-gray-900">Collections</span>
                <ul className="grid grid-cols-1 gap-2">
                  {collections.slice(0, 6).map((collection) => (
                    <li key={collection.id}>
                      <LocalizedClientLink
                        href={`/collections/${collection.handle}`}
                      >
                        {collection.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links Section */}
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-900">Links</span>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <LocalizedClientLink
                    href="https://github.com/medusajs"
                    external
                  >
                    GitHub
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="https://docs.medusajs.com"
                    external
                  >
                    Documentation
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    external
                  >
                    Source code
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full mb-16 justify-between text-gray-500">
          <p className="text-sm">
            © {new Date().getFullYear()} Ceinfes Store. All rights reserved.
          </p>
          {/* You can replace this with your own component */}
          <div className="text-sm">
            <Link href="https://ceinfes.com" className="text-primary">
              ceinfes.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

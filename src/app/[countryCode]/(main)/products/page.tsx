import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import FeaturedProducts from "@modules/ecommerce/home/components/featured-products"
import Hero from "@modules/ecommerce/home/components/hero"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Ceinfes | Products",
  description: "Products of Ceinfes website",
}

const Products = async (props: {
  params: Promise<{ countryCode: string }>
}) => {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}

export default Products

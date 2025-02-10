import Banner from "@modules/home/components/Banner"
import Programs from "@modules/home/components/Programs"
import React from "react"

const HomeLayout = () => {
  return (
    <main className="bg-dots h-full w-full overflow-x-hidden">
      <Banner />
      <Programs />
    </main>
  )
}

export default HomeLayout

import React from "react"
import Banner from "./components/Banner"
import Programs from "./components/Programs"
import News from "./components/news"
import Investigation from "./components/Investigation"


const HomeLayout = () => {
  return (
    <main className="bg-dots h-full w-full overflow-x-hidden">
      <Banner />
      <Programs />
      <News/>
      <Investigation/>
    </main>
  )
}

export default HomeLayout

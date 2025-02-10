import React from "react"
import Banner from "./components/Banner"
import { Programs } from "./components/Programs"

export const HomePage = () => {
  return (
    <main className="bg-dots h-full w-screen overflow-x-hidden md:overflow-x-auto">
      <Banner />
      <Programs />
    </main>
  )
}

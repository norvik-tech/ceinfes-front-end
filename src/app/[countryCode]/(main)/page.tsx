import HomeLayout from "@modules/home/layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceinfes",
  description: "Ceinfes website",
}

export default async function Home() {
  return <HomeLayout />
}

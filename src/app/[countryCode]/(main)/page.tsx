import { HomePage } from "@modules/home/HomePage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceinfes | Inicio",
  description: "Ceinfes website",
}

export default async function Home() {
  return <HomePage />
}

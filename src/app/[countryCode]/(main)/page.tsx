import Banner from "@modules/blog/components/Banner"
import Programs from "@modules/blog/components/Programs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceinfes",
  description: "Ceinfes website",
}

export default async function Home() {
  return (
    <main className="bg-dots h-full w-full overflow-x-hidden">
      <Banner/>
      <Programs/>
    </main>
  )
}

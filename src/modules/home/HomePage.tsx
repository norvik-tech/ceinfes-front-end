import { Banner } from "./components/Banner"
import { Innovation } from "./components/Innovation"
import Investigation from "./components/Investigation"
import { NewsSection } from "./components/news/NewsSection"
import { Programs } from "./components/Programs"
import { PostType } from "types/blog"

interface HomePageProps {
  posts: PostType[]
}

export const HomePage = ({ posts }: HomePageProps) => {
  return (
    <main className="bg-dots h-full w-screen overflow-x-hidden md:overflow-x-auto">
      <Banner />
      <Programs />
      <NewsSection posts={posts} />
      <Investigation />
      <Innovation />
    </main>
  )
}

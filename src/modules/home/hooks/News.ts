import { useRef, useState } from "react"
import { NewsItem } from "types/home"
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Experienced team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7LQvjp81K8mLFoWGFGyAUcoaaEzm7K.png",
  },
  {
    id: 2,
    title: "Professional Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-puQdPHUqgfXfNLuCGPjj1oHyOeGjtb.png",
  },
  {
    id: 3,
    title: "Learning Resources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7LQvjp81K8mLFoWGFGyAUcoaaEzm7K.png",
  },
  {
    id: 4,
    title: "Experienced team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-puQdPHUqgfXfNLuCGPjj1oHyOeGjtb.png",
  },
  {
    id: 5,
    title: "Professional Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7LQvjp81K8mLFoWGFGyAUcoaaEzm7K.png",
  },
  {
    id: 6,
    title: "Learning Resources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-puQdPHUqgfXfNLuCGPjj1oHyOeGjtb.png",
  },
]

export const useNews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollStep = 300

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      container.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      })
    }
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
  }

  const handlePrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      container.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      })
    }
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return {
    handleNext,
    handlePrevious,
    currentIndex,
    newsItems,
    scrollContainerRef,
  }
}

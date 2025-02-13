"use client"

import { useRef, useState } from "react"
import { PostType } from "types/blog"

export const useNews = (posts: PostType[]) => {
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
    setCurrentIndex((prev) => (prev + 1) % posts?.length)
  }

  const handlePrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      container.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      })
    }
    setCurrentIndex((prev) => (prev - 1 + posts?.length) % posts?.length)
  }

  return {
    handleNext,
    handlePrevious,
    currentIndex,
    scrollContainerRef,
  }
}

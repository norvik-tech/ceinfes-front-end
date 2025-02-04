"use client"
"use client"
import React, { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useNews } from "@modules/home/hooks/News"
import NewCard from "./NewCard"
import { ScrollShadow } from "@heroui/react"

const News = () => {
  const {
    newsItems,
    currentIndex,
    handleNext,
    handlePrevious,
    scrollContainerRef,
  } = useNews()

  return (
    <div className="w-full flex flex-col justify-center md:pl-[12%]  p-4">
      <h2 className="text-[35px] max-w-[200px] md:max-w-[500px] leading-[2.7rem] mx-auto text-center font-semibold mb-8 md:mb-14">
        <span className="text-secondary md:text-primary">Noticias y </span>
        <span className="text-primary md:text-secondary">actualidad</span>
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            className="md:hidden"
            key={newsItems[currentIndex].id} 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <NewCard item={newsItems[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <ScrollShadow
          orientation="horizontal"
          ref={scrollContainerRef}
          className="hidden md:p-5 md:flex gap-6 overflow-x-auto no-scrollbar"
        >
          {newsItems.map((item) => (
            <NewCard key={item.id} item={item} />
          ))}
        </ScrollShadow>

        <div className="flex w-full justify-center md:justify-start pl-3 mt-2 gap-4 text-secondary text-[40px]">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full"
            aria-label="Previous slide"
          >
            <i
              className="icon-[mdi--arrow-left] hover:text-primary"
              role="img"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full"
            aria-label="Next slide"
          >
            <i
              className="icon-[mdi--arrow-right] hover:text-primary"
              role="img"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default News

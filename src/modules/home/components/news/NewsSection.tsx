"use client"

import React, { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useNews } from "@modules/home/hooks/News"
import { Button, ScrollShadow } from "@heroui/react"
import { PostType } from "types/blog"
import NewCard from "./NewCard"

interface Props {
  posts: PostType[]
}

export const NewsSection = ({ posts }: Props) => {
  const { currentIndex, handleNext, handlePrevious, scrollContainerRef } =
    useNews(posts)

  if (!posts) return

  return (
    <section className="w-full flex flex-col justify-center py-12 lg:py-20 content-container gap-y-8 md:gap-y-16">
      <h3 className="leading-[1.1] mx-auto text-center font-medium text-[38px] lg:text-[73.75px]">
        <span className="text-secondary md:text-primary">Noticias y </span>
        <span className="text-primary md:text-secondary">actualidad</span>
      </h3>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0.5, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1 }}
          >
            <NewCard post={posts?.[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <ScrollShadow
          orientation="horizontal"
          size={30}
          ref={scrollContainerRef}
          className="hidden md:p-5 md:flex gap-6 overflow-x-auto no-scrollbar"
        >
          {posts.map((post) => (
            <NewCard key={post?._id} post={post} />
          ))}
        </ScrollShadow>
      </div>
      <div className="flex w-full justify-center md:justify-start pl-3 mt-2 gap-4 text-secondary text-[40px]">
        <Button
          isIconOnly
          radius="full"
          onPress={handlePrevious}
          className="hover:text-primary data-[hover=true]:bg-transparent"
          variant="light"
          aria-label="Previous slide"
        >
          <i
            className="icon-[mdi--arrow-left] text-4xl"
            role="img"
            aria-hidden="true"
          />
        </Button>
        <Button
          isIconOnly
          radius="full"
          onPress={handleNext}
          className="hover:text-primary data-[hover=true]:bg-transparent"
          aria-label="Next slide"
          variant="light"
        >
          <i
            className="icon-[mdi--arrow-right] text-4xl"
            role="img"
            aria-hidden="true"
          />
        </Button>
      </div>
    </section>
  )
}

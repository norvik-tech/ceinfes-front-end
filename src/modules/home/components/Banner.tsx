import { Button, Image } from "@heroui/react"
import React from "react"

const Banner = () => {
  return (
    <section className="w-screen flex flex-col overflow-hidden md:flex-row">
      <article className="flex p-10 md:pl-[10%] md:pt-[10%] flex-col w-full md:w-[50%] text-center justify-center gap-5 md:justify-start md:text-start">
        <div className="font-medium text-[48px] md:text-[5vw] leading-[50px] md:leading-[5vw] flex flex-col">
          <p className="text-primary">Investigación</p>
          <p className="text-secondary">educativa a tu alcance</p>
        </div>
        <Button className="bg-primary py-3 mx-auto md:mx-0 min-w-[200px] text-[15px] md:text-[1.5vw] lg:text-[15px] shadow-lg rounded-[5px] md:w-[60%] text-white font-semibold">
          Conoce nuestros productos
        </Button>
      </article>
      <div className="w-[150vw] h-full relative ml-[-150px] md:mx-0 flex justify-center md:justify-end md:w-[50vw]">
        <div className="absolute z-[40] md:top-[17vw] top-[38vw] right-[25vw] md:right-[6vw]">
        <Image alt="heroIcon" src="/BannerIcon1.svg" className="z-[99] h-[120px]  w-[120px] md:w-[14vw] md:h-[14vw]"/>
        </div>
        <div className="absolute z-[40] md:top-[30vw] top-[60vw] left-[52vw] md:left-[11vw]">
        <Image alt="heroIcon2" src="/BannerIcon2.svg" className="md:w-[9vw] md:h-[9vw]"/>
        </div>
        <Image alt="heroImage" className="md:h-[100%]" src="/Banner.svg" />
      </div>
    </section>
  )
}

export default Banner

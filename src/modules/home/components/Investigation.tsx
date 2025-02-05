import { Button, Image } from "@heroui/react"
import React from "react"

const Investigation = () => {
  return (
    <section className="w-full flex pb-[5%] justify-center items-center">
      <div className="w-[100vw] md:w-[80vw] p-10 relative flex flex-col-reverse md:flex-row md:justify-center shadow-xl bg-white md:rounded-[16px]">
        <div className="absolute -top-10 md:-right-6 right-5">
          <Image className="w-[100px] md:w-[140px] h-[140px]" src="/SearchIcon.svg" />
        </div>
        <div className="md:w-[50%] w-full">
          <Image className="w-full" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tkddscqoIn2H4gocIOoMqfAd1gXuIs.png" /> 
        </div>
        <div className="flex flex-col w-full md:w-[50%] gap-10 md:p-10">
          <h4 className="font-semibold leading-[2.7rem] text-secondary text-[38px] md:text-[48px]">Grupo de <span className="text-primary md:text-secondary">investigación</span></h4>
          <p className="font-light text-md md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-primary hidden md:flex select-none cursor-pointer font-bold underline">Leer más</p>
          <Button className="bg-primary mx-auto rounded-md font-medium shadow-lg text-[16px] mb-8 text-white md:hidden">Leer más</Button>
        </div>
      </div>
    </section>
  )
}

export default Investigation

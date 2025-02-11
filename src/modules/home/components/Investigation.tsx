import { Button, Image } from "@heroui/react"
import React from "react"

const Investigation = () => {
  return (
    <section className="w-full flex py-6 lg:py-16 justify-center items-center">
      <div className="w-[100vw] md:w-[80vw] p-6 relative flex flex-col-reverse lg:flex-row items-center md:justify-center shadow-md bg-white md:rounded-[16px]">
        <Image
          className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] xl:w-[140px] xl:h-[140px]"
          classNames={{
            wrapper: "absolute -top-5 md:-top-7 lg:-top-10 md:-right-6 right-5",
          }}
          src="/home/investigation/SearchIcon.svg"
        />
        <Image
          className="w-full rounded-lg"
          classNames={{
            wrapper: "lg:w-[50%] w-full",
          }}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tkddscqoIn2H4gocIOoMqfAd1gXuIs.png"
        />
        <div className="flex flex-col w-full lg:w-[50%] gap-10 md:py-6 lg:p-10">
          <h4 className="font-semibold leading-[2.7rem] text-secondary text-[38px] md:text-[48px]">
            Grupo de{" "}
            <span className="text-primary lg:text-secondary">
              investigación
            </span>
          </h4>
          <p className="font-light text-base lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-primary hidden lg:flex select-none cursor-pointer font-bold underline">
            Leer más
          </p>
          <Button className="bg-primary mx-auto rounded-md font-medium shadow-lg text-[16px] mb-8 text-white lg:hidden">
            Leer más
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Investigation

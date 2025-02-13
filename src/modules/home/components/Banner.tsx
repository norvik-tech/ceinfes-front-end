import { Button, Image } from "@heroui/react"

export const Banner = () => {
  return (
    <section className="w-full flex flex-col  md:flex-row">
      <article className="flex flex-col w-full md:w-1/2 gap-5 md:pl-[5%] lg:pl-[10%] justify-center pt-7">
        <div className="font-medium text-[38px] lg:text-[73.75px] leading-[1.1] flex flex-col text-center md:text-left">
          <p className="text-primary">Investigación</p>
          <p className="text-secondary">educativa a tu alcance</p>
        </div>
        <Button className="bg-primary mx-auto md:mx-0 w-max text-base lg:text-2xl py-4 px-10 drop-shadow-lg rounded-lg text-white font-semibold">
          Conoce nuestros productos
        </Button>
      </article>
      <div className="h-full relative w-full flex justify-center md:justify-end md:w-1/2">
        <Image
          classNames={{
            wrapper:
              "absolute z-[10] md:top-[17vw] top-[38vw] right-[10vw] md:right-[6vw]",
          }}
          alt="heroIcon"
          src="/home/banner/BannerIcon1.svg"
          className="h-[120px] w-[120px] md:w-[14vw] md:h-[14vw]"
        />
        <Image
          alt="heroIcon2"
          src="/home/banner/BannerIcon2.svg"
          classNames={{
            wrapper:
              "absolute z-[10] md:top-[30vw] bottom-[60vw] left-[16vw] md:left-[11vw] ",
          }}
          className="md:w-[9vw] md:h-[9vw]"
        />
        <Image
          alt="heroImage"
          className="md:h-[100%] z-0 block md:hidden"
          src="/home/banner/banner_mobile.webp"
          fetchPriority="high"
        />
        <Image
          alt="heroImage"
          className="md:h-[100%] z-0 hidden md:block"
          src="/home/banner/Banner.webp"
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </section>
  )
}

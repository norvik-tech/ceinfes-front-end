import { Button, Image } from "@heroui/react"

export const About = () => {
  return (
    <section className="bg-white md:rounded-3xl py-12 md:justify-between md:px-16 shadow-lg my-10 relative flex flex-col gap-[24px] md:flex-row content-container">
      <div className="flex flex-col gap-5 md:justify-center md:w-[50%]">
        <Image
          classNames={{
            wrapper: "absolute -top-10 right-10 md:-left-6 md:-top-14",
          }}
          className="w-[100px]"
          src="/home/about/AboutIcon.svg"
        />
        <h4 className="text-secondary text-[38px] font-semibold leading-[2.75rem] w-[50%]">
          Sobre <span className="text-primary md:text-secondary">nosotros</span>
        </h4>
        <p className="text-darkGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex mb-2 gap-[8px]">
          <Button className="bg-primary rounded-md shadow-lg text-white">
            Productos
          </Button>
          <Button className="bg-white rounded-md shadow-lg border-secondary border-1 text-secondary">
            Registro
          </Button>
        </div>
      </div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rE7Jy7guLfwevr4cTiDIw9tMEsgBCI.png"
        className="w-full h-full"
      />
    </section>
  )
}

import { Image } from "@heroui/react"
import { PROGRAMS } from "../data/programs"

export const Programs = () => {
  return (
    <section className="w-full lg:w-[90%] flex flex-wrap-reverse  gap-y-10 py-12 lg:py-20 items-center justify-around h-full bg-white/65">
      {PROGRAMS.map((item) => (
        <div className="flex justify-center items-center text-center flex-col gap-3">
          <Image className="w-[120px] mx-auto mb-3" src={item.src} />
          <p className="text-[30px] text-darkgrey max-w-[250px] leading-[35px] font-bold">
            {item.title}
          </p>
          <p className="max-w-[300px] text-sm font-light">{item.description}</p>
        </div>
      ))}
    </section>
  )
}

import { Image } from "@heroui/react"

import { PROGRAMS } from "../data/programs"

export const Programs = () => {
  return (
    <section className="py-6 lg:py-20 h-full bg-white">
      <ul className="w-full lg:w-[90%] mx-auto items-center justify-around flex flex-wrap-reverse gap-y-10">
        {PROGRAMS.map((program, index) => (
          <li
            key={`${program.title}-${index}`}
            className="flex justify-center items-center text-center flex-col gap-3 text-darkGrey"
          >
            <Image className="w-[120px] mx-auto mb-3" src={program.src} />
            <p className="text-[30px] text-darkgrey max-w-[250px] leading-[35px] font-bold">
              {program.title}
            </p>
            <p className="max-w-[300px] text-sm font-light">
              {program.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

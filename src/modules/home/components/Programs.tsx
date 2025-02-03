import { Image } from "@heroui/react"
import React from "react"

const Programs = () => {
  const programs: { src: string; title: string; description: string }[] = [
    {
      src: "/Evaluation.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Programas en evaluación",
    },
    {
        src: "/Book.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        title: "Programas en gestión",
      },
      {
        src: "/Idea.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        title: "Herramientas educativas",
      },
  ]
  return (
    <section className="w-full flex flex-wrap-reverse gap-x-5 gap-y-10 items-center justify-center p-20 h-full bg-white/65">
      {programs.map((item) => (
        <div className="flex justify-center items-center text-center flex-col gap-3">
          <Image className="w-[120px] mx-auto mb-3" src={item.src} />
          <p className="text-[30px] text-darkGrey max-w-[250px] leading-[35px] font-bold">{item.title}</p>
          <p className="max-w-[300px] text-sm font-light">{item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Programs

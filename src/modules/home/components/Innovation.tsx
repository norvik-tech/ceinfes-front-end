import { Image } from "@heroui/react"
import React from "react"

const Innovation = () => {
  return (
    <section className="flex w-full flex-col gap-8 p-8 md:pl-[10%]">
      <p className="text-secondary  font-semibold text-[38px] leading-[2.75rem]">
        <span className="italic md:not-italic">Investigación +</span>{" "}
        <span className="text-primary leading-[2.75rem]">
          innovación académica
        </span>
      </p>
      <p className="text-darkGrey md:max-w-[60%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex mt-5 gap-5 flex-col md:flex-wrap md:flex-row">
        <article className="flex md:w-[40%] gap-4 justify-start items-start">
          <Image className="max-w-[100px]" src="/infoIcon.svg" />
          <div className="flex flex-col gap-2">
            <p className="text-secondary font-medium text-[24px]">
              Línea de procesos
            </p>
            <p className="text-darkGrey text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </article>
        <article className="flex md:w-[40%] gap-6 justify-start items-start">
          <Image className="max-w-[100px]" src="/watchIcon.svg" />
          <div className="flex flex-col gap-2">
            <p className="text-secondary font-medium text-[24px]">
              Línea de desarrollo
            </p>
            <p className="text-darkGrey text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </article>
        <article className="flex md:w-[40%] gap-6 justify-start items-start">
          <Image className="max-w-[100px]" src="/watchIcon.svg" />
          <div className="flex flex-col gap-2">
            <p className="text-secondary font-medium text-[24px]">
              Línea de producción
            </p>
            <p className="text-darkGrey text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Innovation

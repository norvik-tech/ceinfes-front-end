import { Image } from "@heroui/react"
import { NewsletterForm } from "./NewsletterForm"

export const Newsletter = () => {
  return (
    <section className="bg-white md:rounded-3xl md:justify-between py-12 shadow-lg my-10 relative flex flex-col gap-8 content-container">
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 md:-top-7 lg:-top-10 md:left-auto md:right-6 md:translate-x-0">
        <Image
          className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] xl:w-[140px] xl:h-[140px]"
          src="/home/newsletter/mail.svg"
          alt="Newsletter icon"
        />
      </div>

      <div className="flex flex-col items-center gap-4 mt-12 lg:mt-0">
        <p className="italic text-center !text-[38px] lg:text-[64px] text-medium text-secondary flex flex-col items-center leading-[1.05]">
          Suscríbete a nuestro{" "}
          <span className="text-primary not-italic font-semibold">
            Newsletter
          </span>
        </p>
        <p className="text-darkGrey text-center max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          dolorum placeat nulla minima reiciendis ducimus
        </p>
      </div>

      <NewsletterForm />
    </section>
  )
}

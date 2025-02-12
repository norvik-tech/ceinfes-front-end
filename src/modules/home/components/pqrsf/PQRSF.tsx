import { Button } from "@heroui/react"
import { AccordionComponent } from "./Accordion"

export const PQRSF = () => {
  return (
    <section className="flex lg:justify-around items-center justify-center flex-col lg:flex-row gap-y-16 content-container">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-4xl lg:text-[52px] xl:text-[64px] font-medium leading-[1.05]">
        <h3 className="text-primary">CEINFES</h3>
        <p className="italic text-secondary">Te escucha</p>
        <Button color="primary" variant="solid" className="mt-6">
          Registrar PQRSF
        </Button>
      </div>
      <AccordionComponent />
    </section>
  )
}

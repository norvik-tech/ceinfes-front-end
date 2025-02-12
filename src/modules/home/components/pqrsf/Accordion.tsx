"use client"

import { Accordion, AccordionItem } from "@heroui/react"
import React from "react"

export const AccordionComponent = () => {
  return (
    <div className="w-full flex items-center justify-center lg:w-1/2 lg:min-h-[535px]">
      <Accordion className="lg:max-w-xl">
        <AccordionItem
          classNames={{
            trigger: "py-2",
            title:
              "text-xl lg:text-3xl font-medium text-secondary data-[open=true]:text-primary",
            indicator: "text-secondary data-[open=true]:text-primary",
          }}
          className="text-darkGrey font-light pb-4"
          key="1"
          aria-label="Accordion 1"
          title="Lorem ipsum dolor sit amet."
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit alias velit qui quidem maxime, neque sint consectetur
          quam minus tenetur, dicta perferendis suscipit architecto voluptates?
          Quidem distinctio praesentium sequi repellat?
        </AccordionItem>
        <AccordionItem
          classNames={{
            trigger: "py-2",
            title:
              "text-xl lg:text-3xl font-medium text-secondary data-[open=true]:text-primary",
            indicator: "text-secondary data-[open=true]:text-primary",
          }}
          className="text-darkGrey font-light pb-4"
          key="2"
          aria-label="Accordion 2"
          title="Lorem ipsum dolor sit amet."
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit alias velit qui quidem maxime, neque sint consectetur
          quam minus tenetur, dicta perferendis suscipit architecto voluptates?
          Quidem distinctio praesentium sequi repellat?
        </AccordionItem>
        <AccordionItem
          classNames={{
            trigger: "py-2",
            title:
              "text-xl lg:text-3xl font-medium text-secondary data-[open=true]:text-primary",
            indicator: "text-secondary data-[open=true]:text-primary",
          }}
          className="text-darkGrey font-light pb-4"
          key="3"
          aria-label="Accordion 3"
          title="Lorem ipsum dolor sit amet."
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit alias velit qui quidem maxime, neque sint consectetur
          quam minus tenetur, dicta perferendis suscipit architecto voluptates?
          Quidem distinctio praesentium sequi repellat?
        </AccordionItem>
        <AccordionItem
          classNames={{
            trigger: "py-2",
            title:
              "text-xl lg:text-3xl font-medium text-secondary data-[open=true]:text-primary",
            indicator: "text-secondary data-[open=true]:text-primary",
          }}
          className="text-darkGrey font-light pb-4"
          key="4"
          aria-label="Accordion 4"
          title="Lorem ipsum dolor sit amet."
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit alias velit qui quidem maxime, neque sint consectetur
          quam minus tenetur, dicta perferendis suscipit architecto voluptates?
          Quidem distinctio praesentium sequi repellat?
        </AccordionItem>
      </Accordion>
    </div>
  )
}

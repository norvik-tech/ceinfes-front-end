"use client"

import { Select, SelectItem } from "@nextui-org/react"

export const EventsFilter = () => {
  return (
    <div className="flex items-center justify-start">
      <Select
        className="max-w-sm"
        label="Filtrar por:"
        labelPlacement="outside-left"
        variant="bordered"
        placeholder="Seleccionar filtro"
      >
        <SelectItem key="nuestros-events" value="nuestros-events">
          Nuestros eventos
        </SelectItem>
      </Select>
    </div>
  )
}

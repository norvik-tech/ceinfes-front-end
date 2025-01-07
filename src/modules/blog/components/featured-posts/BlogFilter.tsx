"use client"

import { Select, SelectItem } from "@nextui-org/react"
import { useSearchParams, useRouter } from "next/navigation"
import { useRef } from "react"
import { CategoryType } from "types/blog"

type BlogFilterProps = {
  query?: string
  categories: CategoryType[]
}

export const BlogFilter = ({ query, categories }: BlogFilterProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set("query", e.target.value)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-start">
      <Select
        ref={selectRef}
        name="query"
        value={query ? [query] : []}
        defaultSelectedKeys={query ? [query] : []}
        className="max-w-md"
        label="Filtrar por:"
        labelPlacement="outside-left"
        variant="bordered"
        placeholder="Seleccionar filtro"
        isLoading={categories.length == 0}
        onChange={handleSelectionChange}
      >
        {categories.map((category) => (
          <SelectItem key={category.slug} value={category.slug}>
            {category.title}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

"use client"

import { Select, SelectItem } from "@heroui/react"
import { useSearchParams, useRouter } from "next/navigation"
import { useRef } from "react"
import { CategoryType } from "types/blog"
import { InvestigationCategoryType } from "types/investigation-post"

type BlogFilterProps = {
  query?: string
  categories: CategoryType[] | InvestigationCategoryType[]
}

export const BlogFilter = ({ query, categories }: BlogFilterProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set("query", e.target.value)
    router.push(`?${params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <div className="flex items-center min-w-[340px]">
      <p className="text-black text-xs w-full">Filtrar por categoría:</p>
      <Select
        ref={selectRef}
        name="query"
        value={query ? [query] : []}
        defaultSelectedKeys={query ? [query] : []}
        labelPlacement="outside-left"
        className="min-w-[220px]"
        variant="bordered"
        placeholder="Seleccionar categoría"
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

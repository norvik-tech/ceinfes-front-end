"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

export const ClearFilters = () => {
  const router = useRouter()

  const selectRef = useRef<HTMLSelectElement>(null)

  const handleClearFilters = () => {
    if (selectRef.current) {
      selectRef.current.value = ""
    }
    router.push(window.location.pathname)
  }

  return (
    <button
      onClick={handleClearFilters}
      className="text-sm text-gray-500 hover:text-gray-700"
    >
      Limpiar filtros
    </button>
  )
}

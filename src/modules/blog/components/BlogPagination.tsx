"use client"

import { Pagination } from "@heroui/react"
import { handlePageChange } from "../utils/page-changer"
import { useRouter } from "next/navigation"

type BlogPaginationProps = {
  totalPages: number
  currentPage: number
  query?: string
}

export const BlogPagination = ({
  totalPages,
  currentPage,
  query,
}: BlogPaginationProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-y-1">
      <p className="text-xs text-dark">Paginación</p>
      <Pagination
        total={totalPages}
        page={currentPage}
        color="primary"
        variant="light"
        onChange={(page) => handlePageChange(page, query, router)}
        classNames={{
          cursor: "text-secondary-foreground",
          wrapper: "gap-2",
        }}
      />
    </div>
  )
}

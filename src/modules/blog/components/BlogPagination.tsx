"use client"

import { Pagination } from "@nextui-org/react"
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
    <div className="flex justify-center mt-8">
      <Pagination
        total={totalPages}
        page={currentPage}
        color="secondary"
        variant="light"
        onChange={(page) => handlePageChange(page, query, router)}
        classNames={{
          wrapper: "gap-2",
        }}
      />
    </div>
  )
}

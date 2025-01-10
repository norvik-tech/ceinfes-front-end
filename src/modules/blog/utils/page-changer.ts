import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const handlePageChange = (
  page: number,
  query?: string,
  router?: AppRouterInstance
) => {
  const params = `page=${page}${query ? `query=${query}` : ""}`
  if (router)
    router.push(`?${params}`, {
      scroll: false,
    })
}

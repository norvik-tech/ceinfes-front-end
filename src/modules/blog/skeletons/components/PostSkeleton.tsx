import { Card, CardBody, CardHeader, Skeleton } from "@heroui/react"

export const PostSkeleton = () => {
  return (
    <Card className="py-4 max-w-xs" shadow="none">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Skeleton className="h-8 w-32 rounded-lg" />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton className="rounded-xl">
          <div className="h-44 rounded-xl bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3 mt-4">
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <Skeleton className="h-10 w-full rounded-lg mt-4" />
      </CardBody>
    </Card>
  )
}

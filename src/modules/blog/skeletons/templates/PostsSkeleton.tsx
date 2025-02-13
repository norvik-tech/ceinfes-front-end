import repeat from "@modules/ecommerce/common/util/repeat"
import { PostSkeleton } from "../components/PostSkeleton"

export const PostsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
      {repeat(4).map((index) => (
        <PostSkeleton key={index} />
      ))}
    </div>
  )
}

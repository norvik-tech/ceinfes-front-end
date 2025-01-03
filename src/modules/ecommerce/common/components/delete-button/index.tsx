import { cn } from "@nextui-org/react"
import { useState } from "react"
import { deleteLineItem } from "../../data/cart"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? (
          <i
            className="icon-[ri--loader-line] animate-spin"
            role="img"
            aria-hidden="true"
          ></i>
        ) : (
          <i className="icon-[mynaui--trash]" role="img" aria-hidden="true"></i>
        )}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton

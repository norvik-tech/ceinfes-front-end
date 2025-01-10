import { User } from "@nextui-org/react"
import React from "react"

export const AuthorCard = () => {
  return (
    <div className="flex items-center gap-4 p-4">
      <User
        name="John Doe"
        description="Content Creator"
        avatarProps={{
          src: "https://via.placeholder.com/40",
        }}
      />
    </div>
  )
}

"use client"

import { Button } from "@nextui-org/react"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "solid",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  variant?:
    | "solid"
    | "bordered"
    | "faded"
    | "light"
    | "flat"
    | "ghost"
    | "shadow"
    | null
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={className}
      type="submit"
      isLoading={pending}
      variant={variant || "solid"}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  )
}

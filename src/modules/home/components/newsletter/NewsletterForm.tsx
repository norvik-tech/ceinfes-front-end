"use client"

import {
  newsletterFormSchema,
  NewsletterFormSchema,
} from "@modules/home/lib/schemas/newsletter-schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button, Input } from "@heroui/react"

export const NewsletterForm = () => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: NewsletterFormSchema) => {
    try {
      // TODO: make an API call to subscribe the email
      await new Promise((resolve) => setTimeout(resolve, 1000))
      reset()
      toast.success("Suscripción confirmada")
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Subscription error: ${error.message}`)
      } else {
        toast.error("An unknown error occurred")
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row justify-center gap-4"
    >
      <Input
        {...register("email")}
        type="email"
        placeholder="Email"
        variant="bordered"
        radius="sm"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        isDisabled={isSubmitting}
        className="flex-1 lg:max-w-[380px]"
        classNames={{
          inputWrapper: "border-1",
          input: "placeholder:text-grey-40",
        }}
        endContent={
          <i
            className="icon-[lucide--mail] text-grey-40 size-5"
            role="img"
            aria-hidden="true"
          />
        }
      />

      <Button
        type="submit"
        color="primary"
        isLoading={isSubmitting}
        radius="sm"
        className="bg-orange-500"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  )
}

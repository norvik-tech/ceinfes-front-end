"use client"

import { resetOnboardingState } from "@modules/ecommerce/common/data/onboarding"
import { Button } from "@nextui-org/react"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  return (
    <div className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <p className="font-helvetica-neue text-ui-fg-base text-xl">
          Your test order was successfully created! 🎉
        </p>
        <p className="font-helvetica-neue text-ui-fg-subtle text-small-regular">
          You can now complete setting up your store in the admin.
        </p>
        <Button className="w-fit" onPress={() => resetOnboardingState(orderId)}>
          Complete setup in admin
        </Button>
      </div>
    </div>
  )
}

export default OnboardingCta

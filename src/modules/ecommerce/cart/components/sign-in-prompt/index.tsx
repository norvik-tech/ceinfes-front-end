import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import { Button } from "@heroui/react"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <h2 className="txt-xlarge">Already have an account?</h2>
        <p className="txt-medium text-ui-fg-subtle mt-2">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="solid" className="h-10" data-testid="sign-in-button">
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt

import { Metadata } from "next"

import LoginTemplate from "@modules/auth/account/templates/login-template"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Ceinfes Store account.",
}

export default function Login() {
  return <LoginTemplate />
}

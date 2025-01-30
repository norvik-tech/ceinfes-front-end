import { HelveticaNeue } from "@modules/common/config/fonts-config"
import { getBaseURL } from "@modules/ecommerce/common/util/env"
import { HeroUIProvider } from "@heroui/react"
import { Metadata } from "next"

import "easymde/dist/easymde.min.css"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body
        className={`${HelveticaNeue.variable} font-helvetica-neue text-dark`}
      >
        <HeroUIProvider>
          <main className="relative">{props.children}</main>
        </HeroUIProvider>
      </body>
    </html>
  )
}

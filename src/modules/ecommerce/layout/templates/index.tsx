import React from "react"

import Footer from "@modules/ecommerce/layout/templates/footer"
import Nav from "@modules/ecommerce/layout/templates/nav"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

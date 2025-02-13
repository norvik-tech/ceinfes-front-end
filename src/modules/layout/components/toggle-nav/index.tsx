"use client"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import { NAVBAR_LINKS } from "@modules/layout/config/constants/navbar-links"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ToggleNav = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      className="drop-shadow-md !bg-white"
      classNames={{
        wrapper: "content-container gap-8 xl:gap-10",
      }}
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
    >
      <NavbarContent>
        <NavbarBrand as={Link} href="/">
          <div className="relative w-[120px] lg:w-[180px] md:min-w-[8vw] h-[60px]">
            <Image
              src="/ceinfes-logo.png"
              alt="Ceinfes"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex gap-[2vw] w-full"
        justify="center"
      >
        <ul className="flex flex-1 items-center gap-x-6 xl:gap-x-10 h-full text-base font-light basis-0 justify-end">
          {NAVBAR_LINKS().map((link, index) => (
            <LocalizedClientLink
              href={link.href}
              key={`${link.name}-${index}`}
              data-testid="nav-account-link"
              className="relative text-[1.5vw] text-sm xl:text-base group transition-colors hover:text-primary cursor-pointer 
       after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-primary 
       after:transition-all after:origin-left 
       hover:after:w-full"
            >
              {link.name}
            </LocalizedClientLink>
          ))}
          {/* TODO: Search */}
          {/* <span className="icon-[meteor-icons--search]"></span> */}
          {children}
        </ul>
      </NavbarContent>

      <NavbarMenu>
        {NAVBAR_LINKS().map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === NAVBAR_LINKS().length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>{children}</NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default ToggleNav

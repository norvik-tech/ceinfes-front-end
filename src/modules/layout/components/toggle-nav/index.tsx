"use client"

import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import { NAVBAR_LINKS } from "@modules/layout/config/constants/navbar-links"
import Link from "next/link"
import React, { useState } from "react"

const ToggleNav = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      className="drop-shadow-sm"
      classNames={{
        wrapper: "content-container gap-10",
      }}
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={Link} href="/">
          <Image
            src="/ceinfes-logo.png"
            radius="none"
            className="w-[100px] md:min-w-[8vw]"
            alt="Ceinfes"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-[2vw] w-full"
        justify="center"
      >
        <ul className="flex flex-1 items-center gap-x-10 h-full text-base font-light basis-0 justify-end">
          {NAVBAR_LINKS().map((link, index) => (
            <LocalizedClientLink
              href={link.href}
              key={`${link.name}-${index}`}
              data-testid="nav-account-link"
              className="relative text-[1.5vw] md:text-base group transition-colors hover:text-primary cursor-pointer 
       after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-primary 
       after:transition-all after:origin-left 
       hover:after:w-full"
            >
              {link.name}
            </LocalizedClientLink>
          ))}
          {/* TODO: Search */}
          {/* <span className="icon-[meteor-icons--search]"></span> */}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>{children}</NavbarItem>
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
      </NavbarMenu>
    </Navbar>
  )
}

export default ToggleNav

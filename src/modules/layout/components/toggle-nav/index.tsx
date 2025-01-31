"use client"
import {
  Image,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react"
import LocalizedClientLink from "@modules/ecommerce/common/components/localized-client-link"
import { NAVBAR_LINKS } from "@modules/layout/config/constants/navbar-links"
import Link from "next/link"
import React, { Suspense, useState } from "react"

const ToggleNav = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar 
      classNames={{wrapper: "md:w-[100vw]!important justify-between!important", base: "w-[100vw] justify-between", content: "md:w-[100vw] justify-between!important"}}
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className="flex w-[90vw] pl-4 gap-10 items-center justify-between">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Image
          src="/ceinfes-logo.png"
          radius="none"
          className="w-[100px] md:min-w-[8vw]"
          alt="Ceinfes"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-[2vw]" justify="center">
        <div className="flex flex-1 items-center gap-x-10 h-full text-base font-light basis-0 justify-end">
          {NAVBAR_LINKS().map((link, index) => (
            <LocalizedClientLink
              href={link.href}
              data-testid="nav-account-link"
            >
              <div
                key={`${link.name}-${index}`}
                className="relative text-[1.5vw] md:text-sm group transition-colors  hover:text-primary cursor-pointer"
              >
                {link.name}
                <div className="absolute h-1 bg-primary left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300 origin-left" />
              </div>
            </LocalizedClientLink>
          ))}
          {/* TODO: Search */}
          {/* <span className="icon-[meteor-icons--search]"></span> */}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>{children}</NavbarItem>
      </NavbarContent>
      </div>

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

'use client'

import { Button, Link, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'

export const NavbarApp = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Navbar
      classNames={{
        base: "bg-[#FFFFFF] dark:bg-[#2b3743] shadow-md"
      }}
      maxWidth="lg"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link as={NextLink} href="/" color="foreground" className="text-md sm:text-2xl font-[500]">Where in the world?</Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          color="primary"
          className="text-primary-foreground"
          startContent={
            <>
              <span className="hidden dark:block">
                <SunIcon className="w-4 h-4" />
              </span>
              <span className="dark:hidden">
                <MoonIcon className="w-4 h-4" />
              </span>
            </>
          }
          variant="light"
          disableRipple
          disableAnimation
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <span className="hidden dark:block">Light Mode</span>
          <span className="dark:hidden">Dark Mode</span>
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
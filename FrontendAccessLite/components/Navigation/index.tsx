"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCCTXsContext } from "@/context/CCTXsContext"
import { Home, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Transactions from "@/components/Transactions"

export function MainNav() {
  const pathname = usePathname()
  const { cctxs } = useCCTXsContext()

  const inProgress =
    cctxs.filter(
      (cctx: any) =>
        cctx.status !== "mined-success" && cctx.status !== "mined-fail"
    ).length > 0

  return (
    <div className="flex gap-6 md:gap-10">
      <NavigationMenu>
        <NavigationMenuList className="flex-row gap-1">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  pathname === "/" ? "bg-accent" : ""
                }`}
              >
                <Home className="mr-1 h-4 w-4 text-2xl " />
                ACCESSLITE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
         
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

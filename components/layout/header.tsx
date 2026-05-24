"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  HEADER_CTA_LINKS,
  MAIN_NAV_LINKS,
} from "@/lib/constants/navigation"

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="MyHostel.pk home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
              MyHostel<span className="text-primary">.pk</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="outline" size="sm" asChild>
              <Link href={HEADER_CTA_LINKS.listHostel.href}>
                {HEADER_CTA_LINKS.listHostel.label}
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={HEADER_CTA_LINKS.signIn.href}>
                {HEADER_CTA_LINKS.signIn.label}
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-foreground/20 backdrop-blur-[2px] lg:hidden"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-lg lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {MAIN_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                <Button variant="outline" asChild>
                  <Link href={HEADER_CTA_LINKS.listHostel.href}>
                    {HEADER_CTA_LINKS.listHostel.label}
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={HEADER_CTA_LINKS.signIn.href}>
                    {HEADER_CTA_LINKS.signIn.label}
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

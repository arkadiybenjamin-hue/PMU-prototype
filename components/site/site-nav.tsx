'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteNav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY
      setScrolled(current > 12)
      if (current > lastScroll.current && current > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-linen bg-ivory/80 backdrop-blur-md'
          : 'border-transparent bg-ivory/0',
        hidden ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-heading text-[22px] font-light tracking-wide text-gold"
        >
          Maison Lumière
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-espresso/70 transition-colors hover:text-espresso"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            nativeButton={false}
            render={<a href="#consultation" />}
            className="h-11 bg-gold px-6 text-[12px] font-medium uppercase tracking-[0.12em] text-espresso hover:bg-gold/85"
          >
            Reserve Your Consultation
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-espresso hover:bg-linen"
                  aria-label="Open menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-ivory">
              <SheetHeader>
                <SheetTitle className="font-heading text-[22px] font-light text-gold">
                  Maison Lumière
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={<a href={link.href} />}
                    className="rounded-md py-3 text-[15px] font-medium tracking-wide text-espresso/80 transition-colors hover:text-espresso"
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto p-4">
                <SheetClose
                  nativeButton={false}
                  render={<a href="#consultation" />}
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-gold text-[12px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
                >
                  Reserve Your Consultation
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

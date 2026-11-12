'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { navigation } from '@/data/navigation'
import { IconMenu, IconX, IconChevronDown } from '@/components/icons'

// ── Desktop dropdown ──────────────────────────────────────────────────────────
function DropdownItem({ item }: { item: typeof navigation[0] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (item.cta) {
    return (
      <Button variant="primary-light" href={item.href} size="sm">
        {item.label}
      </Button>
    )
  }

  if (item.columns) {
    return (
      <div ref={ref} className="relative">
        <button onClick={() => setOpen(o => !o)}
          className="nav-link flex items-center gap-1 py-1"
          aria-expanded={open}>
          {item.label}
          <IconChevronDown size={14} strokeWidth={2}
            className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 animate-fade-in"
            style={{ width: 'min(920px, 90vw)' }}>
            <div className="bg-white rounded-card shadow-card-hover border border-border-default p-6"
              style={{ borderTop: '2px solid #2563EB' }}>
              <div className="grid grid-cols-3 gap-6">
                {item.columns!.map(col => (
                  <div key={col.heading}>
                    <Link href={col.href}
                      className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-3 hover:text-blue transition-colors"
                      onClick={() => setOpen(false)}>
                      {col.heading}
                    </Link>
                    <ul className="space-y-2">
                      {col.items.map(sub => (
                        <li key={sub.href}>
                          <Link href={sub.href} onClick={() => setOpen(false)}
                            className="group flex flex-col">
                            <span className="text-[14px] font-medium text-charcoal group-hover:text-blue transition-colors">
                              {sub.label}
                            </span>
                            {sub.description && (
                              <span className="text-[12px] text-muted">{sub.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (item.items) {
    return (
      <div ref={ref} className="relative">
        <button onClick={() => setOpen(o => !o)}
          className="nav-link flex items-center gap-1 py-1"
          aria-expanded={open}>
          {item.label}
          <IconChevronDown size={14} strokeWidth={2}
            className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute left-0 top-full mt-3 z-50 w-72 animate-fade-in">
            <div className="bg-white rounded-card shadow-card-hover border border-border-default py-2"
              style={{ borderTop: '2px solid #2563EB' }}>
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)}
                  className="flex flex-col px-5 py-2.5 hover:bg-offwhite transition-colors group">
                  <span className="text-[14px] font-medium text-charcoal group-hover:text-blue transition-colors">
                    {sub.label}
                  </span>
                  {sub.description && (
                    <span className="text-[12px] text-muted">{sub.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href!} className="nav-link py-1">{item.label}</Link>
  )
}

// ── Mobile nav overlay ────────────────────────────────────────────────────────
function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 z-50 bg-navy flex flex-col animate-fade-in">
      <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/10 flex-shrink-0">
        <Image src="/logo.png" alt="ManagedFirst Technologies" width={160} height={44} className="h-8 w-auto brightness-0 invert" />
        <button onClick={onClose} className="p-2 text-white/60 hover:text-white transition-colors">
          <IconX size={22} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        {navigation.map(item => {
          if (item.cta) {
            return (
              <div key={item.label} className="pt-6 border-t border-white/10">
                <Button variant="primary-dark" href={item.href} className="w-full justify-center" onClick={onClose}>
                  {item.label}
                </Button>
              </div>
            )
          }

          const allItems = item.items ?? item.columns?.flatMap(c => c.items) ?? []
          const isOpen   = openSection === item.label

          if (allItems.length > 0) {
            return (
              <div key={item.label}>
                <button onClick={() => setOpenSection(isOpen ? null : item.label)}
                  className="w-full flex items-center justify-between py-3 text-white font-display font-semibold text-[16px]">
                  {item.label}
                  <IconChevronDown size={18} strokeWidth={2}
                    className={`text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="pl-4 pb-3 space-y-1 border-l border-teal/30 ml-2">
                    {allItems.map(sub => (
                      <Link key={sub.href} href={sub.href} onClick={onClose}
                        className="block py-2 text-white/65 hover:text-white text-[14px] transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          return (
            <Link key={item.label} href={item.href!} onClick={onClose}
              className="block py-3 text-white font-display font-semibold text-[16px] hover:text-teal transition-colors">
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile]     = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobile])

  return (
    <>
      <header className={`sticky top-0 z-40 h-[72px] flex items-center transition-all duration-250
        ${scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-nav-scrolled border-b border-border-default'
          : 'bg-white border-b border-border-default'
        }`}>
        <div className="site-container flex items-center justify-between w-full">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="ManagedFirst Technologies">
            <Image
              src="/logo.png"
              alt="ManagedFirst Technologies"
              width={200}
              height={55}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navigation.map(item => (
              <DropdownItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-charcoal hover:text-blue transition-colors"
            onClick={() => setMobile(true)} aria-label="Open navigation">
            <IconMenu size={22} />
          </button>
        </div>
      </header>

      {mobile && <MobileNav onClose={() => setMobile(false)} />}
    </>
  )
}

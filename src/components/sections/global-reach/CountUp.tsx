'use client'

// src/components/sections/global-reach/CountUp.tsx
// Counts from 0 to target over 7000ms (easeOutQuad) when scrolled into view.
// If value is non-numeric (e.g. "XX"), renders plain text.

import { useRef, useEffect, useState } from 'react'

type Props = {
  value: string
  suffix: string
  delay?: number  // ms stagger
}

function easeOutQuad(t: number) { return t * (2 - t) }

export function CountUp({ value, suffix, delay = 0 }: Props) {
  const isNumeric = /^[\d.]+$/.test(value)
  const target    = isNumeric ? parseFloat(value) : 0
  const isDecimal = value.includes('.')
  const decPlaces = isDecimal ? value.split('.')[1].length : 0

  const [display, setDisplay] = useState<string>(value)  // SSR shows final value
  const rafRef = useRef<number>(0)
  const wrapRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isNumeric) return

    // Reset to 0 immediately on client
    setDisplay(isDecimal ? (0).toFixed(decPlaces) : '0')

    const el = wrapRef.current
    if (!el) return

    let started = false
    const DURATION = 7000

    const start = () => {
      if (started) return
      started = true
      const t0 = performance.now() + delay
      const tick = (now: number) => {
        const elapsed = Math.max(0, now - t0)
        const progress = Math.min(elapsed / DURATION, 1)
        const eased    = easeOutQuad(progress)
        const current  = eased * target
        setDisplay(isDecimal ? current.toFixed(decPlaces) : String(Math.floor(current)))
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
        else setDisplay(value)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { start(); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [value, isNumeric, target, isDecimal, decPlaces, delay])

  return (
    <span ref={wrapRef}>
      {display}{suffix}
    </span>
  )
}

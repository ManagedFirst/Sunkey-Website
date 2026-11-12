import { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { IconArrowRight } from '@/components/icons'

export interface HeroProps {
  eyebrow?: string
  heading: string
  subheading?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'dark' | 'light' | 'split'
  visual?: ReactNode
  compact?: boolean
}

export function Hero({
  eyebrow, heading, subheading,
  primaryCta, secondaryCta,
  variant = 'light', visual, compact = false,
}: HeroProps) {

  const py = compact ? 'py-14 md:py-18' : 'py-16 md:py-22'

  // ── DARK variant ─────────────────────────────────────────────────────────
  if (variant === 'dark') {
    const hasVisual = !!visual
    return (
      <section className={`relative bg-navy overflow-hidden ${py}`}>
        {/* Blurred gradient shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 animate-blob"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, #2563EB 55%, transparent 80%)', filter: 'blur(90px)' }} />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #06B6D4 0%, #2563EB 55%, transparent 80%)', filter: 'blur(70px)', animation: 'blob 7s ease-in-out 3.5s infinite' }} />
        </div>

        <div className="site-container relative z-10">
          <div className={`grid gap-10 items-center ${hasVisual ? 'lg:grid-cols-2' : 'max-w-4xl'}`}>
            {/* Text */}
            <div>
              {eyebrow && (
                <span className="inline-flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span className="font-semibold text-teal uppercase tracking-widest" style={{ fontSize: '11px' }}>
                    {eyebrow}
                  </span>
                </span>
              )}
              <h1 className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(26px, 3.5vw, 50px)', lineHeight: 1.1 }}>
                {heading}
              </h1>
              {subheading && (
                <p className="text-white/65 leading-relaxed mb-8"
                  style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', maxWidth: hasVisual ? '480px' : '620px' }}>
                  {subheading}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <Button variant="primary-dark" href={primaryCta.href} icon={<IconArrowRight size={15} />}>
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button variant="ghost" href={secondaryCta.href}>{secondaryCta.label}</Button>
                )}
              </div>
            </div>

            {/* Visual — stacked below text on mobile/tablet, side-by-side on lg+ */}
            {hasVisual && (
              <div className="flex items-center justify-center relative mt-8 lg:mt-0">
                {visual}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // ── SPLIT variant ─────────────────────────────────────────────────────────
  if (variant === 'split') {
    return (
      <section className={`relative bg-offwhite overflow-hidden ${py}`}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/3 to-transparent pointer-events-none" />
        <div className="site-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {eyebrow && (
                <p className="font-semibold text-accent uppercase tracking-widest mb-4" style={{ fontSize: '11px' }}>
                  {eyebrow}
                </p>
              )}
              <h1 className="font-display font-extrabold text-navy leading-tight mb-5"
                style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.12 }}>
                {heading}
              </h1>
              {subheading && (
                <p className="text-charcoal/70 leading-relaxed mb-7"
                  style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}>
                  {subheading}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <Button variant="primary-light" href={primaryCta.href} icon={<IconArrowRight size={15} />}>
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button variant="secondary" href={secondaryCta.href}>{secondaryCta.label}</Button>
                )}
              </div>
            </div>
            {visual && <div className="mt-8 lg:mt-0">{visual}</div>}
          </div>
        </div>
      </section>
    )
  }

  // ── LIGHT variant — internal product + company pages ──────────────────────
  return (
    <section className={`relative bg-white border-b border-border-default overflow-hidden ${py}`}>
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(37,99,235,0.04) 0%, transparent 70%)' }}
        aria-hidden="true" />
      <div className="site-container relative">
        <div className={`grid gap-10 items-start ${visual ? 'lg:grid-cols-2' : ''}`}>
          <div>
            {eyebrow && (
              <p className="font-semibold text-accent uppercase tracking-widest mb-4" style={{ fontSize: '11px' }}>
                {eyebrow}
              </p>
            )}
            <h1 className="font-display font-extrabold text-navy leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(24px, 3vw, 42px)', lineHeight: 1.12, maxWidth: visual ? 'none' : '800px' }}>
              {heading}
            </h1>
            {subheading && (
              <p className="text-charcoal/65 leading-relaxed mb-7"
                style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', maxWidth: visual ? 'none' : '620px', lineHeight: 1.65 }}>
                {subheading}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <Button variant="primary-light" href={primaryCta.href} icon={<IconArrowRight size={15} />}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button variant="secondary" href={secondaryCta.href}>{secondaryCta.label}</Button>
              )}
            </div>
          </div>
          {visual && <div className="flex items-start justify-center pt-2 mt-8 lg:mt-0">{visual}</div>}
        </div>
      </div>
    </section>
  )
}

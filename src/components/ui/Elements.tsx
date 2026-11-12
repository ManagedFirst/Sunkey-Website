import Link from 'next/link'
import { ReactNode } from 'react'

// ── Badge ────────────────────────────────────────────────────────────────────
export interface BadgeProps {
  children: ReactNode
  variant?: 'teal' | 'navy' | 'blue' | 'muted' | 'amber' | 'accent'
  className?: string
}

const badgeVariants: Record<string, string> = {
  teal:   'bg-teal-light text-teal',
  navy:   'bg-navy-light text-navy',
  blue:   'bg-blue-light text-blue',
  muted:  'bg-offwhite text-muted',
  amber:  'bg-amber/15 text-amber',
  accent: 'bg-accent-light text-accent',
}

export function Badge({ children, variant = 'teal', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-pill text-[12px] font-semibold tracking-wide ${badgeVariants[variant]} ${className}`}>
      {children}
    </span>
  )
}

// ── Breadcrumb ───────────────────────────────────────────────────────────────
export interface BreadcrumbItem { name: string; href: string }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap"
      style={{ fontSize: '13px', color: '#94A3B8' }}>
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-muted/40" aria-hidden="true">/</span>}
          {i === items.length - 1 ? (
            <span style={{ color: '#1E293B' }} aria-current="page">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-blue transition-colors duration-200">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}

// ── SectionHeader ────────────────────────────────────────────────────────────
export interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  headingSize?: 'display' | 'h1' | 'h2' | 'h3'
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow, heading, subheading,
  align = 'left', headingSize = 'h2',
  light = false, className = '',
}: SectionHeaderProps) {
  const alignCls   = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const textColor  = light ? 'text-white'        : 'text-navy'
  const subColor   = light ? 'text-white/65'     : 'text-charcoal/70'
  const eyeColor   = light ? 'text-teal'         : 'text-accent'

  const sizeStyles: Record<string, string> = {
    display: 'clamp(36px, 4vw, 60px)',
    h1:      'clamp(28px, 3.5vw, 48px)',
    h2:      'clamp(22px, 2.5vw, 36px)',
    h3:      'clamp(18px, 2vw, 28px)',
  }

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <span className={`font-semibold tracking-widest mb-4 ${eyeColor}`}
          style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-bold ${textColor} leading-tight tracking-tight`}
        style={{ fontSize: sizeStyles[headingSize] }}>
        {heading}
      </h2>
      {subheading && (
        <p className={`${subColor} mt-5 leading-relaxed`}
          style={{ fontSize: 'clamp(16px, 1.2vw, 19px)', maxWidth: '640px' }}>
          {subheading}
        </p>
      )}
    </div>
  )
}

// ── SkeletonCard ─────────────────────────────────────────────────────────────
export function SkeletonCard({ variant = 'blog' }: { variant?: 'blog' | 'case-study' | 'product' }) {
  return (
    <div className="rounded-card border border-border-default overflow-hidden shadow-card">
      {variant === 'blog' && <div className="skeleton aspect-video w-full" />}
      <div className="p-8 space-y-3">
        <div className="skeleton h-5 w-20 rounded-pill" />
        <div className="skeleton h-6 w-full rounded-brand" />
        <div className="skeleton h-6 w-4/5 rounded-brand" />
        <div className="skeleton h-4 w-full rounded-brand mt-2" />
        <div className="skeleton h-4 w-3/4 rounded-brand" />
      </div>
    </div>
  )
}

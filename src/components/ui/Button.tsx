import Link from 'next/link'
import { ReactNode } from 'react'

export interface ButtonProps {
  variant?: 'primary-light' | 'primary-dark' | 'secondary' | 'ghost' | 'ghost-dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  children: ReactNode
  className?: string
  icon?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const base = [
  'inline-flex items-center justify-center gap-2',
  'font-display font-semibold tracking-[-0.01em]',
  'rounded-btn',                          // 14px per guidelines
  'transition-all duration-250 ease-smooth',
  'active:scale-[0.98]',
  'select-none whitespace-nowrap',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
].join(' ')

const variants: Record<string, string> = {
  'primary-light': [
    'bg-blue text-white',
    'shadow-btn',
    'hover:bg-blue/90 hover:shadow-btn-hover hover:-translate-y-0.5',
  ].join(' '),

  'primary-dark': [
    'bg-amber text-navy font-bold',
    'shadow-[0_1px_4px_rgba(245,166,35,0.25)]',
    'hover:bg-amber/90 hover:shadow-[0_4px_16px_rgba(245,166,35,0.35)] hover:-translate-y-0.5',
  ].join(' '),

  'secondary': [
    'bg-transparent border-[1.5px] border-blue/30 text-blue',
    'hover:bg-blue/5 hover:border-blue hover:-translate-y-0.5',
  ].join(' '),

  'ghost': [
    'bg-white/10 border border-white/20 text-white',
    'hover:bg-white/18 hover:border-white/40 hover:-translate-y-0.5',
  ].join(' '),

  'ghost-dark': [
    'bg-transparent border-[1.5px] border-charcoal/15 text-charcoal',
    'hover:bg-charcoal/5 hover:border-charcoal/30 hover:-translate-y-0.5',
  ].join(' '),
}

const sizes: Record<string, string> = {
  sm:  'text-[13px] px-4 py-2.5',
  md:  'text-cta px-6 py-3.5',
  lg:  'text-[16px] px-8 py-4',
}

export function Button({
  variant = 'primary-light',
  size = 'md',
  href,
  onClick,
  disabled,
  children,
  className = '',
  icon,
  type = 'button',
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href && !disabled) {
    return (
      <Link href={href} className={cls}>
        {children}
        {icon && <span className="ml-0.5 group-hover:translate-x-0.5 transition-transform">{icon}</span>}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
      {icon && <span className="ml-0.5">{icon}</span>}
    </button>
  )
}

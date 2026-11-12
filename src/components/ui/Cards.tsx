import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Badge } from '@/components/ui/Elements'
import { IconArrowRight } from '@/components/icons'

// ── Category label map ────────────────────────────────────────────────────────
const categoryLabels: Record<string, string> = {
  'manageengine-implementation': 'ManageEngine Implementation',
  'it-operations-itsm':          'IT Operations and ITSM',
  'it-operations-and-itsm':      'IT Operations and ITSM',
  'security-siem':               'Security and SIEM',
  'compliance':                  'Compliance',
  'industry-use-cases':          'Industry Use Cases',
}

// ── ProductCard ───────────────────────────────────────────────────────────────
export interface ProductCardProps {
  name: string
  category: string
  tagline: string
  href: string
  icon?: ReactNode
}

export function ProductCard({ name, category, tagline, href, icon }: ProductCardProps) {
  return (
    <Link href={href}
      className="group flex flex-col bg-white rounded-card border border-border-default shadow-card p-8
                 hover:-translate-y-[6px] hover:shadow-card-hover hover:border-blue/30
                 transition-all duration-250 ease-smooth">
      {icon && (
        <div className="text-blue mb-5 w-9 h-9 group-hover:scale-110 transition-transform duration-250">
          {icon}
        </div>
      )}
      <Badge variant="teal" className="mb-4 self-start">{category}</Badge>
      <h3 className="font-display font-semibold text-navy mb-2 group-hover:text-blue transition-colors"
        style={{ fontSize: '1.0625rem' }}>
        {name}
      </h3>
      <p className="text-charcoal/65 leading-relaxed mb-5 flex-1" style={{ fontSize: '0.9375rem' }}>
        {tagline}
      </p>
      <span className="inline-flex items-center gap-1.5 text-blue font-semibold text-[14px]
                       group-hover:gap-2.5 transition-all duration-200">
        Learn more <IconArrowRight size={13} />
      </span>
    </Link>
  )
}

// ── BlogCard ──────────────────────────────────────────────────────────────────
export interface BlogCardProps {
  title: string
  excerpt: string
  categories: string[]
  publishedAt: string
  readTimeMinutes: number
  href: string
  featuredImage?: string
}

export function BlogCard({ title, excerpt, categories, publishedAt, readTimeMinutes, href, featuredImage }: BlogCardProps) {
  const category = categories[0]
  const label    = categoryLabels[category] ?? category

  return (
    <Link href={href}
      className="group flex flex-col bg-white rounded-card border border-border-default shadow-card overflow-hidden
                 hover:-translate-y-[6px] hover:shadow-card-hover hover:border-blue/20
                 transition-all duration-250 ease-smooth">
      <div className="aspect-video bg-offwhite relative overflow-hidden">
        {featuredImage ? (
          <Image src={featuredImage} alt={title} fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #EDE9FE 50%, #ECFEFF 100%)' }} />
        )}
      </div>
      <div className="p-8 flex flex-col flex-1">
        {category && <Badge variant="blue" className="mb-4 self-start">{label}</Badge>}
        <h3 className="font-display font-semibold text-navy mb-3 group-hover:text-blue transition-colors line-clamp-2"
          style={{ fontSize: '1.0625rem', lineHeight: 1.4 }}>
          {title}
        </h3>
        <p className="text-charcoal/65 leading-relaxed mb-5 flex-1 line-clamp-3"
          style={{ fontSize: '0.9375rem' }}>
          {excerpt}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-border-default"
          style={{ fontSize: '13px', color: '#94A3B8' }}>
          <time>{new Date(publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
          <span>·</span>
          <span>{readTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  )
}

// ── CaseStudyCard ─────────────────────────────────────────────────────────────
const industryLabels: Record<string, string> = {
  bfsi:             'Banking and Financial Services',
  manufacturing:    'Manufacturing',
  healthcare:       'Healthcare',
  'it-ites':        'IT and ITES',
  'government-psu': 'Government and PSU',
  education:        'Education',
  other:            'Other',
}

export interface CaseStudyCardProps {
  title: string
  clientDescription: string
  industry: string
  productsUsed: string[]
  href: string
  featuredImage?: string
}

export function CaseStudyCard({ title, clientDescription, industry, productsUsed, href, featuredImage }: CaseStudyCardProps) {
  const shown = productsUsed.slice(0, 2)
  const extra = productsUsed.length - 2

  return (
    <Link href={href}
      className="group flex flex-col bg-white rounded-card border border-teal/25 shadow-card overflow-hidden
                 hover:-translate-y-[6px] hover:shadow-card-hover hover:border-teal/50
                 transition-all duration-250 ease-smooth">
      {featuredImage && (
        <div className="aspect-video bg-teal-light relative overflow-hidden">
          <Image src={featuredImage} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="navy">{industryLabels[industry] ?? industry}</Badge>
          {shown.map(p => <Badge key={p} variant="teal">{p.replace(/-/g, ' ')}</Badge>)}
          {extra > 0 && <Badge variant="muted">+{extra} more</Badge>}
        </div>
        <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '8px' }}>{clientDescription}</p>
        <h3 className="font-display font-semibold text-navy mb-5 flex-1 group-hover:text-blue transition-colors line-clamp-2"
          style={{ fontSize: '1.0625rem', lineHeight: 1.4 }}>
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-teal font-semibold text-[14px]
                         group-hover:gap-2.5 transition-all duration-200">
          Read case study <IconArrowRight size={13} />
        </span>
      </div>
    </Link>
  )
}

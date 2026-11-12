import { ReactNode } from 'react'
import { AnimateIn } from '@/components/AnimateIn'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/Elements'
import { IconArrowRight, IconCheck } from '@/components/icons'

// ── CTABand ──────────────────────────────────────────────────────────────────
export interface CTABandProps {
  heading: string
  body?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTABand({ heading, body, primaryCta, secondaryCta }: CTABandProps) {
  return (
    <section className="relative bg-navy overflow-hidden" style={{ padding: '7rem 0' }}>
      {/* Gradient blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-15"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, #2563EB 50%, transparent 75%)', filter: 'blur(80px)' }} />
      </div>
      <div className="site-container relative text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
        <AnimateIn>
          <h2 className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(20px, 2.4vw, 34px)' }}>
            {heading}
          </h2>
        </AnimateIn>
        {body && (
          <AnimateIn delay={100}>
            <p className="text-white/65 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(16px, 1.2vw, 19px)' }}>
              {body}
            </p>
          </AnimateIn>
        )}
        <AnimateIn delay={200} className="flex flex-wrap justify-center gap-3">
          <Button variant="primary-dark" href={primaryCta.href} icon={<IconArrowRight size={16} />}>
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button variant="ghost" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </AnimateIn>
      </div>
    </section>
  )
}

// ── CapabilityCard ────────────────────────────────────────────────────────────
export interface CapabilityCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <div className="group bg-white rounded-card border border-border-default shadow-card p-8
                    hover:-translate-y-[6px] hover:shadow-card-hover hover:border-blue/30
                    transition-all duration-250 ease-smooth">
      {icon && (
        <div className="text-blue mb-5 w-8 h-8 group-hover:scale-110 transition-transform duration-250">
          {icon}
        </div>
      )}
      <h3 className="font-display font-semibold text-navy mb-3"
        style={{ fontSize: '1.0625rem' }}>
        {title}
      </h3>
      <p className="text-charcoal/70 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
        {description}
      </p>
    </div>
  )
}

// ── CapabilitiesGrid ──────────────────────────────────────────────────────────
export interface CapabilitiesGridProps {
  eyebrow?: string
  heading?: string
  subheading?: string
  items: CapabilityCardProps[]
}

export function CapabilitiesGrid({ eyebrow, heading, subheading, items }: CapabilitiesGridProps) {
  return (
    <section className="bg-offwhite section-py">
      <div className="site-container">
        {heading && (
          <AnimateIn className="mb-12">
            <SectionHeader eyebrow={eyebrow} heading={heading} subheading={subheading} />
          </AnimateIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 70}>
              <CapabilityCard {...item} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── UseCaseCard ───────────────────────────────────────────────────────────────
export interface UseCaseCardProps {
  title: string
  description: string
  number?: number
}

export function UseCaseCard({ title, description, number }: UseCaseCardProps) {
  return (
    <div className="relative bg-white rounded-card border border-border-default shadow-card p-8 overflow-hidden
                    hover:-translate-y-[6px] hover:shadow-card-hover hover:border-teal/40
                    transition-all duration-250 ease-smooth">
      {number !== undefined && (
        <span className="absolute top-4 right-6 font-display font-black text-teal/10 select-none"
          style={{ fontSize: '72px', lineHeight: 1 }} aria-hidden="true">
          {number}
        </span>
      )}
      <div className="w-1 h-10 bg-teal rounded-full mb-5" />
      <h3 className="font-display font-semibold text-navy mb-3"
        style={{ fontSize: '1.0625rem' }}>
        {title}
      </h3>
      <p className="text-charcoal/70 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
        {description}
      </p>
    </div>
  )
}

// ── UseCasesGrid ──────────────────────────────────────────────────────────────
export interface UseCasesGridProps {
  eyebrow?: string
  heading?: string
  items: UseCaseCardProps[]
}

export function UseCasesGrid({ eyebrow, heading, items }: UseCasesGridProps) {
  return (
    <section className="bg-white section-py">
      <div className="site-container">
        {heading && (
          <AnimateIn className="mb-12">
            <SectionHeader eyebrow={eyebrow} heading={heading} />
          </AnimateIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <UseCaseCard {...item} number={i + 1} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── ImplementationStep ────────────────────────────────────────────────────────
export interface ImplementationStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export function ImplementationStep({ number, title, description, isLast }: ImplementationStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-11 h-11 rounded-full bg-blue text-white flex items-center justify-center
                        font-display font-bold text-[15px] shadow-btn flex-shrink-0">
          {number}
        </div>
        {!isLast && <div className="w-px flex-1 bg-blue/15 mt-3 min-h-[32px]" aria-hidden="true" />}
      </div>
      <div className="pb-8">
        <h3 className="font-display font-semibold text-navy mb-2"
          style={{ fontSize: '1.0625rem' }}>
          {title}
        </h3>
        <p className="text-charcoal/70 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

// ── ImplementationSteps ───────────────────────────────────────────────────────
export interface ImplementationStepsProps {
  eyebrow?: string
  heading?: string
  steps: Array<{ title: string; description: string }>
}

export function ImplementationSteps({ eyebrow, heading, steps }: ImplementationStepsProps) {
  return (
    <section className="bg-offwhite section-py">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {heading && (
            <AnimateIn direction="left" className="lg:sticky lg:top-28">
              <SectionHeader eyebrow={eyebrow} heading={heading} headingSize="h3" />
            </AnimateIn>
          )}
          <div>
            {steps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 90} direction="right">
                <ImplementationStep
                  number={i + 1}
                  title={step.title}
                  description={step.description}
                  isLast={i === steps.length - 1}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── NumberedChallenge ─────────────────────────────────────────────────────────
export interface NumberedChallengeProps {
  number: number
  title: string
  description: string
}

export function NumberedChallenge({ number, title, description }: NumberedChallengeProps) {
  return (
    <div className="relative bg-offwhite rounded-card p-8 border border-transparent
                    hover:border-blue/20 hover:shadow-card transition-all duration-250 ease-smooth overflow-hidden">
      <span className="absolute top-2 right-5 font-display font-black text-navy/[0.06] select-none"
        style={{ fontSize: '88px', lineHeight: 1 }} aria-hidden="true">
        {number}
      </span>
      <div className="w-8 h-8 bg-accent-light rounded-brand flex items-center justify-center mb-4">
        <span className="text-accent font-display font-bold text-[13px]">{number}</span>
      </div>
      <h3 className="font-display font-semibold text-navy mb-3"
        style={{ fontSize: '1.0625rem' }}>
        {title}
      </h3>
      <p className="text-charcoal/70 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
        {description}
      </p>
    </div>
  )
}

// ── SolutionsMappingTable ─────────────────────────────────────────────────────
export interface MappingRow { challenge: string; product: string; configuration: string }

export function SolutionsMappingTable({ heading, rows }: { heading?: string; rows: MappingRow[] }) {
  return (
    <div>
      {heading && (
        <h3 className="font-display font-bold text-navy mb-6" style={{ fontSize: '1.5rem' }}>
          {heading}
        </h3>
      )}
      <div className="hidden md:block overflow-hidden rounded-card border border-border-default shadow-card">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-navy">
              <th className="px-6 py-4 text-white font-semibold text-[12px] uppercase tracking-widest w-1/3">Challenge</th>
              <th className="px-6 py-4 text-white font-semibold text-[12px] uppercase tracking-widest w-1/4">ManageEngine product</th>
              <th className="px-6 py-4 text-white font-semibold text-[12px] uppercase tracking-widest">What we configure</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                <td className="px-6 py-4 text-[14px] font-semibold text-charcoal align-top">{row.challenge}</td>
                <td className="px-6 py-4 text-[14px] text-blue font-semibold align-top">{row.product}</td>
                <td className="px-6 py-4 text-[14px] text-charcoal/75 align-top leading-relaxed">{row.configuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="rounded-card border border-border-default p-5 shadow-card">
            <p className="text-[14px] font-bold text-charcoal mb-1">{row.challenge}</p>
            <p className="text-[14px] text-blue font-semibold mb-2">{row.product}</p>
            <p className="text-[13px] text-charcoal/70 leading-relaxed">{row.configuration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── ComplianceItem ────────────────────────────────────────────────────────────
export function ComplianceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-navy-light border-l-4 border-blue rounded-r-card p-6">
      <div className="flex items-start gap-3">
        <IconCheck size={18} className="text-blue flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-display font-semibold text-navy mb-2" style={{ fontSize: '1.0625rem' }}>{title}</h4>
          <p className="text-charcoal/75 leading-relaxed" style={{ fontSize: '0.9375rem' }}>{description}</p>
        </div>
      </div>
    </div>
  )
}

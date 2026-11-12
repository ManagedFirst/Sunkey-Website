import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { Breadcrumb, SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { locationRecords, type LocationRecord } from '@/data/pseo-locations'
import { industryRecords, type IndustryRecord } from '@/data/pseo-industries'
import { ITSMIllustration } from '@/components/illustrations/ITSMIllustration'
import { UEMSIllustration } from '@/components/illustrations/UEMSIllustration'
import { SIEMIllustration } from '@/components/illustrations/SIEMIllustration'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'
import { ITOMIllustration } from '@/components/illustrations/ITOMIllustration'

// ── Types ────────────────────────────────────────────────────────────────────

type AnyRecord = LocationRecord | IndustryRecord

function isLocation(r: AnyRecord): r is LocationRecord {
  return 'citySlug' in r
}

function findRecord(productSlug: string, variantSlug: string): AnyRecord | null {
  const loc = locationRecords.find(
    r => r.productSlug === productSlug && r.citySlug === variantSlug
  )
  if (loc) return loc

  const ind = industryRecords.find(
    r => r.productSlug === productSlug && r.industrySlug === variantSlug
  )
  return ind ?? null
}

// ── Illustration map ─────────────────────────────────────────────────────────

function getIllustration(productSlug: string) {
  if (productSlug === 'servicedesk-plus') return <ITSMIllustration className="w-full max-w-[420px]" />
  if (productSlug === 'endpoint-central') return <UEMSIllustration className="w-full max-w-[420px]" />
  if (productSlug === 'log360')           return <SIEMIllustration className="w-full max-w-[420px]" />
  if (productSlug === 'ad360')            return <IAMIllustration  className="w-full max-w-[420px]" />
  if (productSlug === 'pam360')           return <IAMIllustration  className="w-full max-w-[420px]" />
  if (productSlug === 'opmanager-plus')   return <ITOMIllustration className="w-full max-w-[420px]" />
  return <ITSMIllustration className="w-full max-w-[420px]" />
}

// ── Next.js 15: params is a Promise ─────────────────────────────────────────

interface PageProps {
  params: Promise<{ productSlug: string; variantSlug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productSlug, variantSlug } = await params
  const record = findRecord(productSlug, variantSlug)
  if (!record) return {}
  return buildMetadata({
    title: record.metaTitle,
    description: record.metaDescription,
    canonicalPath: `/solutions/${productSlug}/${variantSlug}`,
  })
}

export async function generateStaticParams() {
  const fromLocations = locationRecords.map(r => ({
    productSlug: r.productSlug,
    variantSlug: r.citySlug,
  }))
  const fromIndustries = industryRecords.map(r => ({
    productSlug: r.productSlug,
    variantSlug: r.industrySlug,
  }))
  return [...fromLocations, ...fromIndustries]
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function PseoPage({ params }: PageProps) {
  const { productSlug, variantSlug } = await params
  const record = findRecord(productSlug, variantSlug)
  if (!record) notFound()

  const loc = isLocation(record)
  const variantLabel = loc
    ? (record as LocationRecord).cityName
    : (record as IndustryRecord).industryName
  const productName = record.productName

  const breadcrumbs = [
    { name: 'Home',        href: '/' },
    { name: 'Solutions',   href: `/solutions/${productSlug}` },
    { name: productName,   href: `/solutions/${productSlug}` },
    { name: variantLabel,  href: `/solutions/${productSlug}/${variantSlug}` },
  ]

  const ctaLabel = loc
    ? `Book a free ${productName} consultation in ${variantLabel}`
    : `Book a free ${productName} consultation for ${variantLabel}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Hero
        variant="light"
        compact
        eyebrow={`${productName} · ${variantLabel}`}
        heading={record.h1}
        subheading={record.introParagraph}
        primaryCta={{ label: ctaLabel, href: '/free-consultation' }}
        secondaryCta={{ label: 'All services', href: '/services' }}
        visual={getIllustration(productSlug)}
      />

      {/* ── Location context ─────────────────────────────────────────── */}
      {loc && (record as LocationRecord).localContext && (
        <section className="bg-offwhite section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <p className="text-body text-charcoal leading-relaxed">
                {(record as LocationRecord).localContext}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Industry use case ────────────────────────────────────────── */}
      {!loc && (record as IndustryRecord).primaryUseCase && (
        <section className="bg-offwhite section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <SectionHeader
                eyebrow="Primary use case"
                heading={`${productName} for ${variantLabel} organisations.`}
              />
            </AnimateIn>
            <AnimateIn delay={100} className="mt-6">
              <p className="text-body text-charcoal leading-relaxed">
                {(record as IndustryRecord).primaryUseCase}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Compliance note (industry only) ──────────────────────────── */}
      {!loc && (record as IndustryRecord).complianceNote && (
        <section className="bg-navy-light section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <p className="text-overline uppercase tracking-widest text-teal mb-3">
                Compliance context
              </p>
              <p className="text-body text-charcoal leading-relaxed">
                {(record as IndustryRecord).complianceNote}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTABand
        heading={ctaLabel + '.'}
        primaryCta={{ label: ctaLabel, href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }}
      />
    </>
  )
}

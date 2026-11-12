import { ReactNode } from 'react'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import {
  CapabilitiesGrid,
  UseCasesGrid,
  ImplementationSteps,
} from '@/components/sections/Sections'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionHeader, Breadcrumb, Badge } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import type { ProductPageData } from '@/data/productPageData'

interface ProductPageLayoutProps {
  data: ProductPageData
  breadcrumbs: { name: string; href: string }[]
  visual?: ReactNode
}

export function ProductPageLayout({ data, breadcrumbs, visual }: ProductPageLayoutProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-offwhite border-b border-border-default py-3">
        <div className="site-container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <Hero
        variant="light"
        eyebrow={data.eyebrow}
        heading={data.h1}
        subheading={data.subheading}
        primaryCta={data.primaryCta}
        secondaryCta={data.secondaryCta}
        visual={visual}
      />

      {/* Problem Section */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <div className="max-w-3xl">
            <AnimateIn>
              <h2 className="font-display text-h2 font-bold text-navy leading-tight mb-6">
                {data.problemHeading}
              </h2>
            </AnimateIn>
            {data.problemBody.map((para, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <p className="text-body text-charcoal/80 leading-relaxed mb-4">{para}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <CapabilitiesGrid
        eyebrow="Capabilities"
        heading="What we configure — and what each capability delivers."
        items={data.capabilities.map(c => ({ title: c.title, description: c.body }))}
      />

      {/* Use Cases */}
      <UseCasesGrid
        eyebrow="Use Cases"
        heading="When this product is the right fit."
        items={data.useCases.map(u => ({ title: u.title, description: u.body }))}
      />

      {/* Implementation Steps */}
      <ImplementationSteps
        eyebrow="Implementation Approach"
        heading={`How ManagedFirst implements ${data.name}.`}
        steps={data.steps.map(s => ({
          title: s.title,
          description: `${s.action} Output: ${s.output}`,
        }))}
      />

      {/* What Success Looks Like */}
      <section className="bg-navy section-py">
        <div className="site-container">
          <AnimateIn className="mb-10">
            <SectionHeader
              eyebrow="What Success Looks Like"
              heading={`What a complete ${data.name} implementation delivers.`}
              light
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.successPoints.map((point, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex items-start gap-3 bg-white/[.06] border border-white/10 rounded-brand p-4">
                  <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-body-sm text-white/85 leading-relaxed">{point}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        heading={data.ctaHeading}
        body={data.ctaBody}
        primaryCta={{ label: data.ctaLabel, href: '/free-consultation' }}
        secondaryCta={{ label: `See all ${data.name.split(' ')[0]} products`, href: data.relatedHref }}
      />
    </>
  )
}

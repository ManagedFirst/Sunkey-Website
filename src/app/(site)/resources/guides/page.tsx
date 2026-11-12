import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Badge, SectionHeader } from '@/components/ui/Elements'
import { CTABand } from '@/components/sections/Sections'
import { LeadMagnetForm } from '@/components/forms/Forms'
import { IconDownload, IconCheck, IconClock } from '@/components/icons'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Guides and Downloads | ManagedFirst Technologies',
  description: 'Free practical guides for Indian enterprise IT teams implementing ManageEngine. DPDPA Readiness Checklist, MIMM Quick Assessment Guide, and more.',
  canonicalPath: '/resources/guides',
})

export default function ResourcesGuidesPage() {
  return (
    <>
      <section className="bg-white border-b border-border-default py-12">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Resources</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4">Guides and Downloads.</h1>
            <p className="text-body-lg text-charcoal/80 max-w-2xl">Practical tools for IT teams implementing ManageEngine. Free, specific, and written from what we see in the field.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-12">
            <div className="bg-white border-2 border-teal rounded-brand p-space-6">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center">
                      <IconDownload size={20} className="text-teal" />
                    </div>
                    <Badge variant="teal" className="text-xs">Free Download</Badge>
                  </div>
                  <h2 className="font-display text-h2 font-bold text-navy mb-3">DPDPA Readiness Checklist for IT Teams</h2>
                  <p className="text-body text-charcoal leading-relaxed mb-4">The five technical DPDPA obligations mapped to ManageEngine tools and configurations. A self-assessment tool you can use before engaging for a formal assessment.</p>
                  <ul className="space-y-2">
                    {[
                      'Five DPDPA obligations explained for IT teams',
                      'ManageEngine product mapped to each obligation',
                      'Configuration checklist for each tool',
                      'Self-assessment scoring to identify your gaps',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-body-sm text-charcoal">
                        <IconCheck size={14} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <LeadMagnetForm resourceName="DPDPA Readiness Checklist" resourceType="checklist" />
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn>
            <div id="mimm-quick-assessment" className="bg-white border border-border-default rounded-brand p-space-6 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-offwhite rounded-lg flex items-center justify-center">
                  <IconClock size={20} className="text-charcoal/50" />
                </div>
                <span className="text-caption text-muted font-medium uppercase tracking-wide">Coming soon</span>
              </div>
              <h3 className="font-display text-h3 font-bold text-navy mb-2">ManageEngine Implementation Maturity Model (MIMM) Quick Assessment Guide</h3>
              <p className="text-body text-charcoal leading-relaxed">A self-assessment checklist for evaluating where your ManageEngine deployment sits on the five-level Implementation Maturity Model — and what Level 3, 4, and 5 look like for each solution category.</p>
              <p className="text-body-sm text-muted mt-4">Available with the next content release. Register for the DPDPA checklist above to be notified.</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABand
        heading="Need a custom assessment rather than a checklist?"
        body="A free consultation gives you specific recommendations for your environment rather than a generic checklist. We review what you have, identify the gaps, and tell you what a complete implementation would require."
        primaryCta={{ label: 'Book a Free Assessment', href: '/free-consultation' }}
        secondaryCta={{ label: 'Read our blog', href: '/blog' }}
      />
    </>
  )
}

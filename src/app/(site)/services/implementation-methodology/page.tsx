import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, ImplementationSteps } from '@/components/sections/Sections'
import { SectionHeader, Breadcrumb } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { ServicesIllustration } from '@/components/illustrations/ServicesIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Methodology | ManagedFirst Technologies',
  description: "ManagedFirst's documented ManageEngine implementation methodology — seven stages from assessment to handover. Applied to every engagement. Including the MIMM maturity model for deployment evaluation.",
  canonicalPath: '/services/implementation-methodology',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Implementation Methodology', href: '/services/implementation-methodology' }]

const scenarios = [{"label": "Evaluating ManagedFirst as an implementation partner", "body": "Before engaging a partner, understanding how they implement — their stages, their outputs, and their handover standards — is a reasonable due diligence step. This page documents exactly what every ManagedFirst engagement involves."}, {"label": "Planning an internal implementation governance review", "body": "IT managers planning a significant ManageEngine deployment often need to document the implementation approach for internal governance. Our methodology documentation provides a framework they can reference and adapt."}, {"label": "Assessing an existing deployment's maturity", "body": "The ManageEngine Implementation Maturity Model (MIMM) — linked from this page — provides a structured way to assess where a current deployment sits against the full scope of what ManageEngine can deliver. Useful for organisations who want to understand their gap before engaging for remediation."}]
const delivers = ["Seven-stage implementation framework — from kick-off to handover", "Stage-by-stage output definition — what is produced at each stage", "Governance and change management standards applied across engagements", "Handover requirements — what your team receives and what it qualifies them to do", "The MIMM maturity model for evaluating deployment completeness across five levels", "Integration and compliance configuration standards"]
const steps = [{"title": "Kick-Off and Scope Confirmation", "description": "Full implementation scope confirmed. Project timeline agreed. Key contacts identified. Constraints documented. Both teams know exactly what is being built and by when."}, {"title": "Environment Preparation", "description": "Infrastructure requirements confirmed. Deployment environment prepared. Prerequisites validated before product installation begins."}, {"title": "Product Installation and Base Configuration", "description": "ManageEngine installed and base configuration applied for your environment — not generic defaults. Configuration decisions documented as made."}, {"title": "Workflow and Process Configuration", "description": "Workflows, templates, categories, rules, and automation built for your processes. This is the core of the implementation — the stage where most value is created and most deployments fall short."}, {"title": "Integration", "description": "ManageEngine connected to your existing systems. Every integration tested end-to-end. Integration documentation included in the configuration runbook."}, {"title": "Testing and Validation", "description": "Implementation tested against your actual use cases. Issues resolved before go-live. Go-live criteria confirmed before testing begins."}, {"title": "Go-Live, Training, and Handover", "description": "Go-live supported. Two-week hypercare period. Administrator training delivered against your specific configuration. Configuration runbook handed over. Independence confirmed."}]
const prevents = ["Implementations where quality depends on individual effort rather than documented process", "Scope creep that goes undocumented and unmanaged", "Handovers that leave your team unable to manage the platform independently", "Deployments that cover installation without covering configuration, integration, or governance"]

export default function ServicesImplementationMethodologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Implementation Methodology', description: "ManagedFirst's documented ManageEngine implementation methodology — seven stages from assessment to handover. Applied to every engagement. Including the MIMM maturity model for deployment evaluation.", url: '/services/implementation-methodology' })) }} />

      <Hero variant="light" eyebrow='Services | Implementation Methodology' heading='How we implement ManageEngine: documented, repeatable, the same on every project.' subheading='The quality of an implementation should not depend on which consultant you get or how tight the deadline is. Our methodology sets the same standards for every project: the stages, what gets delivered, how it is governed, and what the handover includes.'
        primaryCta={{ label: 'Book a Methodology Review Call', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='The methodology page is relevant in three situations.' /></AnimateIn>
          <div className="space-y-4">
            {scenarios.map((s, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="bg-white border-l-[3px] border-teal rounded-r-brand p-space-5">
                  <p className="text-overline uppercase tracking-wider text-teal mb-2">{s.label}</p>
                  <p className="text-body text-charcoal leading-relaxed">{s.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='What the methodology documentation covers.' /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {delivers.map((d, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex gap-3 p-4 bg-offwhite rounded-brand">
                  <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-body-sm text-charcoal leading-relaxed">{d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ImplementationSteps eyebrow="Our Process" heading='The seven implementation stages applied to every engagement.' steps={steps} />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><SectionHeader eyebrow="What this service prevents" heading='What the methodology is designed to prevent.' /></AnimateIn>
          <div className="mt-6 space-y-3">
            {prevents.map((p, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex gap-3 p-4 bg-navy-light rounded-brand">
                  <span className="text-navy font-bold flex-shrink-0">·</span>
                  <p className="text-body-sm text-charcoal leading-relaxed">{p}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading='Review the methodology before you engage. It is what every ManagedFirst implementation is built on.'
        primaryCta={{ label: 'Book a Methodology Review Call', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

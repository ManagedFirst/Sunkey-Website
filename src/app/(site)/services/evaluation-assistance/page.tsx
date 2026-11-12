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
  title: 'ManageEngine Evaluation Assistance | ManagedFirst Technologies',
  description: 'ManagedFirst provides hands-on ManageEngine evaluation support. Trial configuration, POC setup, guided testing against your use cases, and comparison assistance before you purchase.',
  canonicalPath: '/services/evaluation-assistance',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Evaluation Assistance', href: '/services/evaluation-assistance' }]

const scenarios = [{"label": "Your ManageEngine trial is not producing useful results", "body": "Most trials run on default configuration produce generic results. The product is running — it is just not configured for your environment, your ticket categories, your network topology, or your log sources. We configure the trial for your environment so you evaluate the product, not the defaults."}, {"label": "You need to justify a purchase decision internally", "body": "A trial that produces documented evidence — screenshots, reports, performance metrics against your use cases — is a purchase justification document. A trial that produces an impression of the product is not. We structure the evaluation to produce the documentation your procurement and leadership need."}, {"label": "You are comparing ManageEngine to another product", "body": "Comparing products on default configurations is not a fair comparison. We configure ManageEngine properly for your environment so the comparison reflects what the product actually delivers — not what it delivers out of the box."}, {"label": "You have specific technical questions the vendor could not answer", "body": "Integration with a specific system. Performance at your scale. Behaviour with your Active Directory structure. We configure and test the specific scenarios that are critical to your purchase decision."}]
const delivers = ["Environment-specific trial configuration — your ticket categories, your network, your log sources", "Structured evaluation sessions against your specific use cases — not a walkthrough", "Documented evaluation results — performance evidence, screenshots, configuration output", "Objective product assessment — where it works, where it does not, and what the gaps mean for your requirements"]
const steps = [{"title": "Evaluation Scoping Call", "description": "We discuss which product you are evaluating, what your team needs to see, and what success looks like. We agree the evaluation scope and timeline."}, {"title": "Trial Environment Setup", "description": "We set up the trial environment — either in your infrastructure or as a cloud trial — and configure the base product."}, {"title": "Environment-Specific Configuration", "description": "We configure the trial for your environment: your ticket categories, SLA tiers, network topology, log sources, or AD structure — depending on which product is being evaluated."}, {"title": "Guided Evaluation Sessions", "description": "We run structured evaluation sessions with your team against the specific use cases identified in the scoping call. We document results as we go."}, {"title": "Evaluation Report and Decision Support", "description": "We produce a written evaluation summary covering what worked, what did not, and our assessment of whether the product fits your requirements. This becomes your purchase decision documentation."}]
const prevents = ["Purchasing ManageEngine based on a vendor demonstration that does not reflect your environment", "Abandoning a trial because default settings produced no useful results — and concluding the product is not capable", "Arriving at a purchase decision without documentation to justify it internally", "Starting implementation before confirming the product can deliver what your organisation needs it to deliver"]

export default function ServicesEvaluationAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Evaluation Assistance', description: 'ManagedFirst provides hands-on ManageEngine evaluation support. Trial configuration, POC setup, guided testing against your use cases, and comparison assistance before you purchase.', url: '/services/evaluation-assistance' })) }} />

      <Hero variant="light" eyebrow='Services | Evaluation Assistance' heading='Try ManageEngine in your own environment, with your own data, before you sign anything.' subheading='We set up ManageEngine trials in your own environment, so you can test them against your real use cases instead of a standard demo.'
        primaryCta={{ label: 'Book an Evaluation Call', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='Evaluation Assistance fits four situations.' /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='What the evaluation assistance engagement delivers.' /></AnimateIn>
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

      <ImplementationSteps eyebrow="Our Process" heading='Five stages from evaluation planning to purchase decision support.' steps={steps} />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><SectionHeader eyebrow="What this service prevents" heading='What this service prevents.' /></AnimateIn>
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

      <CTABand heading='Evaluate ManageEngine properly before you purchase.'
        primaryCta={{ label: 'Book an Evaluation Call', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

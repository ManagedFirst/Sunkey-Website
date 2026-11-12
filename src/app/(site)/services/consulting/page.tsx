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
  title: 'ManageEngine Consulting Services | ManagedFirst Technologies',
  description: 'ManagedFirst provides ManageEngine consulting for Indian enterprises. Environment review, product recommendations, implementation roadmap, and effort estimates — before any deployment begins.',
  canonicalPath: '/services/consulting',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Consulting', href: '/services/consulting' }]

const scenarios = [{"label": "Evaluating ManageEngine for the first time", "body": "You have seen ManageEngine in a vendor demonstration. The product looks capable. You are not sure which products fit your use case, which edition to buy, or what a proper implementation involves. A consulting engagement answers those questions with specifics — your environment, your team size, your compliance requirements — rather than a vendor's sales narrative."}, {"label": "ManageEngine is installed but not working correctly", "body": "Common in organisations where ManageEngine was deployed by someone who has since left, or where an initial deployment covered only the basics. A consulting assessment reviews what you have, identifies the configuration gaps, and produces a remediation roadmap with prioritised recommendations and honest effort estimates."}, {"label": "Planning a significant expansion", "body": "Adding new ManageEngine products to an existing deployment. Moving from on-premise to cloud. Extending to new sites or a substantially larger user base. A consulting engagement scopes the change, identifies integration requirements and dependencies, and provides a project plan before implementation begins."}, {"label": "Mapping a compliance requirement to ManageEngine", "body": "DPDPA, ISO 27001, RBI IT framework, or a sector-specific obligation. A consulting engagement maps your compliance requirements to ManageEngine's product capabilities, identifies the configuration needed to produce the required controls and audit evidence, and produces a recommendation your compliance and IT teams can both use."}]
const delivers = ["Current-state environment review — AD structure, network topology, existing tooling, compliance posture", "Specific product recommendation with rationale — which products, which editions, which to defer, and why", "Phased implementation roadmap — sequence, dependencies, timeline, and what your team contributes at each stage", "Effort and cost estimate — indicative cost range per phase for budget planning and procurement"]
const steps = [{"title": "Discovery Call", "description": "A 60-minute call with your IT head or relevant stakeholder. We cover your current environment, pain points, compliance requirements, and timeline. We confirm whether a full consulting assessment is the right engagement."}, {"title": "Environment Review", "description": "Review of your AD structure, network topology documentation, existing ITSM setup, endpoint inventory, or compliance documentation — depending on scope. We work with what you have documented."}, {"title": "Assessment and Recommendations", "description": "We produce the written assessment: current state summary, gap analysis, product recommendations with rationale, and implementation roadmap. Typically 5 to 10 business days depending on scope."}, {"title": "Review and Q&A", "description": "We present the assessment to your team, walk through the recommendations, and answer questions. If priorities emerge that affect the recommendations, we revise before finalising."}]
const prevents = ["Purchasing ManageEngine based on a vendor demonstration that does not reflect your environment", "Discovering that the product scope does not match your requirements after licences are purchased", "Starting implementation without a documented scope that both teams have agreed", "Missing the compliance configuration required by your regulatory obligations because it was not scoped"]

export default function ServicesConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Consulting', description: 'ManagedFirst provides ManageEngine consulting for Indian enterprises. Environment review, product recommendations, implementation roadmap, and effort estimates — before any deployment begins.', url: '/services/consulting' })) }} />

      <Hero variant="light" eyebrow='Services | Consulting' heading='Know what to buy, what to configure and what to expect before you commit.' subheading='We review your current IT setup, pick the ManageEngine products that fit, and give you a written roadmap your team and leadership can plan from.'
        primaryCta={{ label: 'Book a Consulting Call', href: '/free-consultation' }}
        secondaryCta={{ label: 'See All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='Consulting is the right starting point in four situations.' /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='Every consulting engagement produces four written deliverables.' /></AnimateIn>
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

      <ImplementationSteps eyebrow="Our Process" heading='Four steps. Typically 10 to 15 business days from first call to final recommendations.' steps={steps} />

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

      <CTABand heading='Get written recommendations before any deployment decision.'
        primaryCta={{ label: 'Book a Consulting Call', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

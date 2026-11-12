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
  title: 'ManageEngine Implementation Services — Architecture, Configuration, Integration | ManagedFirst',
  description: 'ManagedFirst delivers full ManageEngine implementation — architecture, configuration, workflow build, system integration, and documented handover. Your environment, not generic defaults. Authorized partner.',
  canonicalPath: '/services/implementation',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Implementation and Customisation', href: '/services/implementation' }]

const scenarios = [{"label": "New ManageEngine deployment", "body": "Licences are purchased or in process. The architecture decisions, configuration, and integration work need to be done correctly. A properly structured implementation prevents the configuration debt that accumulates when deployment is treated as installation."}, {"label": "Existing deployment that needs remediation", "body": "ManageEngine is installed but not configured correctly for your organisation. Workflows are missing or wrong, integrations were never built, or the initial deployment was incomplete. An implementation engagement resets the configuration to the full scope."}, {"label": "Expansion to new products or sites", "body": "Adding ManageEngine products to an existing deployment. Extending to new office locations or a larger user base. Each expansion has its own architecture, integration, and configuration requirements."}]
const delivers = ["Architecture design specific to your environment and processes", "Server or cloud infrastructure setup and product installation", "Workflow, template, and rule configuration mapped to your actual operations", "Integration with HRMS, monitoring tools, ticketing systems, and other connected systems", "Go-live testing against your real use cases", "Configuration runbook documenting every setting applied — your team's reference for ongoing management"]
const steps = [{"title": "Kick-Off and Scope Confirmation", "description": "We confirm the full implementation scope, agree the project timeline, and identify key contacts on your side for each phase. Constraints — maintenance windows, change freeze periods, infrastructure limitations — are documented."}, {"title": "Environment Preparation", "description": "We confirm server or cloud infrastructure requirements and work with your team to prepare the deployment environment. Server sizing, OS configuration, network access, and service account setup handled before product installation begins."}, {"title": "Product Installation and Base Configuration", "description": "We install ManageEngine and apply base configuration for your environment — not generic defaults. Configuration decisions are documented as they are made."}, {"title": "Workflow and Process Configuration", "description": "We build the workflows, templates, categories, rules, and automation that make the product fit your processes. This is the core of the implementation — where most value is created and most deployments stop short."}, {"title": "Integration", "description": "We connect ManageEngine to your existing systems: Active Directory, HRMS, monitoring tools, ticketing systems, or others in scope. Integration points are tested end-to-end."}, {"title": "Testing and Validation", "description": "We test the implementation against your actual use cases — not generic test scenarios. Issues identified are resolved before go-live. Go-live criteria are agreed before testing begins."}, {"title": "Go-Live, Training, and Handover", "description": "We support go-live and provide hypercare for the first two weeks. Administrator training delivered against your specific configuration. Configuration runbook handed over."}]
const prevents = ["Default configurations applied because customisation was treated as optional", "Integrations not built because they were deferred and never revisited", "Go-live without your team understanding how to manage and extend the platform", "Configuration debt that accumulates and makes future changes harder to implement"]

export default function ServicesImplementationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Implementation and Customisation', description: 'ManagedFirst delivers full ManageEngine implementation — architecture, configuration, workflow build, system integration, and documented handover. Your environment, not generic defaults. Authorized partner.', url: '/services/implementation' })) }} />

      <Hero variant="light" eyebrow='Services | Implementation' heading='ManageEngine set up to fit your environment, not the other way round.' subheading='Installing ManageEngine takes a few hours. Setting it up properly for your organisation takes weeks, and that is where many projects succeed or fail. We cover architecture, configuration, workflows, integrations, testing and a written handover.'
        primaryCta={{ label: 'Get an Implementation Proposal', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='Implementation is the right engagement in three situations.' /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='What every ManagedFirst implementation delivers.' /></AnimateIn>
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

      <ImplementationSteps eyebrow="Our Process" heading='Seven stages. Every ManagedFirst implementation follows this structure.' steps={steps} />

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

      <CTABand heading='Get a scoped implementation proposal for your environment.'
        primaryCta={{ label: 'Get a Scoped Implementation Proposal', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

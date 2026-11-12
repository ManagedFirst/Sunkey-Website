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
  title: 'ManageEngine Managed Services | ManagedFirst Technologies',
  description: 'ManagedFirst provides ongoing ManageEngine managed services. Configuration upkeep, version management, operational monitoring, and reporting — without allocating internal IT capacity.',
  canonicalPath: '/services/managed-services',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Managed Services', href: '/services/managed-services' }]

const scenarios = [{"label": "Small IT team managing a complex ManageEngine deployment", "body": "ManageEngine is deployed and working, but your IT team does not have dedicated capacity for ongoing configuration management, version upgrades, and monitoring. Managed services handles these without requiring a dedicated ManageEngine resource on your team."}, {"label": "ManageEngine environment growing faster than team capacity", "body": "The deployment is expanding — new products, new sites, growing user base. The configuration management workload is growing faster than your IT team's capacity to handle it alongside day-to-day operations."}, {"label": "After an implementation, to maintain deployment quality", "body": "A properly implemented ManageEngine environment requires ongoing upkeep to maintain its quality as your IT environment changes. Managed services preserves the quality of the implementation over time."}, {"label": "No internal ManageEngine expertise after team changes", "body": "The team member who managed ManageEngine has left. There is no internal expertise to manage the platform. Managed services fills the gap while your team rebuilds capability or as a permanent model."}]
const delivers = ["Proactive configuration upkeep as your IT environment changes", "Scheduled version upgrades managed and executed on your timeline", "Monitoring of your ManageEngine environment health and performance", "Responsive support for configuration changes and production issues", "Licence renewal management — expiry tracked and renewed before it lapses", "Regular operational reports for IT leadership"]
const steps = [{"title": "Environment Assessment", "description": "We assess your current ManageEngine deployment, document the configuration, identify any immediate issues, and establish the baseline for ongoing management."}, {"title": "Engagement Setup", "description": "We agree the managed services scope, SLA, reporting schedule, and communication model. Support access and escalation paths are configured."}, {"title": "Transition to Managed Operations", "description": "We take ongoing responsibility for the environment. Regular operational reviews, proactive monitoring, and scheduled maintenance run on the agreed schedule."}, {"title": "Quarterly Reviews", "description": "Quarterly reviews with your IT head covering environment health, upcoming changes, optimisation opportunities, and any expansion in scope."}]
const prevents = ["Deployment drift as the IT environment changes around a static ManageEngine configuration", "Version upgrades missed because nobody has time to plan and execute them", "Licences lapsing because renewal tracking is manual and inconsistently maintained", "Accumulated configuration debt from changes made without documentation"]

export default function ServicesManagedServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Managed Services', description: 'ManagedFirst provides ongoing ManageEngine managed services. Configuration upkeep, version management, operational monitoring, and reporting — without allocating internal IT capacity.', url: '/services/managed-services' })) }} />

      <Hero variant="light" eyebrow='Services | Managed Services' heading='We run your ManageEngine environment so your IT team does not have to.' subheading='We take care of configuration changes, version upgrades, monitoring and reporting for your ManageEngine setup, all under a written SLA.'
        primaryCta={{ label: 'Talk About Managed Services', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='Managed services fits four operational contexts.' /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='What the managed services engagement covers.' /></AnimateIn>
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

      <ImplementationSteps eyebrow="Our Process" heading='Four stages from engagement setup to ongoing management.' steps={steps} />

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

      <CTABand heading='Discuss a managed services engagement for your ManageEngine environment.'
        primaryCta={{ label: 'Discuss a Managed Services Engagement', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconConsulting, IconEvaluation, IconImplementation, IconTraining, IconManagedServices, IconSupportAMC, IconMethodology, IconArrowRight, IconCheck } from '@/components/icons'
import { ServicesIllustration } from '@/components/illustrations/ServicesIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Services — Assessment, Deployment, Governance | ManagedFirst',
  description: 'ManagedFirst delivers ManageEngine services across the full engagement lifecycle — assessment, architecture, deployment, integration, training, and long-term operational governance. Authorized partner, Chennai.',
  canonicalPath: '/services',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]

const serviceCards = [
  { title: 'Consulting', href: '/services/consulting', icon: <IconConsulting size={32} />,
    outcome: 'A written assessment of your environment, a specific product recommendation with rationale, and a phased implementation roadmap — before any deployment begins or licence is purchased.',
    delivers: ['Current-state environment review', 'Specific product recommendation with rationale', 'Phased implementation roadmap', 'Effort and cost estimate for planning'],
    removes: 'Purchasing without clarity on which product fits, or discovering scope mismatch after licences are purchased.' },
  { title: 'Evaluation Assistance', href: '/services/evaluation-assistance', icon: <IconEvaluation size={32} />,
    outcome: 'ManageEngine configured and running in your environment for a structured trial. Real performance on your data — not a vendor demonstration.',
    delivers: ['Environment-specific trial configuration', 'Guided evaluation sessions against your use cases', 'Objective comparison documentation', 'Purchase decision support with evidence'],
    removes: 'Trials abandoned because defaults produced no useful results. Purchasing based on a vendor demo that did not reflect your environment.' },
  { title: 'Implementation', href: '/services/implementation', icon: <IconImplementation size={32} />,
    outcome: 'Architecture, configuration, integration, testing, and go-live — built around your environment and processes. Delivered with a configuration runbook your team keeps.',
    delivers: ['Architecture design specific to your environment', 'Workflow and process configuration mapped to your operations', 'Integration with HRMS, ticketing, and monitoring systems', 'Configuration runbook documenting every setting applied'],
    removes: 'Default configurations that do not reflect your environment. Deployments your team cannot maintain or extend without external help.' },
  { title: 'Implementation Methodology', href: '/services/implementation-methodology', icon: <IconMethodology size={32} />,
    outcome: 'Our documented implementation methodology — the framework applied to every ManagedFirst engagement. Available as a reference for organisations evaluating whether our approach fits their requirements.',
    delivers: ['Seven-stage implementation framework', 'Stage-by-stage output documentation', 'Governance and handover standards', 'Maturity model for evaluating deployment completeness'],
    removes: 'Uncertainty about how an implementation will be run and what your team will receive at each stage.' },
  { title: 'Training and Enablement', href: '/services/training', icon: <IconTraining size={32} />,
    outcome: 'Your administrators, technicians, and end users operating the platform confidently — based on your configuration, not a generic guide.',
    delivers: ['Administrator training covering your specific deployment', 'IT technician training for day-to-day operations', 'End user training for self-service features', 'Role-specific reference documentation'],
    removes: 'Deployments that stall because nobody on your team can manage or extend them. Continued dependency on the implementation partner for routine operations.' },
  { title: 'Managed Services', href: '/services/managed-services', icon: <IconManagedServices size={32} />,
    outcome: 'Your ManageEngine environment managed, maintained, and reported on — without allocating internal IT capacity to it.',
    delivers: ['Proactive configuration upkeep and version management', 'Scheduled operational reviews and reporting', 'Monitoring of your ManageEngine environment health', 'Licence renewal management'],
    removes: 'Deployment drift as the environment changes around a static configuration. Version upgrades missed or poorly managed. Licences lapsed without notice.' },
  { title: 'Support and AMC', href: '/services/support-amc', icon: <IconSupportAMC size={32} />,
    outcome: 'Responsive technical support and licence management for deployed ManageEngine environments.',
    delivers: ['Named support contact for technical issues', 'SLA-backed response times for issue resolution', 'Licence renewal tracking and advance expiry notification', 'Version upgrade assistance'],
    removes: 'Support delays routed through generic vendor channels. Licences lapsing without notice. Upgrade complications discovered mid-cycle.' },
]

const stages = [
  { label: 'Stage 1 — Evaluating', services: 'Consulting · Evaluation Assistance', when: 'You are assessing whether ManageEngine fits your requirements, evaluating specific products before purchase, or planning a significant expansion of an existing deployment.', output: 'Written recommendations and an implementation roadmap you own.' },
  { label: 'Stage 2 — Deploying', services: 'Implementation', when: 'Products are selected. Licences are purchased or in process. The question is not what to buy — it is how to configure it correctly for your environment.', output: 'A fully configured, integrated, and documented deployment.' },
  { label: 'Stage 3 — Operating', services: 'Training and Enablement · Managed Services · Support and AMC', when: 'The deployment is live. The objective is making your team capable of running it, or handing ongoing management to ManagedFirst.', output: 'Operational confidence and continuous platform health.' },
  { label: 'Stage 4 — Optimising', services: 'Health Check · Consulting (expansion scope)', when: 'Your deployment is running but you suspect capability gaps — automation that was scoped out, integrations deferred, governance not yet configured. Or you are ready to extend to additional products.', output: 'A gap assessment with a prioritised optimisation roadmap.' },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow="Services"
        heading="Implementation is not a single event. It is a lifecycle."
        subheading="Deploying ManageEngine successfully — and keeping it delivering value — requires different types of expertise at different stages. Assessment before architecture. Architecture before configuration. Configuration before training. Training before governance. ManagedFirst provides structured services at each stage, with defined deliverables, documented processes, and clear outcomes."
        primaryCta={{ label: 'Review the Implementation Methodology', href: '/services/implementation-methodology' }}
        secondaryCta={{ label: 'Book a 30-minute call', href: '/free-consultation' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      {/* Service Cards */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="Services" heading="Seven services. Each with defined deliverables and a specific role in reducing implementation risk." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-5">
            {serviceCards.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 70}>
                <Link href={s.href} className="group flex flex-col bg-white border-l-[3px] border-teal rounded-r-brand shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-space-5 hover-lift hover:shadow-card-hover h-full">
                  <div className="text-teal mb-4 group-hover:scale-110 transition-transform duration-200">{s.icon}</div>
                  <h3 className="font-display text-h4 font-bold text-navy mb-3 group-hover:text-blue transition-colors">{s.title}</h3>
                  <p className="text-body-sm text-charcoal/80 leading-relaxed mb-4 flex-1">{s.outcome}</p>
                  <ul className="space-y-1.5 mb-4">
                    {s.delivers.map(d => (
                      <li key={d} className="flex gap-2 text-body-sm text-charcoal">
                        <IconCheck size={14} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-caption text-muted border-t border-border-default pt-3">{s.removes}</p>
                  <span className="inline-flex items-center gap-1.5 text-teal font-semibold text-body-sm mt-3 group-hover:gap-2.5 transition-all">Learn more <IconArrowRight size={14} /></span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Lifecycle */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="The Implementation Lifecycle" heading="Where you are in your ManageEngine journey determines which service you need next." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-5">
            {stages.map((stage, i) => (
              <AnimateIn key={stage.label} delay={i * 80}>
                <div className="bg-white rounded-brand p-space-5 h-full border border-border-default">
                  <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white font-bold text-body-sm mb-4">{i+1}</div>
                  <p className="text-overline uppercase tracking-wider text-teal mb-2">{stage.label}</p>
                  <p className="font-display text-h5 font-semibold text-navy mb-3">{stage.services}</p>
                  <p className="text-body-sm text-charcoal/80 leading-relaxed mb-3">{stage.when}</p>
                  <p className="text-body-sm font-semibold text-teal">{stage.output}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Not sure which service fits where you are?" body="Tell us where you are in your ManageEngine journey — evaluating for the first time, planning a deployment, trying to extract more from a deployment that is already live, or managing an environment that needs continuous support. We will tell you which engagement type applies and what it involves." primaryCta={{ label: 'Book a Free 30-Minute Call', href: '/free-consultation' }} secondaryCta={{ label: 'Write to us', href: '/contact' }} />
    </>
  )
}

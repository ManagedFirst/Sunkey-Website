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
  title: 'ManageEngine Support and AMC | ManagedFirst Technologies',
  description: 'ManagedFirst provides ManageEngine annual maintenance contracts and technical support. Licence renewals, version upgrades, and responsive support from an authorised partner. Chennai.',
  canonicalPath: '/services/support-amc',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Support and AMC', href: '/services/support-amc' }]

const scenarios = [{"label": "Post-implementation ongoing support", "body": "Your ManageEngine environment is live. You need responsive technical support for issues that arise, and a partner who manages your licence renewals so they do not lapse unexpectedly."}, {"label": "Existing ManageEngine deployment without a support partner", "body": "ManageEngine is deployed, licences are active, but support is routed through the vendor's generic channels with unpredictable response times. A named support contact at an authorised partner changes the support experience."}, {"label": "Approaching licence renewal", "body": "Your ManageEngine licences are coming up for renewal. Renewal through a partner gives you pricing that generic renewal channels do not, plus a single contact managing the renewal across all your ManageEngine products."}]
const delivers = ["Named support contact for all ManageEngine technical issues", "SLA-backed response times — specific to your agreement, not generic queue times", "Licence renewal tracking across all your ManageEngine products with advance expiry notification", "Version upgrade planning and execution assistance", "Access to ManageEngine partner-level support escalation for complex issues", "Incident documentation and resolution records"]
const steps = [{"title": "Licence and Environment Audit", "description": "We audit your current ManageEngine licence portfolio, record renewal dates, and document your deployment for support reference."}, {"title": "Support Model Setup", "description": "We establish your support contact, response time commitments, escalation paths, and communication preferences."}, {"title": "Ongoing Support and Renewal Management", "description": "We provide responsive technical support as issues arise and proactively manage your licence renewals — notifying you in advance with renewal options."}]
const prevents = ["Support tickets disappearing into vendor queues with no visibility on response time", "Licence expiry discovered when a feature stops working rather than in advance", "Version upgrades deferred because there is no internal capacity to plan and execute them", "Paying renewal list price because there is no partner managing the renewal process"]

export default function ServicesSupportAmcPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Support and AMC', description: 'ManagedFirst provides ManageEngine annual maintenance contracts and technical support. Licence renewals, version upgrades, and responsive support from an authorised partner. Chennai.', url: '/services/support-amc' })) }} />

      <Hero variant="light" eyebrow='Services | Support and AMC' heading='Responsive ManageEngine support, with renewals handled before they lapse.' subheading='Our Support and AMC (Annual Maintenance Contract) plan gives you technical help and yearly maintenance for your ManageEngine setup, with clear response times and someone who tracks your renewals.'
        primaryCta={{ label: 'Talk to Us About Support', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='Support and AMC is the right engagement in three situations.' /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='What the Support and AMC engagement covers.' /></AnimateIn>
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

      <ImplementationSteps eyebrow="Our Process" heading='Three stages from engagement setup to ongoing support.' steps={steps} />

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

      <CTABand heading='Put ManageEngine support in place before you need it.'
        primaryCta={{ label: 'Discuss Support Requirements', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

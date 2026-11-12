import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { ServicesIllustration } from '@/components/illustrations/ServicesIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Authorized Partner India | ManagedFirst Technologies',
  description: 'ManagedFirst Technologies is an authorized ManageEngine partner in India. Understand what authorized partnership means for licence procurement, technical access, and implementation quality.',
  canonicalPath: '/about/manageengine-partnership',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }, { name: 'ManageEngine Partnership', href: '/about/manageengine-partnership' }]

const benefits = [
  { title: 'Technical Access and Certification', body: 'Authorized partnership provides access to ManageEngine\'s partner-level technical resources — documentation, product roadmap previews, and certified training programmes. Our technical team is trained and certified on ManageEngine\'s current product versions, not on documentation that lags behind releases.' },
  { title: 'Licence Procurement Through a Verified Channel', body: 'Purchasing ManageEngine licences through an authorized partner is the verified procurement channel — with accurate edition guidance, renewal tracking, and the contractual relationship that generic procurement does not provide.' },
  { title: 'Partner-Level Support Escalation', body: 'When complex technical issues require ManageEngine\'s own engineering team, authorized partners have a direct escalation path. Support tickets that would spend weeks in the general queue can be escalated with context to the right team.' },
  { title: 'Implementation Accountability', body: 'Authorized partners are accountable to ManageEngine for implementation quality. Partnership is not a reseller arrangement — it is a framework that includes implementation standards, customer feedback, and ongoing technical competency requirements.' },
]

export default function AboutManageenginePartnershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow="About | ManageEngine Partnership"
        heading="Authorized ManageEngine partner — what that means in practice."
        subheading="Authorized partnership is not a marketing badge. It defines the technical resources available to ManagedFirst, the channel through which licences are procured, and the accountability structure that governs how we implement."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'About ManagedFirst', href: '/about' }}
        visual={<ServicesIllustration className="w-full max-w-[460px]" />} />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">Authorized partnership is not a reseller arrangement.</h2></AnimateIn>
          {[
            'The ManageEngine partner programme distinguishes between resellers and implementation partners. Resellers sell licences. Implementation partners are accountable for the quality of what gets deployed — not just what gets sold.',
            'ManagedFirst\'s authorized partner status means we have access to partner-level technical resources, certified training programmes, and direct escalation channels to ManageEngine\'s technical team. It means our implementations are conducted under a framework that ManageEngine can review and that clients can rely on.',
            'For clients, the practical consequence is that ManageEngine licence procurement through ManagedFirst happens through a verified channel, with accurate edition guidance and renewal tracking. Implementation is conducted by a team that is certified on ManageEngine\'s current product versions and accountable to the partner programme standards.',
          ].map((p, i) => <AnimateIn key={i} delay={i*80}><p className="text-body text-charcoal leading-relaxed mb-4">{p}</p></AnimateIn>)}
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="What Partnership Means" heading="Four practical consequences of authorized partner status." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-5">
            {benefits.map((b, i) => (
              <AnimateIn key={b.title} delay={i * 80}>
                <div className="bg-white border border-border-default rounded-brand p-space-5">
                  <div className="flex gap-3 mb-3">
                    <IconCheck size={20} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <h3 className="font-display text-h4 font-bold text-navy">{b.title}</h3>
                  </div>
                  <p className="text-body text-charcoal leading-relaxed">{b.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">Licensing through ManagedFirst.</h2></AnimateIn>
          {[
            'ManageEngine licensing involves edition choice, user count, deployment model (cloud or on-premise), and add-on modules. For organisations without prior ManageEngine experience, navigating these choices without guidance often results in the wrong edition, undersized or oversized licences, or missing add-ons that are required for the implementation scope.',
            'ManagedFirst\'s consulting engagement includes specific licence recommendations before any purchase. The recommendation covers which edition fits your requirements, which add-ons are required for your implementation scope, and the renewal timeline you should plan for.',
            'ManageEngine logos and trademarks are used with written permission. All product names remain the property of Zoho Corporation Pvt. Ltd. ManagedFirst is an authorized partner, not a subsidiary or reseller of Zoho Corporation.',
          ].map((p, i) => <AnimateIn key={i} delay={i*80}><p className="text-body text-charcoal leading-relaxed mb-4">{p}</p></AnimateIn>)}
        </div>
      </section>

      <CTABand heading="Talk to an authorized ManageEngine partner." body="Book a free consultation. We will review your requirements, recommend the right products and editions, and tell you what a proper implementation involves." primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }} secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

import { ServicesIllustration } from '@/components/illustrations/ServicesIllustration'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { Button } from '@/components/ui/Button'
import { IconMapPin, IconCheck } from '@/components/icons'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'About ManagedFirst Technologies — Enterprise ManageEngine Implementation Partner',
  description: 'ManagedFirst Technologies was founded to solve the enterprise software implementation gap. An authorized ManageEngine partner based in Chennai, built on the belief that implementation determines whether technology delivers operational value.',
  canonicalPath: '/about',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]

const founders = [
  { name: 'Jasper Prabu', title: 'Co-Founder and Executive Director', initials: 'JP' },
  { name: 'Vipul Kumar S. Jain', title: 'Co-Founder and Executive Director', initials: 'VJ' },
]

const howWeWork = [
  { title: 'We document before we configure.', body: 'Every engagement begins with a written scope document agreed by both parties. What gets configured, to what standard, and what the handover looks like — before any tool is touched. This prevents the scope mismatches that create disputes and incomplete deployments.' },
  { title: 'We configure for your environment, not against defaults.', body: 'Default ManageEngine configurations are designed to work generically. Your organisation is not generic. Every workflow, template, category, and rule we configure is mapped to how your team actually works — not to what ManageEngine ships with.' },
  { title: 'We document everything we do.', body: 'Implementation is complete when your team can operate the platform independently. Every engagement produces a configuration runbook covering every setting applied, every integration configured, and every workflow built. You are not dependent on us to explain your own environment.' },
  { title: 'We stay after go-live.', body: 'The two weeks after go-live are when most implementation problems surface. We provide structured hypercare support during this period — available for production issues, configuration adjustments, and the questions that arise when real users start using the platform.' },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow="About ManagedFirst"
        heading="We Help Businesses Get More from ManageEngine."
        subheading="ManagedFirst Technologies is an authorised ManageEngine partner based in Chennai. We implement ManageEngine to fit how your organisation actually works — with the automation, integrations, and compliance configuration that most deployments leave unfinished."
        primaryCta={{ label: 'See Our Implementation Approach', href: '/services/implementation-methodology' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }}
        visual={<ServicesIllustration className="w-full max-w-[460px]" />}
        />

      {/* Our Story */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateIn direction="left">
              <p className="text-overline uppercase tracking-widest text-teal mb-3">Our Story</p>
              <h2 className="font-display text-h2 font-bold text-navy mb-6">Why a ManageEngine-only practice.</h2>
            </AnimateIn>
            <AnimateIn direction="right" className="space-y-4">
              {[
                'ManageEngine is a capable platform. When it is implemented correctly — to its full scope, with proper configuration, integration, and governance — it transforms how IT teams operate. The problem is that most implementations do not reach that scope.',
                'IT teams purchase ManageEngine, configure the basics, and move on to the next priority. Ticketing works. Monitoring runs. The software is live. But the workflow automation, the access governance, the compliance reporting, and the integrations that make ManageEngine an operational asset remain at defaults or untouched.',
                'ManagedFirst was founded to close that gap. A practice built entirely around ManageEngine — its product suite, its implementation requirements, its configuration depth, and its regulatory context for Indian enterprises. One vendor. Fifteen products. A documented methodology. Consistent delivery.',
                'We are based in Chennai — the same city where ManageEngine is headquartered. That proximity is practical: it reflects shared understanding of the Indian enterprise IT environment, the regulatory context Indian organisations operate in, and the specific implementation challenges that arise in the Indian market.',
              ].map((p, i) => <p key={i} className="text-body text-charcoal leading-relaxed">{p}</p>)}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="How We Work" heading="Four commitments that apply to every ManagedFirst engagement." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-5">
            {howWeWork.map((c, i) => (
              <AnimateIn key={c.title} delay={i * 80}>
                <div className="bg-white border-l-[2px] border-teal p-space-5 rounded-r-brand">
                  <h3 className="font-display text-h4 font-bold text-navy mb-3">{c.title}</h3>
                  <p className="text-body text-charcoal leading-relaxed">{c.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="The Team" heading="The founding team." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6 max-w-2xl">
            {founders.map((f, i) => (
              <AnimateIn key={f.name} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-space-5 bg-offwhite rounded-brand border border-border-default">
                  {/* Photo placeholder */}
                  <div className="w-24 h-24 bg-navy-light rounded-full flex items-center justify-center text-navy font-display font-bold text-h2 mb-4">
                    {f.initials}
                  </div>
                  <h3 className="font-display text-h4 font-bold text-navy mb-1">{f.name}</h3>
                  <p className="text-body-sm text-muted mb-4">{f.title}</p>
                  <p className="text-body-sm text-charcoal/60 italic">[Bio to be added by the founding team]</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200} className="mt-6">
            <p className="text-caption text-muted">Founder photos and biography text will be added before go-live.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Location */}
      <section className="bg-offwhite section-py">
        <div className="site-container max-w-2xl">
          <AnimateIn>
            <div className="flex gap-4 p-space-6 bg-white rounded-brand border border-border-default">
              <IconMapPin size={24} className="text-teal flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-h4 font-bold text-navy mb-2">Chennai, Tamil Nadu</h3>
                <p className="text-body text-charcoal leading-relaxed mb-3">ManagedFirst Technologies Pvt. Ltd.<br />204/A, 7th Street, Malleeswari Nagar,<br />Madambakkam, Kancheepuram, Tamil Nadu 600126</p>
                <p className="text-body-sm text-charcoal/70">Based in Chennai — the same city where ManageEngine is headquartered. Serving enterprises pan-India.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABand heading="Talk to the team." body="Book a free 30-minute call. We will tell you honestly whether ManageEngine fits your requirements and what a proper implementation would involve." primaryCta={{ label: 'Book a Free Call', href: '/free-consultation' }} secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

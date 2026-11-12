import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { AnalyticsIllustration } from '@/components/illustrations/AnalyticsIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'IT Analytics | ManageEngine Analytics Plus Partner India | ManagedFirst',
  description: 'ManagedFirst implements ManageEngine Analytics Plus for Indian enterprises. Unified IT dashboards, cross-tool reporting, and AI-powered insights across your ManageEngine environment. Authorized partner.',
  canonicalPath: '/solutions/it-analytics',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions/it-analytics' }, { name: 'IT Analytics', href: '/solutions/it-analytics' }]

const successItems = ["IT leadership has a single dashboard showing cross-tool operational health — manual compilation not required.", "SLA trends, endpoint compliance, security event volume, and infrastructure health are visible in one place.", "Scheduled reports deliver relevant metrics to the right stakeholders automatically.", "Custom dashboards are built for your organisation's specific reporting requirements.", "AI-powered anomaly detection surfaces unusual patterns across connected data sources.", "Compliance reporting for DPDPA and sector frameworks draws from consolidated data rather than per-tool extraction."]

export default function ItAnalyticsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='IT Analytics'
        heading='IT performance data locked inside individual tool dashboards never reaches the leadership that needs it.'
        subheading='ServiceDesk Plus has SLA reports. OpManager has infrastructure dashboards. Endpoint Central has patch compliance data. Each sits in its own console, accessible only to the team that operates it. Analytics Plus connects data from across your ManageEngine environment into unified dashboards your IT leadership can use to make decisions.'
        primaryCta={{ label: 'Get a Free Analytics Requirements Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See products', href: '#products' }}
        visual={<AnalyticsIllustration className='w-full max-w-[520px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">IT leadership in most organisations makes decisions about IT operations without access to the data that would inform those decisions.</h2></AnimateIn>
          <AnimateIn delay={100}><p className="text-body text-charcoal leading-relaxed mb-4">SLA performance, endpoint compliance, security event trends, infrastructure health — this data exists in your ManageEngine tools. But it is distributed across separate consoles, formatted for tool operators rather than business stakeholders, and requires manual extraction when leadership needs it.</p></AnimateIn>
          <AnimateIn delay={180}><p className="text-body text-charcoal leading-relaxed mb-4">Analytics Plus connects data from across the ManageEngine suite — ServiceDesk Plus, OpManager Plus, Endpoint Central, Log360, and others — into a single analytics platform with pre-built dashboards, custom visualisation capability, and scheduled report delivery.</p></AnimateIn>
          <AnimateIn delay={260}><p className="text-body text-charcoal leading-relaxed mb-4">The result is not just consolidated data. It is IT performance made visible to the people who need to act on it — IT leadership, operations managers, and compliance teams — without requiring them to navigate six different tool consoles.</p></AnimateIn>
        </div>
      </section>

      <section id="products" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-6"><SectionHeader eyebrow="Products" heading='One product. Connected to your entire ManageEngine environment.' /></AnimateIn>
          <p className="text-body text-charcoal/70 mt-2">See individual product pages for full implementation scope and configuration detail.</p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What Success Looks Like" heading='What Analytics Plus looks like when properly implemented' /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {successItems.map((item, i) => (
              <AnimateIn key={i} delay={i * 70}>
                <div className="flex gap-3 p-4 bg-offwhite rounded-brand">
                  <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-body-sm text-charcoal leading-relaxed">{item}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading='See what a properly configured IT Analytics environment looks like in your organisation.'
        primaryCta={{ label: 'Get a Free Analytics Requirements Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { ITSMIllustration } from '@/components/illustrations/ITSMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ITSM / ESM | ManageEngine ServiceDesk Plus Partner India | ManagedFirst',
  description: 'ManagedFirst implements ManageEngine ServiceDesk Plus for Indian enterprises. Incident management, change control, asset tracking, ESM — configured for your processes. Authorized partner, Chennai.',
  canonicalPath: '/solutions/itsm-esm',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions/itsm-esm' }, { name: 'ITSM / ESM', href: '/solutions/itsm-esm' }]

const successItems = ["Every ticket is routed automatically to the right technician group based on category and priority — no manual triage.", "SLA escalations fire before a breach occurs, not after the clock has run out.", "Every production system change has a documented approval record and audit trail.", "Recurring incidents have root cause records in a known error database — they are not re-investigated each time they appear.", "Asset inventory is maintained by network discovery, not manual updates.", "IT leadership receives scheduled SLA performance and operational reports without manual extraction."]

export default function ItsmEsmHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='ITSM / ESM | IT Service and Enterprise Service Management'
        heading='A service desk that routes tickets manually, misses SLAs, and has no change management is a ticketing system — not an ITSM platform.'
        subheading='IT teams spend hours on work ServiceDesk Plus should be doing automatically — categorising tickets, routing to technicians, escalating at-risk SLAs, and recording changes. ManagedFirst implements ServiceDesk Plus to the full ITSM scope: incident, change, problem, asset, and enterprise service management — configured around your processes.'
        primaryCta={{ label: 'Get a Free ITSM Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See products', href: '#products' }}
        visual={<ITSMIllustration className='w-full max-w-[520px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">Most service desks are configured to receive tickets. Not to manage IT operations.</h2></AnimateIn>
          <AnimateIn delay={100}><p className="text-body text-charcoal leading-relaxed mb-4">IT teams configure ServiceDesk Plus to receive and close tickets. The rest of what the platform can do — change management with documented approval chains, problem management with a known-error database, SLA escalation before breach, automated asset discovery, self-service portal — remains at defaults or untouched.</p></AnimateIn>
          <AnimateIn delay={180}><p className="text-body text-charcoal leading-relaxed mb-4">The operational cost is visible: manual triage that the routing rules should handle. SLA breaches that escalation paths should have caught. Recurring incidents that problem management should have documented and eliminated. Changes to production systems made without audit trails.</p></AnimateIn>
          <AnimateIn delay={260}><p className="text-body text-charcoal leading-relaxed mb-4">ManagedFirst implements ServiceDesk Plus to its full scope — process mapping, workflow build, SLA configuration, change management, asset management, ITSM integration, and self-service portal — configured for your organisation&rsquo;s actual operations.</p></AnimateIn>
        </div>
      </section>

      <section id="products" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-6"><SectionHeader eyebrow="Products" heading='Two products for different operational contexts.' /></AnimateIn>
          <p className="text-body text-charcoal/70 mt-2">See individual product pages for full implementation scope and configuration detail.</p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What Success Looks Like" heading='What a properly configured ITSM environment looks like' /></AnimateIn>
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
        heading='See what a properly configured ITSM / ESM environment looks like in your organisation.'
        primaryCta={{ label: 'Get a Free ITSM Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

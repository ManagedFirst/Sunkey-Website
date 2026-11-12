import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { ITOMIllustration } from '@/components/illustrations/ITOMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'IT Operations Management | ManageEngine OpManager Partner India | ManagedFirst',
  description: 'ManagedFirst implements ManageEngine OpManager Plus, Site24x7, and Applications Manager. Network monitoring, server monitoring, and APM configured for your infrastructure. Authorized partner, Chennai.',
  canonicalPath: '/solutions/itom',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions/itom' }, { name: 'ITOM', href: '/solutions/itom' }]

const successItems = ["Infrastructure incidents are detected before users report them — thresholds are calibrated, not defaulted.", "Alerts arrive with context: which device, which service, what the dependency is, and who should respond.", "Network topology maps reflect the actual infrastructure. Blast radius of any failure is immediately visible.", "Application performance issues are pinpointed to the query, service, or component level — not just reported as slow.", "IT leadership has a live dashboard of infrastructure health without manual compilation.", "On-call escalation paths route alerts to the right person. Incidents do not wait for business hours."]

export default function ItomHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='ITOM | IT Operations Management'
        heading='Monitoring tools that generate more alerts than anyone reads provide coverage without visibility.'
        subheading='Network events, server performance alerts, and application response time warnings that arrive without context or priority routing are not monitoring — they are noise. ManagedFirst implements OpManager Plus, Site24x7, and Applications Manager with thresholds calibrated for your infrastructure, dashboards relevant to your operations, and escalation paths that reach the right person at the right time.'
        primaryCta={{ label: 'Get a Free ITOM Architecture Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See products', href: '#products' }}
        visual={<ITOMIllustration className='w-full max-w-[520px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">Most IT operations teams discover infrastructure problems when users report them. Monitoring exists, but it is not configured to catch problems before they surface.</h2></AnimateIn>
          <AnimateIn delay={100}><p className="text-body text-charcoal leading-relaxed mb-4">Alert thresholds set to defaults catch critical events — and hundreds of non-critical ones. The signal-to-noise ratio trains teams to treat every alert as potentially irrelevant. Genuine incidents arrive in inboxes alongside hundreds of low-priority notifications.</p></AnimateIn>
          <AnimateIn delay={180}><p className="text-body text-charcoal leading-relaxed mb-4">Network topology and dependency mapping are incomplete, so when an incident occurs, the blast radius is unclear. Dashboards show individual device metrics rather than service-level health. Reports are manually compiled from multiple sources.</p></AnimateIn>
          <AnimateIn delay={260}><p className="text-body text-charcoal leading-relaxed mb-4">ManagedFirst implements ITOM tools with infrastructure-specific configuration: thresholds calibrated against your environment&rsquo;s baseline, dependency maps reflecting your actual topology, dashboards built for how your operations team works, and escalation paths connecting alerts to the right person.</p></AnimateIn>
        </div>
      </section>

      <section id="products" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-6"><SectionHeader eyebrow="Products" heading='Three products covering different monitoring scopes.' /></AnimateIn>
          <p className="text-body text-charcoal/70 mt-2">See individual product pages for full implementation scope and configuration detail.</p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What Success Looks Like" heading='What properly configured IT operations monitoring looks like' /></AnimateIn>
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
        heading='See what a properly configured ITOM environment looks like in your organisation.'
        primaryCta={{ label: 'Get a Free ITOM Architecture Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

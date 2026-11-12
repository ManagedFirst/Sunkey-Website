import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { SIEMIllustration } from '@/components/illustrations/SIEMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'SIEM | ManageEngine Log360 Partner India | ManagedFirst',
  description: 'ManagedFirst implements ManageEngine Log360, ADAudit Plus, and Firewall Analyzer. Log management, threat detection, UEBA, and DPDPA compliance reporting. Authorized partner, Chennai.',
  canonicalPath: '/solutions/siem',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions/siem' }, { name: 'SIEM', href: '/solutions/siem' }]

const successItems = ["Log sources are mapped and all systems processing personal data are monitored — no blind spots.", "Correlation rules are tuned to your threat profile. Alerts represent real events, not defaults.", "UEBA baselines reflect your users actual behaviour. Anomalies surface against a relevant baseline.", "Alert workflows route incidents to the right team member with the right context.", "Compliance reports for DPDPA, ISO 27001, and applicable sector frameworks are generated automatically on schedule.", "False positives have been systematically eliminated. The security team reads the alert queue because it is meaningful."]

export default function SiemHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='SIEM | Security Information and Event Management'
        heading='A SIEM that surfaces every event equally is indistinguishable from no SIEM.'
        subheading='Log data collected and stored is not the same as log data analysed and acted on. ManagedFirst implements Log360 with correlation rules tuned for your threat profile, alert thresholds below noise level, UEBA baselines specific to your user behaviour, and compliance reports for your regulatory obligations — so your security team acts on signals, not noise.'
        primaryCta={{ label: 'Get a Free SIEM Architecture Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See products', href: '#products' }}
        visual={<SIEMIllustration className='w-full max-w-[520px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">Most SIEM deployments collect logs from a handful of sources and surface every event with equal priority. The result is alert fatigue, not threat detection.</h2></AnimateIn>
          <AnimateIn delay={100}><p className="text-body text-charcoal leading-relaxed mb-4">A SIEM deployment that collects logs, applies default correlation rules, and delivers alerts to an inbox is not operational security — it is evidence collection. The alerts arrive faster than anyone can review them. The signal-to-noise ratio trains security teams to ignore the queue.</p></AnimateIn>
          <AnimateIn delay={180}><p className="text-body text-charcoal leading-relaxed mb-4">Without correlation rules tuned to your environment, UEBA baselines reflecting your users&rsquo; actual behaviour, and alert workflows routing events to the right team, Log360 is storing security data rather than using it.</p></AnimateIn>
          <AnimateIn delay={260}><p className="text-body text-charcoal leading-relaxed mb-4">DPDPA requires monitoring of systems processing personal data. ISO 27001 requires centralised log management and incident detection capability. Without a tuned SIEM, neither obligation can be demonstrated. ManagedFirst implements Log360 for the regulatory context Indian enterprises operate in — not just as a logging platform.</p></AnimateIn>
        </div>
      </section>

      <section id="products" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-6"><SectionHeader eyebrow="Products" heading='Three products covering different security monitoring scopes.' /></AnimateIn>
          <p className="text-body text-charcoal/70 mt-2">See individual product pages for full implementation scope and configuration detail.</p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What Success Looks Like" heading='What a properly configured SIEM environment looks like' /></AnimateIn>
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
        heading='See what a properly configured SIEM environment looks like in your organisation.'
        primaryCta={{ label: 'Get a Free SIEM Architecture Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

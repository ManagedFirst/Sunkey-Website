import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Elements'
import {  IconAD360, IconServiceDesk, IconEndpointCentral, IconLog360, IconOpManager, IconAnalyticsPlus, IconArrowRight } from '@/components/icons'
import { AnalyticsIllustration } from '@/components/illustrations/AnalyticsIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Solutions India | ManagedFirst Technologies',
  description: "ManagedFirst implements ManageEngine's complete product portfolio across IAM, ITSM/ESM, UEMS, ITOM, SIEM, and IT Analytics for Indian enterprises. Authorized partner, Chennai.",
  canonicalPath: '/solutions',
})

const categories = [
  {
    title: 'Identity and Access Management',
    href: '/solutions/iam',
    icon: <IconAD360 size={32} />,
    description: 'Identity lifecycle management across a distributed workforce is not a tooling problem — it is a configuration and architecture problem. We implement the full ManageEngine IAM suite: provisioning, governance, privileged access, and audit trails.',
    products: ['AD360', 'ADManager Plus', 'ADSelfService Plus', 'ADAudit Plus', 'PAM360'],
    compliance: ['DPDPA', 'ISO 27001', 'RBI IT Framework'],
  },
  {
    title: 'IT Service and Enterprise Service Management',
    href: '/solutions/itsm-esm',
    icon: <IconServiceDesk size={32} />,
    description: 'A service desk that routes tickets manually, misses SLAs, and lacks change management is a ticketing system — not an ITSM platform. We configure ServiceDesk Plus to the full ITSM scope: incident, change, problem, asset, and enterprise service management.',
    products: ['ServiceDesk Plus', 'ServiceDesk Plus MSP'],
    compliance: ['ITIL v4'],
  },
  {
    title: 'Unified Endpoint Management and Security',
    href: '/solutions/uems',
    icon: <IconEndpointCentral size={32} />,
    description: 'Unpatched devices, unapproved software, open USB ports, and unmanaged mobile devices are not edge cases — they are the default state of growing IT environments. We implement Endpoint Central and MDM with policies calibrated for your device mix.',
    products: ['Endpoint Central', 'Mobile Device Manager Plus'],
    compliance: ['DPDPA', 'ISO 27001'],
  },
  {
    title: 'IT Operations Management',
    href: '/solutions/itom',
    icon: <IconOpManager size={32} />,
    description: 'Monitoring tools that generate more alerts than anyone reads provide coverage without visibility. We implement OpManager Plus, Site24x7, and Applications Manager with thresholds, dashboards, and escalation paths configured for your infrastructure.',
    products: ['OpManager Plus', 'Site24x7', 'Applications Manager'],
    compliance: [],
  },
  {
    title: 'Security Information and Event Management',
    href: '/solutions/siem',
    icon: <IconLog360 size={32} />,
    description: 'A SIEM that surfaces every event equally is indistinguishable from no SIEM. We implement Log360 with correlation rules tuned for your threat profile, alert thresholds below noise level, and compliance reports for your regulatory obligations.',
    products: ['Log360', 'ADAudit Plus', 'Firewall Analyzer'],
    compliance: ['DPDPA', 'ISO 27001', 'CERT-In'],
  },
  {
    title: 'IT Analytics',
    href: '/solutions/it-analytics',
    icon: <IconAnalyticsPlus size={32} />,
    description: 'IT performance data locked inside individual tool dashboards never reaches the leadership that needs it. We implement Analytics Plus connecting data from across your ManageEngine environment into dashboards your IT leadership can act on.',
    products: ['Analytics Plus'],
    compliance: [],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema([
        { name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions' }
      ])) }} />

      {/* Hero */}
      <section className="bg-navy section-py">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-overline uppercase tracking-widest text-teal mb-4">ManageEngine Solutions</p>
            <h1 className="font-display font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
              Six solution categories.<br />One authorised partner.
            </h1>
            <p className="text-white/70 leading-relaxed max-w-2xl"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}>
              ManagedFirst implements and supports ManageEngine&rsquo;s complete product portfolio. The deployment approach is identical across all six categories — documented, configured, integrated, and operational.
            </p>
          </div>
        </div>
      </section>

      {/* Solution categories */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="space-y-6">
            {categories.map((cat, i) => (
              <AnimateIn key={cat.title} delay={i * 60}>
                <div className="grid lg:grid-cols-12 gap-8 p-6 lg:p-8 border border-border-default rounded-brand hover:border-teal hover:shadow-md transition-all duration-200 group">

                  {/* Icon + title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <span className="text-teal flex-shrink-0 group-hover:scale-110 transition-transform duration-200 mt-0.5">
                        {cat.icon}
                      </span>
                      <div>
                        <h2 className="font-display font-bold text-navy text-[17px] leading-snug mb-3 group-hover:text-blue transition-colors">
                          {cat.title}
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.products.map(p => (
                            <Badge key={p} variant="teal" className="text-[11px]">{p}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-6">
                    <p className="text-charcoal/75 leading-relaxed text-[14px]">{cat.description}</p>
                    {cat.compliance.length > 0 && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-[11px] text-muted">Compliance:</span>
                        {cat.compliance.map(c => (
                          <span key={c} className="text-[11px] text-navy font-medium bg-navy-light px-2 py-0.5 rounded-full">{c}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <Link href={cat.href}
                      className="inline-flex items-center gap-1.5 text-teal text-[13px] font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Explore <IconArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFB] border-t border-border-default section-py">
        <div className="site-container text-center max-w-2xl mx-auto">
          <AnimateIn>
            <h2 className="font-display font-bold text-navy text-[28px] leading-tight mb-4">
              Not sure which solution category fits?
            </h2>
            <p className="text-charcoal/65 leading-relaxed mb-8 text-[15px]">
              Book a free consultation. We will review your requirements and tell you specifically which ManageEngine products apply to your situation.
            </p>
          </AnimateIn>
          <AnimateIn delay={100} className="flex justify-center gap-3">
            <Button variant="primary-light" href="/free-consultation" icon={<IconArrowRight size={15} />}>
              Book a Free Consultation
            </Button>
            <Button variant="secondary" href="/contact">Contact us</Button>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}

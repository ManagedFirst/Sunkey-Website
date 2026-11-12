import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IndustryIllustration } from '@/components/illustrations/IndustryIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine for IT and ITES Companies in India | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine for Indian IT and ITES companies. Identity management, ITSM, SIEM for SOC, endpoint management, and DPDPA compliance. Authorized partner.',
  canonicalPath: '/industries/it-ites',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries/it-ites' }, { name: 'IT and ITES', href: '/industries/it-ites' }]

const challenges = [{"title": "Identity management for a large, rotating workforce", "description": "IT and ITES organisations onboard and offboard large numbers of employees through the year. High attrition, contractor pools, and project-based staffing create identity lifecycle complexity that manual AD management cannot handle at scale."}, {"title": "ITSM for high-volume and client-facing support", "description": "IT organisations manage internal IT support alongside client-facing delivery. ServiceDesk Plus MSP supports multi-client ITSM from a single platform. ServiceDesk Plus handles internal IT at high volume with ESM for client delivery support."}, {"title": "SIEM for SOC operations and client compliance", "description": "IT services companies operate SOC functions for their own infrastructure and sometimes for clients. Log360 configured for a SOC context requires tuned correlation rules, UEBA, and compliance reporting for clients in regulated sectors."}]
const mappingRows = [{"challenge": "High-volume identity lifecycle management", "product": "ADManager Plus + AD360", "configuration": "Automated provisioning templates for all staff categories — permanent, contractor, project-based. Mass onboarding and offboarding workflows. Helpdesk delegation for AD routine tasks."}, {"challenge": "Multi-client ITSM", "product": "ServiceDesk Plus MSP", "configuration": "Multi-tenant service desk with per-client SLAs, portals, and reporting. Client data isolated at platform level. Consolidated cross-client reporting for management."}, {"challenge": "SOC SIEM operations", "product": "Log360", "configuration": "Correlation rules tuned for IT/ITES threat profile. UEBA baselines for user behaviour on internal and client-facing systems. Compliance reporting for clients in BFSI, healthcare, and regulated sectors."}, {"challenge": "Endpoint management at scale", "product": "Endpoint Central", "configuration": "Patch management for large device fleets including developer workstations. Software deployment automation. Endpoint security policies calibrated for IT environment risk."}, {"challenge": "ISO 27001 certification support", "product": "Log360 + ADAudit Plus + AD360", "configuration": "Access controls, monitoring, and audit trail configuration addressing ISO 27001 Annex A controls. Compliance reports produced automatically for certification evidence."}]
const complianceItems = [{"title": "DPDPA — Employee and Client Data as Data Processor", "description": "IT and ITES companies process personal data as data processors for their clients. DPDPA applies to data processors as well as data fiduciaries. Technical controls and audit trails must be demonstrable to clients who are data fiduciaries."}, {"title": "ISO 27001 Certification", "description": "ISO 27001 certification is a requirement for many IT services engagements, particularly with enterprise and regulated-sector clients. ManageEngine tools address multiple Annex A control domains when properly configured."}, {"title": "Client-Driven Security Audit Requirements", "description": "Enterprise and BFSI clients impose security audit requirements on IT service providers. Access management, monitoring, and change governance documentation produced by ManageEngine tools supports these audits."}]

export default function IndustriesItItesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='Industries | IT and ITES' heading='ManageEngine implementation for IT and ITES organisations — configured for high-volume service delivery and compliance requirements.' subheading='Service desk for high-volume internal IT and client-facing support teams. Identity management for large, frequently rotating workforces. SIEM and log management for SOC functions and compliance reporting for clients in regulated sectors.'
        primaryCta={{ label: 'Book an IT/ITES Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See our services', href: '/services' }}
        visual={<IndustryIllustration title='IT and ITES' className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="IT Challenges" heading="Three IT challenges specific to IT and ITES organisations." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-5">
            {challenges.map((c, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <NumberedChallenge number={i+1} title={c.title} description={c.description} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="How ManageEngine addresses IT and ITES IT requirements." /></AnimateIn>
          <AnimateIn delay={100}><SolutionsMappingTable rows={mappingRows} /></AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Compliance Context" heading="The regulatory obligations we configure ManageEngine around." /></AnimateIn>
          <div className="space-y-4">
            {complianceItems.map((c, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <ComplianceItem title={c.title} description={c.description} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading='Review ManageEngine implementation for your IT or ITES environment.'
        body="Tell us about your IT and ITES environment and your ManageEngine requirements. We will tell you which products fit and how they would be configured for your sector."
        primaryCta={{ label: 'Book an IT/ITES Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

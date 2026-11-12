import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IndustryIllustration } from '@/components/illustrations/IndustryIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine for Government and PSU in India | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine for Indian government departments and PSUs. Identity management, endpoint visibility, IT service management, and DPDPA compliance. Authorized partner.',
  canonicalPath: '/industries/government-psu',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries/government-psu' }, { name: 'Government and PSU', href: '/industries/government-psu' }]

const challenges = [{"title": "Identity management for large, complex workforce structures", "description": "Government workforces include permanent employees, contract staff, deputationists, and temporary workers — often with location-based role variations, hierarchical approval structures, and irregular onboarding and offboarding timelines."}, {"title": "Endpoint visibility across distributed locations", "description": "Government IT environments span offices across multiple districts, divisions, and locations — often with inconsistent network connectivity. Centralised endpoint visibility across distributed infrastructure requires management tooling designed for the scenario."}, {"title": "Audit and compliance evidence for government IT governance", "description": "Government IT operations are subject to audit — by CAG, by department IT committees, and by NIC guidelines. IT change management, access governance, and security monitoring records must be available for audit review."}]
const mappingRows = [{"challenge": "Complex government workforce identity management", "product": "ADManager Plus + AD360", "configuration": "Provisioning templates by cadre, role, and location. Approval workflows aligned to departmental hierarchy. Deputation and temporary appointment workflows. Deprovisioning on transfer or exit."}, {"challenge": "Distributed endpoint visibility", "product": "Endpoint Central", "configuration": "Agent deployment across distributed locations with bandwidth-conscious communication. Patch management for all endpoints regardless of connectivity. Inventory and compliance reporting by location."}, {"challenge": "Government IT helpdesk", "product": "ServiceDesk Plus", "configuration": "Multi-location service desk with appropriate SLA tiers. Change management workflows for government change governance. Asset management for government hardware and software inventory."}, {"challenge": "Security monitoring and audit evidence", "product": "Log360 + ADAudit Plus", "configuration": "Log collection from government IT systems. Access audit trails for compliance review. Compliance reports aligned to CERT-In and NIC IT framework requirements."}, {"challenge": "DPDPA for citizen data", "product": "Log360 + AD360", "configuration": "Monitoring of systems processing citizen personal data. Access controls and audit trails for DPDPA evidence. Breach detection capability for government data custodians."}]
const complianceItems = [{"title": "DPDPA — Citizen Data", "description": "Government departments are data fiduciaries for the personal data of the citizens they serve. DPDPA applies to citizen data held in government systems. Access controls, monitoring, and audit trails for these systems are required."}, {"title": "CERT-In Directions", "description": "CERT-In's cybersecurity directions require organisations — including government entities — to maintain logs of IT systems for specified retention periods and report incidents within defined timelines. Log360 addresses both requirements."}, {"title": "NIC and Government IT Framework", "description": "NIC guidelines and government IT frameworks impose specific IT governance requirements on government departments. Change management documentation, access governance records, and audit evidence support compliance."}]

export default function IndustriesGovernmentPsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='Industries | Government and PSU' heading='ManageEngine implementation for government departments and PSUs — configured for large workforce management and compliance obligations.' subheading='Identity and access management for large government workforces with complex role structures. Endpoint visibility across distributed locations. Compliance reporting and audit evidence for government IT framework requirements.'
        primaryCta={{ label: 'Book a Government Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See our services', href: '/services' }}
        visual={<IndustryIllustration title='Government and PSU' className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="IT Challenges" heading="Three IT challenges specific to Government and PSU organisations." /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="How ManageEngine addresses Government and PSU IT requirements." /></AnimateIn>
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

      <CTABand heading='Review ManageEngine implementation for your government or PSU environment.'
        body="Tell us about your Government and PSU environment and your ManageEngine requirements. We will tell you which products fit and how they would be configured for your sector."
        primaryCta={{ label: 'Book a Government Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

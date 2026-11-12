import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IndustryIllustration } from '@/components/illustrations/IndustryIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine for Healthcare Organisations in India | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine for Indian hospitals and healthcare companies. Patient data protection, access controls, endpoint compliance, and DPDPA requirements. Authorized partner.',
  canonicalPath: '/industries/healthcare',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries/healthcare' }, { name: 'Healthcare', href: '/industries/healthcare' }]

const challenges = [{"title": "Access controls for clinical and administrative systems", "description": "Clinical systems — EMR, LIS, PACS — require access limited to clinical staff with the appropriate role. Administrative system access should not overlap with clinical system access. Access reviews must be documented."}, {"title": "Endpoint compliance on clinical networks", "description": "Clinical workstations, bedside devices, and diagnostic equipment connected to hospital networks require patch compliance and security policy enforcement. Unmanaged endpoints on clinical networks create patient data exposure risk."}, {"title": "Critical application monitoring with patient care implications", "description": "Clinical application downtime has direct patient care implications. EMR unavailability during rounds, LIS downtime during diagnostics, or PACS inaccessibility during radiology are not routine IT incidents."}]
const mappingRows = [{"challenge": "Clinical and administrative access separation", "product": "AD360 + ADAudit Plus", "configuration": "Role-based access controls separating clinical and administrative system access. Access reviews scheduled and documented. Audit trails for every access change."}, {"challenge": "Clinical endpoint compliance", "product": "Endpoint Central", "configuration": "Patch management for clinical workstations. Security policies enforced on devices connected to clinical networks. Compliance reporting for endpoint security posture."}, {"challenge": "Critical application monitoring", "product": "Applications Manager + OpManager Plus", "configuration": "EMR, LIS, and PACS application performance monitored with clinical-specific alert thresholds and escalation paths. Critical system availability tracked with faster response requirements."}, {"challenge": "Patient data access monitoring", "product": "Log360", "configuration": "Log collection from systems processing patient health data. Access event monitoring with DPDPA compliance reporting. Anomalous access patterns detected against user baselines."}, {"challenge": "IT helpdesk for clinical and administrative staff", "product": "ServiceDesk Plus", "configuration": "Separate SLA tiers for clinical system incidents vs administrative IT requests. Clinical system incidents escalate faster. Knowledge base for common clinical application issues."}]
const complianceItems = [{"title": "DPDPA — Patient Health Data", "description": "Patient health data is sensitive personal data under DPDPA. Access controls, monitoring, and audit trails for systems processing health data are required. The DPDPA applies to digital patient records, diagnostic data, and appointment information."}, {"title": "NABH IT Requirements", "description": "NABH accreditation requirements include documented information management processes. Access control documentation, change management records, and incident management evidence support NABH accreditation."}, {"title": "Clinical Application Availability", "description": "Clinical application uptime is a patient safety requirement. Monitoring, incident management, and change governance for clinical IT systems support both patient safety and institutional risk management."}]

export default function IndustriesHealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='Industries | Healthcare' heading='ManageEngine implementation for healthcare organisations — configured for patient data protection and clinical IT requirements.' subheading='Access controls separating clinical and administrative system access. Endpoint compliance for devices on clinical networks. Log management and audit trails for healthcare data protection obligations. Critical application monitoring where downtime has direct patient care implications.'
        primaryCta={{ label: 'Book a Healthcare Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See our services', href: '/services' }}
        visual={<IndustryIllustration title='Healthcare' className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="IT Challenges" heading="Three IT challenges specific to Healthcare organisations." /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="How ManageEngine addresses Healthcare IT requirements." /></AnimateIn>
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

      <CTABand heading='Review ManageEngine implementation for your healthcare IT environment.'
        body="Tell us about your Healthcare environment and your ManageEngine requirements. We will tell you which products fit and how they would be configured for your sector."
        primaryCta={{ label: 'Book a Healthcare Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

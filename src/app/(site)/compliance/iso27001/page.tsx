import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { Iso27001Illustration } from '@/components/illustrations/Iso27001Illustration'

export const metadata: Metadata = buildMetadata({
  title: 'ISO 27001 Compliance with ManageEngine | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine tools to support ISO 27001 certification for Indian enterprises. Access control, log management, endpoint security, and audit evidence across Annex A controls.',
  canonicalPath: '/compliance/iso27001',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Compliance', href: '/compliance/iso27001' }, { name: 'ISO 27001', href: '/compliance/iso27001' }]

const mappingRows = [
  { challenge: 'A.9 — Access Control', product: 'AD360 + ADAudit Plus + PAM360', configuration: 'Role-based access controls tied to job function. Access reviews on schedule. Privileged access governance with session recording. Complete access audit trail.' },
  { challenge: 'A.10 — Cryptography', product: 'Endpoint Central', configuration: 'Disk encryption policy enforcement across managed endpoints. Encryption compliance tracking and reporting.' },
  { challenge: 'A.12 — Operations Security', product: 'Endpoint Central + ServiceDesk Plus', configuration: 'Patch management and change management with documented approval chains. Configuration management baseline and drift detection.' },
  { challenge: 'A.13 — Communications Security', product: 'Firewall Analyzer + OpManager Plus', configuration: 'Network security monitoring. Firewall policy analysis. Network traffic logging and anomaly detection.' },
  { challenge: 'A.16 — Information Security Incident Management', product: 'Log360 + ServiceDesk Plus', configuration: 'SIEM incident detection and response workflow. Incident documentation and resolution records. Post-incident analysis support.' },
  { challenge: 'A.18 — Compliance', product: 'Log360 + ADAudit Plus', configuration: 'Compliance reports for ISO 27001 controls. Automated delivery on audit schedule. Evidence package for certification audit.' },
]

const controlAreas = [
  { title: 'Access Control (A.9)', description: 'AD360 and ADAudit Plus deliver the access management controls and audit trail required by ISO 27001 Annex A.9 — role-based access, access reviews, privileged user management, and access event logging.' },
  { title: 'Incident Management (A.16)', description: 'Log360 and ServiceDesk Plus together address incident identification, response workflow, documentation, and post-incident review — the requirements of ISO 27001 Annex A.16.' },
  { title: 'Operations Security (A.12)', description: 'Endpoint Central patch management and ServiceDesk Plus change management address the operational security controls in ISO 27001 Annex A.12, including documented change procedures and malware protection.' },
]

export default function ComplianceIso27001Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow="Compliance | ISO 27001"
        heading="ISO 27001 Technical Controls with ManageEngine"
        subheading="ManageEngine tools address multiple ISO 27001 Annex A control domains when correctly configured. ManagedFirst implements the tools, documents the controls, and produces the audit evidence your certification team needs. Configuring the technical controls is one part of certification — policy, risk assessment and Statement of Applicability are handled by your compliance team."
        primaryCta={{ label: 'Book a Free ISO 27001 Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See all compliance pages', href: '/dpdpa-compliance' }}
        visual={<Iso27001Illustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">ISO 27001 and ManageEngine — what ManagedFirst covers.</h2></AnimateIn>
          {[
            'ISO 27001 certification requires demonstrable controls across 114 controls organised in 14 Annex A domains. IT controls — access management, monitoring, incident response, change management, and endpoint security — form a significant portion of the control set.',
            'ManageEngine tools address controls across multiple Annex A domains. The tools are capable. The gap in most organisations is configuration depth — tools installed but not configured to produce the evidence a certification audit requires.',
            'ManagedFirst implements ManageEngine tools with ISO 27001 configuration standards and produces the compliance reports, access control documentation, and audit evidence that certification teams need. We cover the IT implementation component of certification — policy documentation, risk assessment, and Statement of Applicability are handled by your compliance team and certification body.',
          ].map((p, i) => <AnimateIn key={i} delay={i*80}><p className="text-body text-charcoal leading-relaxed mb-4">{p}</p></AnimateIn>)}
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Annex A Mapping" heading="ManageEngine tools mapped to ISO 27001 Annex A control domains." /></AnimateIn>
          <AnimateIn delay={100}><SolutionsMappingTable rows={mappingRows} /></AnimateIn>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Key Control Areas" heading="Key ISO 27001 areas we support with ManageEngine." /></AnimateIn>
          <div className="space-y-4">
            {controlAreas.map((c, i) => (
              <AnimateIn key={i} delay={i*80}><ComplianceItem title={c.title} description={c.description} /></AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Get a free ISO 27001 technical controls review." body="We review your current ManageEngine deployment against the relevant Annex A control domains, identify the configuration gaps, and tell you what a compliant implementation requires." primaryCta={{ label: 'Book a Free ISO 27001 Review', href: '/free-consultation' }} secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

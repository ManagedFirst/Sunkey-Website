import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { RbiIllustration } from '@/components/illustrations/RbiIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'RBI IT Framework Compliance with ManageEngine | ManagedFirst Technologies',
  description: 'ManagedFirst helps Indian banks and NBFCs meet RBI IT framework requirements using ManageEngine. Privileged access, SIEM, audit trails, and change management. Authorized partner.',
  canonicalPath: '/compliance/rbi-it-framework',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Compliance', href: '/compliance/rbi-it-framework' }, { name: 'RBI IT Framework', href: '/compliance/rbi-it-framework' }]

const mappingRows = [
  { challenge: 'Privileged access management for critical systems', product: 'PAM360', configuration: 'Privileged credential vaulting for core banking system admin accounts. Session recording for every privileged access event. Just-in-time access with approval workflows.' },
  { challenge: 'Change management governance documentation', product: 'ServiceDesk Plus', configuration: 'Change management workflow with approval chains for IT changes to regulated systems. Every change has a documented request, approval record, and implementation evidence.' },
  { challenge: 'Security incident monitoring and detection', product: 'Log360', configuration: 'SIEM deployed with log collection from core banking and critical systems. Correlation rules for financial sector threat patterns. Incident documentation and escalation workflows.' },
  { challenge: 'Access control and audit evidence', product: 'ADAudit Plus + AD360', configuration: 'Continuous AD access audit trail. Access reviews for systems holding customer financial data. Compliance reports produced on schedule for audit review.' },
  { challenge: 'Vulnerability and patch management', product: 'Endpoint Central', configuration: 'Patch management across banking IT endpoints. Vulnerability scanning and remediation tracking. Patch compliance reporting for IT governance.' },
]

const requirements = [
  { title: 'Privileged Access Management', description: 'RBI IT framework requires privileged access management for regulated entities. PAM360 vaults privileged credentials, records every privileged session, and enforces just-in-time access for core banking system administration.' },
  { title: 'Change Management Documentation', description: 'RBI requires documented change governance for IT changes to regulated systems. ServiceDesk Plus change management provides approval workflows, implementation documentation, and audit trails for every production change.' },
  { title: 'Cybersecurity Monitoring', description: 'RBI IT framework and RBI cybersecurity framework require continuous security monitoring. Log360 provides SIEM capability with log collection from banking systems, threat detection, and incident documentation.' },
]

export default function ComplianceRbiItFrameworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow="Compliance | RBI IT Framework"
        heading="RBI IT Framework Compliance with ManageEngine"
        subheading="ManagedFirst implements ManageEngine for banks and NBFCs with configurations built around RBI IT framework requirements — privileged access governance, change management documentation, security monitoring, and audit evidence. Technical implementation is one part of RBI compliance — regulatory interpretation is a matter for your compliance function and legal counsel."
        primaryCta={{ label: 'Book a Free RBI IT Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See BFSI implementation', href: '/industries/bfsi' }}
        visual={<RbiIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">RBI IT framework and ManageEngine — the implementation scope.</h2></AnimateIn>
          {[
            'The RBI IT framework for banks and NBFCs imposes requirements across multiple IT governance domains — information security, risk management, business continuity, and IT service management. ManageEngine addresses the technical control requirements in several of these domains.',
            'ManagedFirst advises on the technical implementation only — which ManageEngine products address which framework requirements and how they should be configured to produce the required controls and evidence. Regulatory interpretation of the framework and its applicability to your specific entity is a matter for your compliance function and legal counsel.',
            'The controls most clearly addressed by ManageEngine tools are privileged access management, change management documentation, security monitoring, and access governance audit trails — all of which are explicitly addressed in the RBI IT framework.',
          ].map((p, i) => <AnimateIn key={i} delay={i*80}><p className="text-body text-charcoal leading-relaxed mb-4">{p}</p></AnimateIn>)}
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Requirement Mapping" heading="RBI IT framework requirements addressed by ManageEngine." /></AnimateIn>
          <AnimateIn delay={100}><SolutionsMappingTable rows={mappingRows} /></AnimateIn>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Key Requirements" heading="Key RBI Requirements Supported by ManageEngine." /></AnimateIn>
          <div className="space-y-4">
            {requirements.map((r, i) => (
              <AnimateIn key={i} delay={i*80}><ComplianceItem title={r.title} description={r.description} /></AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Get a free RBI IT framework technical controls review." body="We review your current ManageEngine deployment against the RBI IT framework requirements, identify the configuration gaps, and tell you what a compliant implementation requires." primaryCta={{ label: 'Book a Free RBI IT Review', href: '/free-consultation' }} secondaryCta={{ label: 'See BFSI implementation', href: '/industries/bfsi' }} />
    </>
  )
}

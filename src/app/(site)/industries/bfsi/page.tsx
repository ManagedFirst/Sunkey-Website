import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IndustryIllustration } from '@/components/illustrations/IndustryIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine for Banking and Financial Services | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine for Indian banks, NBFCs, and financial services. PAM360, Log360, AD360, ServiceDesk Plus — configured for RBI IT framework and DPDPA compliance.',
  canonicalPath: '/industries/bfsi',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries/bfsi' }, { name: 'Banking and Financial Services', href: '/industries/bfsi' }]

const challenges = [{"title": "Privileged access to core banking systems", "description": "Core banking platforms, payment systems, and treasury applications require strict privileged access control. Shared admin credentials, standing privilege, and unrecorded access sessions create both security and regulatory risk."}, {"title": "RBI IT framework change management requirements", "description": "RBI's IT framework requires documented change governance for IT changes to regulated systems. Manual change records, inconsistent approval trails, and missing audit evidence create compliance gaps."}, {"title": "DPDPA obligations for customer financial data", "description": "Customer financial data falls within DPDPA's scope of sensitive personal data. Access controls, monitoring, and audit trails for systems processing this data must be demonstrable to regulators."}]
const mappingRows = [{"challenge": "Privileged access to core banking systems", "product": "PAM360", "configuration": "Privileged credential vaulting for all banking system admin accounts. Session recording for every privileged access. Just-in-time access with approval workflows for production system access."}, {"challenge": "Change management audit trail", "product": "ServiceDesk Plus", "configuration": "Change management workflows with approval chains mapped to your IT governance structure. Every production change has a documented approval record. Audit trail available on demand."}, {"challenge": "SIEM monitoring and DPDPA compliance", "product": "Log360", "configuration": "Log collection from systems processing customer financial data. Correlation rules for financial sector threat patterns. DPDPA compliance reports generated automatically on schedule."}, {"challenge": "Active Directory access governance", "product": "ADAudit Plus + AD360", "configuration": "Continuous AD audit trail. Access reviews for systems processing financial data. Compliance reports for DPDPA and RBI access control requirements."}, {"challenge": "Endpoint security on branch and corporate devices", "product": "Endpoint Central", "configuration": "Patch management across branch and corporate device fleets. USB controls for data transfer restriction. Compliance reporting for endpoint security obligations."}]
const complianceItems = [{"title": "RBI IT Framework", "description": "RBI's IT framework for banks and NBFCs requires documented privileged access management, change management governance, and incident management. PAM360, ServiceDesk Plus, and Log360 address these requirements when configured correctly."}, {"title": "DPDPA — Customer Financial Data", "description": "Customer financial data is sensitive personal data under DPDPA. Access controls, monitoring, breach detection, and audit evidence for systems processing this data are required. Log360 and AD360 deliver the technical controls."}, {"title": "ISO 27001", "description": "Many BFSI organisations pursue ISO 27001 certification. ManageEngine's IAM, SIEM, and ITSM tools address multiple Annex A control domains when configured to the required standard."}]

export default function IndustriesBfsiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='Industries | Banking and Financial Services' heading='ManageEngine for Banks and NBFCs' subheading='Privileged access governance for core banking systems. SIEM monitoring with DPDPA compliance reporting. Change management audit trails for RBI IT framework requirements. Log360 and PAM360 configured for financial services security operations.'
        primaryCta={{ label: 'Book a BFSI Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See our services', href: '/services' }}
        visual={<IndustryIllustration title='Banking and Financial Services' className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="IT Challenges" heading="Three IT challenges specific to Banking and Financial Services organisations." /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="How ManageEngine addresses Banking and Financial Services IT requirements." /></AnimateIn>
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

      <CTABand heading='Review ManageEngine implementation for your financial services environment.'
        body="Tell us about your Banking and Financial Services environment and your ManageEngine requirements. We will tell you which products fit and how they would be configured for your sector."
        primaryCta={{ label: 'Book a BFSI Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

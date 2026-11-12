import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { SIEMIllustration } from '@/components/illustrations/SIEMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Log360 SIEM Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Log360. Unified SIEM with log management, threat detection, UEBA, and DPDPA/ISO 27001 compliance reporting. Authorized partner, Chennai.',
  canonicalPath: '/solutions/siem/log360',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "SIEM", "href": "/solutions/siem"}, {"name": "Log360", "href": "/solutions/siem/log360"}]

const capabilities = [{"title": "Centralised Log Management", "description": "Log collection from AD, endpoints, servers, network devices, cloud services, and applications. Centralised storage with configurable retention policies."}, {"title": "Threat Detection and Correlation", "description": "Correlation rules tuned for your environment. Real attack pattern detection without the noise of default rule sets."}, {"title": "User and Entity Behaviour Analytics", "description": "Behaviour baselines established for your user population. Anomalous access patterns, data volumes, and login behaviours detected against those baselines."}, {"title": "Incident Management", "description": "Security incident workflows integrated with your response process. Incident documentation and escalation managed within the platform."}, {"title": "Cloud and Hybrid Monitoring", "description": "Log collection from AWS, Azure, GCP, Microsoft 365, and Google Workspace alongside on-premise sources."}, {"title": "DPDPA and ISO 27001 Compliance Reporting", "description": "Pre-built compliance report templates for DPDPA, ISO 27001, PCI DSS, and HIPAA. Automated delivery on schedule."}]
const steps = [{"title": "Log Source Scoping", "description": "We identify all log sources — AD, endpoints, servers, network devices, cloud services — and define retention requirements for each."}, {"title": "Log360 Deployment and Collection Setup", "description": "We install Log360 and configure collection from your defined log sources. Collection accuracy validated before proceeding."}, {"title": "Correlation Rule Configuration", "description": "We configure and tune correlation rules for your threat profile — eliminating false positives and calibrating alert thresholds."}, {"title": "UEBA Baseline Establishment", "description": "We configure UEBA and run a two-week baselining period before enabling anomaly detection. Baselines reflect real user behaviour."}, {"title": "Compliance Report Configuration", "description": "We configure compliance report templates and automated delivery schedules for your regulatory obligations."}]
const useCases = [{"title": "DPDPA monitoring compliance", "description": "All systems processing personal data monitored and logged. Access events recorded. Compliance reports generated automatically for DPDPA evidence."}, {"title": "Insider threat detection", "description": "UEBA detects users accessing unusual data volumes, logging in at unusual times, or transferring data outside normal patterns."}, {"title": "SOC operations", "description": "Security operations team working from a tuned alert queue. False positives eliminated. Genuine threats surfaced with context."}, {"title": "Cloud security monitoring", "description": "Microsoft 365, AWS, and Azure events consolidated with on-premise logs. Single SIEM view across hybrid environment."}]

export default function SolutionsSiemLog360Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='SIEM | Log360'
        heading='Centralise your security logs. Get alerts your security team will actually act on.'
        subheading="Log360 is ManageEngine's unified SIEM platform. ManagedFirst implements log management, threat detection, UEBA, and compliance reporting — with correlation rules tuned to your threat profile, not defaults."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<SIEMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Log360." steps={steps} />
      <CTABand heading='Implement Log360 with correlation rules and UEBA calibrated for your environment and your compliance obligations.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

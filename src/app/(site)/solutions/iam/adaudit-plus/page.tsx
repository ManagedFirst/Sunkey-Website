import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine ADAudit Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine ADAudit Plus. Real-time Active Directory auditing, Windows file server auditing, and DPDPA/ISO 27001 compliance reporting. Authorized partner, Chennai.',
  canonicalPath: '/solutions/iam/adaudit-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "IAM", "href": "/solutions/iam"}, {"name": "ADAudit Plus", "href": "/solutions/iam/adaudit-plus"}]

const capabilities = [{"title": "AD Change Auditing", "description": "Every user account change, group modification, GPO change, and OU modification recorded with who, what, when, and where."}, {"title": "Windows File Server Auditing", "description": "File access, creation, modification, deletion, and permission changes audited on Windows file servers. Sensitive data access tracked."}, {"title": "Privileged User Monitoring", "description": "Domain admin and privileged account activity monitored with real-time alerts for high-risk actions."}, {"title": "User Behaviour Analytics", "description": "Baseline established for normal user activity. Anomalous behaviour — unusual login times, access patterns, file volumes — detected and alerted."}, {"title": "Real-Time Alerting", "description": "Immediate alerts for high-risk events: privileged account changes, mass file access, failed login spikes, and policy modifications."}, {"title": "Compliance Reporting", "description": "Pre-built compliance report templates for DPDPA, ISO 27001, SOX, HIPAA, and GDPR. Automated scheduling for regular audit evidence delivery."}]
const steps = [{"title": "Audit Scope Definition", "description": "We identify the systems, OUs, file servers, and user groups that require auditing and define the alert thresholds relevant to your environment."}, {"title": "ADAudit Plus Deployment", "description": "We install and configure ADAudit Plus for your AD environment, file servers, and cloud directory connections."}, {"title": "Alert Configuration", "description": "We configure real-time alerts for the high-risk events relevant to your organisation — tuned to your environment, not defaults."}, {"title": "UEBA Baseline Setup", "description": "We establish user behaviour baselines and configure anomaly detection thresholds against your actual user activity patterns."}, {"title": "Compliance Report Configuration", "description": "We configure compliance report templates for your regulatory obligations and set up automated delivery schedules."}]
const useCases = [{"title": "DPDPA access trail evidence", "description": "Every access to systems handling personal data recorded. Audit evidence produced automatically. Regulators receive complete access histories."}, {"title": "Insider threat detection", "description": "Unusual data access patterns, privileged account anomalies, and off-hours activity detected against behavioural baselines."}, {"title": "File server access auditing", "description": "Who accessed which files, when, and what they did — audit trail for sensitive data stores on Windows file servers."}, {"title": "AD change accountability", "description": "Every AD modification attributed to a named user. Unauthorised changes identified. Rollback documentation available."}]

export default function SolutionsIamAdauditPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='IAM / SIEM | ADAudit Plus'
        heading='A complete audit trail of everything that happens in your Active Directory.'
        subheading='ADAudit Plus records every change in your AD, Windows file servers, and cloud environments — who changed what, when, from which machine — with pre-built compliance reports for DPDPA, ISO 27001, SOX, and HIPAA.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<IAMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements ADAudit Plus." steps={steps} />
      <CTABand heading='Build the audit trail your compliance team needs. Detect the access anomalies your security team needs to see.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

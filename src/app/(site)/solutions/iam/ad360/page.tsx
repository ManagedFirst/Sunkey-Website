import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine AD360 Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine AD360 for Indian enterprises. Unified IAM covering user lifecycle management, MFA, SSO, identity governance, and DPDPA-aligned access controls. Authorized partner.',
  canonicalPath: '/solutions/iam/ad360',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "Solutions", "href": "/solutions/iam"}, {"name": "IAM", "href": "/solutions/iam"}, {"name": "AD360", "href": "/solutions/iam/ad360"}]

const capabilities = [{"title": "User Lifecycle Management", "description": "Provisioning templates by job role. Automated account creation from HRMS triggers. Deprovisioning workflows that execute within your defined SLA after exit events."}, {"title": "Multi-Factor Authentication", "description": "MFA configured across VPN, web applications, OWA, and on-premise apps. Enrolment workflows and helpdesk delegation for MFA management."}, {"title": "Single Sign-On", "description": "SSO configured for your cloud and on-premise application portfolio. SAML, OIDC, and LDAP integration with your application stack."}, {"title": "Identity Governance", "description": "Access certification reviews where managers confirm their team's access. Role-based access controls tied to your HR job structure. Separation of duties controls."}, {"title": "HRMS Integration", "description": "AD360 connected to your HRMS system. New hire accounts created automatically. Role changes trigger access modifications. Exit events trigger deprovisioning."}, {"title": "Compliance Reporting", "description": "Pre-built DPDPA, ISO 27001, and RBI framework compliance reports. Automated scheduling. Audit-ready evidence produced without manual extraction."}]
const steps = [{"title": "AD Structure Assessment", "description": "We map your current Active Directory structure — OU design, group memberships, existing IAM tooling, service account inventory — and document your compliance requirements."}, {"title": "Deployment and Base Configuration", "description": "We install and configure AD360 for your environment — directory structure, user base size, OU design, and security policies."}, {"title": "HRMS Integration", "description": "We connect AD360 to your HRMS system and build the provisioning and deprovisioning workflows that automate the identity lifecycle."}, {"title": "Governance Configuration", "description": "We configure access certification reviews, role-based access controls, and separation of duties controls aligned to your compliance obligations."}, {"title": "Compliance Report Setup", "description": "We configure compliance report templates for DPDPA, ISO 27001, and applicable frameworks with automated delivery schedules."}]
const useCases = [{"title": "Automating onboarding", "description": "New hire accounts created automatically from HRMS events. Role-appropriate access granted at provisioning. IT involvement eliminated for routine onboarding."}, {"title": "Enforcing deprovisioning", "description": "Exit events trigger deprovisioning workflows. Access removed within your defined SLA. Orphaned account risk substantially reduced."}, {"title": "MFA rollout across the organisation", "description": "MFA deployed across VPN, web apps, and on-premise applications. Enrolment managed at scale. Helpdesk delegation configured for MFA support."}, {"title": "Producing DPDPA access evidence", "description": "Access controls documented and demonstrable. Compliance reports generated automatically for audit requests. Manual extraction not required."}]

export default function SolutionsIamAd360Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='IAM | AD360'
        heading='One platform for your entire identity and access management programme.'
        subheading="AD360 is ManageEngine's unified IAM platform. ManagedFirst implements the full scope — user lifecycle management, MFA, SSO, identity governance, and compliance auditing — configured around your Active Directory structure and operational requirements."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<IAMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements AD360." steps={steps} />
      <CTABand heading='See what a properly configured IAM environment looks like in your organisation.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine PAM360 Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine PAM360. Privileged access management, password vaulting, session recording, and just-in-time access for Indian enterprises. Authorized partner, Chennai.',
  canonicalPath: '/solutions/iam/pam360',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "IAM", "href": "/solutions/iam"}, {"name": "PAM360", "href": "/solutions/iam/pam360"}]

const capabilities = [{"title": "Privileged Credential Vaulting", "description": "All privileged credentials — domain admin, database admin, server admin, network device credentials — stored in an encrypted vault with access controls."}, {"title": "Session Recording", "description": "Every privileged session recorded end-to-end. Full video recording, keystroke logging, and command capture for audit and forensics."}, {"title": "Just-in-Time Access", "description": "Privileged access granted for specific sessions only. Credentials checked out, session completed, access removed. No standing privilege."}, {"title": "Access Approval Workflows", "description": "Privileged access requests routed through approval workflows. Access granted after approval. Approved access time-bounded."}, {"title": "ITSM Integration", "description": "PAM360 integrated with ServiceDesk Plus. Privileged access requests linked to change management tickets. Audit trail connects IT operations and access governance."}, {"title": "Compliance Reporting", "description": "Privileged access activity reports for RBI IT framework, DPDPA, and ISO 27001. Session recordings available for forensic review on request."}]
const steps = [{"title": "Privileged Account Discovery", "description": "We inventory all privileged accounts across your environment — AD, servers, databases, network devices — and document the access model."}, {"title": "Vault Configuration", "description": "We configure the PAM360 vault, import discovered credentials, and set access controls for each privileged account category."}, {"title": "Session Recording Setup", "description": "We configure session recording for all privileged access categories with retention policies matching your compliance requirements."}, {"title": "Approval Workflow Build", "description": "We build the access request and approval workflows for your privilege management process — including emergency access procedures."}, {"title": "ITSM Integration and Handover", "description": "We integrate PAM360 with ServiceDesk Plus if applicable, configure compliance reports, and deliver the configuration runbook."}]
const useCases = [{"title": "Eliminating shared admin credentials", "description": "Shared domain admin passwords replaced with vaulted credentials. Each privileged access event attributed to a named user. Shared credential risk substantially reduced."}, {"title": "RBI IT framework privileged access compliance", "description": "Privileged access governance documented. Session recordings available as evidence. Compliance reports generated automatically."}, {"title": "Critical system access governance", "description": "Access to production databases, core banking systems, and sensitive servers governed through approval workflows. Standing privilege removed by default."}, {"title": "Privileged access forensics", "description": "Incident investigation supported by full session recordings. Every privileged action attributable to a named user with a time-stamped recording."}]

export default function SolutionsIamPam360Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='IAM | PAM360'
        heading='Control every privileged account in your organisation. Know who used it, when, and why.'
        subheading='PAM360 vaults privileged credentials for all your critical systems, records every privileged session end-to-end, and enforces approval workflows for access to sensitive environments — configured for your IT environment and compliance obligations.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<IAMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements PAM360." steps={steps} />
      <CTABand heading='Implement privileged access management that satisfies your compliance obligations and your security team.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

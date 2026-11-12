import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine ADSelfService Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine ADSelfService Plus. Self-service password reset, account unlock, MFA enrollment, and SSO — without IT involvement. Authorized partner, Chennai.',
  canonicalPath: '/solutions/iam/adself-service-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "IAM", "href": "/solutions/iam"}, {"name": "ADSelfService Plus", "href": "/solutions/iam/adself-service-plus"}]

const capabilities = [{"title": "Self-Service Password Reset", "description": "Employees reset their own AD passwords through a web portal or mobile app, verified via MFA. No helpdesk call required."}, {"title": "Account Self-Unlock", "description": "Locked accounts unlocked by the account holder through MFA verification. IT helpdesk removed from routine unlock operations."}, {"title": "Multi-Factor Authentication", "description": "MFA enrollment and management through the self-service portal. TOTP, push notifications, biometrics, and security questions configured for your security policy."}, {"title": "Single Sign-On", "description": "SSO enrollment and application access through the portal. Users manage their SSO-connected application access without IT intervention."}, {"title": "Enrolment Campaign Management", "description": "Managed rollout of self-service enrolment across your user base. Reporting on enrolment completion by department."}, {"title": "Policy Configuration", "description": "Password complexity, reset frequency, MFA method requirements, and lockout policies configured for your security requirements."}]
const steps = [{"title": "Policy and Requirements Review", "description": "We document your password policy, security requirements, and MFA method preferences before any configuration begins."}, {"title": "Portal Configuration", "description": "We configure the self-service portal — authentication methods, password policies, branding, and access controls."}, {"title": "MFA Setup", "description": "We configure the MFA methods your organisation will use and build the enrolment workflows for your user base."}, {"title": "Enrolment Campaign", "description": "We plan and support the user enrolment campaign — communications, IT helpdesk guidance, and exception handling."}, {"title": "Handover and Reporting Setup", "description": "We configure helpdesk reports and deliver a configuration runbook covering your setup, policies, and management procedures."}]
const useCases = [{"title": "Reducing helpdesk ticket volume", "description": "Password resets and account unlocks moved to self-service. Helpdesk time freed for higher-value work."}, {"title": "MFA rollout at scale", "description": "MFA enrolled across the user base via managed campaign. Exceptions handled through helpdesk workflow."}, {"title": "Remote workforce access", "description": "Employees working remotely reset passwords and unlock accounts without VPN or helpdesk availability dependency."}, {"title": "Compliance MFA enforcement", "description": "MFA enforced on systems processing personal data. MFA events logged for DPDPA and ISO 27001 audit evidence."}]

export default function SolutionsIamAdselfServicePlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='IAM | ADSelfService Plus'
        heading='Enable Secure Self-Service Password Resets for Your Employees.'
        subheading='ADSelfService Plus gives employees a secure, MFA-verified self-service portal for password resets, account unlocks, and SSO enrollment — without any IT involvement for routine operations.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<IAMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements ADSelfService Plus." steps={steps} />
      <CTABand heading='Reduce helpdesk ticket volume. Give employees access to manage their own credentials securely.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

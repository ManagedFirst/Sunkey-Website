import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { UEMSIllustration } from '@/components/illustrations/UEMSIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Mobile Device Manager Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Mobile Device Manager Plus. iOS, Android, and Windows MDM, BYOD management, app distribution, and corporate data protection. Authorized partner.',
  canonicalPath: '/solutions/uems/mobile-device-manager-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "UEMS", "href": "/solutions/uems"}, {"name": "Mobile Device Manager Plus", "href": "/solutions/uems/mobile-device-manager-plus"}]

const capabilities = [{"title": "Corporate Device Management", "description": "Full management of corporate-owned iOS, Android, and Windows devices — policy enforcement, app distribution, remote wipe."}, {"title": "BYOD Container Management", "description": "Separate work container on personal devices. Corporate data protected and removable without affecting personal apps or data."}, {"title": "App Distribution", "description": "Corporate app deployment and management. App catalogue for users to install approved apps. App usage reporting."}, {"title": "Security Policy Enforcement", "description": "Screen lock, encryption, VPN, and network policy enforcement by device type and ownership category."}, {"title": "Remote Management", "description": "Remote lock, wipe, location tracking, and support for enrolled devices. Corporate data wiped remotely on exit or loss."}, {"title": "Compliance Reporting", "description": "Device compliance status, enrolment coverage, and policy violation reporting for IT governance and DPDPA evidence."}]
const steps = [{"title": "Mobile Policy Design", "description": "We document your mobile device categories, BYOD policy, app requirements, and security policy before enrollment begins."}, {"title": "MDM Platform Configuration", "description": "We configure MDM Plus for your device mix — corporate and BYOD profiles, network settings, and security policies."}, {"title": "App Catalogue Setup", "description": "We configure the corporate app distribution catalogue and build deployment workflows for required applications."}, {"title": "Enrollment Campaign", "description": "We plan and support the device enrollment campaign — IT admin guidance, user communications, and exception handling."}, {"title": "Policy Validation and Handover", "description": "We validate policy enforcement across enrolled device types and deliver the configuration runbook and IT admin training."}]
const useCases = [{"title": "Corporate mobile fleet management", "description": "All corporate mobile devices enrolled, policy-enforced, and remotely manageable from a single console."}, {"title": "BYOD programme implementation", "description": "Personal devices enrolled with work container. Corporate apps and data separated from personal use. Privacy maintained."}, {"title": "Corporate data protection on exit", "description": "Departing employee's corporate data wiped remotely. Personal data untouched. BYOD container removed without device wipe."}, {"title": "Mobile device compliance for DPDPA", "description": "Mobile devices accessing corporate email and data enrolled and policy-enforced. Compliance status tracked and reportable."}]

export default function SolutionsUemsMobileDeviceManagerPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='UEMS | Mobile Device Manager Plus'
        heading='Manage every mobile device in your organisation. Corporate-owned and personal.'
        subheading="Mobile Device Manager Plus is ManageEngine's dedicated MDM platform for iOS, Android, and Windows devices — corporate-owned and BYOD — with separate management policies for each."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<UEMSIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Mobile Device Manager Plus." steps={steps} />
      <CTABand heading='Implement mobile device management that covers your entire mobile fleet — corporate and BYOD.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

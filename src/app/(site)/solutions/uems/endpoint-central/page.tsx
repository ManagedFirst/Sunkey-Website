import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { UEMSIllustration } from '@/components/illustrations/UEMSIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Endpoint Central Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Endpoint Central. Patch management, endpoint security, software deployment, remote desktop, and asset management. Authorized partner, Chennai.',
  canonicalPath: '/solutions/uems/endpoint-central',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "UEMS", "href": "/solutions/uems"}, {"name": "Endpoint Central", "href": "/solutions/uems/endpoint-central"}]

const capabilities = [{"title": "Patch Management", "description": "Automated patch deployment for Windows, macOS, Linux, and third-party applications. Patch policies by device group with maintenance window scheduling."}, {"title": "Software Deployment", "description": "Automated software package deployment to device groups. New device provisioning reduced to an automated workflow rather than manual installation."}, {"title": "Endpoint Security", "description": "USB device control, application allowlisting, browser security policies, and data loss prevention — enforced across the fleet."}, {"title": "Remote Desktop and Troubleshooting", "description": "Secure remote desktop for IT support. Session recording optional. Device diagnostics without user interaction."}, {"title": "IT Asset Management", "description": "Automated software inventory, hardware asset discovery, and licence compliance tracking without manual updates."}, {"title": "Configuration Management", "description": "Device configuration baselines deployed and enforced. Configuration drift detected and reported. Security policy compliance tracked."}]
const steps = [{"title": "Device Environment Assessment", "description": "We assess your device population — OS mix, locations, network segments — and document your patch policy, software standard, and security requirements."}, {"title": "Endpoint Central Deployment", "description": "We install the Endpoint Central server and deploy agents across your device fleet, including remote and field devices."}, {"title": "Patch Policy Configuration", "description": "We configure patch policies by device group with testing schedules, maintenance windows, and exception handling."}, {"title": "Security Policy Deployment", "description": "We configure and deploy endpoint security policies — USB controls, application allowlisting, browser policies — and validate enforcement."}, {"title": "Software Packages and Asset Setup", "description": "We build your software deployment packages and configure asset management for ongoing inventory accuracy."}]
const useCases = [{"title": "Patch compliance at scale", "description": "Automated patch deployment across the fleet. Compliance tracked by device group. Unpatched devices flagged before they become incidents."}, {"title": "New device provisioning", "description": "Software deployment packages push the standard application set automatically. Manual application installation eliminated for new devices."}, {"title": "USB and data transfer control", "description": "USB access controlled by device policy. Data transfer events logged. DPDPA obligations for endpoint data protection addressed."}, {"title": "Remote IT support", "description": "IT support connects remotely without end-user involvement for IT-side troubleshooting. Travel to user desks eliminated for most support scenarios."}]

export default function SolutionsUemsEndpointCentralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='UEMS | Endpoint Central'
        heading='Stop managing endpoints one problem at a time.'
        subheading="Endpoint Central is ManageEngine's unified endpoint management and security platform. ManagedFirst implements patch management, software deployment, endpoint security policies, and asset management — configured for your device environment."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<UEMSIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Endpoint Central." steps={steps} />
      <CTABand heading='Deploy unified endpoint management that gives your IT team visibility and control across your entire device fleet.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

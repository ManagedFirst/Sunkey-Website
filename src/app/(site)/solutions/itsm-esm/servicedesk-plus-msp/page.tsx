import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { ITSMIllustration } from '@/components/illustrations/ITSMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine ServiceDesk Plus MSP Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine ServiceDesk Plus MSP for IT service providers and group companies. Multi-tenant service desk, per-client portals, and consolidated reporting.',
  canonicalPath: '/solutions/itsm-esm/servicedesk-plus-msp',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "ITSM / ESM", "href": "/solutions/itsm-esm"}, {"name": "ServiceDesk Plus MSP", "href": "/solutions/itsm-esm/servicedesk-plus-msp"}]

const capabilities = [{"title": "Multi-Tenant Architecture", "description": "Separate service desk instances per client or entity. Data isolation enforced at platform level. One console for the MSP or IT group."}, {"title": "Per-Client Self-Service Portals", "description": "Branded self-service portal for each client. Clients submit requests, check status, and access their knowledge base without shared access."}, {"title": "Consolidated Reporting", "description": "Cross-client SLA performance, ticket volume, and technician utilisation reporting from a single console."}, {"title": "Client-Specific SLA Management", "description": "Different SLA tiers per client. SLA breach notifications and escalations configured independently for each client's requirements."}, {"title": "Technician Assignment", "description": "Technicians assigned to specific clients or shared across accounts. Client-specific and shared technician models both supported."}, {"title": "Billing Integration", "description": "Time tracking per client for billing reconciliation. Ticket and resolution data exportable for client reporting and invoicing."}]
const steps = [{"title": "Client Architecture Planning", "description": "We document client entities, isolation requirements, SLA structures, and technician assignment model before configuration begins."}, {"title": "Tenant Configuration", "description": "We configure client accounts, data isolation, and per-client settings including SLAs, categories, and branding."}, {"title": "Portal Setup", "description": "We build and brand self-service portals for each client entity with their service catalogue and knowledge base."}, {"title": "Reporting Configuration", "description": "We configure cross-client operational reports and per-client SLA performance dashboards."}, {"title": "Technician Onboarding", "description": "We train MSP technicians on the multi-tenant console and configure team assignments. Handover documentation delivered."}]
const useCases = [{"title": "IT managed service providers", "description": "Single platform managing ITSM for multiple client organisations. Client data isolated. Separate SLAs, portals, and reporting per client."}, {"title": "Group company IT management", "description": "IT function managing service desks for multiple subsidiaries or group entities from one platform with consolidated reporting."}, {"title": "Cross-client performance reporting", "description": "Consolidated view of SLA performance, resolution rates, and ticket volumes across all clients from a single dashboard."}, {"title": "White-label client portals", "description": "Branded self-service portals for each client entity with their own service catalogue and knowledge base."}]

export default function SolutionsItsmEsmServicedeskPlusMspPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='ITSM / ESM | ServiceDesk Plus MSP'
        heading='Manage IT for multiple organisations from one platform. Without mixing up their data.'
        subheading="ServiceDesk Plus MSP is ManageEngine's multi-tenant ITSM platform for IT service providers and group companies managing IT for multiple entities."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ITSMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements ServiceDesk Plus MSP." steps={steps} />
      <CTABand heading='Configure ServiceDesk Plus MSP for your multi-client or multi-entity IT environment.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

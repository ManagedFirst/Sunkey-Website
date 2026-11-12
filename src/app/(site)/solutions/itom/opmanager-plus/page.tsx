import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { ITOMIllustration } from '@/components/illustrations/ITOMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine OpManager Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine OpManager Plus. Network monitoring, server monitoring, configuration management, and IT operations dashboards. Authorized partner, Chennai.',
  canonicalPath: '/solutions/itom/opmanager-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "ITOM", "href": "/solutions/itom"}, {"name": "OpManager Plus", "href": "/solutions/itom/opmanager-plus"}]

const capabilities = [{"title": "Network Device Monitoring", "description": "Routers, switches, firewalls, and access points monitored by SNMP and ICMP. Availability, performance, and interface utilisation tracked."}, {"title": "Server Monitoring", "description": "Windows and Linux server health monitored — CPU, memory, disk, process, and service availability. Thresholds set against your environment's baselines."}, {"title": "Network Configuration Management", "description": "Device configuration backup, change detection, and compliance checking. Unauthorised changes flagged. Rollback documentation available."}, {"title": "Bandwidth and Traffic Analysis", "description": "Network traffic analysis by interface, application, and endpoint. Bandwidth consumers identified. Capacity planning data available."}, {"title": "Alert and Escalation Management", "description": "Alert thresholds calibrated for your environment. Escalation paths routing alerts to the right team. On-call rotation integration."}, {"title": "Operations Dashboard", "description": "Customised dashboards showing infrastructure health at the level relevant to your operations team and IT leadership."}]
const steps = [{"title": "Infrastructure Scoping", "description": "We document your network topology, device inventory, monitoring requirements, and escalation model before any configuration begins."}, {"title": "OpManager Plus Deployment", "description": "We install OpManager Plus and configure discovery for your network topology — devices, interfaces, and dependency mapping."}, {"title": "Threshold Calibration", "description": "We establish baselines for normal performance across your infrastructure and configure alert thresholds against those baselines."}, {"title": "Dashboard and Report Build", "description": "We build operational dashboards for your team and leadership, and configure scheduled reports for regular delivery."}, {"title": "Alert Workflow and Handover", "description": "We configure alert escalation paths and test them against your on-call structure. Configuration runbook delivered at handover."}]
const useCases = [{"title": "Infrastructure visibility", "description": "Complete network and server topology visible in one console. Dependency maps show blast radius of any device failure."}, {"title": "Proactive incident detection", "description": "Threshold alerts detect degradation before users report it. IT ops responds to the monitoring alert, not the user complaint."}, {"title": "Configuration change governance", "description": "Unauthorised network device configuration changes detected immediately. Approved changes tracked against change management records."}, {"title": "Capacity planning", "description": "Bandwidth utilisation trends and server resource growth data available for infrastructure planning decisions."}]

export default function SolutionsItomOpmanagerPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='ITOM | OpManager Plus'
        heading='See your entire IT infrastructure. Get alerts that mean something.'
        subheading="OpManager Plus is ManageEngine's unified IT operations suite. ManagedFirst implements network monitoring, server monitoring, configuration management, and bandwidth analysis — with thresholds and dashboards configured for your infrastructure."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ITOMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements OpManager Plus." steps={steps} />
      <CTABand heading='Implement IT operations monitoring that gives your team infrastructure visibility and proactive incident detection.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

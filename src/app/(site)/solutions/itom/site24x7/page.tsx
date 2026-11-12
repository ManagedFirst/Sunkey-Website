import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { ITOMIllustration } from '@/components/illustrations/ITOMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Site24x7 Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Site24x7. Cloud-based website, server, application, and network monitoring for Indian enterprises. Authorized partner, Chennai.',
  canonicalPath: '/solutions/itom/site24x7',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "ITOM", "href": "/solutions/itom"}, {"name": "Site24x7", "href": "/solutions/itom/site24x7"}]

const capabilities = [{"title": "Website and Uptime Monitoring", "description": "Website availability monitored from multiple global locations. Response time, SSL certificate expiry, and content accuracy checked on schedule."}, {"title": "Server and Infrastructure Monitoring", "description": "Cloud and on-premise server health monitored via lightweight agent. CPU, memory, disk, and process tracking without on-premise monitoring server."}, {"title": "Application Performance Monitoring", "description": "Application response time and transaction health monitored from end-user perspective. Apdex scoring and performance trend tracking."}, {"title": "Cloud Resource Monitoring", "description": "AWS, Azure, and GCP resource health monitored alongside on-premise infrastructure from one dashboard."}, {"title": "Network Monitoring", "description": "Network device availability and performance monitored without on-premise SNMP collector for distributed or small-office environments."}, {"title": "On-Call and Alert Routing", "description": "Alerting configured with on-call schedules and escalation policies. Integrations with Slack, Teams, PagerDuty, and email."}]
const steps = [{"title": "Monitoring Scope Definition", "description": "We document what needs to be monitored — websites, servers, applications, cloud resources — and define alerting and escalation requirements."}, {"title": "Site24x7 Account Configuration", "description": "We set up your Site24x7 account, configure monitors for your infrastructure scope, and establish monitoring locations."}, {"title": "Alert Threshold Configuration", "description": "We configure alert thresholds relevant to your SLAs and escalation paths for your on-call team."}, {"title": "Dashboard Setup", "description": "We build dashboards for your operations team and configure scheduled status reports for leadership."}, {"title": "Integration and Handover", "description": "We configure integrations with your notification channels and deliver the monitoring configuration documentation."}]
const useCases = [{"title": "Website SLA monitoring", "description": "Website availability and response time monitored from multiple locations. Downtime detected immediately from outside the network."}, {"title": "Cloud infrastructure monitoring", "description": "AWS, Azure, or GCP resource health monitored without on-premise infrastructure. Cloud sprawl visibility provided."}, {"title": "Distributed office monitoring", "description": "Small or remote office infrastructure monitored without deploying on-premise monitoring servers at each location."}, {"title": "External application performance", "description": "Application performance monitored from end-user perspective — not just internal server health. Apdex scoring and transaction tracking."}]

export default function SolutionsItomSite24x7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='ITOM | Site24x7'
        heading='Monitor your infrastructure from the outside in. See what your users actually experience.'
        subheading="Site24x7 is ManageEngine's cloud-based monitoring platform for websites, servers, applications, networks, and cloud infrastructure. ManagedFirst implements and configures monitoring relevant to your specific infrastructure."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ITOMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Site24x7." steps={steps} />
      <CTABand heading='Implement external infrastructure monitoring that shows you what your users see.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

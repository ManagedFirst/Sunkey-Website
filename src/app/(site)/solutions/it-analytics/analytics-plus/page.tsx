import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { AnalyticsIllustration } from '@/components/illustrations/AnalyticsIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Analytics Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Analytics Plus. Unified IT analytics, cross-tool dashboards, and AI-powered insights across your ManageEngine environment. Authorized partner.',
  canonicalPath: '/solutions/it-analytics/analytics-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "IT Analytics", "href": "/solutions/it-analytics"}, {"name": "Analytics Plus", "href": "/solutions/it-analytics/analytics-plus"}]

const capabilities = [{"title": "Cross-Tool Data Integration", "description": "Data connected from ServiceDesk Plus, OpManager Plus, Endpoint Central, Log360, and other ManageEngine products into a single analytics layer."}, {"title": "Pre-Built IT Dashboards", "description": "Pre-built dashboards for ITSM performance, endpoint compliance, infrastructure health, and security operations — available immediately post-connection."}, {"title": "Custom Dashboard Build", "description": "Custom visualisations and dashboards built for your specific reporting requirements and IT leadership's information needs."}, {"title": "AI-Powered Insights", "description": "Anomaly detection, forecasting, and pattern identification applied to connected ManageEngine data sources."}, {"title": "Scheduled Report Delivery", "description": "Reports delivered to stakeholders on schedule — IT leadership, operations managers, compliance teams — without manual compilation."}, {"title": "Data Blending and Correlation", "description": "Data from multiple ManageEngine products blended into single views. ITSM tickets correlated with infrastructure incidents. Patch compliance correlated with security events."}]
const steps = [{"title": "Requirements Workshop", "description": "We document what IT leadership and operations teams need to see, in what format, and on what schedule — before any data connection begins."}, {"title": "Data Source Connection", "description": "We connect Analytics Plus to your ManageEngine products and validate data completeness and accuracy before building dashboards."}, {"title": "Pre-Built Dashboard Configuration", "description": "We configure and customise the pre-built dashboard templates for your organisation's specific metrics and display preferences."}, {"title": "Custom Dashboard Build", "description": "We build custom dashboards for your specific reporting requirements — identified in the requirements workshop."}, {"title": "Report Schedule Setup and Handover", "description": "We configure automated report delivery to your stakeholder list and deliver the platform configuration documentation."}]
const useCases = [{"title": "IT leadership reporting", "description": "IT leadership receives a weekly operational summary — SLA performance, endpoint compliance, infrastructure health — without requesting it from individual tool owners."}, {"title": "ITSM performance analysis", "description": "Ticket volume trends, resolution rates, SLA compliance, and technician utilisation tracked across ServiceDesk Plus data."}, {"title": "Cross-tool incident correlation", "description": "ITSM tickets correlated with infrastructure monitoring events. Root cause analysis supported by data from both tools in one view."}, {"title": "Compliance reporting consolidation", "description": "Data from multiple ManageEngine tools combined into unified compliance reports for DPDPA, ISO 27001, and sector frameworks."}]

export default function SolutionsItAnalyticsAnalyticsPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='IT Analytics | Analytics Plus'
        heading='Your ManageEngine tools generate data every second. Analytics Plus makes it usable.'
        subheading='Analytics Plus connects data from ServiceDesk Plus, OpManager Plus, Endpoint Central, Log360, and other ManageEngine products into unified dashboards and reports for IT leadership and operations teams.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<AnalyticsIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Analytics Plus." steps={steps} />
      <CTABand heading='Implement Analytics Plus to make your ManageEngine data available to the people who need to act on it.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

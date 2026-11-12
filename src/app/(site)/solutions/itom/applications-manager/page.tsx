import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { ITOMIllustration } from '@/components/illustrations/ITOMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Applications Manager Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine Applications Manager. Application performance monitoring for Java, .NET, databases, web servers, and middleware. Authorized partner, Chennai.',
  canonicalPath: '/solutions/itom/applications-manager',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "ITOM", "href": "/solutions/itom"}, {"name": "Applications Manager", "href": "/solutions/itom/applications-manager"}]

const capabilities = [{"title": "Java and .NET APM", "description": "Application performance instrumented at the code level — slow transactions, exceptions, garbage collection, thread utilisation, and dependency calls tracked."}, {"title": "Database Performance Monitoring", "description": "SQL query performance, slow query identification, connection pool utilisation, and database server health across Oracle, MSSQL, MySQL, and PostgreSQL."}, {"title": "Web Server and Middleware Monitoring", "description": "Apache, IIS, Nginx, Tomcat, JBoss, WebLogic, and WebSphere performance and health monitored."}, {"title": "Application Dependency Mapping", "description": "Automatic mapping of application dependencies — which services call which databases, which middleware, which external APIs."}, {"title": "Transaction Tracing", "description": "End-to-end transaction tracing across tiers. Slow transaction root cause identified at the component or query level."}, {"title": "Synthetic Transaction Monitoring", "description": "Scripted user transactions run on schedule to detect application performance degradation before real users encounter it."}]
const steps = [{"title": "Application Stack Assessment", "description": "We document your application architecture, technology stack, and performance requirements before instrumentation begins."}, {"title": "APM Agent Deployment", "description": "We deploy Applications Manager and instrument your applications — Java agents, .NET profilers, database connections, and middleware monitors."}, {"title": "Alert and Threshold Configuration", "description": "We configure performance thresholds and alert escalations relevant to your application SLAs."}, {"title": "Dashboard and Reporting Setup", "description": "We build application performance dashboards for your development and operations teams."}, {"title": "Baseline and Handover", "description": "We establish performance baselines after two weeks of monitoring data. Configuration runbook delivered at handover."}]
const useCases = [{"title": "Slow application root cause", "description": "Slow transaction identified to the specific query, service call, or component causing the performance issue — not just reported as slow."}, {"title": "Database performance optimisation", "description": "Slow queries identified across production databases. DBA team given specific query and execution plan data for optimisation."}, {"title": "Pre-release performance validation", "description": "Synthetic transactions run against pre-release deployments to detect performance regressions before production release."}, {"title": "Infrastructure vs application incident triage", "description": "Dependency maps show whether a performance incident originates in the application, the database, the middleware, or the underlying infrastructure."}]

export default function SolutionsItomApplicationsManagerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='ITOM | Applications Manager'
        heading='Know which query is slowing down your application. Before users notice.'
        subheading="Applications Manager is ManageEngine's application performance monitoring tool. ManagedFirst implements APM monitoring for your application stack — Java, .NET, databases, web servers, and middleware — configured for your environment."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ITOMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements Applications Manager." steps={steps} />
      <CTABand heading='Implement application performance monitoring that tells you where the problem is, not just that one exists.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

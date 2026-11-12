import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { ITSMIllustration } from '@/components/illustrations/ITSMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine ServiceDesk Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine ServiceDesk Plus. Incident management, change workflows, asset management, and ESM configured for your organisation. Authorized partner, Chennai.',
  canonicalPath: '/solutions/itsm-esm/servicedesk-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "ITSM / ESM", "href": "/solutions/itsm-esm"}, {"name": "ServiceDesk Plus", "href": "/solutions/itsm-esm/servicedesk-plus"}]

const capabilities = [{"title": "Incident and Service Request Management", "description": "Ticket categories, routing rules, and SLA tiers configured for your organisation. Automated routing eliminates manual triage."}, {"title": "Change Management", "description": "Change workflow with approval chains documented for your IT governance requirements. Every production change has an audit trail."}, {"title": "Problem Management", "description": "Known error database populated for recurring incidents. Root cause analysis linked to incidents. Recurrence rates tracked."}, {"title": "IT Asset Management", "description": "Asset discovery by network scan. Software inventory automated. Asset lifecycle tracking and reporting without manual updates."}, {"title": "Enterprise Service Management", "description": "ServiceDesk Plus extended to HR, facilities, and other departments. Single self-service portal for all internal service requests."}, {"title": "Self-Service Portal", "description": "End-user portal configured with your service catalogue, knowledge base articles, and incident submission forms."}]
const steps = [{"title": "Process Mapping", "description": "We document your current IT service delivery processes, SLA requirements, approval structures, and asset management approach before any configuration begins."}, {"title": "Core ITSM Configuration", "description": "We configure ticket categories, routing rules, SLA tiers, technician groups, and escalation paths for your operations."}, {"title": "Change and Problem Management Setup", "description": "We build change workflow templates for your approval structure and configure the problem management database for your known-error categories."}, {"title": "Asset Discovery and Integration", "description": "We configure asset discovery, connect ServiceDesk Plus to your AD and monitoring tools, and set up asset lifecycle tracking."}, {"title": "Training and Go-Live", "description": "We train IT technicians and end users against your specific configuration. Hypercare support provided for the first two weeks post-launch."}]
const useCases = [{"title": "Eliminating manual ticket triage", "description": "Routing rules assign tickets to the right technician group automatically based on category and priority. Manual triage eliminated."}, {"title": "Change management audit trail", "description": "Every production change documented with a change request, approval record, and implementation evidence. Auditors can retrieve change history on demand."}, {"title": "Self-service portal adoption", "description": "End users submit requests, check status, and access the knowledge base without calling IT. Ticket volume from routine requests reduced."}, {"title": "Multi-department service management", "description": "HR, facilities, and other departments manage their service requests through the same platform and self-service portal as IT."}]

export default function SolutionsItsmEsmServicedeskPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='ITSM / ESM | ServiceDesk Plus'
        heading='A service desk that works the way your IT team works.'
        subheading="ServiceDesk Plus is ManageEngine's enterprise ITSM platform. ManagedFirst implements the full scope — incident, change, problem, asset, and enterprise service management — configured around your team's actual processes."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ITSMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements ServiceDesk Plus." steps={steps} />
      <CTABand heading='See what a properly configured service desk looks like in your environment.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

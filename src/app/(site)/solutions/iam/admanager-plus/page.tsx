import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { CTABand, CapabilitiesGrid, ImplementationSteps, UseCasesGrid } from '@/components/sections/Sections'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine ADManager Plus Implementation | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine ADManager Plus. Active Directory management automation, bulk operations, helpdesk delegation, and reporting — without domain admin exposure. Authorized partner.',
  canonicalPath: '/solutions/iam/admanager-plus',
})
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "IAM", "href": "/solutions/iam"}, {"name": "ADManager Plus", "href": "/solutions/iam/admanager-plus"}]

const capabilities = [{"title": "Provisioning Templates", "description": "Role-based account creation templates that set group memberships, home drives, mailbox settings, and access rights automatically at provisioning."}, {"title": "Bulk Operations", "description": "Bulk user creation, modification, and deactivation without scripting or domain admin access per operation."}, {"title": "Helpdesk Delegation", "description": "IT helpdesk staff given access to specific AD tasks — password resets, account unlocks, group membership changes — without domain admin credentials."}, {"title": "Deprovisioning Automation", "description": "Exit workflow that disables accounts, removes group memberships, and archives mailboxes within your defined SLA after employee exit events."}, {"title": "HRMS Integration", "description": "ADManager Plus connected to your HRMS. New hire, role change, and exit events trigger automated AD operations without manual IT intervention."}, {"title": "AD Reporting", "description": "User reports, inactive account reports, group membership reports, and compliance reports — generated on schedule without manual compilation."}]
const steps = [{"title": "AD Structure Review", "description": "We document your current AD structure, provisioning process, and identify automation opportunities across the user lifecycle."}, {"title": "Template Build", "description": "We build provisioning templates for your job roles — setting correct group memberships, access rights, and mailbox configuration at account creation."}, {"title": "Helpdesk Delegation Setup", "description": "We configure helpdesk roles with precisely the AD tasks they need — no more, no less — without domain admin exposure."}, {"title": "HRMS Integration", "description": "We connect ADManager Plus to your HRMS system and build the event-triggered automation for onboarding, role changes, and offboarding."}, {"title": "Workflow Testing and Handover", "description": "We test all provisioning and deprovisioning workflows against real scenarios. Configuration runbook delivered at handover."}]
const useCases = [{"title": "Eliminating manual account creation", "description": "New hire accounts created from templates automatically. Role-appropriate access from day one. IT involvement reduced to exception handling."}, {"title": "Helpdesk AD delegation", "description": "Password resets and account unlocks delegated to helpdesk without domain admin access. IT security posture improved."}, {"title": "Bulk AD operations", "description": "Department reorganisations, bulk role changes, and group membership updates executed without scripting or domain admin involvement."}, {"title": "Consistent deprovisioning", "description": "Exit workflows run on schedule. Accounts disabled, mailboxes archived, group memberships removed — within defined SLA without manual tracking."}]

export default function SolutionsIamAdmanagerPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="light" eyebrow='IAM | ADManager Plus'
        heading='Automate the Active Directory work your team does manually every day.'
        subheading='ADManager Plus automates AD user provisioning through role-based templates, enables bulk operations without scripting, and delegates routine AD tasks to helpdesk staff without exposing domain admin rights.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<IAMIllustration className='w-full max-w-[480px]' />}
        />
      <CapabilitiesGrid eyebrow="What we configure" heading="Capabilities we can configure." items={capabilities} />
      <UseCasesGrid eyebrow="Use Cases" heading="Four implementation scenarios." items={useCases} />
      <ImplementationSteps eyebrow="Our Process" heading="How ManagedFirst implements ADManager Plus." steps={steps} />
      <CTABand heading='Automate Active Directory management. Reduce manual effort. Eliminate domain admin exposure.'
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

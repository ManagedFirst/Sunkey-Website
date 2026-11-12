import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable } from '@/components/sections/Sections'
import { SectionHeader, Badge } from '@/components/ui/Elements'
import { IconAD360, IconADManager, IconADSelfService, IconADAudit, IconPAM360, IconArrowRight } from '@/components/icons'
import { IAMIllustration } from '@/components/illustrations/IAMIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'Identity and Access Management | ManageEngine IAM Partner India | ManagedFirst',
  description: 'ManagedFirst implements ManageEngine IAM for Indian enterprises — AD360, ADManager Plus, ADSelfService Plus, ADAudit Plus, and PAM360. Architecture, governance, and compliance. Authorized partner, Chennai.',
  canonicalPath: '/solutions/iam',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions/iam' }, { name: 'Identity and Access Management', href: '/solutions/iam' }]

const products = [
  { slug: 'ad360', name: 'AD360', tag: 'Identity Governance Suite', icon: <IconAD360 size={36} />, href: '/solutions/iam/ad360',
    problem: 'For organisations managing IAM across multiple separate tools — provisioning in one place, MFA in another, auditing in a third — AD360 consolidates the full scope. User lifecycle management, self-service password reset, MFA, SSO, and compliance auditing in one platform.' },
  { slug: 'admanager-plus', name: 'ADManager Plus', tag: 'Active Directory Management', icon: <IconADManager size={36} />, href: '/solutions/iam/admanager-plus',
    problem: 'For IT teams where AD account creation, group management, and bulk operations require domain admin access for every routine task. ADManager Plus automates provisioning through templates, enables bulk operations without scripting, and delegates routine AD tasks to helpdesk staff without exposing domain admin rights.' },
  { slug: 'adself-service-plus', name: 'ADSelfService Plus', tag: 'Self-Service Access', icon: <IconADSelfService size={36} />, href: '/solutions/iam/adself-service-plus',
    problem: 'For organisations where password resets and account unlocks generate a disproportionate share of helpdesk tickets. ADSelfService Plus gives employees a secure, MFA-verified self-service portal for password resets, account unlocks, and SSO enrollment — without IT involvement.' },
  { slug: 'adaudit-plus', name: 'ADAudit Plus', tag: 'Active Directory Auditing', icon: <IconADAudit size={36} />, href: '/solutions/iam/adaudit-plus',
    problem: 'For organisations that need a continuous audit trail of every change in their Active Directory — who changed what, when, from which machine — and pre-built compliance reports for DPDPA, ISO 27001, SOX, and HIPAA. Available standalone and as a Log360 component for a broader SIEM posture.' },
  { slug: 'pam360', name: 'PAM360', tag: 'Privileged Access Management', icon: <IconPAM360 size={36} />, href: '/solutions/iam/pam360',
    problem: 'For organisations where privileged accounts — domain admins, database admins, server admins — operate without a vault, without session recording, and without just-in-time access controls. PAM360 vaults privileged credentials, records every session, and enforces approval workflows for access to critical systems.' },
]

const mappingRows = [
  { challenge: 'Former employees retain access after exit', product: 'ADManager Plus', configuration: 'Automated deprovisioning workflows triggered by HRMS exit events. Access removal within defined SLA.' },
  { challenge: 'Privileged accounts without audit trails', product: 'PAM360', configuration: 'Credential vaulting, session recording, and just-in-time access for all privileged accounts.' },
  { challenge: 'DPDPA access control evidence required', product: 'ADAudit Plus', configuration: 'Continuous AD audit logs with pre-built DPDPA compliance report templates scheduled for automated delivery.' },
  { challenge: 'Password reset tickets consuming IT time', product: 'ADSelfService Plus', configuration: 'MFA-verified self-service portal with AD-integrated reset and unlock. No IT involvement required.' },
  { challenge: 'IAM governance across multiple tools', product: 'AD360', configuration: 'Unified console for lifecycle management, MFA, SSO, and compliance auditing across the complete IAM scope.' },
]

export default function IAMHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow="Identity and Access Management"
        heading="Access controls fail at scale not because organisations lack tools, but because the tools are not configured to govern access consistently."
        subheading="User accounts accumulate. Privileged credentials circulate. Former employees retain access. Compliance auditors ask for evidence that does not exist. ManagedFirst implements ManageEngine's IAM suite — architecture, provisioning automation, privileged access governance, and audit-ready compliance reporting — for enterprises that need access controls that work, not just tools that are installed."
        primaryCta={{ label: 'Get a Free IAM Architecture Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See IAM Products', href: '#products' }}
        visual={<IAMIllustration className='w-full max-w-[520px]' />}
        />

      {/* Problem */}
      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><p className="text-overline uppercase tracking-widest text-teal mb-3">The Access Governance Problem</p></AnimateIn>
          <AnimateIn delay={100}><h2 className="font-display text-h2 font-bold text-navy mb-6">Most enterprises know their access controls are incomplete. The problem is finding and fixing every gap — and keeping it fixed.</h2></AnimateIn>
          {['User accounts accumulate across systems. Former employees retain access for days, sometimes weeks, after they leave. Shared administrator credentials circulate among IT staff. Privileged accounts hold more permissions than the roles that require them. Service accounts with broad access sit unchanged for years.',
            'The compliance implications compound the operational ones. DPDPA requires demonstrable access controls and audit trails for systems handling personal data. ISO 27001 requires documented access reviews and privilege management. RBI\'s IT framework requires privileged access management for regulated entities.',
            'ManageEngine\'s IAM suite — configured correctly — gives your team a live view of every identity in your organisation, automated lifecycle controls from onboarding to offboarding, privileged access governance with session recording, and audit-ready compliance reports when they are required.'
          ].map((p, i) => <AnimateIn key={i} delay={i * 80 + 150}><p className="text-body text-charcoal leading-relaxed mb-4">{p}</p></AnimateIn>)}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="ManageEngine IAM Products" heading="Five products. Each addresses a specific gap in your identity governance architecture." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-5">
            {products.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 80}>
                <Link href={p.href} className="group flex flex-col bg-white border-l-[3px] border-teal rounded-r-brand p-space-5 hover-lift hover:shadow-card-hover h-full">
                  <div className="text-teal mb-3 group-hover:scale-110 transition-transform duration-200">{p.icon}</div>
                  <p className="text-overline uppercase tracking-wider text-teal mb-1">{p.tag}</p>
                  <h3 className="font-display text-h4 font-bold text-navy mb-3 group-hover:text-blue transition-colors">{p.name}</h3>
                  <p className="text-body-sm text-charcoal/80 leading-relaxed mb-4 flex-1">{p.problem}</p>
                  <span className="inline-flex items-center gap-1.5 text-teal font-semibold text-body-sm group-hover:gap-2.5 transition-all">Implementation details <IconArrowRight size={14} /></span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mapping table */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="Which access governance problem each product addresses." /></AnimateIn>
          <AnimateIn delay={100}><SolutionsMappingTable rows={mappingRows} /></AnimateIn>
        </div>
      </section>

      <CTABand heading="Get a free IAM architecture review." body="We review your current Active Directory structure, identity governance gaps, and compliance requirements — then tell you specifically which IAM products fit and how they would be configured." primaryCta={{ label: 'Book a Free IAM Review', href: '/free-consultation' }} secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

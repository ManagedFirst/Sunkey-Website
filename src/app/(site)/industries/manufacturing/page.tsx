import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IndustryIllustration } from '@/components/illustrations/IndustryIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine for Manufacturing Companies in India | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine for Indian manufacturing companies. Endpoint management for plant and corporate environments, network monitoring, ITSM, and production IT governance.',
  canonicalPath: '/industries/manufacturing',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries/manufacturing' }, { name: 'Manufacturing', href: '/industries/manufacturing' }]

const challenges = [{"title": "Endpoint management across plant and corporate environments", "description": "Manufacturing organisations manage device fleets across plant floor, warehouse, and corporate office environments — each with different device types, network connectivity, and patch window constraints."}, {"title": "Multi-site network monitoring with production differentiation", "description": "Manufacturing networks span multiple plant locations, warehouses, and corporate offices. Production infrastructure has different monitoring priority and escalation requirements than corporate IT."}, {"title": "Change management for production IT governance", "description": "Changes to IT systems supporting production operations carry operational risk. Unplanned changes with no approval record create governance gaps and complicate incident root cause analysis."}]
const mappingRows = [{"challenge": "Plant and corporate endpoint management", "product": "Endpoint Central", "configuration": "Separate device groups for plant, warehouse, and corporate environments. Patch schedules aligned to production maintenance windows. Security policies calibrated by environment type."}, {"challenge": "Multi-site network monitoring", "product": "OpManager Plus", "configuration": "Site-based monitoring groups with differentiated alert thresholds for production and corporate infrastructure. Critical production system availability monitored with faster escalation."}, {"challenge": "Production IT change governance", "product": "ServiceDesk Plus", "configuration": "Change management workflows with approval chains for production system changes. Emergency change procedures documented. Audit trail available for production change reviews."}, {"challenge": "Employee identity management across sites", "product": "ADManager Plus + AD360", "configuration": "Provisioning templates by site and job role. Automated deprovisioning for contractor exits. Role-based access controls aligned to manufacturing job structure."}, {"challenge": "DPDPA for employee and customer data", "product": "Log360 + ADAudit Plus", "configuration": "Monitoring of systems processing employee and customer data. Access audit trails for DPDPA evidence. Compliance reports generated automatically."}]
const complianceItems = [{"title": "DPDPA — Employee and Customer Data", "description": "Manufacturing organisations process employee personal data through HRMS and payroll systems, and customer data through sales and delivery systems. DPDPA requires access controls and audit trails for both."}, {"title": "ISO 27001", "description": "Export-oriented manufacturers and those with large IT environments often pursue ISO 27001 certification. ManageEngine's IAM, SIEM, and change management tools support multiple Annex A control areas."}, {"title": "Production IT Governance", "description": "Production IT changes carry operational risk. Change management documentation protects against unplanned production disruption and provides audit evidence for quality management requirements."}]

export default function IndustriesManufacturingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='Industries | Manufacturing' heading='ManageEngine implementation for manufacturing organisations — configured for plant, warehouse, and corporate IT environments.' subheading='Endpoint management across plant and office device environments. Network monitoring across multi-site operations with differentiated alerting for production and corporate infrastructure. Change management with audit trails for production IT governance.'
        primaryCta={{ label: 'Book a Manufacturing Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See our services', href: '/services' }}
        visual={<IndustryIllustration title='Manufacturing' className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="IT Challenges" heading="Three IT challenges specific to Manufacturing organisations." /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-5">
            {challenges.map((c, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <NumberedChallenge number={i+1} title={c.title} description={c.description} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="How ManageEngine addresses Manufacturing IT requirements." /></AnimateIn>
          <AnimateIn delay={100}><SolutionsMappingTable rows={mappingRows} /></AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Compliance Context" heading="The regulatory obligations we configure ManageEngine around." /></AnimateIn>
          <div className="space-y-4">
            {complianceItems.map((c, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <ComplianceItem title={c.title} description={c.description} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading='Review ManageEngine implementation for your manufacturing IT environment.'
        body="Tell us about your Manufacturing environment and your ManageEngine requirements. We will tell you which products fit and how they would be configured for your sector."
        primaryCta={{ label: 'Book a Manufacturing Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

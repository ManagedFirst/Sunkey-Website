import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, NumberedChallenge, SolutionsMappingTable, ComplianceItem } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IndustryIllustration } from '@/components/illustrations/IndustryIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine for Educational Institutions in India | ManagedFirst Technologies',
  description: 'ManagedFirst implements ManageEngine for Indian universities, colleges, and schools. Student and staff identity lifecycle management, campus endpoint management, and DPDPA compliance.',
  canonicalPath: '/industries/education',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries/education' }, { name: 'Education', href: '/industries/education' }]

const challenges = [{"title": "Identity lifecycle management across academic cycles", "description": "Educational institutions process large-volume identity events at fixed points in the academic calendar — student intake, graduation, faculty joining and departure, and examination periods. Manual AD management at volume creates delays and errors."}, {"title": "Endpoint management across campus environments", "description": "Campus device environments include faculty workstations, student lab computers, library terminals, examination hall devices, and administrative PCs — each with different security requirements, software standards, and patch windows."}, {"title": "IT helpdesk for a large, non-technical user population", "description": "Students and faculty generate high IT support volumes with similar recurring request types — account issues, software access, network connectivity, and printing. A self-service portal with a knowledge base reduces tickets for recurring issues."}]
const mappingRows = [
  { "challenge": "Student and staff identity lifecycle", "product": "ADManager Plus + AD360", "configuration": "Bulk student account creation at intake. Provisioning templates by student year and programme. Faculty onboarding workflows. Graduation and exit deprovisioning at scale." },
  { "challenge": "Campus endpoint management", "product": "Endpoint Central", "configuration": "Device groups by campus location and device type. Patch schedules aligned to academic calendar — examination blackout periods configured. Software deployment for standard lab and faculty packages." },
  { "challenge": "Campus IT helpdesk", "product": "ServiceDesk Plus", "configuration": "Self-service portal with knowledge base articles for common student and faculty issues. Ticket categories and routing for campus IT support structure. SLA tiers for critical academic system incidents." },
  { "challenge": "Student data protection", "product": "ADAudit Plus + Log360", "configuration": "N/A", "description": "Access monitoring for systems containing student personal data — student information systems, examination databases, financial records. DPDPA compliance reports for audit evidence." },
  { "challenge": "Examination IT infrastructure monitoring", "product": "OpManager Plus", "configuration": "Critical examination infrastructure — servers, network, application availability — monitored with zero-tolerance alerting during examination periods. Differentiated thresholds for examination and regular academic periods." }
]
const complianceItems = [{"title": "DPDPA — Student Personal Data", "description": "Educational institutions hold extensive personal data about students — admission records, academic performance, financial information, and health data where relevant. DPDPA requires access controls and audit trails for systems processing this data."}, {"title": "UGC and AICTE IT Guidelines", "description": "UGC and AICTE impose IT governance requirements on universities and engineering institutions. IT service management documentation, access governance records, and security monitoring evidence support institutional compliance."}, {"title": "Examination Data Integrity", "description": "Examination data — results, marks, and records — requires access controls, audit trails, and integrity monitoring. The consequences of data tampering or unauthorised access are severe for institutions and students alike."}]

export default function IndustriesEducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='Industries | Education' heading='ManageEngine implementation for educational institutions — configured for academic cycles and multi-population identity management.' subheading='Identity lifecycle management for students, faculty, and administrative staff across academic cycles. Endpoint management for campus device pools. IT helpdesk for institutions running centralised IT support across departments.'
        primaryCta={{ label: 'Book an Education Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'See our services', href: '/services' }}
        visual={<IndustryIllustration title='Education' className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="IT Challenges" heading="Three IT challenges specific to Education organisations." /></AnimateIn>
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
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Implementation Mapping" heading="How ManageEngine addresses Education IT requirements." /></AnimateIn>
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

      <CTABand heading='Review ManageEngine implementation for your educational institution.'
        body="Tell us about your Education environment and your ManageEngine requirements. We will tell you which products fit and how they would be configured for your sector."
        primaryCta={{ label: 'Book an Education Implementation Review', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

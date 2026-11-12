import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, SolutionsMappingTable, NumberedChallenge } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { Button } from '@/components/ui/Button'
import { IconCheck, IconArrowRight } from '@/components/icons'
import { LeadMagnetForm } from '@/components/forms/Forms'
import { ComplianceIllustration } from '@/components/illustrations/ComplianceIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'DPDPA Compliance with ManageEngine | ManagedFirst Technologies',
  description: 'ManagedFirst helps Indian enterprises achieve DPDPA compliance using ManageEngine. Access controls, audit trails, monitoring, and compliance reporting — configured to the five technical obligations under the Act.',
  canonicalPath: '/dpdpa-compliance',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'DPDPA Compliance', href: '/dpdpa-compliance' }]

const obligations = [
  { number: 1, title: 'Implement Reasonable Security Safeguards', description: 'Section 8(5) requires data fiduciaries to implement appropriate technical and organisational measures to prevent personal data breaches. ManageEngine tools — Log360, Endpoint Central, and AD360 — deliver access controls, endpoint security, and monitoring that constitute reasonable safeguards when configured correctly.' },
  { number: 2, title: 'Breach Detection and Notification Capability', description: 'In the event of a breach, the Data Protection Board and affected data principals must be notified. Log360 provides the centralised log repository and incident timeline that makes breach notification accurate — and the detection capability that identifies breaches before they become discoveries.' },
  { number: 3, title: 'Access Controls and Accountability', description: 'Only personnel with legitimate purpose should access personal data. AD360 and ADManager Plus deliver role-based access controls, automated provisioning and deprovisioning, and access certification reviews. ADAudit Plus provides the audit trail of every access event.' },
  { number: 4, title: 'Data Accuracy and Deletion', description: 'Personal data must be accurate and deleted when no longer needed. ADAudit Plus tracks every modification to personal data records. ADManager Plus automates deprovisioning workflows that remove access when purpose is fulfilled.' },
  { number: 5, title: 'Response to Data Principal Rights Requests', description: 'Data principals have the right to access, correct, and erase their data. Responding accurately requires a searchable audit trail across all systems holding personal data. ADAudit Plus and Log360 provide cross-system log search by individual identity.' },
]

const mappingRows = [
  { challenge: 'Reasonable security safeguards (Section 8(5))', product: 'Log360 + Endpoint Central', configuration: 'SIEM monitoring for systems holding personal data. Endpoint patch compliance. USB controls. Access anomaly detection.' },
  { challenge: 'Breach detection and notification evidence', product: 'Log360 + ADAudit Plus', configuration: 'Centralised log repository with incident timeline capability. File server audit trail for breach scope determination.' },
  { challenge: 'Access controls and audit trail', product: 'AD360 + ADAudit Plus + PAM360', configuration: 'Role-based access controls. Automated provisioning/deprovisioning. Continuous access audit trail. Privileged access governance.' },
  { challenge: 'Data principal rights response', product: 'ADAudit Plus + Log360', configuration: 'Cross-system log search by individual identity. Access history production on request.' },
  { challenge: 'Access review and accountability', product: 'ADManager Plus + AD360', configuration: 'Scheduled access certification reviews. Role-change triggered access modifications. Deprovisioning audit trail.' },
]

const timeline = [
  { week: 'Week 1', title: 'ADAudit Plus', action: 'Deploy AD and file server auditing. Begin capturing access events immediately. Compliance report templates configured.' },
  { week: 'Week 2', title: 'Log360', action: 'Deploy SIEM. Connect log sources for all systems processing personal data. Correlation rules for access anomalies enabled.' },
  { week: 'Week 3', title: 'AD360 / ADManager Plus', action: 'Configure role-based access controls. Build provisioning and deprovisioning workflows. Access certification review scheduled.' },
  { week: 'Week 4', title: 'Reports and Documentation', action: 'DPDPA compliance reports configured for automated delivery. Configuration documentation produced. Team training on compliance evidence retrieval.' },
]

const faqs = [
  { question: 'Does DPDPA apply to our organisation?', answer: 'DPDPA applies to any entity that processes digital personal data of Indian citizens in connection with any profiling or offering of goods and services. If your organisation collects, stores, or processes personal data about employees, customers, or citizens, it almost certainly applies. Confirm applicability with your legal counsel — ManagedFirst advises on the technical implementation, not the regulatory interpretation.' },
  { question: 'What counts as "reasonable security safeguards" under DPDPA?', answer: 'The Act does not define reasonable safeguards with technical specificity. In the event of a breach, regulators will examine what controls were in place. Access controls limiting who reaches personal data, monitoring for unauthorised access, endpoint security on devices processing personal data, and patch management are the technical controls most likely to constitute reasonable safeguards.' },
  { question: 'What does ManagedFirst actually do in a DPDPA assessment?', answer: 'We review your current ManageEngine deployment against the five technical obligations. We identify which controls are in place, which are missing, and what configuration would close each gap. The assessment produces a written gap analysis and a prioritised implementation roadmap. It takes two to three weeks from first call to final recommendations.' },
  { question: 'Do you cover the policy and legal aspects of DPDPA compliance?', answer: 'No. ManagedFirst covers the technical IT implementation only — the controls, monitoring, and audit trails that constitute reasonable safeguards. Policy documentation, consent management, privacy notices, vendor agreements, and regulatory interpretation are handled by your legal and compliance team.' },
]

export default function DpdpaCompliancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema(faqs)) }} />

      <Hero variant="dark" eyebrow="Compliance | DPDPA"
        heading="DPDPA Compliance Support for Your IT Environment"
        subheading="DPDPA creates specific technical obligations for IT teams — access controls, monitoring, audit trails, and breach detection. ManagedFirst configures ManageEngine to support each obligation. Technical controls are one part of DPDPA compliance — policy, consent management, and regulatory interpretation are handled by your legal and compliance team."
        primaryCta={{ label: 'Get a Free DPDPA Assessment', href: '/free-consultation' }}
        secondaryCta={{ label: 'Download the DPDPA Checklist', href: '/resources/guides' }}
        visual={<ComplianceIllustration className='w-full max-w-[480px]' />}
        />

      {/* Five Obligations */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="The Five Technical Obligations" heading="Five DPDPA obligations your IT team must deliver." subheading="The policy obligations are handled by your legal and compliance team. These five are handled by IT." /></AnimateIn>
          <div className="space-y-4">
            {obligations.map((o, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="flex gap-6 p-space-5 bg-offwhite rounded-brand border border-border-default">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-display font-bold text-h4 flex-shrink-0">{o.number}</div>
                  <div>
                    <h3 className="font-display text-h4 font-bold text-navy mb-2">{o.title}</h3>
                    <p className="text-body text-charcoal leading-relaxed">{o.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mapping table */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="ManageEngine Tools Mapping" heading="Which ManageEngine products address each DPDPA obligation." /></AnimateIn>
          <AnimateIn delay={100}><SolutionsMappingTable rows={mappingRows} /></AnimateIn>
        </div>
      </section>

      {/* 30-Day Timeline */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-10"><SectionHeader eyebrow="Implementation Timeline" heading="Typical 30-Day Implementation Approach." subheading="For organisations with an existing ManageEngine environment, the core technical controls can typically be deployed in four weeks. Actual timeline depends on your environment, scope, and configuration requirements." /></AnimateIn>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-teal/20 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {timeline.map((t, i) => (
                <AnimateIn key={i} delay={i * 100}>
                  <div className="flex flex-col items-start md:items-center text-left md:text-center">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-display font-bold text-body-sm mb-4 flex-shrink-0">
                      {t.week.replace('Week ', 'W')}
                    </div>
                    <h4 className="font-display text-h4 font-bold text-navy mb-2">{t.title}</h4>
                    <p className="text-body-sm text-charcoal/80 leading-relaxed">{t.action}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="bg-offwhite section-py">
        <div className="site-container max-w-2xl">
          <AnimateIn>
            <div className="bg-white border border-teal rounded-brand p-space-6">
              <p className="text-overline uppercase tracking-widest text-teal mb-2">Free Download</p>
              <h2 className="font-display text-h2 font-bold text-navy mb-3">DPDPA Readiness Checklist for IT Teams</h2>
              <p className="text-body text-charcoal/80 leading-relaxed mb-6">Five technical DPDPA obligations mapped to ManageEngine tools and configurations. Use it to assess your current posture before engaging for a formal assessment.</p>
              <LeadMagnetForm resourceName="DPDPA Readiness Checklist" resourceType="checklist" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="Questions" heading="Common questions about DPDPA and ManageEngine." /></AnimateIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <details className="group bg-offwhite rounded-brand border border-border-default">
                  <summary className="flex items-center justify-between p-space-5 cursor-pointer font-display font-semibold text-navy hover:text-blue transition-colors list-none">
                    {faq.question}
                    <IconArrowRight size={18} className="flex-shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-space-5 pb-space-5 -mt-2">
                    <p className="text-body text-charcoal leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Get a free DPDPA readiness assessment." body="We review your current ManageEngine deployment against the five technical obligations, identify the configuration gaps, and tell you specifically what a compliant implementation would require." primaryCta={{ label: 'Book a Free DPDPA Assessment', href: '/free-consultation' }} secondaryCta={{ label: 'Write to us', href: '/contact' }} />
    </>
  )
}

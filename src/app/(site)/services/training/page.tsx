import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand, ImplementationSteps } from '@/components/sections/Sections'
import { SectionHeader, Breadcrumb } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { ServicesIllustration } from '@/components/illustrations/ServicesIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Training Services | ManagedFirst Technologies',
  description: 'ManagedFirst delivers ManageEngine training for Indian enterprises. Administrator, technician, and end user training against your specific configuration. Authorized partner, Chennai.',
  canonicalPath: '/services/training',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Training and Enablement', href: '/services/training' }]

const scenarios = [{"label": "After a new implementation", "body": "Post go-live training for administrators who will manage the platform and technicians who will use it. Delivered against your specific configuration — so training is immediately applicable, not theoretical."}, {"label": "When team turnover affects platform management", "body": "Key administrators with ManageEngine knowledge have left. New team members need structured onboarding to the platform — both the product and your organisation's specific configuration and workflows."}, {"label": "When platform capability is not being used", "body": "The deployment is running but your team is not using features that should reduce their workload. Training on the features specific to your configuration that your team is not using."}, {"label": "End user enablement for self-service", "body": "Self-service portal adoption requires end users to understand what the portal offers and how to use it. Structured end user sessions drive adoption and reduce helpdesk ticket volume."}]
const delivers = ["Administrator training — your deployment, your configuration, your workflows", "IT technician training — day-to-day operations, ticket handling, escalation paths", "End user training — self-service portal, how to submit requests, how to track status", "Role-specific reference documentation your team uses after the training session"]
const steps = [{"title": "Training Needs Assessment", "description": "We review your deployment, identify which roles need training, and agree the training scope and format with your team."}, {"title": "Training Design", "description": "We build training content against your specific configuration — not generic product screenshots. Training is relevant from the first session."}, {"title": "Training Delivery", "description": "We deliver training sessions by role — administrators, technicians, and end users separately. Sessions are hands-on against your production or training environment."}, {"title": "Reference Documentation and Follow-Up", "description": "We deliver role-specific reference documentation and are available for follow-up questions for two weeks after training completion."}]
const prevents = ["Deployments that stall because nobody on your team can manage or extend them", "Continued dependency on the implementation partner for routine operations", "Platform capability going unused because the team was not trained on it", "Slow self-service portal adoption because end users were not onboarded to the portal"]

export default function ServicesTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema({ name: 'Training and Enablement', description: 'ManagedFirst delivers ManageEngine training for Indian enterprises. Administrator, technician, and end user training against your specific configuration. Authorized partner, Chennai.', url: '/services/training' })) }} />

      <Hero variant="light" eyebrow='Services | Training' heading='Your team, running ManageEngine confidently after go-live.' subheading='Role-specific training for administrators, IT technicians, and end users — delivered against your specific configuration, not a generic product walkthrough. Your team operates the platform independently after training.'
        primaryCta={{ label: 'Book a Training Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        visual={<ServicesIllustration className='w-full max-w-[480px]' />}
        />

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="When this service fits" heading='Training is required in four situations.' /></AnimateIn>
          <div className="space-y-4">
            {scenarios.map((s, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="bg-white border-l-[3px] border-teal rounded-r-brand p-space-5">
                  <p className="text-overline uppercase tracking-wider text-teal mb-2">{s.label}</p>
                  <p className="text-body text-charcoal leading-relaxed">{s.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What you receive" heading='What every training engagement delivers.' /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {delivers.map((d, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex gap-3 p-4 bg-offwhite rounded-brand">
                  <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-body-sm text-charcoal leading-relaxed">{d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ImplementationSteps eyebrow="Our Process" heading='Four stages from training design to capability confirmation.' steps={steps} />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><SectionHeader eyebrow="What this service prevents" heading='What this service prevents.' /></AnimateIn>
          <div className="mt-6 space-y-3">
            {prevents.map((p, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex gap-3 p-4 bg-navy-light rounded-brand">
                  <span className="text-navy font-bold flex-shrink-0">·</span>
                  <p className="text-body-sm text-charcoal leading-relaxed">{p}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading='Ensure your team can manage and extend ManageEngine independently.'
        primaryCta={{ label: 'Book a Training Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

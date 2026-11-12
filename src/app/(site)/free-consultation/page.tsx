import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { IconCheck } from '@/components/icons'

export const metadata: Metadata = buildMetadata({
  title: 'Book a Free ManageEngine Consultation | ManagedFirst Technologies',
  description: 'Book a free 30-minute ManageEngine consultation with ManagedFirst. We review your environment, answer specific questions, and tell you honestly what a proper implementation involves.',
  canonicalPath: '/free-consultation',
})

// Real Google Calendar embed URL
const CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0uFGBJ7z1fsWLxaZaUQip_6FE6SQFMm9X94Y-2UYRBcS3g1wbnImKAwfMXq6qjLA3tpt5oOwn2?gv=true'

const situations = [
  { n: '1', title: 'Evaluating ManageEngine for the first time', body: 'You want an independent view of which products fit, what deployment involves, and what implementation cost looks like.' },
  { n: '2', title: 'ManageEngine is installed but not delivering', body: 'The platform is live but not working the way it was purchased to. You want to understand the configuration gap.' },
  { n: '3', title: 'You have a specific compliance requirement', body: 'DPDPA, ISO 27001, or RBI IT framework. Which ManageEngine tools address which obligations, and how.' },
  { n: '4', title: 'Planning a significant expansion', body: 'Adding new products or sites. You want to scope the change before engaging for implementation.' },
]

export default function FreeConsultationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema([
        { name: 'Home', href: '/' }, { name: 'Free Consultation', href: '/free-consultation' }
      ])) }} />

      <section className="bg-white border-b border-border-default py-14">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Free Consultation</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4 max-w-2xl leading-tight">
              Book a free 30&#8209;minute ManageEngine call.
            </h1>
            <p className="text-body-lg text-charcoal/65 max-w-xl">
              Tell us what you are trying to do. We will explain, in plain words, what a ManageEngine rollout would involve for you.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left — context */}
            <div className="lg:col-span-4 space-y-8">
              <AnimateIn direction="left">
                <h2 className="font-display text-[17px] font-bold text-navy mb-4">What happens on the call.</h2>
                <div className="space-y-3">
                  {[
                    'We review your current ManageEngine environment — or your planned deployment — against your stated requirements.',
                    'We answer specific questions about product fit, implementation scope, and effort. Working session, not a sales call.',
                    'We tell you honestly whether ManageEngine fits your requirements and what a proper implementation would involve.',
                  ].map((w, i) => (
                    <div key={i} className="flex gap-3">
                      <IconCheck size={14} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <p className="text-[13px] text-charcoal leading-relaxed">{w}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={100}>
                <h2 className="font-display text-[17px] font-bold text-navy mb-4">When to book.</h2>
                <div className="space-y-2.5">
                  {situations.map(s => (
                    <div key={s.n} className="flex gap-3 p-3 bg-white rounded-brand border border-border-default">
                      <span className="w-5 h-5 bg-teal-light rounded-full flex items-center justify-center text-teal font-bold text-[11px] flex-shrink-0">{s.n}</span>
                      <div>
                        <p className="text-navy font-semibold text-[12px] mb-0.5">{s.title}</p>
                        <p className="text-charcoal/60 text-[12px] leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={150}>
                <div className="p-4 bg-teal-light border border-teal/20 rounded-brand">
                  <p className="text-[12px] text-charcoal leading-relaxed">
                    After the call, if your requirements fit, we follow up with a written scope proposal within three business days. If they don&#39;t fit, we tell you that on the call.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Calendar embed */}
            <AnimateIn direction="right" className="lg:col-span-8">
              <div className="bg-white rounded-brand border border-border-default overflow-hidden shadow-sm">
                <iframe
                  src={CALENDAR_URL}
                  width="100%"
                  height="650"
                  frameBorder="0"
                  title="Book a free consultation with ManagedFirst Technologies"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-muted mt-3">
                Prefer email?{' '}
                <a href="mailto:vipul@managedfirsttechnologies.com" className="text-blue hover:underline">
                  vipul@managedfirsttechnologies.com
                </a>
                {' '}· Response within one business day.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}

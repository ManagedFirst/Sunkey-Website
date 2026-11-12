import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Button } from '@/components/ui/Button'
import { IconMail, IconPhone, IconClock, IconMapPin } from '@/components/icons'
import { ContactForm } from '@/components/forms/Forms'

export const metadata: Metadata = buildMetadata({
  title: 'Contact ManagedFirst Technologies — ManageEngine Partner Chennai',
  description: 'Contact ManagedFirst Technologies. We respond to all enquiries within one business day. Chennai-based authorized ManageEngine partner serving enterprises pan-India.',
  canonicalPath: '/contact',
})

const CONTACT_EMAIL = 'vipul@managedfirsttechnologies.com'
const CONTACT_PHONE = '+91 9962979406'

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema([
        { name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }
      ])) }} />

      <section className="bg-white border-b border-border-default py-14">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Contact</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4">Get in touch.</h1>
            <p className="text-body-lg text-charcoal/70 max-w-lg">
              We respond to all enquiries within one business day, Monday to Friday.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Form */}
            <div className="lg:col-span-7">
              <AnimateIn direction="left" className="mb-6">
                <h2 className="font-display text-h3 font-bold text-navy mb-1">Send us a message.</h2>
                <p className="text-body text-charcoal/60">We will respond within one business day.</p>
              </AnimateIn>
              <AnimateIn direction="left" delay={80}>
                <div className="bg-white rounded-brand border border-border-default p-6 lg:p-8">
                  <ContactForm />
                </div>
              </AnimateIn>
            </div>

            {/* Details sidebar */}
            <div className="lg:col-span-5">
              <AnimateIn direction="right" className="sticky top-24">
                <div className="bg-navy rounded-brand p-6 lg:p-8 text-white">
                  <h3 className="font-display font-bold text-white text-[18px] mb-6">Contact Details</h3>

                  <div className="space-y-5">
                    {[
                      { icon: <IconMail size={15} />, label: 'Email',
                        content: <a href={`mailto:${CONTACT_EMAIL}`} className="text-white text-[13px] hover:text-teal transition-colors">{CONTACT_EMAIL}</a> },
                      { icon: <IconPhone size={15} />, label: 'Phone',
                        content: <a href={`tel:+919962979406`} className="text-white text-[13px] hover:text-teal transition-colors">{CONTACT_PHONE}</a> },
                      { icon: <IconClock size={15} />, label: 'Hours',
                        content: <p className="text-white/75 text-[13px]">Monday to Friday, 9:00 AM - 6:00 PM IST</p> },
                      { icon: <IconMapPin size={15} />, label: 'Registered Office',
                        content: <p className="text-white/75 text-[13px] leading-relaxed">ManagedFirst Technologies Pvt. Ltd.<br />204/A, 7th Street, Malleeswari Nagar,<br />Madambakkam, Kancheepuram,<br />Tamil Nadu 600126</p> },
                    ].map(row => (
                      <div key={row.label} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-teal">{row.icon}</span>
                        </div>
                        <div>
                          <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium mb-1">{row.label}</p>
                          {row.content}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/45 text-xs mb-3">Prefer to book a call directly?</p>
                    <Button variant="primary-dark" href="/free-consultation" className="w-full justify-center">
                      Book a Free 30-Minute Call
                    </Button>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

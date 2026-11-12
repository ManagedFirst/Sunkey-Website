import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionHeader } from '@/components/ui/Elements'
import { CTABand } from '@/components/sections/Sections'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Case Studies | ManagedFirst Technologies',
  description: 'Real ManageEngine implementation outcomes from ManagedFirst engagements with Indian enterprises. Published with client approval.',
  canonicalPath: '/case-studies',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies' }]

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-white border-b border-border-default py-12">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Knowledge</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4">Case Studies.</h1>
            <p className="text-body-lg text-charcoal/80 max-w-2xl">Real ManageEngine implementation outcomes — published with client approval, written from structured client interviews, using actual numbers.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn>
            <div className="max-w-2xl bg-white rounded-brand border border-border-default p-space-6">
              <h2 className="font-display text-h3 font-bold text-navy mb-4">Our first case studies are on the way.</h2>
              <p className="text-body text-charcoal leading-relaxed mb-4">We publish case studies only after client approval and a structured interview, using real numbers. Our first ones are coming soon.</p>
              <p className="text-body text-charcoal leading-relaxed">Read our <Link href="/blog" className="text-blue hover:underline">implementation blog</Link> in the meantime, or <a href="/free-consultation" className="text-blue hover:underline">book a free consultation</a> to see if our approach fits your requirements.</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABand heading="Evaluate our implementation approach directly." body="A free 30-minute consultation is more useful than a case study library. We will review your requirements and tell you specifically what our approach would look like for your situation." primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }} secondaryCta={{ label: 'Read our implementation blog', href: '/blog' }} />
    </>
  )
}

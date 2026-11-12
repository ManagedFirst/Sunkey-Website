import { UIPanel, MetricRow, MiniChart } from '@/components/illustrations/UIPanel'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionHeader, SkeletonCard } from '@/components/ui/Elements'
import { BlogCard } from '@/components/ui/Cards'
import { CTABand } from '@/components/sections/Sections'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Blog | ManagedFirst Technologies',
  description: 'Practical guides on ManageEngine implementation — ITSM, IAM, endpoint management, SIEM, and compliance. Written by ManagedFirst\'s implementation team for Indian enterprise IT teams.',
  canonicalPath: '/blog',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]

// Blog articles — internal to this module, not exported (Next.js page files cannot export arbitrary constants)
const BLOG_ARTICLES = [
  { slug: 'why-most-manageengine-deployments-underperform', title: 'Why Most ManageEngine Deployments Underperform — And What Separates the Ones That Do Not', category: 'ManageEngine Implementation', excerpt: 'Most ManageEngine deployments configure the basics and stop. Here is what the gap between installation and operation looks like — and what the deployments that actually work have in common.' },
  { slug: 'dpdpa-compliance-checklist-for-it-teams', title: 'DPDPA Compliance Checklist for IT Teams — The Five Technical Obligations and the ManageEngine Controls That Address Them', category: 'Compliance', excerpt: 'DPDPA creates specific technical obligations for IT teams. This checklist covers what each obligation requires technically and which ManageEngine tools address it when configured correctly.' },
  { slug: 'how-to-evaluate-manageengine-servicedesk-plus', title: 'How to Evaluate ManageEngine ServiceDesk Plus — A Structured Approach for IT Teams', category: 'IT Operations and ITSM', excerpt: 'A vendor demonstration of ServiceDesk Plus running on default configuration is not a useful evaluation. This guide covers how to structure a ServiceDesk Plus evaluation against your actual use cases.' },
  { slug: 'manageengine-implementation-maturity-model', title: 'The ManageEngine Implementation Maturity Model — A Framework for Evaluating Deployment Completeness', category: 'ManageEngine Implementation', excerpt: 'Most ManageEngine deployments sit at Level 2 of a five-level maturity model. This article introduces the MIMM framework — a structured way to assess where your deployment sits and what Level 3, 4, and 5 look like.' },
]

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-white border-b border-border-default py-12">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Knowledge</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4">The ManagedFirst Blog.</h1>
            <p className="text-body-lg text-charcoal/80 max-w-2xl">Practical guidance on ManageEngine implementation, written for IT managers and IT heads at Indian enterprises.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          {/* Blog grid — content managed in Payload CMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-5 mb-10">
            {BLOG_ARTICLES.map((article, i) => (
              <AnimateIn key={article.slug} delay={i * 80}>
                <BlogCard
                  title={article.title}
                  excerpt={article.excerpt}
                  categories={[article.category.toLowerCase().replace(/ /g, '-')]}
                  publishedAt={new Date().toISOString()}
                  readTimeMinutes={8}
                  href={`/blog/${article.slug}`}
                />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <p className="text-body-sm text-muted text-center">Additional articles will appear here as they are published in the CMS.</p>
          </AnimateIn>
        </div>
      </section>

      <CTABand heading="Questions about ManageEngine implementation?" body="Our implementation team writes about what we see in the field. If your question is not answered in an article, book a free consultation." primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }} secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}

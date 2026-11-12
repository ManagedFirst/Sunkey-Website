import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: '',
  description: '',
  canonicalPath: '/case-studies/[slug]',
})

// Breadcrumbs: Home > Case Studies > [Title]
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "Case Studies", "href": "/case-studies"}, {"name": "[Title]", "href": "/case-studies/[slug]"}]

export default function CaseStudiesSlugPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }}
      />
      {/* ──────────────────────────────────────────────────────────────────
          Case Study
          H1: [Case Study Title]
          Subheadline: [Case study excerpt]
          
          TODO: Build the Case Study component and import it here.
          All copy for this page is in the content PDF (Batch 9).
          ─────────────────────────────────────────────────────────────── */}
      <main>
        <h1>[Case Study Title]</h1>
        <p>[Case study excerpt]</p>
        <p style={{ color: 'red' }}>
          🚧 Developer: Replace this placeholder with the actual Case Study component.
          Copy is in the website content PDF. Remove this message before go-live.
        </p>
      </main>
    </>
  )
}

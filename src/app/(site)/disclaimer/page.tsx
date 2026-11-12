import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'

export const metadata = buildMetadata({
  title: 'Disclaimer',
  description:
    'Important disclaimers regarding the information on the ManagedFirst Technologies website, including compliance illustrations and product references.',
  canonicalPath: '/disclaimer',
})

const EFFECTIVE_DATE = '12 November 2026'
const COMPANY = 'ManagedFirst Technologies Private Limited'
const EMAIL = 'vipul@managedfirsttechnologies.com'

export default function DisclaimerPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Disclaimer' , href: '/disclaimer' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumb) }}
      />

      <main className="bg-white">
        {/* Header */}
        <section className="bg-[#0F172A] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <AnimateIn>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#06B6D4]">
                Legal
              </p>
              <h1 className="text-3xl font-bold text-white md:text-4xl">Disclaimer</h1>
              <p className="mt-4 text-slate-400">
                Effective date: {EFFECTIVE_DATE}
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <AnimateIn>
              <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-semibold prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline">

                <p className="lead text-lg text-slate-600">
                  Please read this disclaimer carefully before relying on any information published on the website of {COMPANY} (&ldquo;ManagedFirst&rdquo;).
                </p>

                {/* 1 */}
                <h2 className="mt-10 text-xl">1. General information only</h2>
                <p>
                  The content published on this website — including pages, blog articles, guides, resources, and downloadable materials — is provided for <strong>general information purposes only</strong>. It does not constitute and should not be relied upon as legal, compliance, financial, technical, or professional advice of any kind.
                </p>
                <p>
                  You should always seek the advice of a qualified professional before making decisions based on any information found on this website.
                </p>

                {/* 2 */}
                <h2 className="mt-10 text-xl">2. Compliance and regulatory content</h2>
                <p>
                  ManagedFirst publishes content relating to regulatory and compliance frameworks, including but not limited to the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, <strong>ISO/IEC 27001</strong>, and the <strong>RBI IT Framework for Banks and NBFCs</strong>.
                </p>
                <p>
                  This content is provided to illustrate how IT management and monitoring tools can support — not guarantee — compliance with such frameworks. Specifically:
                </p>
                <ul>
                  <li>
                    Regulatory requirements are complex, evolving, and organisation-specific. The information on this website reflects our understanding as of the published date and may not reflect subsequent changes in law, regulation, or official guidance.
                  </li>
                  <li>
                    No content on this website constitutes a formal compliance assessment, audit opinion, or legal determination regarding your organisation&apos;s compliance status.
                  </li>
                  <li>
                    Implementing the tools or practices described does not guarantee compliance with any regulatory framework. Compliance is a multi-disciplinary undertaking requiring legal, technical, and operational measures tailored to your organisation.
                  </li>
                  <li>
                    You should engage qualified legal counsel and compliance professionals to assess your specific obligations.
                  </li>
                </ul>

                {/* 3 */}
                <h2 className="mt-10 text-xl">3. Product and technology references</h2>
                <p>
                  ManagedFirst is an authorised implementation and support partner for <strong>ManageEngine</strong> software products. References to ManageEngine products on this website — including OpManager, ServiceDesk Plus, Endpoint Central, Log360, ADAudit Plus, Analytics Plus, and AD360 — are made in our capacity as a partner and are for identification and descriptive purposes only.
                </p>
                <p>
                  ManageEngine®, its product names, and associated marks are trademarks or registered trademarks of Zoho Corporation Pvt. Ltd. ManagedFirst is not ManageEngine or Zoho Corporation Pvt. Ltd., and this website is not an official ManageEngine website.
                </p>
                <p>
                  Product features, pricing, licensing terms, support scope, and availability are subject to change by ManageEngine without notice. All representations about ManageEngine products are made in good faith but are not warranted as complete or current. Please refer to the <a href="https://www.manageengine.com" target="_blank" rel="noopener noreferrer">official ManageEngine website</a> for authoritative product information.
                </p>

                {/* 4 */}
                <h2 className="mt-10 text-xl">4. Illustrative examples and screenshots</h2>
                <p>
                  Diagrams, dashboard illustrations, screenshots, and worked examples appearing on this website are <strong>illustrative only</strong>. They are intended to demonstrate concepts and do not represent the actual configuration, data, or outcomes of any specific deployment, client environment, or audit. They should not be construed as a guarantee of results.
                </p>

                {/* 5 */}
                <h2 className="mt-10 text-xl">5. No warranty</h2>
                <p>
                  To the fullest extent permitted by law, ManagedFirst makes no representations or warranties — express or implied — as to the accuracy, completeness, reliability, or fitness for any particular purpose of any content on this website. We reserve the right to change, update, or remove content at any time without notice.
                </p>

                {/* 6 */}
                <h2 className="mt-10 text-xl">6. External links</h2>
                <p>
                  This website may contain links to third-party websites for your reference. ManagedFirst does not control and is not responsible for the content, accuracy, or availability of those sites. Links are provided for convenience only and do not imply our endorsement of the linked site or its operator.
                </p>

                {/* 7 */}
                <h2 className="mt-10 text-xl">7. Limitation of liability</h2>
                <p>
                  ManagedFirst shall not be liable for any loss or damage — including indirect, consequential, or incidental loss — arising from your use of or reliance on any information or material on this website. This includes decisions made on the basis of compliance, regulatory, or product information published here.
                </p>

                {/* 8 */}
                <h2 className="mt-10 text-xl">8. Contact</h2>
                <p>
                  If you have questions about any content on this website or would like to report an inaccuracy, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>

              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
    </>
  )
}

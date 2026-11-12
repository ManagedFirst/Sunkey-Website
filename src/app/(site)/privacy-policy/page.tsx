import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How ManagedFirst Technologies collects, uses, and protects your personal data under the Digital Personal Data Protection Act, 2023.',
  canonicalPath: '/privacy-policy',
})

const EFFECTIVE_DATE = '12 November 2026'
const COMPANY = 'ManagedFirst Technologies Private Limited'
const CIN = 'U62090TN2026PTC197745'
const ADDRESS =
  '204, 7th Street, Malleeswari Nagar, Madambakkam, Tambaram, Kanchipuram – 600 126, Tamil Nadu, India'
const EMAIL = 'vipul@managedfirsttechnologies.com'
const WEBSITE = 'https://managedfirsttechnologies.com'

export default function PrivacyPolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy' , href: '/privacy-policy' },
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
              <h1 className="text-3xl font-bold text-white md:text-4xl">Privacy Policy</h1>
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
                  {COMPANY} (&ldquo;ManagedFirst&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at{' '}
                  <a href={WEBSITE}>{WEBSITE}</a>. This Privacy Policy explains what personal data we collect when you visit our website or contact us, how we use it, and your rights under applicable law — including the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>.
                </p>

                <p className="text-slate-600">
                  Please read this policy carefully. By using our website you acknowledge that you have read and understood it.
                </p>

                {/* 1 */}
                <h2 className="mt-10 text-xl">1. Who we are</h2>
                <p>
                  <strong>Data Fiduciary (Controller):</strong><br />
                  {COMPANY}<br />
                  CIN: {CIN}<br />
                  {ADDRESS}
                </p>
                <p>
                  <strong>Grievance Officer / Privacy Contact:</strong><br />
                  Vipul Kumar S. Jain<br />
                  Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>

                {/* 2 */}
                <h2 className="mt-10 text-xl">2. What personal data we collect</h2>
                <p>
                  We collect personal data only when you actively provide it to us through the forms on our website.
                </p>

                <h3 className="text-base font-semibold text-slate-700">2.1 Contact form</h3>
                <p>When you submit an enquiry, we collect:</p>
                <ul>
                  <li>Full name</li>
                  <li>Business email address</li>
                  <li>Phone number (optional)</li>
                  <li>Company / organisation name</li>
                  <li>Your message</li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700">2.2 Resource request form</h3>
                <p>
                  When you request a downloadable resource (such as the DPDPA Compliance Checklist), we collect:
                </p>
                <ul>
                  <li>Full name</li>
                  <li>Business email address</li>
                  <li>Company / organisation name</li>
                </ul>
                <p>
                  You expressly consent to us sending the requested resource to the email address you provide.
                </p>

                <h3 className="text-base font-semibold text-slate-700">2.3 Analytics data</h3>
                <p>
                  We use <strong>Google Analytics 4</strong> and <strong>Google Tag Manager</strong> to understand how visitors use our website. These tools collect anonymised usage data, including:
                </p>
                <ul>
                  <li>Pages visited and time spent</li>
                  <li>Browser type, operating system, and device category</li>
                  <li>Approximate geographic region (country / city — not precise location)</li>
                  <li>Referring website or search term</li>
                </ul>
                <p>
                  This data is processed by Google LLC under their own Privacy Policy and Terms of Service. We do not receive or store individually identifiable analytics data.
                </p>

                {/* 3 */}
                <h2 className="mt-10 text-xl">3. How we use your personal data</h2>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Purpose</th>
                      <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Legal basis (DPDPA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2">Responding to your enquiry</td>
                      <td className="border border-slate-200 px-4 py-2">Your consent (provided at point of submission)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2">Delivering a requested resource</td>
                      <td className="border border-slate-200 px-4 py-2">Your consent (provided at point of submission)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2">Improving our website and services</td>
                      <td className="border border-slate-200 px-4 py-2">Our legitimate interests (anonymised analytics)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2">Following up on a business enquiry</td>
                      <td className="border border-slate-200 px-4 py-2">Our legitimate interests in providing our services</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2">Complying with legal obligations</td>
                      <td className="border border-slate-200 px-4 py-2">Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal data to any third party for their own marketing purposes.
                </p>

                {/* 4 */}
                <h2 className="mt-10 text-xl">4. How we share your data</h2>
                <p>
                  Your personal data is not shared with third parties except in the following limited circumstances:
                </p>
                <ul>
                  <li>
                    <strong>Google LLC</strong> — analytics data processed via Google Analytics 4 and Google Tag Manager. Google may transfer and process this data outside India. See{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
                  </li>
                  <li>
                    <strong>IT and hosting providers</strong> — service providers who operate the infrastructure on which our website and email are hosted, bound by confidentiality obligations.
                  </li>
                  <li>
                    <strong>Legal and regulatory authorities</strong> — where we are required to disclose data by law, court order, or governmental authority.
                  </li>
                </ul>

                {/* 5 */}
                <h2 className="mt-10 text-xl">5. Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies. For full details of the cookies we use and how to manage them, please see our{' '}
                  <a href="/cookie-policy">Cookie Policy</a>.
                </p>

                {/* 6 */}
                <h2 className="mt-10 text-xl">6. Data retention</h2>
                <p>
                  We retain personal data submitted through our forms for as long as is reasonably necessary to respond to your enquiry or fulfil a resource request, and for a period thereafter in case of follow-up. We do not retain personal data for longer than is necessary for the purpose for which it was collected. Analytics data is retained in accordance with Google&apos;s standard retention settings.
                </p>
                <p>
                  You may request deletion of your personal data at any time (see Section 7).
                </p>

                {/* 7 */}
                <h2 className="mt-10 text-xl">7. Your rights under DPDPA</h2>
                <p>
                  As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights:
                </p>
                <ul>
                  <li><strong>Right to access</strong> — to obtain confirmation of whether we process your personal data, and to receive a summary of it.</li>
                  <li><strong>Right to correction and erasure</strong> — to have inaccurate or incomplete data corrected, or to have your data erased.</li>
                  <li><strong>Right to grievance redressal</strong> — to have your grievances addressed within a reasonable time.</li>
                  <li><strong>Right to withdraw consent</strong> — where processing is based on your consent, to withdraw that consent at any time.</li>
                  <li><strong>Right to nominate</strong> — to nominate an individual to exercise your rights in the event of your death or incapacity.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days.
                </p>

                {/* 8 */}
                <h2 className="mt-10 text-xl">8. Data security</h2>
                <p>
                  We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>

                {/* 9 */}
                <h2 className="mt-10 text-xl">9. Children</h2>
                <p>
                  Our website is directed at business professionals and is not intended for children under the age of 18. We do not knowingly collect personal data from minors.
                </p>

                {/* 10 */}
                <h2 className="mt-10 text-xl">10. Changes to this policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acknowledgement of the updated policy.
                </p>

                {/* 11 */}
                <h2 className="mt-10 text-xl">11. Contact us</h2>
                <p>
                  If you have any questions, concerns, or grievances regarding this Privacy Policy or our data practices, please contact our Grievance Officer:
                </p>
                <p>
                  <strong>Vipul Kumar S. Jain</strong><br />
                  {COMPANY}<br />
                  {ADDRESS}<br />
                  Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <p>
                  You also have the right to lodge a complaint with the Data Protection Board of India once it is constituted under the DPDPA.
                </p>

              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
    </>
  )
}

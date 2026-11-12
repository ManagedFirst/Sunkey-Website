import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'

export const metadata = buildMetadata({
  title: 'Terms and Conditions',
  description:
    'The terms governing your use of the ManagedFirst Technologies website and the services described on it.',
  canonicalPath: '/terms-and-conditions',
})

const EFFECTIVE_DATE = '12 November 2026'
const COMPANY = 'ManagedFirst Technologies Private Limited'
const CIN = 'U62090TN2026PTC197745'
const ADDRESS =
  '204, 7th Street, Malleeswari Nagar, Madambakkam, Tambaram, Kanchipuram – 600 126, Tamil Nadu, India'
const EMAIL = 'vipul@managedfirsttechnologies.com'
const WEBSITE = 'https://managedfirsttechnologies.com'

export default function TermsAndConditionsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Terms and Conditions' , href: '/terms-and-conditions' },
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
              <h1 className="text-3xl font-bold text-white md:text-4xl">Terms and Conditions</h1>
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
                  These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website at{' '}
                  <a href={WEBSITE}>{WEBSITE}</a> (the &ldquo;Website&rdquo;) operated by {COMPANY} (&ldquo;ManagedFirst&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                </p>
                <p className="text-slate-600">
                  By accessing or using the Website, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the Website.
                </p>

                {/* 1 */}
                <h2 className="mt-10 text-xl">1. About us</h2>
                <p>
                  {COMPANY} is a company incorporated in India under the Companies Act, 2013.<br />
                  CIN: {CIN}<br />
                  Registered address: {ADDRESS}
                </p>
                <p>
                  ManagedFirst is an authorised implementation and support partner for ManageEngine software products. We are not ManageEngine or its parent company Zoho Corporation Pvt. Ltd.
                </p>

                {/* 2 */}
                <h2 className="mt-10 text-xl">2. Use of the Website</h2>
                <p>You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul>
                  <li>Use the Website in any way that violates applicable law or regulation;</li>
                  <li>Transmit any unsolicited commercial communications;</li>
                  <li>Attempt to gain unauthorised access to any part of the Website or its supporting systems;</li>
                  <li>Use automated tools to scrape, crawl, or index the Website without our prior written consent;</li>
                  <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Website without our express written permission.</li>
                </ul>

                {/* 3 */}
                <h2 className="mt-10 text-xl">3. Intellectual property</h2>
                <p>
                  All content on the Website — including text, graphics, logos, icons, images, data compilations, and software — is the property of ManagedFirst or its content suppliers and is protected by applicable Indian and international intellectual property laws.
                </p>
                <p>
                  You may view and print pages from the Website for your personal, non-commercial use only. No content may be reproduced, republished, uploaded, transmitted, or distributed in any form without our prior written consent.
                </p>
                <p>
                  ManageEngine®, OpManager®, ServiceDesk Plus®, Endpoint Central®, Log360®, ADAudit Plus®, Analytics Plus®, AD360®, and other ManageEngine product names are trademarks or registered trademarks of Zoho Corporation Pvt. Ltd. Their use on this Website is for identification purposes only and does not imply endorsement.
                </p>

                {/* 4 */}
                <h2 className="mt-10 text-xl">4. Information accuracy</h2>
                <p>
                  We endeavour to keep the information on the Website accurate and up to date. However, we make no warranty or representation — express or implied — as to the accuracy, completeness, or fitness for any particular purpose of any content on the Website.
                </p>
                <p>
                  Product features, pricing, licensing terms, and availability are subject to change by ManageEngine without notice. Please contact us or visit the official ManageEngine website for current information before making any purchasing decision.
                </p>

                {/* 5 */}
                <h2 className="mt-10 text-xl">5. No professional advice</h2>
                <p>
                  Nothing on this Website constitutes legal, financial, compliance, or technical advice. Content relating to regulatory frameworks such as the Digital Personal Data Protection Act (DPDPA), ISO 27001, or the RBI IT Framework is provided for general information and illustration only. You should seek independent professional advice before acting on any such information. See also our <a href="/disclaimer">Disclaimer</a>.
                </p>

                {/* 6 */}
                <h2 className="mt-10 text-xl">6. Third-party links</h2>
                <p>
                  The Website may contain links to third-party websites. These links are provided for your convenience only. We have no control over, and accept no responsibility for, the content or practices of any third-party website. A link does not constitute our endorsement of the linked site or its operator.
                </p>

                {/* 7 */}
                <h2 className="mt-10 text-xl">7. Limitation of liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, ManagedFirst shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from your use of, or inability to use, the Website or its content — including but not limited to loss of profits, data, goodwill, or other intangible losses.
                </p>
                <p>
                  This limitation applies whether the claim arises in contract, tort (including negligence), statute, or any other legal theory, and even if we have been advised of the possibility of such damages.
                </p>

                {/* 8 */}
                <h2 className="mt-10 text-xl">8. Disclaimer of warranties</h2>
                <p>
                  The Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>
                  We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>

                {/* 9 */}
                <h2 className="mt-10 text-xl">9. Privacy</h2>
                <p>
                  Your use of the Website is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms by reference.
                </p>

                {/* 10 */}
                <h2 className="mt-10 text-xl">10. Changes to these Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will take effect immediately upon posting to the Website. Your continued use of the Website after any change constitutes your acceptance of the updated Terms. We will update the effective date at the top of this page when changes are made.
                </p>

                {/* 11 */}
                <h2 className="mt-10 text-xl">11. Governing law and jurisdiction</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
                </p>

                {/* 12 */}
                <h2 className="mt-10 text-xl">12. Contact us</h2>
                <p>
                  If you have any questions about these Terms, please contact us:
                </p>
                <p>
                  {COMPANY}<br />
                  {ADDRESS}<br />
                  Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>

              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
    </>
  )
}

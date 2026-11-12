import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'

export const metadata = buildMetadata({
  title: 'Cookie Policy',
  description:
    'How ManagedFirst Technologies uses cookies and similar technologies on its website, and how you can manage your preferences.',
  canonicalPath: '/cookie-policy',
})

const EFFECTIVE_DATE = '12 November 2026'
const COMPANY = 'ManagedFirst Technologies Private Limited'
const EMAIL = 'vipul@managedfirsttechnologies.com'

export default function CookiePolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cookie Policy' , href: '/cookie-policy' },
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
              <h1 className="text-3xl font-bold text-white md:text-4xl">Cookie Policy</h1>
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
                  This Cookie Policy explains how {COMPANY} (&ldquo;ManagedFirst&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website.
                </p>

                {/* 1 */}
                <h2 className="mt-10 text-xl">1. What are cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit a website. They allow the website to recognise your device and remember certain information about your visit. Cookies can be &ldquo;session&rdquo; cookies (deleted when you close your browser) or &ldquo;persistent&rdquo; cookies (which remain on your device for a set period or until you delete them).
                </p>
                <p>
                  Similar technologies include web beacons, pixels, and local storage, which function in analogous ways to cookies. We refer to all of these collectively as &ldquo;cookies&rdquo; in this policy.
                </p>

                {/* 2 */}
                <h2 className="mt-10 text-xl">2. Cookies we use</h2>
                <p>We use the following categories of cookies on our website:</p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Category</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Provider</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Purpose</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 font-medium">Functional</td>
                        <td className="border border-slate-200 px-4 py-3">ManagedFirst</td>
                        <td className="border border-slate-200 px-4 py-3">Remembers your cookie consent preference so we don&apos;t show the banner on every visit.</td>
                        <td className="border border-slate-200 px-4 py-3">1 year (localStorage)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 font-medium">Analytics</td>
                        <td className="border border-slate-200 px-4 py-3">Google Analytics 4</td>
                        <td className="border border-slate-200 px-4 py-3">Collects anonymised data about how visitors use our website — pages visited, session duration, traffic source, and device type. Used to improve our website and content.</td>
                        <td className="border border-slate-200 px-4 py-3">Up to 2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 font-medium">Tag management</td>
                        <td className="border border-slate-200 px-4 py-3">Google Tag Manager</td>
                        <td className="border border-slate-200 px-4 py-3">Manages the deployment of analytics tags and scripts on our website. Does not itself collect personal data beyond what the tags it manages collect.</td>
                        <td className="border border-slate-200 px-4 py-3">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  We do not use advertising cookies, retargeting cookies, or cookies that track you across other websites.
                </p>

                {/* 3 */}
                <h2 className="mt-10 text-xl">3. Google Analytics and your data</h2>
                <p>
                  Google Analytics 4 uses cookies to collect anonymised usage statistics. The data collected is transmitted to and stored by Google on servers that may be located outside India. Google processes this data under its own Privacy Policy and Terms of Service.
                </p>
                <p>
                  We have configured Google Analytics with IP anonymisation enabled, so your full IP address is not stored. We do not use Google Analytics to identify individual users or combine analytics data with other personal data we hold about you.
                </p>
                <p>
                  You can learn more and opt out of Google Analytics measurement at:{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.
                </p>

                {/* 4 */}
                <h2 className="mt-10 text-xl">4. How to manage cookies</h2>
                <p>You have several options for managing or disabling cookies:</p>

                <h3 className="text-base font-semibold text-slate-700">4.1 Browser settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can typically find these under &ldquo;Privacy&rdquo; or &ldquo;Settings&rdquo;. Note that disabling cookies may affect the functionality of some websites.
                </p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700">4.2 Google Analytics opt-out</h3>
                <p>
                  You can install the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>{' '}
                  to prevent your data from being collected and used by Google Analytics across all websites that use it.
                </p>

                {/* 5 */}
                <h2 className="mt-10 text-xl">5. Changes to this policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically.
                </p>

                {/* 6 */}
                <h2 className="mt-10 text-xl">6. Contact us</h2>
                <p>
                  If you have any questions about how we use cookies, please contact us at{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
                <p>
                  For information about how we handle your personal data more broadly, please see our{' '}
                  <a href="/privacy-policy">Privacy Policy</a>.
                </p>

              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
    </>
  )
}

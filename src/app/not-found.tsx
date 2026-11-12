import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | ManagedFirst Technologies',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
}

const QUICK_LINKS = [
  { label: 'All Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'DPDPA Compliance', href: '/dpdpa-compliance' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' },
]

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 indicator */}
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#06B6D4]">
          Error 404
        </p>

        {/* Headline */}
        <h1 className="mb-4 text-4xl font-bold text-[#0F172A] md:text-5xl">
          Page not found
        </h1>

        {/* Subtext */}
        <p className="mb-10 text-lg text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Primary CTA */}
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-slate-100 pt-10">
          <p className="mb-5 text-sm font-medium text-slate-400 uppercase tracking-widest">
            Or browse these pages
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#2563EB] transition hover:text-blue-800 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://managedfirsttechnologies.com'
const SITE_NAME = 'ManagedFirst Technologies'

interface BuildMetadataOptions {
  title: string
  description: string
  canonicalPath: string       // e.g. '/solutions/iam'
  ogImage?: string            // Absolute URL — defaults to /og-default.png
  noIndex?: boolean           // Set true for admin/staging pages
}

export function buildMetadata({
  title,
  description,
  canonicalPath,
  ogImage,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${canonicalPath}`
  const image     = ogImage ?? `${SITE_URL}/og-default.png`

  return {
    title: {
      absolute: title,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

// ── Site-wide default metadata (used in root layout) ──────────────────────────
export const defaultMetadata: Metadata = {
  title: {
    template: '%s | ManagedFirst Technologies',
    default:  'ManageEngine Partner in India | ManagedFirst Technologies',
  },
  description:
    'ManagedFirst Technologies is an authorized ManageEngine partner in Chennai implementing ManageEngine solutions for Indian enterprises.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

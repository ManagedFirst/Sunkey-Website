// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — JSON-LD Schema Utilities
// Import and call the relevant function in each page's head.
// All functions return a plain object ready for JSON.stringify.
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://managedfirst.in'
const ORG_NAME  = 'ManagedFirst Technologies Private Limited'
const ORG_SHORT = 'ManagedFirst Technologies'

// ── Organization (use on Homepage and About page) ─────────────────────────────
export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    alternateName: ORG_SHORT,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,           // Add logo once available
    description: 'ManagedFirst Technologies is an authorized ManageEngine partner in Chennai implementing ManageEngine solutions for Indian enterprises.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '204/A, 7th Street, Malleeswari Nagar, Madambakkam',
      addressLocality: 'Kancheepuram',
      addressRegion: 'Tamil Nadu',
      postalCode: '600126',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Tamil'],
      areaServed: 'IN',
    },
    sameAs: [],    // Add social profile URLs once accounts are created
  }
}

// ── LocalBusiness (use on Contact page and Homepage) ──────────────────────────
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: ORG_NAME,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: '',                           // Fill once phone number is confirmed
    email: '',                               // Fill once email address is confirmed
    address: {
      '@type': 'PostalAddress',
      streetAddress: '204/A, 7th Street, Malleeswari Nagar, Madambakkam',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600126',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9164,     // Approximate — update with exact coordinates
      longitude: 80.1986,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '₹₹',
    servesCuisine: undefined,
  }
}

// ── Service page schema ────────────────────────────────────────────────────────
export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: ORG_SHORT,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'IT Consulting and Implementation',
  }
}

// ── Blog article schema ────────────────────────────────────────────────────────
export function articleSchema({
  title,
  description,
  url,
  publishedAt,
  imageUrl,
}: {
  title: string
  description: string
  url: string
  publishedAt: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: publishedAt,
    publisher: {
      '@type': 'Organization',
      name: ORG_SHORT,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  }
}

// ── FAQ schema ─────────────────────────────────────────────────────────────────
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

// ── Breadcrumb schema ─────────────────────────────────────────────────────────
export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }
}

// ── pSEO product+location schema ──────────────────────────────────────────────
export function pseoLocationSchema({
  productName,
  cityName,
  state,
  url,
}: {
  productName: string
  cityName: string
  state: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `ManageEngine ${productName} Implementation in ${cityName}`,
    description: `ManagedFirst Technologies implements ManageEngine ${productName} for enterprises in ${cityName}, ${state}.`,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: ORG_SHORT,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
  }
}

// ── Helper: render schema as <script> tag content ─────────────────────────────
// Usage in page:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: schemaToString(orgSchema()) }}
//   />
export function schemaToString(schema: object): string {
  return JSON.stringify(schema)
}

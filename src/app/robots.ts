import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://managedfirst.in'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',         // Payload CMS admin UI
          '/api/',           // API routes
          '/_next/',         // Next.js internals
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

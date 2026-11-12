import type { MetadataRoute } from 'next'
import { locationRecords } from '@/data/pseo-locations'
import { industryRecords }  from '@/data/pseo-industries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://managedfirst.in'
const now      = new Date()

// Helper
const url = (path: string, priority: number, freq: MetadataRoute.Sitemap[0]['changeFrequency']): MetadataRoute.Sitemap[0] => ({
  url:            `${SITE_URL}${path}`,
  lastModified:   now,
  changeFrequency:freq,
  priority,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ────────────────────────────────────────────────────────
    url('/',                              1.0, 'weekly'),
    url('/about',                         0.8, 'monthly'),
    url('/about/manageengine-partnership',0.7, 'monthly'),
    url('/contact',                       0.8, 'monthly'),
    url('/free-consultation',             0.9, 'weekly'),
    url('/dpdpa-compliance',              0.9, 'monthly'),

    // ── Solutions hubs ────────────────────────────────────────────────────
    url('/solutions',                     0.9, 'monthly'),
    url('/solutions/iam',                 0.9, 'monthly'),
    url('/solutions/itsm-esm',            0.9, 'monthly'),
    url('/solutions/uems',                0.9, 'monthly'),
    url('/solutions/itom',                0.9, 'monthly'),
    url('/solutions/siem',                0.9, 'monthly'),
    url('/solutions/it-analytics',        0.9, 'monthly'),

    // ── IAM products ──────────────────────────────────────────────────────
    url('/solutions/iam/ad360',               0.8, 'monthly'),
    url('/solutions/iam/admanager-plus',       0.8, 'monthly'),
    url('/solutions/iam/adself-service-plus',  0.8, 'monthly'),
    url('/solutions/iam/adaudit-plus',         0.8, 'monthly'),
    url('/solutions/iam/pam360',               0.8, 'monthly'),

    // ── ITSM/ESM products ─────────────────────────────────────────────────
    url('/solutions/itsm-esm/servicedesk-plus',    0.8, 'monthly'),
    url('/solutions/itsm-esm/servicedesk-plus-msp',0.8, 'monthly'),

    // ── UEMS products ─────────────────────────────────────────────────────
    url('/solutions/uems/endpoint-central',          0.8, 'monthly'),
    url('/solutions/uems/mobile-device-manager-plus',0.8, 'monthly'),

    // ── ITOM products ─────────────────────────────────────────────────────
    url('/solutions/itom/opmanager-plus',    0.8, 'monthly'),
    url('/solutions/itom/site24x7',          0.8, 'monthly'),
    url('/solutions/itom/applications-manager',0.8, 'monthly'),

    // ── SIEM products ─────────────────────────────────────────────────────
    url('/solutions/siem/log360',            0.8, 'monthly'),
    url('/solutions/siem/firewall-analyzer', 0.8, 'monthly'),

    // ── IT Analytics products ─────────────────────────────────────────────
    url('/solutions/it-analytics/analytics-plus',0.8, 'monthly'),

    // ── Services ─────────────────────────────────────────────────────────
    url('/services',                          0.9, 'monthly'),
    url('/services/consulting',               0.8, 'monthly'),
    url('/services/evaluation-assistance',    0.8, 'monthly'),
    url('/services/implementation',           0.8, 'monthly'),
    url('/services/implementation-methodology', 0.8, 'monthly'),  // Added in content v1.0
    url('/services/training',                 0.8, 'monthly'),
    url('/services/managed-services',         0.8, 'monthly'),
    url('/services/support-amc',              0.8, 'monthly'),

    // ── Industries ────────────────────────────────────────────────────────
    url('/industries/bfsi',         0.8, 'monthly'),
    url('/industries/manufacturing',0.8, 'monthly'),
    url('/industries/healthcare',   0.8, 'monthly'),
    url('/industries/it-ites',      0.8, 'monthly'),
    url('/industries/government-psu',0.8, 'monthly'),
    url('/industries/education',    0.8, 'monthly'),

    // ── Compliance ────────────────────────────────────────────────────────
    url('/compliance/iso27001',        0.8, 'monthly'),
    url('/compliance/rbi-it-framework',0.8, 'monthly'),

    // ── Resources ─────────────────────────────────────────────────────────
    url('/blog',            0.8, 'weekly'),
    url('/case-studies',    0.8, 'monthly'),
    url('/resources/guides',0.7, 'monthly'),

    // ── Programmatic SEO: Product × Location (72 pages) ──────────────────
    ...locationRecords.map(r =>
      url(`/solutions/${r.productSlug}/${r.citySlug}`, 0.6, 'monthly')
    ),

    // ── Programmatic SEO: Product × Industry (36 pages) ──────────────────
    ...industryRecords.map(r =>
      url(`/solutions/${r.productSlug}/${r.industrySlug}`, 0.6, 'monthly')
    ),
  ]
}

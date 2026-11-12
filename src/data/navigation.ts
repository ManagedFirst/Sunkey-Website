// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — Navigation Data
// Source: Complete Website Content v1.0, August 2026
// Navigation structure updated to reflect the v1.0 content document.
// Update this file to change menu structure — no component changes needed.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavSubItem {
  label: string
  href: string
  description?: string
}

export interface NavColumn {
  heading: string
  href: string
  items: NavSubItem[]
}

export interface NavItem {
  label: string
  href?: string
  columns?: NavColumn[]   // mega-menu (Products)
  items?: NavSubItem[]    // standard dropdown
  cta?: boolean           // renders as CTA button
}

// ── Products mega-menu columns ────────────────────────────────────────────────
// "Products" is a separate top-level nav item from "Solutions"
// Solutions → solution category hub pages
// Products  → individual product pages, grouped by category
const productsColumns: NavColumn[] = [
  {
    heading: 'Identity and Access Management',
    href: '/solutions/iam',
    items: [
      { label: 'AD360',              href: '/solutions/iam/ad360',              description: 'Unified IAM suite' },
      { label: 'ADManager Plus',     href: '/solutions/iam/admanager-plus',     description: 'AD management and automation' },
      { label: 'ADSelfService Plus', href: '/solutions/iam/adself-service-plus',description: 'Self-service password reset and MFA' },
      { label: 'ADAudit Plus',       href: '/solutions/iam/adaudit-plus',       description: 'Real-time AD auditing' },
      { label: 'PAM360',             href: '/solutions/iam/pam360',             description: 'Privileged access management' },
    ],
  },
  {
    heading: 'ITSM / ESM',
    href: '/solutions/itsm-esm',
    items: [
      { label: 'ServiceDesk Plus',     href: '/solutions/itsm-esm/servicedesk-plus',     description: 'Enterprise ITSM platform' },
      { label: 'ServiceDesk Plus MSP', href: '/solutions/itsm-esm/servicedesk-plus-msp', description: 'Multi-tenant ITSM' },
    ],
  },
  {
    heading: 'Unified Endpoint Management and Security',
    href: '/solutions/uems',
    items: [
      { label: 'Endpoint Central',          href: '/solutions/uems/endpoint-central',           description: 'Unified endpoint management' },
      { label: 'Mobile Device Manager Plus', href: '/solutions/uems/mobile-device-manager-plus', description: 'Enterprise MDM' },
    ],
  },
  {
    heading: 'IT Operations Management',
    href: '/solutions/itom',
    items: [
      { label: 'OpManager Plus',      href: '/solutions/itom/opmanager-plus',     description: 'Network and server monitoring' },
      { label: 'Site24x7',            href: '/solutions/itom/site24x7',           description: 'Cloud-based monitoring' },
      { label: 'Applications Manager',href: '/solutions/itom/applications-manager',description: 'Application performance monitoring' },
    ],
  },
  {
    heading: 'SIEM',
    href: '/solutions/siem',
    items: [
      { label: 'Log360',           href: '/solutions/siem/log360',           description: 'Unified SIEM with UEBA' },
      { label: 'ADAudit Plus',     href: '/solutions/iam/adaudit-plus',      description: 'AD and file server auditing' },
      { label: 'Firewall Analyzer',href: '/solutions/siem/firewall-analyzer',description: 'Firewall log management' },
    ],
  },
  {
    heading: 'IT Analytics',
    href: '/solutions/it-analytics',
    items: [
      { label: 'Analytics Plus', href: '/solutions/it-analytics/analytics-plus', description: 'Unified IT analytics' },
    ],
  },
]

// ── Full navigation structure ─────────────────────────────────────────────────
// Source: Complete Website Content v1.0, Navigation Structure section
export const navigation: NavItem[] = [
  {
    // Solutions → solution category hub pages
    label: 'Solutions',
    items: [
      { label: 'Identity and Access Management',           href: '/solutions/iam',          description: 'AD management, PAM, identity governance' },
      { label: 'IT Service and Enterprise Service Mgmt',   href: '/solutions/itsm-esm',     description: 'Service desk, ITSM, ESM' },
      { label: 'Unified Endpoint Management and Security', href: '/solutions/uems',          description: 'Endpoint management and MDM' },
      { label: 'IT Operations Management',                 href: '/solutions/itom',          description: 'Network monitoring and APM' },
      { label: 'Security Information and Event Mgmt',      href: '/solutions/siem',          description: 'SIEM, log management, threat detection' },
      { label: 'IT Analytics',                             href: '/solutions/it-analytics',  description: 'Unified IT reporting and analytics' },
    ],
  },
  {
    // Products → individual product pages, grouped by category (mega-menu)
    label: 'Products',
    columns: productsColumns,
  },
  {
    label: 'Services',
    items: [
      { label: 'Consulting',                  href: '/services/consulting' },
      { label: 'Evaluation Assistance',       href: '/services/evaluation-assistance' },
      { label: 'Implementation',              href: '/services/implementation' },
      { label: 'Implementation Methodology',  href: '/services/implementation-methodology' },
      { label: 'Training and Enablement',     href: '/services/training' },
      { label: 'Managed Services',            href: '/services/managed-services' },
      { label: 'Support and AMC',             href: '/services/support-amc' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Banking and Financial Services', href: '/industries/bfsi' },
      { label: 'Manufacturing',                  href: '/industries/manufacturing' },
      { label: 'Healthcare',                     href: '/industries/healthcare' },
      { label: 'IT and ITES',                    href: '/industries/it-ites' },
      { label: 'Government and PSU',             href: '/industries/government-psu' },
      { label: 'Education',                      href: '/industries/education' },
    ],
  },
  {
    // Compliance is now a standalone top-level nav item
    label: 'Compliance',
    items: [
      { label: 'DPDPA Compliance',  href: '/dpdpa-compliance',            description: 'Digital Personal Data Protection Act' },
      { label: 'ISO 27001',         href: '/compliance/iso27001',          description: 'ISO 27001 with ManageEngine' },
      { label: 'RBI IT Framework',  href: '/compliance/rbi-it-framework',  description: 'RBI IT framework for banks and NBFCs' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog',                   href: '/blog' },
      { label: 'Case Studies',           href: '/case-studies' },
      { label: 'Guides and Downloads',   href: '/resources/guides' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About ManagedFirst',       href: '/about' },
      { label: 'ManageEngine Partnership', href: '/about/manageengine-partnership' },
    ],
  },
  {
    label: 'Book a Consultation',
    href: '/free-consultation',
    cta: true,
  },
]

// ── Footer columns ─────────────────────────────────────────────────────────────
// Source: Complete Website Content v1.0, Navigation Structure section
// Footer now has 5 columns (was 3)
export const footerColumns = [
  {
    heading: 'Solutions',
    items: [
      { label: 'Identity and Access Management',  href: '/solutions/iam' },
      { label: 'ITSM / ESM',                      href: '/solutions/itsm-esm' },
      { label: 'Unified Endpoint Management',      href: '/solutions/uems' },
      { label: 'IT Operations Management',         href: '/solutions/itom' },
      { label: 'SIEM',                             href: '/solutions/siem' },
      { label: 'IT Analytics',                     href: '/solutions/it-analytics' },
    ],
  },
  {
    heading: 'Services',
    items: [
      { label: 'Consulting',                 href: '/services/consulting' },
      { label: 'Evaluation Assistance',      href: '/services/evaluation-assistance' },
      { label: 'Implementation',             href: '/services/implementation' },
      { label: 'Implementation Methodology', href: '/services/implementation-methodology' },
      { label: 'Training and Enablement',    href: '/services/training' },
      { label: 'Managed Services',           href: '/services/managed-services' },
      { label: 'Support and AMC',            href: '/services/support-amc' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About ManagedFirst',       href: '/about' },
      { label: 'ManageEngine Partnership', href: '/about/manageengine-partnership' },
      { label: 'Industries',               href: '/industries/bfsi' },
      { label: 'Contact Us',               href: '/contact' },
    ],
  },
  {
    heading: 'Compliance',
    items: [
      { label: 'DPDPA Compliance',  href: '/dpdpa-compliance' },
      { label: 'ISO 27001',         href: '/compliance/iso27001' },
      { label: 'RBI IT Framework',  href: '/compliance/rbi-it-framework' },
    ],
  },
  {
    // Knowledge column — new in v1.0
    heading: 'Knowledge',
    items: [
      { label: 'Blog',                            href: '/blog' },
      { label: 'Case Studies',                    href: '/case-studies' },
      { label: 'Guides and Downloads',            href: '/resources/guides' },
      { label: 'Implementation Methodology',      href: '/services/implementation-methodology' },
      { label: 'MIMM Quick Assessment Guide',     href: '/resources/guides#mimm-quick-assessment' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy Policy',      href: '/privacy-policy' },
      { label: 'Terms & Conditions',  href: '/terms-and-conditions' },
      { label: 'Disclaimer',          href: '/disclaimer' },
      { label: 'Cookie Policy',       href: '/cookie-policy' },
    ],
  },
]

// ── Footer bottom bar ──────────────────────────────────────────────────────────
export const footerBottomBar = {
  copyright: '© 2026 ManagedFirst Technologies Private Limited. All rights reserved.',
  cin: '',
  address: '204/A, 7th Street, Malleeswari Nagar, Madambakkam, Kancheepuram, Tamil Nadu 600126',
}

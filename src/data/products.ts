// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — ManageEngine Product Data
// Used by programmatic SEO pages, solution hubs, and schema markup.
// ─────────────────────────────────────────────────────────────────────────────

export interface Product {
  slug: string
  name: string
  category: 'iam' | 'itsm-esm' | 'uems' | 'itom' | 'siem' | 'it-analytics'
  categoryLabel: string
  tagline: string
  href: string
  description: string
}

export const products: Product[] = [
  {
    slug: 'ad360',
    name: 'AD360',
    category: 'iam',
    categoryLabel: 'Identity and Access Management',
    tagline: 'Unified IAM suite for Indian enterprises',
    href: '/solutions/iam/ad360',
    description: 'ManageEngine AD360 is a unified identity and access management platform covering user lifecycle management, MFA, SSO, identity governance, and compliance auditing.',
  },
  {
    slug: 'admanager-plus',
    name: 'ADManager Plus',
    category: 'iam',
    categoryLabel: 'Identity and Access Management',
    tagline: 'Active Directory management and automation',
    href: '/solutions/iam/admanager-plus',
    description: 'ManageEngine ADManager Plus automates Active Directory user provisioning, bulk operations, and helpdesk delegation without domain admin access.',
  },
  {
    slug: 'adself-service-plus',
    name: 'ADSelfService Plus',
    category: 'iam',
    categoryLabel: 'Identity and Access Management',
    tagline: 'Self-service password reset and MFA',
    href: '/solutions/iam/adself-service-plus',
    description: 'ManageEngine ADSelfService Plus enables employees to reset their own AD passwords and unlock accounts without IT involvement, with MFA verification.',
  },
  {
    slug: 'adaudit-plus',
    name: 'ADAudit Plus',
    category: 'iam',
    categoryLabel: 'Identity and Access Management',
    tagline: 'Real-time Active Directory auditing',
    href: '/solutions/iam/adaudit-plus',
    description: 'ManageEngine ADAudit Plus provides real-time auditing of Active Directory, Windows file servers, and cloud environments with compliance reports for DPDPA and ISO 27001.',
  },
  {
    slug: 'pam360',
    name: 'PAM360',
    category: 'iam',
    categoryLabel: 'Identity and Access Management',
    tagline: 'Privileged access management',
    href: '/solutions/iam/pam360',
    description: 'ManageEngine PAM360 vaults privileged credentials, manages session recording, and enforces just-in-time access for critical system administration.',
  },
  {
    slug: 'servicedesk-plus',
    name: 'ServiceDesk Plus',
    category: 'itsm-esm',
    categoryLabel: 'IT Service Management',
    tagline: 'Enterprise ITSM and service management',
    href: '/solutions/itsm-esm/servicedesk-plus',
    description: 'ManageEngine ServiceDesk Plus is a full enterprise ITSM platform covering incident management, change management, asset management, and enterprise service delivery.',
  },
  {
    slug: 'servicedesk-plus-msp',
    name: 'ServiceDesk Plus MSP',
    category: 'itsm-esm',
    categoryLabel: 'IT Service Management',
    tagline: 'Multi-tenant ITSM for service providers',
    href: '/solutions/itsm-esm/servicedesk-plus-msp',
    description: 'ManageEngine ServiceDesk Plus MSP provides multi-tenant ITSM for IT service providers and group companies with separate service desk instances per client.',
  },
  {
    slug: 'endpoint-central',
    name: 'Endpoint Central',
    category: 'uems',
    categoryLabel: 'Unified Endpoint Management',
    tagline: 'Unified endpoint management and security',
    href: '/solutions/uems/endpoint-central',
    description: 'ManageEngine Endpoint Central manages Windows, macOS, Linux, iOS, and Android devices from one console — patch management, software deployment, and endpoint security.',
  },
  {
    slug: 'mobile-device-manager-plus',
    name: 'Mobile Device Manager Plus',
    category: 'uems',
    categoryLabel: 'Unified Endpoint Management',
    tagline: 'Enterprise MDM for corporate and BYOD devices',
    href: '/solutions/uems/mobile-device-manager-plus',
    description: 'ManageEngine Mobile Device Manager Plus manages iOS, Android, and Windows mobile devices with separate policies for corporate-owned and BYOD devices.',
  },
  {
    slug: 'opmanager-plus',
    name: 'OpManager Plus',
    category: 'itom',
    categoryLabel: 'IT Operations Management',
    tagline: 'IT operations and network monitoring suite',
    href: '/solutions/itom/opmanager-plus',
    description: 'ManageEngine OpManager Plus combines network monitoring, server monitoring, configuration management, and bandwidth analysis in a unified IT operations platform.',
  },
  {
    slug: 'site24x7',
    name: 'Site24x7',
    category: 'itom',
    categoryLabel: 'IT Operations Management',
    tagline: 'Cloud-based infrastructure and website monitoring',
    href: '/solutions/itom/site24x7',
    description: 'ManageEngine Site24x7 is a cloud-based monitoring platform for websites, servers, applications, networks, and cloud infrastructure.',
  },
  {
    slug: 'applications-manager',
    name: 'Applications Manager',
    category: 'itom',
    categoryLabel: 'IT Operations Management',
    tagline: 'Application performance monitoring',
    href: '/solutions/itom/applications-manager',
    description: 'ManageEngine Applications Manager monitors Java, .NET, database, and middleware performance at the code and query level.',
  },
  {
    slug: 'log360',
    name: 'Log360',
    category: 'siem',
    categoryLabel: 'Security Information and Event Management',
    tagline: 'Unified SIEM with UEBA and compliance reporting',
    href: '/solutions/siem/log360',
    description: 'ManageEngine Log360 is a unified SIEM platform with log management, real-time threat detection, user behaviour analytics, and DPDPA compliance reporting.',
  },
  {
    slug: 'firewall-analyzer',
    name: 'Firewall Analyzer',
    category: 'siem',
    categoryLabel: 'Security Information and Event Management',
    tagline: 'Firewall log management and policy analysis',
    href: '/solutions/siem/firewall-analyzer',
    description: 'ManageEngine Firewall Analyzer collects and analyses logs from firewall and network security devices for traffic visibility, policy analysis, and compliance reports.',
  },
  {
    slug: 'analytics-plus',
    name: 'Analytics Plus',
    category: 'it-analytics',
    categoryLabel: 'IT Analytics',
    tagline: 'Unified IT analytics and reporting',
    href: '/solutions/it-analytics/analytics-plus',
    description: 'ManageEngine Analytics Plus connects data from ServiceDesk Plus, OpManager, and Endpoint Central into unified dashboards and reports for IT leadership.',
  },
]

// pSEO products — the 6 products used for programmatic SEO pages
export const pseoProducts = [
  { slug: 'servicedesk-plus',  name: 'ServiceDesk Plus',  short: 'ITSM' },
  { slug: 'endpoint-central',  name: 'Endpoint Central',  short: 'Endpoint Management' },
  { slug: 'log360',            name: 'Log360',            short: 'SIEM' },
  { slug: 'ad360',             name: 'AD360',             short: 'IAM' },
  { slug: 'pam360',            name: 'PAM360',            short: 'Privileged Access Management' },
  { slug: 'opmanager-plus',    name: 'OpManager Plus',    short: 'Network Monitoring' },
] as const

export type PseoProductSlug = typeof pseoProducts[number]['slug']

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

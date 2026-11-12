// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — Programmatic SEO: Product × Industry
// 36 records (6 products × 6 industries).
// Each record generates one static page at /solutions/[productSlug]/[industrySlug]
// ─────────────────────────────────────────────────────────────────────────────

export interface IndustryRecord {
  productSlug: string
  productName: string
  industrySlug: string
  industryName: string
  metaTitle: string
  metaDescription: string
  h1: string
  introParagraph: string
  primaryUseCase: string
  complianceNote: string
}

const industries = [
  {
    slug: 'bfsi',
    name: 'Banking and Financial Services',
    short: 'BFSI',
    compliance: 'RBI IT framework requirements, DPDPA obligations for customer financial data, and SEBI cybersecurity guidelines',
    context: 'banks, NBFCs, brokerage firms, and insurance companies',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    short: 'manufacturing',
    compliance: 'DPDPA obligations for employee and customer data and ISO 27001 requirements for export-oriented manufacturers',
    context: 'manufacturing organisations with plant floor and corporate IT environments',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    short: 'healthcare',
    compliance: 'DPDPA requirements for sensitive patient health data and information security requirements for NABH-accredited organisations',
    context: 'hospitals, diagnostic chains, healthcare companies, and medical institutions',
  },
  {
    slug: 'it-ites',
    name: 'IT and ITES',
    short: 'IT and ITES',
    compliance: 'ISO 27001 certification requirements, DPDPA obligations as data processors for clients, and client-driven security audit requirements',
    context: 'IT software companies, IT services firms, BPOs, and KPOs',
  },
  {
    slug: 'government',
    name: 'Government and PSU',
    short: 'government',
    compliance: 'DPDPA obligations for citizen and employee data, CERT-In directions, and NIC guidelines for government IT',
    context: 'government departments, PSUs, and government-adjacent organisations',
  },
  {
    slug: 'education',
    name: 'Education',
    short: 'education',
    compliance: 'DPDPA requirements for student personal data and UGC and AICTE IT guidelines for higher educational institutions',
    context: 'universities, engineering colleges, autonomous institutions, and school groups',
  },
]

const productIndustryTemplates: Record<string, {
  metaTitle: (industry: string, industryShort: string) => string
  metaDescription: (industry: string) => string
  h1: (industry: string) => string
  intro: (industry: string, context: string) => string
  useCase: (industry: string, context: string, compliance: string) => string
  compliance: (compliance: string) => string
}> = {
  'servicedesk-plus': {
    metaTitle: (industry, short) =>
      `ManageEngine ServiceDesk Plus for ${short} | ManagedFirst Technologies`,
    metaDescription: (industry) =>
      `ManagedFirst implements ManageEngine ServiceDesk Plus for ${industry} organisations in India. ITSM configured for sector-specific SLAs, workflows, and compliance requirements.`,
    h1: (industry) =>
      `ManageEngine ServiceDesk Plus for ${industry} organisations in India.`,
    intro: (industry, context) =>
      `ManagedFirst Technologies implements ManageEngine ServiceDesk Plus for ${context} across India. We configure incident management, change workflows, and service delivery for the specific operational requirements of ${industry} IT environments.`,
    useCase: (industry, context, compliance) =>
      `${industry} IT teams manage support across distinct operational areas with different SLA requirements. We configure ServiceDesk Plus with service categories and escalation paths that reflect ${industry} operational priorities — ensuring critical system incidents are separated from routine IT requests.`,
    compliance: (compliance) =>
      `ServiceDesk Plus change management with documented approval chains and audit trails supports ${compliance}.`,
  },
  'endpoint-central': {
    metaTitle: (industry, short) =>
      `ManageEngine Endpoint Central for ${short} | ManagedFirst Technologies`,
    metaDescription: (industry) =>
      `ManagedFirst implements ManageEngine Endpoint Central for ${industry} organisations in India. Endpoint management and security configured for sector-specific device environments and compliance requirements.`,
    h1: (industry) =>
      `ManageEngine Endpoint Central for ${industry} organisations in India.`,
    intro: (industry, context) =>
      `ManagedFirst Technologies implements ManageEngine Endpoint Central for ${context} across India. We configure patch management, endpoint security policies, and device fleet management for the specific device mix and security requirements of ${industry} environments.`,
    useCase: (industry, context, compliance) =>
      `${industry} device environments typically involve a mix of device types, locations, and security requirements. We configure Endpoint Central with separate policy groups for each environment type, patch schedules aligned to operational windows, and security policies calibrated for ${industry} risk profiles.`,
    compliance: (compliance) =>
      `Endpoint Central's patch compliance reporting and security policy documentation supports ${compliance}.`,
  },
  'log360': {
    metaTitle: (industry, short) =>
      `ManageEngine Log360 SIEM for ${short} | ManagedFirst Technologies`,
    metaDescription: (industry) =>
      `ManagedFirst implements ManageEngine Log360 SIEM for ${industry} organisations in India. Log management, threat detection, and compliance reporting configured for sector-specific requirements.`,
    h1: (industry) =>
      `ManageEngine Log360 SIEM for ${industry} organisations in India.`,
    intro: (industry, context) =>
      `ManagedFirst Technologies implements ManageEngine Log360 for ${context} across India. We configure centralised log management, correlation rules for ${industry}-relevant threat patterns, and compliance reports for the regulatory frameworks applicable to ${industry} organisations.`,
    useCase: (industry, context, compliance) =>
      `${industry} security teams need a SIEM that is tuned for their specific threat profile and compliance requirements. We configure Log360 with correlation rules and alert thresholds relevant to ${industry} attack scenarios, and compliance report templates aligned to ${industry} regulatory obligations.`,
    compliance: (compliance) =>
      `Log360's compliance reporting capabilities address ${compliance}.`,
  },
  'ad360': {
    metaTitle: (industry, short) =>
      `ManageEngine AD360 IAM for ${short} | ManagedFirst Technologies`,
    metaDescription: (industry) =>
      `ManagedFirst implements ManageEngine AD360 for ${industry} organisations in India. Identity governance, access management, and DPDPA-aligned access controls for sector-specific requirements.`,
    h1: (industry) =>
      `ManageEngine AD360 identity management for ${industry} organisations in India.`,
    intro: (industry, context) =>
      `ManagedFirst Technologies implements ManageEngine AD360 for ${context} across India. We configure user lifecycle management, role-based access controls, and identity governance for the specific workforce structure and compliance requirements of ${industry} organisations.`,
    useCase: (industry, context, compliance) =>
      `${industry} organisations manage access across diverse user populations — each requiring role-appropriate access to specific systems. AD360's provisioning templates and access governance workflows ensure that access is granted based on current role and removed promptly when roles change.`,
    compliance: (compliance) =>
      `AD360's access certification reviews, deprovisioning audit trails, and compliance reports support ${compliance}.`,
  },
  'pam360': {
    metaTitle: (industry, short) =>
      `ManageEngine PAM360 for ${short} | ManagedFirst Technologies`,
    metaDescription: (industry) =>
      `ManagedFirst implements ManageEngine PAM360 for ${industry} organisations in India. Privileged access management and session recording configured for sector-specific security requirements.`,
    h1: (industry) =>
      `ManageEngine PAM360 privileged access management for ${industry} organisations in India.`,
    intro: (industry, context) =>
      `ManagedFirst Technologies implements ManageEngine PAM360 for ${context} across India. We configure privileged credential vaulting, session recording, and access approval workflows for the critical systems and compliance requirements specific to ${industry} environments.`,
    useCase: (industry, context, compliance) =>
      `${industry} organisations have critical systems where privileged access must be strictly controlled, monitored, and audited. PAM360 vaults all privileged credentials for these systems, records every privileged session, and creates an approval record for every access event.`,
    compliance: (compliance) =>
      `PAM360's privileged access audit trails and session recordings support ${compliance}.`,
  },
  'opmanager-plus': {
    metaTitle: (industry, short) =>
      `ManageEngine OpManager Plus for ${short} | ManagedFirst Technologies`,
    metaDescription: (industry) =>
      `ManagedFirst implements ManageEngine OpManager Plus for ${industry} organisations in India. Network monitoring and infrastructure visibility configured for sector-specific IT environments.`,
    h1: (industry) =>
      `ManageEngine OpManager Plus IT monitoring for ${industry} organisations in India.`,
    intro: (industry, context) =>
      `ManagedFirst Technologies implements ManageEngine OpManager Plus for ${context} across India. We configure network monitoring, server monitoring, and operational dashboards for the specific infrastructure characteristics and monitoring requirements of ${industry} IT environments.`,
    useCase: (industry, context, compliance) =>
      `${industry} IT environments have infrastructure characteristics — network topology, critical system dependencies, monitoring priority levels — that require configuration specific to the sector. We configure OpManager Plus thresholds, alert escalation policies, and dashboards based on ${industry} operational priorities.`,
    compliance: (compliance) =>
      `OpManager Plus's configuration change management and audit trails support ${compliance}.`,
  },
}

// ── Generate all 36 records ───────────────────────────────────────────────────
export const industryRecords: IndustryRecord[] = industries.flatMap(industry =>
  Object.entries(productIndustryTemplates).map(([productSlug, template]) => ({
    productSlug,
    productName: {
      'servicedesk-plus': 'ServiceDesk Plus',
      'endpoint-central': 'Endpoint Central',
      'log360':           'Log360',
      'ad360':            'AD360',
      'pam360':           'PAM360',
      'opmanager-plus':   'OpManager Plus',
    }[productSlug] as string,
    industrySlug:    industry.slug,
    industryName:    industry.name,
    metaTitle:       template.metaTitle(industry.name, industry.short),
    metaDescription: template.metaDescription(industry.name),
    h1:              template.h1(industry.name),
    introParagraph:  template.intro(industry.name, industry.context),
    primaryUseCase:  template.useCase(industry.name, industry.context, industry.compliance),
    complianceNote:  template.compliance(industry.compliance),
  }))
)

// ── Lookup helpers ────────────────────────────────────────────────────────────
export function getIndustryRecord(
  productSlug: string,
  industrySlug: string
): IndustryRecord | undefined {
  return industryRecords.find(
    r => r.productSlug === productSlug && r.industrySlug === industrySlug
  )
}

export const allIndustrySlugs = industries.map(i => i.slug)
export const allIndustryProductSlugs = Object.keys(productIndustryTemplates)

// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — Programmatic SEO: Product × Location
// 72 records (6 products × 12 cities).
// Each record generates one static page at /solutions/[productSlug]/[citySlug]
// ─────────────────────────────────────────────────────────────────────────────

export interface LocationRecord {
  productSlug: string
  productName: string
  citySlug: string
  cityName: string
  state: string
  metaTitle: string
  metaDescription: string
  h1: string
  introParagraph: string
  localContext: string
}

const cities = [
  { slug: 'chennai',   name: 'Chennai',    state: 'Tamil Nadu',      industryMix: 'manufacturing, IT services, automotive, and financial services' },
  { slug: 'bengaluru', name: 'Bengaluru',  state: 'Karnataka',       industryMix: 'IT software, SaaS, fintech, and engineering services' },
  { slug: 'hyderabad', name: 'Hyderabad',  state: 'Telangana',       industryMix: 'IT services, pharmaceuticals, BFSI, and manufacturing' },
  { slug: 'mumbai',    name: 'Mumbai',     state: 'Maharashtra',     industryMix: 'banking, financial services, media, and manufacturing' },
  { slug: 'pune',      name: 'Pune',       state: 'Maharashtra',     industryMix: 'IT services, automotive manufacturing, education, and BFSI' },
  { slug: 'delhi',     name: 'Delhi NCR',  state: 'Delhi',           industryMix: 'government, financial services, IT, and trading enterprises' },
  { slug: 'noida',     name: 'Noida',      state: 'Uttar Pradesh',   industryMix: 'IT services, BPO, and technology companies' },
  { slug: 'gurgaon',   name: 'Gurgaon',    state: 'Haryana',         industryMix: 'BFSI, IT services, logistics, and professional services' },
  { slug: 'ahmedabad', name: 'Ahmedabad',  state: 'Gujarat',         industryMix: 'textiles, chemicals, pharmaceuticals, and BFSI' },
  { slug: 'coimbatore',name: 'Coimbatore', state: 'Tamil Nadu',      industryMix: 'textiles, engineering, IT, and manufacturing' },
  { slug: 'kochi',     name: 'Kochi',      state: 'Kerala',          industryMix: 'IT services, tourism, trading, and logistics' },
  { slug: 'kolkata',   name: 'Kolkata',    state: 'West Bengal',     industryMix: 'BFSI, manufacturing, IT services, and government' },
]

const productTemplates: Record<string, {
  metaTitle: (city: string, state: string) => string
  metaDescription: (city: string, state: string) => string
  h1: (city: string) => string
  intro: (city: string, state: string, industryMix: string) => string
  localContext: (city: string, state: string) => string
}> = {
  'servicedesk-plus': {
    metaTitle: (city, state) =>
      `ManageEngine ServiceDesk Plus Partner in ${city} | ManagedFirst Technologies`,
    metaDescription: (city, state) =>
      `ManagedFirst implements ManageEngine ServiceDesk Plus for enterprises in ${city}, ${state}. Incident management, change workflows, and ITSM configured for your organisation. Authorized partner.`,
    h1: (city) =>
      `ManageEngine ServiceDesk Plus implementation in ${city}.`,
    intro: (city, state, mix) =>
      `ManagedFirst Technologies implements ManageEngine ServiceDesk Plus for enterprises in ${city}, ${state}. We configure incident management, change workflows, asset management, and enterprise service delivery for organisations across ${city}'s ${mix} sectors.`,
    localContext: (city, state) =>
      `Based in Chennai, ManagedFirst serves ${city}-based enterprises with on-site implementation capability alongside remote delivery for ServiceDesk Plus deployments across ${state}.`,
  },
  'endpoint-central': {
    metaTitle: (city, state) =>
      `ManageEngine Endpoint Central Partner in ${city} | ManagedFirst Technologies`,
    metaDescription: (city, state) =>
      `ManagedFirst implements ManageEngine Endpoint Central for enterprises in ${city}, ${state}. Patch management, endpoint security, and software deployment configured for your fleet. Authorized partner.`,
    h1: (city) =>
      `ManageEngine Endpoint Central implementation in ${city}.`,
    intro: (city, state, mix) =>
      `ManagedFirst Technologies implements ManageEngine Endpoint Central for enterprises in ${city}, ${state}. We configure patch management, endpoint security policies, and software deployment for organisations managing device fleets across ${city}'s ${mix} sectors.`,
    localContext: (city, state) =>
      `ManagedFirst delivers Endpoint Central implementations for ${city}-based IT teams — covering device fleet assessment, agent deployment, patch policy configuration, and endpoint security setup for ${state} enterprises.`,
  },
  'log360': {
    metaTitle: (city, state) =>
      `ManageEngine Log360 SIEM Partner in ${city} | ManagedFirst Technologies`,
    metaDescription: (city, state) =>
      `ManagedFirst implements ManageEngine Log360 SIEM for enterprises in ${city}, ${state}. Log management, threat detection, and DPDPA compliance reporting. Authorized partner.`,
    h1: (city) =>
      `ManageEngine Log360 SIEM implementation in ${city}.`,
    intro: (city, state, mix) =>
      `ManagedFirst Technologies implements ManageEngine Log360 for enterprises in ${city}, ${state}. We configure centralised log management, threat detection, UEBA, and DPDPA compliance reporting for organisations across ${city}'s ${mix} sectors.`,
    localContext: (city, state) =>
      `For ${city}-based organisations with DPDPA compliance requirements or SOC operations, ManagedFirst configures Log360 with the correlation rules, alert thresholds, and compliance reports relevant to ${state} enterprise environments.`,
  },
  'ad360': {
    metaTitle: (city, state) =>
      `ManageEngine AD360 IAM Partner in ${city} | ManagedFirst Technologies`,
    metaDescription: (city, state) =>
      `ManagedFirst implements ManageEngine AD360 for enterprises in ${city}, ${state}. Identity governance, MFA, SSO, and access management deployed for your organisation. Authorized partner.`,
    h1: (city) =>
      `ManageEngine AD360 identity management implementation in ${city}.`,
    intro: (city, state, mix) =>
      `ManagedFirst Technologies implements ManageEngine AD360 for enterprises in ${city}, ${state}. We configure user lifecycle management, MFA, SSO, identity governance, and DPDPA-aligned access controls for organisations across ${city}'s ${mix} sectors.`,
    localContext: (city, state) =>
      `ManagedFirst delivers AD360 implementations for ${city}-based enterprises with HRMS integration, MFA rollout, and access review workflows configured for ${state} business structures.`,
  },
  'pam360': {
    metaTitle: (city, state) =>
      `ManageEngine PAM360 Partner in ${city} | ManagedFirst Technologies`,
    metaDescription: (city, state) =>
      `ManagedFirst implements ManageEngine PAM360 for enterprises in ${city}, ${state}. Privileged access management, password vaulting, and session recording. Authorized partner.`,
    h1: (city) =>
      `ManageEngine PAM360 privileged access management in ${city}.`,
    intro: (city, state, mix) =>
      `ManagedFirst Technologies implements ManageEngine PAM360 for enterprises in ${city}, ${state}. We configure privileged credential vaulting, session recording, just-in-time access, and ITSM-integrated approval workflows for organisations across ${city}'s ${mix} sectors.`,
    localContext: (city, state) =>
      `For ${city}-based organisations under RBI IT framework requirements or DPDPA obligations for sensitive data systems, ManagedFirst configures PAM360 with privileged access controls and audit trails aligned to ${state} regulatory requirements.`,
  },
  'opmanager-plus': {
    metaTitle: (city, state) =>
      `ManageEngine OpManager Plus Partner in ${city} | ManagedFirst Technologies`,
    metaDescription: (city, state) =>
      `ManagedFirst implements ManageEngine OpManager Plus for enterprises in ${city}, ${state}. Network monitoring, server monitoring, and infrastructure visibility. Authorized partner.`,
    h1: (city) =>
      `ManageEngine OpManager Plus network monitoring implementation in ${city}.`,
    intro: (city, state, mix) =>
      `ManagedFirst Technologies implements ManageEngine OpManager Plus for enterprises in ${city}, ${state}. We configure network monitoring, server monitoring, alert thresholds, and operational dashboards for organisations managing IT infrastructure across ${city}'s ${mix} sectors.`,
    localContext: (city, state) =>
      `ManagedFirst delivers OpManager Plus implementations for ${city}-based IT teams — covering infrastructure scoping, monitoring template configuration, threshold calibration, and dashboard build for multi-site ${state} enterprises.`,
  },
}

// ── Generate all 72 records ───────────────────────────────────────────────────
export const locationRecords: LocationRecord[] = cities.flatMap(city =>
  Object.entries(productTemplates).map(([productSlug, template]) => ({
    productSlug,
    productName: {
      'servicedesk-plus':   'ServiceDesk Plus',
      'endpoint-central':   'Endpoint Central',
      'log360':             'Log360',
      'ad360':              'AD360',
      'pam360':             'PAM360',
      'opmanager-plus':     'OpManager Plus',
    }[productSlug] as string,
    citySlug:        city.slug,
    cityName:        city.name,
    state:           city.state,
    metaTitle:       template.metaTitle(city.name, city.state),
    metaDescription: template.metaDescription(city.name, city.state),
    h1:              template.h1(city.name),
    introParagraph:  template.intro(city.name, city.state, city.industryMix),
    localContext:    template.localContext(city.name, city.state),
  }))
)

// ── Lookup helpers ────────────────────────────────────────────────────────────
export function getLocationRecord(
  productSlug: string,
  citySlug: string
): LocationRecord | undefined {
  return locationRecords.find(
    r => r.productSlug === productSlug && r.citySlug === citySlug
  )
}

export const allCitySlugs = cities.map(c => c.slug)
export const allLocationProductSlugs = Object.keys(productTemplates)

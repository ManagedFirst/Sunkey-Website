import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'clientApproved', 'status'],
    group: 'Content',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      // Public can only read published AND client-approved case studies
      return {
        and: [
          { status: { equals: 'published' } as const },
          { clientApproved: { equals: true } as const },
        ],
      } as const
    },
  },
  fields: [
    // ── Core ──────────────────────────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The case study headline. Lead with the outcome. Example: "How a Chennai NBFC reduced manual IT tasks with ManageEngine ADManager Plus"',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL slug. Use anonymised slug if client name is not public. Example: nbfc-admanager-plus-chennai',
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // ── Client Info ───────────────────────────────────────────────────────
    {
      name: 'clientDescription',
      type: 'text',
      required: true,
      admin: {
        description: 'Anonymised client description for use in cards and hero. Example: "A Chennai-based NBFC with 500 employees"',
      },
    },
    {
      name: 'industry',
      type: 'select',
      required: true,
      options: [
        { label: 'Banking and Financial Services', value: 'bfsi' },
        { label: 'Manufacturing',                  value: 'manufacturing' },
        { label: 'Healthcare',                     value: 'healthcare' },
        { label: 'IT and ITES',                    value: 'it-ites' },
        { label: 'Government and PSU',             value: 'government-psu' },
        { label: 'Education',                      value: 'education' },
        { label: 'Other',                          value: 'other' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'productsUsed',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'AD360',                    value: 'ad360' },
        { label: 'ADManager Plus',           value: 'admanager-plus' },
        { label: 'ADSelfService Plus',       value: 'adself-service-plus' },
        { label: 'ADAudit Plus',             value: 'adaudit-plus' },
        { label: 'PAM360',                   value: 'pam360' },
        { label: 'ServiceDesk Plus',         value: 'servicedesk-plus' },
        { label: 'ServiceDesk Plus MSP',     value: 'servicedesk-plus-msp' },
        { label: 'Endpoint Central',         value: 'endpoint-central' },
        { label: 'Mobile Device Manager Plus',value:'mobile-device-manager-plus' },
        { label: 'OpManager Plus',           value: 'opmanager-plus' },
        { label: 'Site24x7',                 value: 'site24x7' },
        { label: 'Applications Manager',     value: 'applications-manager' },
        { label: 'Log360',                   value: 'log360' },
        { label: 'Firewall Analyzer',        value: 'firewall-analyzer' },
        { label: 'Analytics Plus',           value: 'analytics-plus' },
      ],
    },
    {
      name: 'engagementType',
      type: 'select',
      required: true,
      options: [
        { label: 'Consulting',                  value: 'consulting' },
        { label: 'Evaluation Assistance',       value: 'evaluation' },
        { label: 'Implementation',              value: 'implementation' },
        { label: 'Training',                    value: 'training' },
        { label: 'Managed Services',            value: 'managed-services' },
        { label: 'Support and AMC',             value: 'amc' },
      ],
      admin: { position: 'sidebar' },
    },

    // ── Content sections ──────────────────────────────────────────────────
    {
      name: 'challenge',
      type: 'richText',
      required: true,
      label: 'The Challenge',
      admin: {
        description: '3-4 paragraphs: the IT situation before the engagement, what was not working, and why the client chose ManageEngine and ManagedFirst.',
      },
    },
    {
      name: 'deployment',
      type: 'richText',
      required: true,
      label: 'What We Deployed',
      admin: {
        description: 'Describe each ManageEngine product deployed — specific configuration scope and timeline.',
      },
    },
    {
      name: 'outcome',
      type: 'richText',
      required: true,
      label: 'The Outcome',
      admin: {
        description: '3-4 paragraphs: what changed, measurable results (use real numbers), what the client can do now.',
      },
    },

    // ── Testimonial ───────────────────────────────────────────────────────
    {
      name: 'testimonialQuote',
      type: 'textarea',
      label: 'Client Testimonial (optional)',
      admin: {
        description: 'Direct quote from the client contact. Leave blank if no testimonial available.',
      },
    },
    {
      name: 'testimonialAttribution',
      type: 'text',
      label: 'Testimonial Attribution',
      admin: {
        description: 'Example: "IT Head, mid-sized NBFC, Chennai"',
      },
    },

    // ── SEO ───────────────────────────────────────────────────────────────
    {
      name: 'metaDescription',
      type: 'textarea',
      maxLength: 160,
      admin: {
        description: 'Optional. Auto-generated from title if blank. Max 160 characters.',
        position: 'sidebar',
      },
    },

    // ── Publishing (with client approval gate) ────────────────────────────
    {
      name: 'clientApproved',
      type: 'checkbox',
      defaultValue: false,
      required: true,
      admin: {
        description: '⚠️ REQUIRED: Check this ONLY after the client has reviewed and approved the case study content. The case study cannot be published without this checked.',
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft',   value: 'draft' },
        { label: 'Review',  value: 'review' },
        { label: 'Published', value: 'published' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly', displayFormat: 'dd MMM yyyy' },
      },
    },
  ],

  hooks: {
    beforeChange: [
      ({ data, originalDoc, operation }) => {
        // Prevent publishing without client approval
        if (data.status === 'published' && !data.clientApproved) {
          throw new Error(
            'Cannot publish case study without client approval. Check the "Client Approved" box first.'
          )
        }
        if (data.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
}

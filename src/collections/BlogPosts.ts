import type { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
    group: 'Content',
  },
  access: {
    // Published posts are publicly readable
    read: ({ req: { user } }) => {
      if (user) return true
      return { status: { equals: 'published' } }
    },
  },
  fields: [
    // ── Core ──────────────────────────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'The article title. Used as H1 on the page.' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL slug. Auto-generate from title. Example: why-manageengine-deployments-underperform',
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 200,
      admin: {
        description: 'Two-sentence summary. Used in blog listing cards and meta description if meta description is empty.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    // ── Taxonomy ──────────────────────────────────────────────────────────
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'ManageEngine Implementation',  value: 'manageengine-implementation' },
        { label: 'IT Operations and ITSM',        value: 'it-operations-itsm' },
        { label: 'Security and SIEM',             value: 'security-siem' },
        { label: 'Compliance',                    value: 'compliance' },
        { label: 'Industry Use Cases',            value: 'industry-use-cases' },
      ],
    },
    {
      name: 'readTimeMinutes',
      type: 'number',
      required: true,
      min: 1,
      max: 60,
      admin: {
        description: 'Estimated read time in minutes.',
        position: 'sidebar',
      },
    },

    // ── SEO ───────────────────────────────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: { position: 'sidebar' },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          maxLength: 65,
          admin: { description: 'Leave blank to use article title. Max 65 characters.' },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          maxLength: 160,
          admin: { description: 'Leave blank to use excerpt. Max 160 characters.' },
        },
      ],
    },

    // ── Publishing ────────────────────────────────────────────────────────
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft',     value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date to display on the article. Set when publishing.',
        date: { pickerAppearance: 'dayOnly', displayFormat: 'dd MMM yyyy' },
      },
    },
  ],

  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-set publishedAt when status changes to published
        if (data.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
}

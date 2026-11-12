import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'order'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'name',           type: 'text',    required: true },
    { name: 'title',          type: 'text',    required: true,  admin: { description: 'Job title. Example: Co-Founder and Executive Director' } },
    { name: 'bio',            type: 'richText',required: true,  admin: { description: 'Professional background, ManageEngine experience, certifications.' } },
    { name: 'photo',          type: 'upload',  required: true,  relationTo: 'media' },
    { name: 'linkedinUrl',    type: 'text',    admin: { description: 'Full LinkedIn profile URL.' } },
    { name: 'order',          type: 'number',  defaultValue: 0, admin: { description: 'Display order. Lower number = first.', position: 'sidebar' } },
  ],
}

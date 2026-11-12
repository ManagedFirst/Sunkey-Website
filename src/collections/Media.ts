import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // DEVELOPMENT: Files stored locally in /public/media/
    // PRODUCTION:  Add a cloud storage adapter in payload.config.ts
    //              See the comments in payload.config.ts for options.
    staticDir: 'public/media',
    // staticURL is not a valid property of UploadConfig and has been removed
    mimeTypes: [
      'image/png',
      'image/jpeg',
      'image/webp',
      'image/gif',
      'image/svg+xml',
      'application/pdf',
    ],
    imageSizes: [
      { name: 'card',      width: 800,  height: undefined, position: 'centre' },
      { name: 'thumbnail', width: 400,  height: 300,       position: 'centre' },
      { name: 'og',        width: 1200, height: 630,        position: 'centre' },
    ],
  },
  admin: {
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: { description: 'Alt text for accessibility and SEO. Describe the image.' },
    },
  ],
}

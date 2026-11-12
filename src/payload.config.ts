import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { BlogPosts }    from '@/collections/BlogPosts'
import { CaseStudies }  from '@/collections/CaseStudies'
import { TeamMembers }  from '@/collections/TeamMembers'
import { Media }        from '@/collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname  = path.dirname(filename)

export default buildConfig({
  // ── Admin UI ──────────────────────────────────────────────────────────────
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '-- ManagedFirst CMS',
    },
  },

  // ── Collections ───────────────────────────────────────────────────────────
  collections: [
    BlogPosts,
    CaseStudies,
    TeamMembers,
    Media,
    // Built-in Users collection (for CMS admin access)
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [
        { name: 'name', type: 'text', required: true },
      ],
    },
  ],

  // ── Editor ────────────────────────────────────────────────────────────────
  editor: lexicalEditor({}),

  // ── Database (Neon PostgreSQL) ─────────────────────────────────────────────
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),

  // ── File Storage ──────────────────────────────────────────────────────────
  //
  // DEVELOPMENT: Payload stores uploaded files locally in /public/media/
  // This works out of the box with no additional packages or accounts needed.
  //
  // PRODUCTION: Before deploying, add a cloud storage adapter.
  // Payload 3.x official adapters (install the one you need):
  //
  //   AWS S3:          npm install @payloadcms/storage-s3
  //   Google Cloud:    npm install @payloadcms/storage-gcs
  //   Azure Blob:      npm install @payloadcms/storage-azure
  //   Uploadthing:     npm install @payloadcms/storage-uploadthing
  //
  // For Cloudinary specifically, use the community package:
  //   npm install payloadcms-storage-cloudinary
  //
  // See: https://payloadcms.com/docs/upload/storage-adapters for setup guides.
  //
  // No plugins array needed for local storage — Payload handles it by default.

  // ── Secret ────────────────────────────────────────────────────────────────
  secret: process.env.PAYLOAD_SECRET as string,

  // ── TypeScript output ─────────────────────────────────────────────────────
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // ── Upload directory (local storage) ──────────────────────────────────────
  upload: {
    limits: {
      fileSize: 10000000, // 10MB limit
    },
  },
})

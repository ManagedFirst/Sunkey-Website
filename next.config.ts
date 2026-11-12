import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  // Payload CMS requires this
  experimental: {
    reactCompiler: false,
  },
  images: {
    // Cloudinary domain for Payload CMS media
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default withPayload(nextConfig)

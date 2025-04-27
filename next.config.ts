import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'
import '@/lib/env'

const nextConfig: NextConfig = {
  compiler: {
    // remove console.logs in production mode
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // {
      //   hostname: 'images.unsplash.com',
      // },
    ],
    formats: ['image/avif', 'image/webp'],
    // deviceSizes: [220, 390, 430, 640, 768, 1080, 1280, 1920, 2048, 2560, 3840],
  },
}

export default withPayload(nextConfig)

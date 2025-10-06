/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // NOTE: `experimental.esmExternals` and `swcMinify` were removed because
  // Next.js v15 validates next.config.js keys strictly. If you hit Windows
  // specific build issues later, let me know and I'll apply a supported
  // workaround. For now we rely on Next's defaults.
}

module.exports = nextConfig

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
  // Fix for Windows build cache issues
  experimental: {
    esmExternals: false,
  },
  // Disable some optimizations that cause issues on Windows
  swcMinify: false,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
        allowedForwardedHosts: ['fuzzy-telegram-x6wrpvq9g6f6x7x-3000.app.github.dev', 'localhost:3000'],
        allowedOrigins: ['fuzzy-telegram-x6wrpvq9g6f6x7x-3000.app.github.dev', 'localhost:3000']
    },
}
};

module.exports = nextConfig;

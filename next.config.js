/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  vitest: {
    test:
    {
      environment: 'jsdom'
    }
  }
}

module.exports = nextConfig

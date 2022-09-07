/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    HJID: process.env.HJID,
    HJSV: process.env.HJSV,
    SEGMENT_WRITE_TOKEN: process.env.SEGMENT_WRITE_TOKEN,
  },
}

module.exports = nextConfig

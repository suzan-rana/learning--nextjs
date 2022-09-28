/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI : "mongodb://localhost:27017/myFirstDatabase"
  }
}

module.exports = nextConfig

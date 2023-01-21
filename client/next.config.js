/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'thecatapi.com',
    ],
    Loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig

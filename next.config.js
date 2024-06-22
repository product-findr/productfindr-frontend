/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.NEXT_PUBLIC_GATEWAY_URL.replace(/^https?:\/\//, ''), 
          port: '',
          pathname: '/ipfs/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
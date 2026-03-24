/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cms.artconstruction.be',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

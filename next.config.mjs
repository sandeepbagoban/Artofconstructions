/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'artofconstructions.vercel.app',
        pathname: '/theArt/public/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cms.artconstruction.be',
        pathname: '/**', // allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
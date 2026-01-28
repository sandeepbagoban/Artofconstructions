/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
         protocol: 'https',
        hostname: 'www.cms.artconstruction.be',
        pathname: '/**',
      },
      // Add other domains/patterns as needed
    ],
    // Optional: if you need to use unoptimized images
    // unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
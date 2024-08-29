/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.aceternity.com',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          port: '', // leave empty if not using a specific port
          pathname: '/img/**', // This will allow images located in /img directory
        },
      ],
    },
  };
  
  export default nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ],
  },

  // webpack: config => {
  //   config.resolve.fallback = {
  //     fs: false,
  //   };

  //   return config;
  // },
 

};


module.exports = nextConfig

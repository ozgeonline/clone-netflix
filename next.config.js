/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
      },
      {
        protocol: "https",
        hostname: "occ-0-7332-1490.1.nflxso.net",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  
};

module.exports = nextConfig;
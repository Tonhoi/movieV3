/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["https://image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

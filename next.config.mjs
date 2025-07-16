/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  experimental: {
    dynamicApiRoute: "force-dynamic",
  },
};

export default nextConfig;

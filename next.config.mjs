/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/assignment1",
  assetPrefix: "/assignment1/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

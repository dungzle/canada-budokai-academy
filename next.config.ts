/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/canada-budokai-academy",
  assetPrefix: "/canada-budokai-academy",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

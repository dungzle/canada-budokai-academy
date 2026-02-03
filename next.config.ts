/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/canada-budokai-academy",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

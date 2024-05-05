const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow the following suffix
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    serverActions: true,
  },
};

module.exports = withMDX(nextConfig);

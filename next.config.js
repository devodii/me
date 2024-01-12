const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // includes the following suffix prefix
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);

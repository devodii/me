const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow the following suffix
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
}

module.exports = withMDX(nextConfig)

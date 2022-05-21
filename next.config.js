/** @type {import('next').NextConfig} */
const withMarkdoc = require("@markdoc/next.js");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md"],
};

module.exports = withMarkdoc({ mode: "static" })(nextConfig);

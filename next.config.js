/** @type {import('next').NextConfig} */

const packageJson = require("./package.json");

console.log(`NEXTJS VERSION: ${packageJson.dependencies.next}`);

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

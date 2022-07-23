/** @type {import('next').NextConfig} */
const paths = require('path')
module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = paths.join(__dirname, 'src')
    return config
  },
}
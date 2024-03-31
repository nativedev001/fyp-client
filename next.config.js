const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    nextConfig,
    images: {
      domains: ['localhost'],
    },
}

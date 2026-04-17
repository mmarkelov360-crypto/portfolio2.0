/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // для статического экспорта
  images: {
    unoptimized: true,  // для работы изображений
  },
}

module.exports = nextConfig
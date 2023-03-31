/** @type {import('next').NextConfig} */

const paths = [
  'nain-siirryt-5g-aikaan-opas-suomalaisille-yrityksille',
  'technology-trends-2021',
  'technology-trends-2022',
  'tee-ja-johda-tuloksellista-etatyota',
  'teknologiatrendit2020',
  'teknologiatrendit2021',
  'teknologiatrendit2022',
  'yrityksen-kasvuopas-nain-skaalaat-verkko-ja-mobiiliratkaisut',
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => {
    return paths.map(p => ({
      source: `/${p}`,
      destination: `/${p}/index.html`,
      permanent: false,
    }));
  },
};

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(nextConfig) ;



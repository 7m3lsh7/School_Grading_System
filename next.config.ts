import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // مفيدة للـ debugging
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;

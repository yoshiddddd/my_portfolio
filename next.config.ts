import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages needs a .nojekyll file to prevent Jekyll processing
  // This is handled in the GitHub Actions workflow
  
  // Use the repository name as the basePath in production
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes are used for better compatibility
  trailingSlash: true,
  
  // Disable React StrictMode for production
  reactStrictMode: process.env.NODE_ENV !== 'production',
};

export default nextConfig;

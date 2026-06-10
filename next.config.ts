import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export – required for GitHub Pages deployment
  output: "export",

  // No basePath or assetPrefix needed when serving from a custom domain root (/)
  // basePath and assetPrefix were previously injected by actions/configure-pages
  // for the /test-luare-web/ subdirectory. They must be absent for luare-consulting.com.

  images: {
    // next/image's built-in optimization requires a Node.js server.
    // Since we are exporting static HTML, we disable it here.
    unoptimized: true,
  },
};

export default nextConfig;

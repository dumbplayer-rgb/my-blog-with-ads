/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as fully static HTML
  output: "export",

  // Optional: if you want to change the default export folder
  // distDir: "dist",

  // Enable images in static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

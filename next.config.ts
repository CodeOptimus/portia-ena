import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "www.gstatic.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "images.credly.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "assets.website-files.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "import.cdn.thinkific.com" },
      { protocol: "https", hostname: "lwfiles.mycourse.app" },
    ],
  },
};

export default nextConfig;

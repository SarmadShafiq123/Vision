import {
  HSTS,
  X_CONTENT_TYPE,
  REFERRER_POLICY,
  PERMISSIONS_POLICY,
  X_FRAME_OPTIONS,
  IMAGE_CACHE_TTL_SECONDS,
} from "./src/constants/headers.js";

const IS_PRODUCTION = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: HSTS },
  { key: "X-Content-Type-Options", value: X_CONTENT_TYPE },
  { key: "Referrer-Policy", value: REFERRER_POLICY },
  { key: "Permissions-Policy", value: PERMISSIONS_POLICY },
  { key: "X-Frame-Options", value: X_FRAME_OPTIONS },
  ...(!IS_PRODUCTION
    ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: IMAGE_CACHE_TTL_SECONDS,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;

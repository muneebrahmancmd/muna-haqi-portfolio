import type { NextConfig } from "next";

// When building for GitHub Pages (GITHUB_PAGES=true) we produce a fully static
// export served from the repo subpath `/muneeb-rehman-portfolio`. Local dev keeps the full
// server (API routes, image optimization) by leaving the flag unset.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/muneeb-rehman-portfolio" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  ...(isPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  // exposed to the client so raw asset fetches (GLTF models, sticker textures,
  // audio) can be prefixed with the basePath via withBase().
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

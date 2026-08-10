import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      new URL('https://qok3o4hzagdssd7t.public.blob.vercel-storage.com/**')
    ]
  }
};

export default nextConfig;

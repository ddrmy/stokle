import { verify } from "crypto";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.vecteezy.com"],
  },

  experimental: {
    serverActions: {
      // @ts-expect-error: verifyForwardedHost is not yet in NextConfig types
      verifyForwardedHost: isDev ? false : true, // 🚨 Permite rodar Server Actions mesmo com host diferente
    },
  },
};

export default nextConfig;

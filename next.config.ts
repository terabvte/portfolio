import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "", // Important to keep this, even if empty
        pathname: "/**", // Allows any path on this hostname
      },
      // You can add other allowed hostnames here if needed
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloud Run runs the app as a plain Node server, so the build has to emit
  // one: `.next/standalone/server.js` with only the files it actually needs.
  output: "standalone",
};

export default nextConfig;

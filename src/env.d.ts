/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@vercel/analytics/astro" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";
  const Analytics: AstroComponentFactory<{ mode?: "auto" | "development" | "production" }>;
  export default Analytics;
}

import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

const base = siteUrl;

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` };
}

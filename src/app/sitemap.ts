import type { MetadataRoute } from "next";
import { cities, nav, posts, services, siteUrl } from "@/data/site";

const base = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...nav.map((n) => n.href),
    ...services.map((s) => `/services/${s.slug}`),
    ...cities.map((c) => `/service-areas/${c.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((p) => ({ url: `${base}${p === "/" ? "" : p}` }));
}

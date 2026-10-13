import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { essays } from "@/data/essays";

export default function sitemap(): MetadataRoute.Sitemap {
  const essayUrls: MetadataRoute.Sitemap = essays.map((essay) => ({
    url: `${SITE.url}/essays/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/essays`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...essayUrls,
  ];
}

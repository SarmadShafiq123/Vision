import { siteConfig } from "@/config/site";

const SITEMAP_LAST_MODIFIED = "2026-10-29";
const CHANGE_FREQ_HOME = "weekly";
const CHANGE_FREQ_PAGES = "monthly";
const PRIORITY_HOME = 1.0;
const PRIORITY_PAGES = 0.8;

const INDEXABLE_ROUTES = [
  { path: "/", changeFreq: CHANGE_FREQ_HOME, priority: PRIORITY_HOME },
  { path: "/skills", changeFreq: CHANGE_FREQ_PAGES, priority: PRIORITY_PAGES },
  { path: "/academics", changeFreq: CHANGE_FREQ_PAGES, priority: PRIORITY_PAGES },
  { path: "/contact", changeFreq: CHANGE_FREQ_PAGES, priority: PRIORITY_PAGES },
];

export default function sitemap() {
  return INDEXABLE_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: SITEMAP_LAST_MODIFIED,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}

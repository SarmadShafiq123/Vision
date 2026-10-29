import { siteConfig } from "@/config/site";

const ROUTES = ["", "/skills", "/academics", "/contact"];
const MONTHLY = "monthly";

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: MONTHLY,
    priority: route === "" ? 1 : 0.8,
  }));
}

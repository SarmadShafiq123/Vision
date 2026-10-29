import { siteConfig } from "@/config/site";
import { seoPages } from "@/data/seo";

const DEFAULT_TITLE_TEMPLATE = "%s";
const MAX_SNIPPET = -1;
const MAX_IMAGE_PREVIEW = "large";

export function buildMetadata(pageKey) {
  const page = seoPages[pageKey];
  
  if (!page) {
    return {
      title: siteConfig.name,
      description: siteConfig.description,
    };
  }

  const canonical = `${siteConfig.url}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.ogLocale,
      url: canonical,
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
    },
    robots: {
      index: true,
      follow: true,
      maxSnippet: MAX_SNIPPET,
      maxImagePreview: MAX_IMAGE_PREVIEW,
    },
  };
}

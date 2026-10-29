import { siteConfig } from "@/config/site";

export function buildMetadata({ title, description, path, image }) {
  const fullTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const canonical = path
    ? `${siteConfig.url}${path}`
    : siteConfig.url;

  const metaDescription = description || siteConfig.description;

  const metadata = {
    title: fullTitle,
    description: metaDescription,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      ...(image ? { images: [image] } : {}),
    },
  };

  return metadata;
}

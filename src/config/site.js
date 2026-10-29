import { publicEnv } from "@/config/env";

export const siteConfig = {
  name: "Vision Academy",
  tagline: "A complete school journey, from playgroup to Class 12.",
  description:
    "Vision Academy is a school in Gujranwala, Pakistan serving students from playgroup through Class 12, with academic programs and practical skill courses.",
  url: publicEnv.siteUrl || "https://visionacademy.edu.pk",
  locale: "en_PK",
  admissionsOpen: true,
};

export const orgAddress = {
  streetAddress: "554H+5CH, Gulshanabad Chah Chohan Wala",
  addressLocality: "Gujranwala",
  addressRegion: "Punjab",
  addressCountry: "PK",
  postalCode: "",
};

export const orgGeo = {
  latitude: 32.1551,
  longitude: 74.1788,
};

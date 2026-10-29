import { publicEnv } from "@/config/env";

const DEFAULT_URL_DEVELOPMENT = "http://localhost:3000";
const CITY_DEFAULT = "Gujranwala";
const REGION = "Punjab";
const COUNTRY_CODE = "PK";
const LOCALE = "en-PK";
const OG_LOCALE = "en_PK";
const LANGUAGE = "en";
const THEME_COLOR = "#1e3a9e";

export const siteConfig = {
  name: "Vision Academy",
  tagline: "A complete school journey, from playgroup to Class 12.",
  description:
    "Vision Academy is a school in Gujranwala, Pakistan serving students from playgroup through Class 12, with academic programs and practical skill courses.",
  url:
    publicEnv.siteUrl ||
    (process.env.NODE_ENV === "development"
      ? DEFAULT_URL_DEVELOPMENT
      : "https://visionacademy.live"),
  city: CITY_DEFAULT,
  region: REGION,
  country: COUNTRY_CODE,
  locale: LOCALE,
  ogLocale: OG_LOCALE,
  language: LANGUAGE,
  themeColor: THEME_COLOR,
  admissionsOpen: true,
};

export const orgAddress = {
  streetAddress: "554H+5CH, Gulshanabad Chah Chohan Wala",
  addressLocality: CITY_DEFAULT,
  addressRegion: REGION,
  addressCountry: COUNTRY_CODE,
  postalCode: "",
};

export const orgGeo = {
  latitude: 32.1551,
  longitude: 74.1788,
};

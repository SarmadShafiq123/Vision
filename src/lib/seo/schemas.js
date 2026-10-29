import { siteConfig, orgAddress } from "@/config/site";
import { contactInfo } from "@/data/contact";
import { leadershipData, ROLE_FOUNDER, ROLE_CEO } from "@/data/leadership";
import { skillsData } from "@/data/skills";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

function omitEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v !== null && v !== undefined && v !== "",
    ),
  );
}

function buildAddress() {
  if (!orgAddress.streetAddress && !orgAddress.addressLocality) return null;
  return omitEmpty({
    "@type": "PostalAddress",
    streetAddress: orgAddress.streetAddress || undefined,
    addressLocality: orgAddress.addressLocality || undefined,
    addressRegion: orgAddress.addressRegion || undefined,
    addressCountry: orgAddress.addressCountry || undefined,
    postalCode: orgAddress.postalCode || undefined,
  });
}

function buildPersons() {
  const founder = leadershipData.find((l) => l.role === ROLE_FOUNDER);
  const ceo = leadershipData.find((l) => l.role === ROLE_CEO);

  const founderPerson = founder
    ? omitEmpty({
        "@type": "Person",
        "@id": `${siteConfig.url}/#founder`,
        name: founder.schemaName || founder.displayName,
        jobTitle: ROLE_FOUNDER,
        worksFor: { "@id": ORG_ID },
      })
    : null;

  const ceoPerson = ceo
    ? omitEmpty({
        "@type": "Person",
        "@id": `${siteConfig.url}/#ceo`,
        name: ceo.schemaName || ceo.displayName,
        jobTitle: ROLE_CEO,
        worksFor: { "@id": ORG_ID },
      })
    : null;

  return { founderPerson, ceoPerson };
}

export function buildOrganization() {
  const address = buildAddress();
  const { founderPerson, ceoPerson } = buildPersons();

  const sameAs = contactInfo.socialLinks
    .filter((l) => l.href)
    .map((l) => l.href);

  return omitEmpty({
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    description: siteConfig.description,
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    ...(address ? { address } : {}),
    ...(contactInfo.phone ? { telephone: contactInfo.phone } : {}),
    ...(contactInfo.email ? { email: contactInfo.email } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(founderPerson
      ? { founder: { "@id": `${siteConfig.url}/#founder` } }
      : {}),
    ...(ceoPerson
      ? { employee: [{ "@id": `${siteConfig.url}/#ceo` }] }
      : {}),
  });
}

export function buildWebSite() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    publisher: { "@id": ORG_ID },
  };
}

export function buildHomeGraph() {
  const { founderPerson, ceoPerson } = buildPersons();
  const members = [buildOrganization(), buildWebSite()];
  if (founderPerson) members.push(founderPerson);
  if (ceoPerson) members.push(ceoPerson);

  return {
    "@context": "https://schema.org",
    "@graph": members,
  };
}

export function buildBreadcrumbList(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) =>
      omitEmpty({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        ...(item.url ? { item: item.url } : {}),
      }),
    ),
  };
}

export function buildSkillsGraph(breadcrumbItems) {
  const courseList = {
    "@type": "ItemList",
    itemListElement: skillsData.map((skill, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: omitEmpty({
        "@type": "Course",
        name: skill.title,
        description: skill.description,
        url: `${siteConfig.url}/skills#${skill.id}`,
        provider: { "@id": ORG_ID },
      }),
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList(breadcrumbItems),
      courseList,
    ],
  };
}

export function buildAcademicsGraph(breadcrumbItems) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList(breadcrumbItems),
      {
        "@type": "WebPage",
        name: "Academics — Vision Academy",
        url: `${siteConfig.url}/academics`,
        inLanguage: siteConfig.locale,
        about: { "@id": ORG_ID },
      },
    ],
  };
}

export function buildContactGraph(breadcrumbItems) {
  const hasContact = contactInfo.phone || contactInfo.email;
  const contactPoint = hasContact
    ? omitEmpty({
        "@type": "ContactPoint",
        contactType: "admissions",
        ...(contactInfo.phone ? { telephone: contactInfo.phone } : {}),
        ...(contactInfo.email ? { email: contactInfo.email } : {}),
        availableLanguage: ["English", "Urdu"],
      })
    : null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList(breadcrumbItems),
      omitEmpty({
        "@type": "ContactPage",
        name: "Contact Vision Academy",
        url: `${siteConfig.url}/contact`,
        inLanguage: siteConfig.locale,
        ...(contactPoint ? { mainEntity: contactPoint } : {}),
      }),
    ],
  };
}

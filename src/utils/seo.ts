/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_LEGAL_NAME,
  SITE_LOCALE,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
} from "../data/site";

export interface PageSeoInput {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Centralized document head updates for SPA route changes. */
export function updatePageSeo({
  title = SITE_DEFAULT_TITLE,
  description = SITE_DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = SITE_OG_IMAGE,
  noIndex = false,
}: PageSeoInput = {}) {
  const url = absoluteUrl(path);

  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  upsertMeta("name", "googlebot", noIndex ? "noindex, nofollow" : "index, follow");
  upsertMeta("name", "author", SITE_NAME);
  upsertMeta("name", "theme-color", "#0284c7");

  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", SITE_LOCALE);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", `${SITE_NAME} — professional AC repair and installation`);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);

  upsertLink("canonical", url);
}

export function setJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: SITE_OG_IMAGE,
    description: SITE_DEFAULT_DESCRIPTION,
    telephone: "+18663301137",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+18663301137",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        telephone: "+18663301137",
        contactType: "emergency",
        areaServed: "US",
        availableLanguage: ["English"],
        contactOption: "TollFree",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/directory`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

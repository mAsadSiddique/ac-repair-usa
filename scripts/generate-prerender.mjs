/**
 * Generates crawler-friendly static HTML for every sitemap URL after Vite build.
 * Each file includes unique title/description, JSON-LD stubs, visible content,
 * and boots the same SPA bundle so UX stays identical.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const statesPath = path.join(root, "src/data/states.ts");
const seoContentPath = path.join(root, "src/data/seoContent.ts");

const SITE = "https://getacrepairusa.com";
const PHONE_DISPLAY = "+1 (866) 330-1137";
const PHONE_TEL = "tel:+18663301137";
const SERVICE_SLUGS = [
  "ac-repair",
  "ac-service",
  "ac-installation",
  "hvac-repair",
  "hvac-installation",
  "heating-repair",
];

const SERVICE_LABELS = {
  "ac-repair": "AC Repair",
  "ac-service": "AC Service",
  "ac-installation": "AC Installation",
  "hvac-repair": "HVAC Repair",
  "hvac-installation": "HVAC Installation",
  "heating-repair": "Heating Repair",
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseStates() {
  const source = fs.readFileSync(statesPath, "utf8");
  const states = [];
  const stateBlocks = source.split(/\n  \{\n    name: "/).slice(1);
  for (const block of stateBlocks) {
    const stateName = block.match(/^([^"]+)"/)?.[1];
    const abbr = block.match(/abbr: "([A-Z]{2})"/)?.[1];
    const climateZone = block.match(/climateZone: "([^"]+)"/)?.[1] || "US climate";
    const avgTemp = block.match(/avgTemp: "([^"]+)"/)?.[1] || "";
    const seoTip = block.match(/seoTip: "([^"]+)"/)?.[1] || "";
    if (!stateName || !abbr) continue;
    const citiesSection = block.split(/cities:\s*\[/)[1]?.split(/\n    \]/)[0] || "";
    const cities = [...citiesSection.matchAll(/\{ name: "([^"]+)", isMajor: (true|false), climateProfile: "([^"]+)", commonIssue: "([^"]+)", avgSummerTemp: "([^"]+)"/g)].map(
      (m) => ({
        name: m[1],
        isMajor: m[2] === "true",
        climateProfile: m[3],
        commonIssue: m[4],
        avgSummerTemp: m[5],
      })
    );
    states.push({ name: stateName, abbr, climateZone, avgTemp, seoTip, cities });
  }
  return states;
}

function extractAssetTags(indexHtml) {
  const css = [...indexHtml.matchAll(/<link rel="stylesheet"[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const js = [...indexHtml.matchAll(/<script type="module"[^>]*src="([^"]+)"/g)].map((m) => m[1]);
  return { css, js };
}

function renderPage({ pathUrl, title, description, h1, paragraphs, crumbs, links }) {
  const canonical = pathUrl === "/" ? `${SITE}/` : `${SITE}${pathUrl}`;
  const crumbHtml = crumbs
    .map((c, i) => {
      const sep = i === 0 ? "" : " / ";
      if (c.href) return `${sep}<a href="${c.href}">${escapeHtml(c.label)}</a>`;
      return `${sep}<span>${escapeHtml(c.label)}</span>`;
    })
    .join("");

  const paragraphHtml = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n        ");
  const linksHtml = (links || [])
    .map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`)
    .join("\n          ");

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: { "@id": `${SITE}/#website` },
  };

  return `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="getacrepair" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${SITE}/og-cover.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${SITE}/og-cover.jpg" />
    __ASSET_CSS__
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      <main style="max-width:760px;margin:2rem auto;padding:1.25rem;font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">
        <nav aria-label="Breadcrumb" style="font-size:0.85rem;margin-bottom:1rem;color:#64748b">${crumbHtml}</nav>
        <h1>${escapeHtml(h1)}</h1>
        ${paragraphHtml}
        <p><strong>Call now:</strong> <a href="${PHONE_TEL}">${PHONE_DISPLAY}</a></p>
        <ul>
          ${linksHtml}
          <li><a href="/directory">States Directory</a></li>
          <li><a href="/services">HVAC Services</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">Privacy</a></li>
        </ul>
      </main>
    </noscript>
    __ASSET_JS__
  </body>
</html>
`;
}

function writeRoute(relPath, html) {
  const clean = relPath === "/" ? "" : relPath.replace(/^\//, "");
  const dir = path.join(distDir, clean);
  fs.mkdirSync(dir, { recursive: true });
  // Don't overwrite dist/index.html at root from a nested write of "/"
  const outFile = path.join(dir || distDir, "index.html");
  if (relPath === "/") {
    // Keep Vite's root index.html as primary shell; only refresh head-less? Better update root via merge.
    // We skip rewriting "/" to avoid breaking the SPA entry; root already has SEO in built index.
    return false;
  }
  fs.writeFileSync(outFile, html, "utf8");
  return true;
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.error("dist/ missing — run vite build first");
    process.exit(1);
  }

  const builtIndex = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
  const { css, js } = extractAssetTags(builtIndex);
  const cssTags = css.map((href) => `<link rel="stylesheet" crossorigin href="${href}">`).join("\n    ");
  const jsTags = js.map((src) => `<script type="module" crossorigin src="${src}"></script>`).join("\n    ");

  const applyAssets = (html) =>
    html.replace("__ASSET_CSS__", cssTags).replace("__ASSET_JS__", jsTags);

  const states = parseStates();
  let written = 0;

  const staticPages = [
    {
      pathUrl: "/services",
      title: "AC Repair, Installation & Maintenance Services | getacrepair",
      description: `Explore getacrepair certified AC repair, installation, replacement, refrigerant leak, and emergency HVAC services. Call ${PHONE_DISPLAY}.`,
      h1: "Certified Air Conditioning Services Nationwide",
      paragraphs: [
        "getacrepair connects homeowners with licensed, EPA-certified technicians for AC repair, installation, maintenance, and emergency cooling restoration in all 50 states.",
        "Call our dispatch line for same-day service windows, transparent estimates, and local technician assignment.",
      ],
      crumbs: [
        { label: "Home", href: "/" },
        { label: "Services" },
      ],
    },
    {
      pathUrl: "/diagnostics",
      title: `AC Diagnostic Troubleshooter | getacrepair`,
      description: `Diagnose common AC problems with getacrepair's free HVAC troubleshooter, then call ${PHONE_DISPLAY} for licensed repair.`,
      h1: "AC Diagnostic & Troubleshooter",
      paragraphs: [
        "Use our symptom checker to identify common air conditioning failures before you call. If DIY steps do not restore cooling, our licensed technicians are ready to dispatch.",
      ],
      crumbs: [
        { label: "Home", href: "/" },
        { label: "Diagnostics" },
      ],
    },
    {
      pathUrl: "/directory",
      title: `AC Repair Near Me by State | getacrepair Nationwide Directory`,
      description: `Browse getacrepair's 50-state HVAC directory for licensed AC repair and emergency dispatch. Call ${PHONE_DISPLAY}.`,
      h1: "Nationwide HVAC Service Directory",
      paragraphs: [
        "Select your state to view real cities we serve, local climate tips, and call options for same-day AC repair and installation.",
      ],
      crumbs: [
        { label: "Home", href: "/" },
        { label: "Directory" },
      ],
      links: states.slice(0, 12).map((s) => ({ href: `/${slugify(s.name)}`, label: s.name })),
    },
    {
      pathUrl: "/terms",
      title: "Terms & Conditions | getacrepair",
      description: "Read getacrepair Terms & Conditions for website use and phone-based HVAC dispatch services.",
      h1: "Terms & Conditions",
      paragraphs: ["Please review our terms before using the website or requesting HVAC service by phone."],
      crumbs: [
        { label: "Home", href: "/" },
        { label: "Terms" },
      ],
    },
    {
      pathUrl: "/privacy",
      title: "Privacy Policy | getacrepair",
      description: "Learn how getacrepair collects and protects information when you visit getacrepairusa.com or call for service.",
      h1: "Privacy Policy",
      paragraphs: ["Our privacy policy explains how we handle phone inquiries and website analytics data."],
      crumbs: [
        { label: "Home", href: "/" },
        { label: "Privacy" },
      ],
    },
  ];

  for (const page of staticPages) {
    const html = applyAssets(renderPage(page));
    if (writeRoute(page.pathUrl, html)) written++;
  }

  for (const state of states) {
    const stateSlug = slugify(state.name);
    const statePath = `/${stateSlug}`;
    const stateTitle = `AC Repair & Installation in ${state.name} | getacrepair`;
    const stateDesc = `Licensed AC repair, installation, and emergency HVAC service in ${state.name}. Same-day dispatch. Call ${PHONE_DISPLAY}.`;
    const stateHtml = applyAssets(
      renderPage({
        pathUrl: statePath,
        title: stateTitle,
        description: stateDesc,
        h1: `AC Repair & Installation in ${state.name}`,
        paragraphs: [
          `getacrepair provides licensed air conditioning repair and installation across ${state.name} (${state.abbr}). Local climate: ${state.climateZone}${state.avgTemp ? ` with peak summer temperatures near ${state.avgTemp}` : ""}.`,
          state.seoTip || `Homeowners in ${state.name} rely on well-maintained cooling systems during peak summer demand.`,
          `Call ${PHONE_DISPLAY} to connect with a nearby EPA-certified technician for same-day or scheduled service.`,
        ],
        crumbs: [
          { label: "Home", href: "/" },
          { label: "Directory", href: "/directory" },
          { label: state.name },
        ],
        links: state.cities.slice(0, 10).map((c) => ({
          href: `/${stateSlug}/${slugify(c.name)}`,
          label: `${c.name} AC Repair`,
        })),
      })
    );
    if (writeRoute(statePath, stateHtml)) written++;

    for (const city of state.cities) {
      const citySlug = slugify(city.name);
      for (const service of SERVICE_SLUGS) {
        const pathUrl = service === "ac-repair" ? `/${stateSlug}/${citySlug}` : `/${stateSlug}/${citySlug}/${service}`;
        const label = SERVICE_LABELS[service];
        const title = `${label} in ${city.name}, ${state.abbr} | getacrepair`;
        let description = `Professional ${label.toLowerCase()} in ${city.name}, ${state.abbr}. ${city.climateProfile}. Call ${PHONE_DISPLAY} for licensed same-day dispatch.`;
        if (description.length > 160) description = description.slice(0, 157).trimEnd() + "...";

        const html = applyAssets(
          renderPage({
            pathUrl,
            title,
            description,
            h1: `${label} in ${city.name}, ${state.abbr}`,
            paragraphs: [
              `Need ${label.toLowerCase()} in ${city.name}, ${state.name}? getacrepair dispatches licensed, EPA-certified technicians for homes dealing with ${city.commonIssue.toLowerCase()}.`,
              `Local climate insight: ${city.climateProfile}. Average summer temperatures often reach ${city.avgSummerTemp}, which increases AC runtime and capacitor/condenser strain.`,
              `Call ${PHONE_DISPLAY} now for transparent estimates and priority dispatch covering ${city.name} and nearby communities in ${state.abbr}.`,
            ],
            crumbs: [
              { label: "Home", href: "/" },
              { label: state.name, href: statePath },
              { label: city.name, href: `/${stateSlug}/${citySlug}` },
              { label },
            ],
            links: SERVICE_SLUGS.filter((s) => s !== service)
              .slice(0, 5)
              .map((s) => ({
                href: s === "ac-repair" ? `/${stateSlug}/${citySlug}` : `/${stateSlug}/${citySlug}/${s}`,
                label: `${SERVICE_LABELS[s]} in ${city.name}`,
              })),
          })
        );
        if (writeRoute(pathUrl, html)) written++;
      }
    }
  }

  console.log(`Prerendered ${written} HTML route files into dist/`);
}

main();

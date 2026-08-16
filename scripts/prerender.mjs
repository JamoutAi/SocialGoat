// Turns the built single-page app into real HTML files, one per route.
//
// Without this, every URL serves the same 991-byte empty shell and search
// engines have to execute JavaScript to see any content at all. Google can,
// but it is a slower second pass, and most other crawlers cannot.
//
// Runs after `vite build` and `vite build --ssr`. See package.json.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const { render, PAGES, SITE_URL, SITE_NAME, OG_IMAGE } = await import(
  path.join(root, "dist-ssr", "entry-server.js")
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Structured data. Tells Google this is a real Denver business, which is what
// feeds the local pack and the knowledge panel alongside his Business Profile.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "VideoProductionCompany",
  name: SITE_NAME,
  alternateName: "Social Goat",
  url: SITE_URL,
  email: "mike@socialgoat.com",
  image: OG_IMAGE,
  description:
    "Emmy award-winning video production company in Denver, Colorado. Corporate video, documentary-style brand films, commercials and executive interviews.",
  address: { "@type": "PostalAddress", addressLocality: "Denver", addressRegion: "CO", addressCountry: "US" },
  areaServed: [
    { "@type": "City", name: "Denver" },
    { "@type": "State", name: "Colorado" },
  ],
  founder: {
    "@type": "Person",
    name: "Mike Anderson",
    jobTitle: "Founder and Director",
    award: "Regional Emmy Award for Outstanding Achievement",
  },
  knowsAbout: [
    "Corporate video production",
    "Documentary production",
    "Brand commercials",
    "Executive and CEO interviews",
    "Event videography",
  ],
  sameAs: [
    "https://www.instagram.com/socialgoatvideo/",
    "https://www.linkedin.com/in/michael-anderson-0379503/",
  ],
};

function headFor(meta) {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const breadcrumb =
    meta.path === "/"
      ? null
      : {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: meta.title.split("|")[0].trim(), item: url },
          ],
        };

  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta name="geo.region" content="US-CO" />`,
    `<meta name="geo.placename" content="Denver" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(localBusiness)}</script>`,
    breadcrumb ? `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>` : "",
  ]
    .filter(Boolean)
    .join("\n    ");
}

let count = 0;
for (const meta of PAGES) {
  const appHtml = render(meta.path);

  let html = template
    // Strip the template's generic description BEFORE injecting, otherwise the
    // removal matches the freshly inserted one and leaves the stale original.
    .replace(/<meta name="description"[^>]*\/?>\s*/, "")
    .replace(/<title>[\s\S]*?<\/title>/, headFor(meta))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = meta.path === "/" ? dist : path.join(dist, meta.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  count++;
  console.log(`  prerendered ${meta.path.padEnd(10)} -> ${(html.length / 1024).toFixed(1)} kB`);
}

// sitemap
const urls = PAGES.map(
  (p) =>
    `  <url>\n    <loc>${SITE_URL}${p.path === "/" ? "/" : p.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${p.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`
).join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log(`\n  ${count} pages prerendered, sitemap.xml written`);

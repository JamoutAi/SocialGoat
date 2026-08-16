// Server entry used only at build time by scripts/prerender.mjs.
// Renders each route to static HTML so crawlers get real content instead of
// an empty <div id="root">.

import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export { PAGES, SITE_URL, SITE_NAME, OG_IMAGE } from "./seo";

export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}

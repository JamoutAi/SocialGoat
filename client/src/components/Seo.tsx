// Keeps the document title and description in step with the current route.
//
// The prerenderer already bakes the correct tags into each page's HTML, which
// is what crawlers read. This handles the client-side navigations after that,
// so the browser tab and any shared link stay accurate.

import { useEffect } from "react";
import { useLocation } from "wouter";
import { metaFor, SITE_URL } from "@/seo";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) return;
  el.setAttribute(attr, value);
}

export default function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = metaFor(location);
    const url = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
  }, [location]);

  return null;
}

// Per-page SEO metadata.
//
// Shared by the build-time prerenderer (which bakes these into real HTML that
// crawlers can read without running JavaScript) and by the client (which keeps
// the tab title correct as you navigate between routes).

export const SITE_URL = "https://socialgoat.com";
export const SITE_NAME = "The Social Goat";
export const OG_IMAGE = `${SITE_URL}/images/hero-bg.webp`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Denver Video Production Company | The Social Goat",
    description:
      "Emmy award-winning video production in Denver. Corporate videos, documentary-style brand films and commercials for Boeing, Meow Wolf, UCHealth and more. 20+ years, 1,000+ projects.",
  },
  {
    path: "/work",
    title: "Video Production Portfolio, Denver | The Social Goat",
    description:
      "Selected corporate video, brand film and documentary work from Denver video production company The Social Goat, including GitLab, Prologis, Meow Wolf and the American Heart Association.",
  },
  {
    path: "/services",
    title: "Corporate Video Production Denver | The Social Goat",
    description:
      "Corporate video, documentary-style brand films, commercials, CEO and executive interviews, and event coverage, produced in Denver, Colorado by Emmy winner Mike Anderson.",
  },
  {
    path: "/about",
    title: "Mike Anderson, Emmy-Winning Denver Filmmaker | The Social Goat",
    description:
      "Meet Mike Anderson, founder of The Social Goat. Emmy award winner, Sundance and Telluride screened, 20+ years and 1,000+ corporate video projects in Denver, Colorado.",
  },
  {
    path: "/contact",
    title: "Start a Video Project | The Social Goat, Denver",
    description:
      "Tell Mike about your video project. Denver-based corporate video, documentary and brand film production. Every enquiry read personally, replies within 24 hours.",
  },
];

export function metaFor(pathname: string): PageMeta {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return PAGES.find((p) => p.path === clean) ?? PAGES[0];
}

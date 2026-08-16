import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Pages are prerendered to real HTML at build time (scripts/prerender.mjs) so
// crawlers get content without running JavaScript. We deliberately do NOT
// hydrate that markup: React 19 hoists <link rel="preload"> into <head> on the
// client and sonner's toaster mounts as a portal, so hydration reports a
// mismatch. Rendering fresh costs a few milliseconds and keeps the console
// clean; the prerendered HTML has already done its job by the time this runs.
createRoot(document.getElementById("root")!).render(<App />);

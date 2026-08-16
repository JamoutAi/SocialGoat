// The Social Goat — Services Page
// Design: Cinematic Editorial — dark charcoal, orange #E8621A, teal #1ABBE8

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const SERVICES = [
  {
    title: "Corporate Video Production",
    tagline: "Your brand, minus the corporate cringe.",
    description: "I've made a lot of corporate videos. The ones that work don't feel corporate. They feel like the real people behind your brand — confident, clear, and worth watching more than once.",
    details: ["Executive interviews", "Company culture films", "Internal communications", "Brand storytelling"],
    accent: "#E8621A",
  },
  {
    title: "Documentary-Style Content",
    tagline: "Real stories. Real impact.",
    description: "Documentary-style production is where I live. Interview-driven, authentic, and built to make your audience feel something. If you have a story worth telling, I'll help you tell it right.",
    details: ["Long-form brand documentaries", "Customer story films", "Cause & mission content", "Festival-quality production"],
    accent: "#1ABBE8",
  },
  {
    title: "Brand Commercials",
    tagline: "High-impact. Impossible to ignore.",
    description: "From concept to final cut, I bring cinematic production values to commercial work. The kind of commercial that makes people stop scrolling and actually watch.",
    details: ["TV & digital commercials", "Product launch films", "Campaign content", "Social media cuts"],
    accent: "#E8621A",
  },
  {
    title: "CEO & Executive Interviews",
    tagline: "Make your leadership look like leadership.",
    description: "Getting a CEO on camera is one thing. Getting them to look and sound like themselves — relaxed, authoritative, human — is another. That's the part I'm good at.",
    details: ["Thought leadership content", "Investor & board communications", "Media training support", "Multi-platform delivery"],
    accent: "#1ABBE8",
  },
  {
    title: "Corporate Event Coverage",
    tagline: "Capture it. Keep it. Use it.",
    description: "Events are expensive. The content from them shouldn't disappear the next day. I cover corporate events with a cinematic eye — so you walk away with footage worth using all year.",
    details: ["Conferences & summits", "Product launches", "Award ceremonies", "Multi-camera setups"],
    accent: "#E8621A",
  },
];

export default function Services() {
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#F0EDE8" }}>
      <Navigation />

      {/* ── PAGE HEADER ───────────────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0 4rem" }}>
        <div className="container">
          <span className="accent-line" style={{ marginBottom: "1.5rem" }} />
          <h1 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 1.5rem" }}>
            WHAT I DO
          </h1>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.6)", maxWidth: "560px", lineHeight: 1.7 }}>
            I specialize in making companies look and sound like the best version of themselves. Here's how.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────────────────── */}
      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="split split-service"
                style={{
                  padding: "4rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Left: number + title */}
                <div>
                  <div className="font-display" style={{ fontSize: "5rem", color: "rgba(255,255,255,0.04)", lineHeight: 1, marginBottom: "-1rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", margin: "0 0 0.75rem", lineHeight: 1.1 }}>
                    {service.title}
                  </h2>
                  <p className="font-quote" style={{ fontSize: "1rem", color: service.accent, fontStyle: "italic" }}>
                    {service.tagline}
                  </p>
                </div>

                {/* Right: description + details */}
                <div>
                  <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.75)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {service.details.map((d) => (
                      <span
                        key={d}
                        className="font-sub"
                        style={{
                          fontSize: "0.75rem", fontWeight: 600,
                          letterSpacing: "0.08em",
                          padding: "0.35rem 0.875rem",
                          border: `1px solid ${service.accent}40`,
                          color: service.accent,
                          borderRadius: "2px",
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "6rem 0", background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="accent-line" style={{ marginBottom: "1rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F0EDE8", margin: 0 }}>
              HOW IT WORKS
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {[
              { step: "01", title: "The Conversation", desc: "We talk. I ask a lot of questions. I want to understand your business, your audience, and what success looks like for you." },
              { step: "02", title: "The Plan", desc: "I put together a creative brief and production plan. No surprises. You know exactly what we're making and why." },
              { step: "03", title: "The Shoot", desc: "We show up prepared and we make it great. My crew is small, professional, and very good at what they do." },
              { step: "04", title: "The Cut", desc: "I edit with intention. Every cut serves the story. You get a video that works — not just one that looks nice." },
            ].map((p) => (
              <div key={p.step}>
                <div className="font-display" style={{ fontSize: "3rem", color: "rgba(232,98,26,0.25)", lineHeight: 1, marginBottom: "0.75rem" }}>{p.step}</div>
                <h3 className="font-sub" style={{ fontSize: "1rem", fontWeight: 700, color: "#F0EDE8", marginBottom: "0.75rem" }}>{p.title}</h3>
                <p className="font-sub" style={{ fontSize: "0.875rem", color: "rgba(240,237,232,0.55)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", margin: "0 0 1.5rem" }}>
            READY TO GET STARTED?
          </h2>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.6)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Tell me about your project. I'll tell you if I'm the right fit. Cheers.
          </p>
          <Link href="/contact">
            <button className="btn-sgf" style={{ fontSize: "1rem", padding: "1.125rem 3rem" }}>
              Start the Conversation →
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

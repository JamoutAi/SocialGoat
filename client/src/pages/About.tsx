// The Social Goat — About Mike Page
// Design: Cinematic Editorial — dark charcoal, orange #E8621A, teal #1ABBE8
// Personality: Confident, warm, witty — Ryan Reynolds energy

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const MIKE_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031092242/kkiCYpOLrdeLinFJ.webp";
const ABOUT_BG = "/manus-storage/sgf-about-bg_444daa84.jpg";

const CREDENTIALS = [
  { icon: "🏆", label: "Emmy Award Winner", detail: "Regional Emmy for Outstanding Achievement" },
  { icon: "🎬", label: "Sundance & Telluride", detail: "Work featured at prestigious film festivals" },
  { icon: "📅", label: "20+ Years", detail: "In professional video production" },
  { icon: "🏢", label: "Fortune 500", detail: "Boeing, UCHealth, Prologis & more" },
];

const TIMELINE = [
  { year: "2000s", event: "Started in broadcast journalism. Learned that the best stories aren't in press releases." },
  { year: "2010s", event: "Built The Social Goat. Started making corporate videos that didn't feel corporate." },
  { year: "2015", event: "Emmy Award. Still the most surreal voicemail I've ever received." },
  { year: "2020s", event: "1,000+ projects in. Still learning. Still nervous before every shoot. Still loving it." },
];

export default function About() {
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#F0EDE8" }}>
      <Navigation />

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,15,15,0.97) 40%, rgba(15,15,15,0.6) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="accent-line" style={{ marginBottom: "1.5rem" }} />
          <h1 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 1.5rem" }}>
            MEET MIKE<br />
            <span style={{ color: "#E8621A" }}>ANDERSON</span>
          </h1>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.7)", maxWidth: "520px", lineHeight: 1.7 }}>
            Founder. Director. The guy who will absolutely geek out about your brand before the first camera rolls.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                top: "1.5rem", left: "1.5rem", right: "-1.5rem", bottom: "-1.5rem",
                border: "2px solid rgba(232,98,26,0.3)",
                borderRadius: "2px",
              }} />
              <img
                src={MIKE_PHOTO}
                alt="Mike Anderson — Founder of The Social Goat"
                style={{ width: "100%", borderRadius: "2px", display: "block", position: "relative", zIndex: 1, objectFit: "cover" }}
              />
              {/* Teal accent corner */}
              <div style={{
                position: "absolute", bottom: "-1rem", right: "-1rem", zIndex: 2,
                width: "80px", height: "80px",
                background: "linear-gradient(135deg, #1ABBE8, #0d8aad)",
                borderRadius: "2px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span className="font-display" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#fff", textAlign: "center", lineHeight: 1.3 }}>
                  EMMY<br />AWARD
                </span>
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="font-display" style={{ fontSize: "2.5rem", color: "#F0EDE8", margin: "0 0 1.5rem" }}>
                THE HONEST VERSION
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.8 }}>
                  I started The Social Goat because I kept watching companies spend serious money on videos that felt like they were made by committee. Safe. Generic. Forgettable. I knew there was a better way.
                </p>
                <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.8 }}>
                  Over 20 years and 1,000+ projects later, I still believe the same thing: the best corporate videos don't feel corporate. They feel <em style={{ color: "#E8621A", fontStyle: "italic" }}>human</em>.
                </p>
                <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.8 }}>
                  I've worked with Boeing, Meow Wolf, the American Heart Association, UCHealth, and a lot of brilliant people in between. My work has screened at Sundance and Telluride. I won an Emmy. I still get nervous before every shoot — and I think that's a good sign.
                </p>
                <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.8 }}>
                  What I care about most: getting to know the people I work with. Your story is specific to you. My job is to find it, frame it, and make it impossible to look away from.
                </p>
                <p className="font-quote" style={{ fontSize: "1.125rem", color: "#1ABBE8", fontStyle: "italic", borderLeft: "3px solid #1ABBE8", paddingLeft: "1.25rem", margin: "0.5rem 0" }}>
                  "I don't just want to make your video. I want to understand your business well enough that I could pitch it myself."
                </p>
              </div>
              <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact">
                  <button className="btn-sgf">Work With Mike →</button>
                </Link>
                <Link href="/work">
                  <button className="btn-sgf-ghost">See the Work</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ───────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "4rem 0", background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {CREDENTIALS.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "44px", height: "44px", flexShrink: 0,
                  background: i % 2 === 0 ? "rgba(232,98,26,0.12)" : "rgba(26,187,232,0.1)",
                  borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem",
                }}>
                  {c.icon}
                </div>
                <div>
                  <div className="font-sub" style={{ fontSize: "0.875rem", fontWeight: 700, color: "#F0EDE8", marginBottom: "0.25rem" }}>{c.label}</div>
                  <div className="font-sub" style={{ fontSize: "0.8rem", color: "rgba(240,237,232,0.5)", lineHeight: 1.5 }}>{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "6rem 0", background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="accent-line" style={{ marginBottom: "1rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0EDE8", margin: 0 }}>
              THE SHORT VERSION
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "2rem", paddingBottom: "2.5rem", borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: "2rem", marginLeft: "50px", position: "relative" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "-6px", top: "4px",
                  width: "11px", height: "11px",
                  background: i % 2 === 0 ? "#E8621A" : "#1ABBE8",
                  borderRadius: "50%",
                }} />
                <div className="font-display" style={{ fontSize: "1.5rem", color: i % 2 === 0 ? "#E8621A" : "#1ABBE8", lineHeight: 1 }}>
                  {item.year}
                </div>
                <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.75)", lineHeight: 1.7, margin: 0 }}>
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0f0f0f" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", margin: "0 0 1.5rem" }}>
            READY TO MEET?
          </h2>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.6)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Tell me about your project. I'll tell you honestly if I'm the right fit. Cheers.
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

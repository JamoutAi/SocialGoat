// The Social Goat — Homepage
// Design: Cinematic Editorial — dark charcoal, orange #E8621A, teal #1ABBE8
// Fonts: Bebas Neue (display), Montserrat (sub), Inter (body), Playfair Display (quotes)
// Sections: Hero → Client Logos → Featured Work (Vimeo) → BTS Gallery → Testimonials → CTA

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const HERO_BG = "/images/hero-bg.webp";
const CTA_BG = "/images/cta-bg.webp";

// BTS photos from the original site
const BTS_PHOTOS = [
  { src: "/images/bts-corporate-interview.jpg", alt: "Video production crew filming corporate interview" },
  { src: "/images/bts-red-camera.webp", alt: "Cinematographer operating RED camera" },
  { src: "/images/bts-cinema-camera-setup.webp", alt: "Video production team setting up cinema camera" },
  { src: "/images/bts-event-multicam.webp", alt: "Corporate event videography multi-camera setup" },
  { src: "/images/bts-dp-reviewing-footage.webp", alt: "Director of photography reviewing footage" },
  { src: "/images/bts-outdoor-commercial.webp", alt: "Video crew filming outdoor commercial" },
  { src: "/images/bts-broll.webp", alt: "Cinematographer capturing B-roll footage" },
  { src: "/images/bts-gimbal-rig.webp", alt: "Camera operator with stabilized gimbal rig" },
  { src: "/images/bts-executive-interview-lighting.webp", alt: "Video crew setting up lighting for executive interview" },
  { src: "/images/bts-commercial-crew.webp", alt: "Commercial video production with professional film crew" },
  { src: "/images/bts-cinema-camera-operator.webp", alt: "Cinematographer operating cinema camera" },
];

// Client logos
const CLIENT_LOGOS = [
  { src: "/images/client-meow-wolf.webp", alt: "Meow Wolf" },
  { src: "/images/client-prologis.webp", alt: "Prologis" },
  { src: "/images/client-american-heart-association.webp", alt: "American Heart Association" },
  { src: "/images/client-uchealth.webp", alt: "UCHealth" },
  { src: "/images/client-boeing.webp", alt: "Boeing" },
  { src: "/images/client-gogo.webp", alt: "Gogo" },
];

// Featured Vimeo work
const FEATURED_WORK = [
  {
    vimeoId: "894617627",
    thumb: "https://i.vimeocdn.com/video/1768906189-33307450e54f1a404a580cd7c0d7d160cbd5c5fe58e1d0a8d95afbd12f0e5f2b-d_640?region=us",
    title: "GitLab VALUES",
    client: "GitLab",
    type: "Brand Film",
  },
  {
    vimeoId: "797133465",
    thumb: "https://i.vimeocdn.com/video/1791340170-a6470a9e0c373a57d77ba4cb8aa001702d698fae2e7195dbc33f42858628450f-d_640?region=us",
    title: "SketchUp Web Cut",
    client: "SketchUp",
    type: "Product Film",
  },
  {
    vimeoId: "764995538",
    thumb: "https://i.vimeocdn.com/video/1536093161-cf332111cd1389d4fe2758a8022d51ed989c92081ba89f1cc50594d841ab38d5-d_640?region=us",
    title: "Why We Fly",
    client: "Travis",
    type: "Documentary",
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "The Social Goat brought our immersive art experience to life through stunning video production. Their creative vision perfectly captured the essence of Meow Wolf.",
    name: "Gleana Albritton",
    title: "Meow Wolf",
    photo: "/images/testimonial-gleanna.webp",
  },
  {
    quote: "Working with Mike and his team was exceptional. They understood our brand story and delivered a video that exceeded all expectations.",
    name: "Karl Siebrecht",
    title: "CEO",
    photo: "/images/testimonial-karl.webp",
  },
  {
    quote: "The documentary-style video The Social Goat created for us was powerful and authentic. It helped us connect with our audience on a deeper level.",
    name: "Rachel Farha",
    title: "CEO, Better Together",
    photo: "/images/testimonial-rachel.webp",
  },
];

// ─── Vimeo Embed Modal ────────────────────────────────────────────────────────
function VimeoModal({ vimeoId, onClose }: { vimeoId: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "900px", position: "relative" }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "-2.5rem", right: 0,
            background: "none", border: "none", color: "#F0EDE8",
            fontSize: "1.5rem", cursor: "pointer", opacity: 0.7,
          }}
          aria-label="Close video"
        >
          ✕
        </button>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=E8621A`}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="Video"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Work Card ────────────────────────────────────────────────────────────────
function WorkCard({ item, onClick }: { item: typeof FEATURED_WORK[0]; onClick: () => void }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", cursor: "pointer", overflow: "hidden",
        borderRadius: "2px",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 250ms cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div style={{ position: "relative", paddingBottom: "56.25%", background: "#1a1a1a" }}>
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 300ms" }}
        />
        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)"
            : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)",
          transition: "background 300ms",
        }} />
        {/* Play button */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`,
          width: "60px", height: "60px",
          background: hovered ? "#E8621A" : "rgba(232,98,26,0.8)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? "0 0 30px rgba(232,98,26,0.5)" : "none",
          transition: "background 250ms cubic-bezier(0.23,1,0.32,1), box-shadow 250ms cubic-bezier(0.23,1,0.32,1), transform 250ms cubic-bezier(0.23,1,0.32,1)",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {/* Labels */}
        <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
          <span className="font-sub" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8621A", display: "block", marginBottom: "0.25rem" }}>
            {item.client} · {item.type}
          </span>
          <h3 className="font-display" style={{ fontSize: "1.5rem", color: "#F0EDE8", margin: 0 }}>
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
import React, { useState } from "react";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#F0EDE8" }}>
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(15,15,15,1) 0%, rgba(15,15,15,0.5) 50%, rgba(15,15,15,0.2) 100%)",
        }} />
        {/* Film grain */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
          opacity: 0.4,
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "6rem" }}>
          <div style={{ maxWidth: "780px" }}>
            {/* Eyebrow */}
            <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", width: "2.5rem", height: "2px", background: "#E8621A" }} />
              <span className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8621A" }}>
                Emmy Award-Winning · Denver, Colorado
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display animate-fade-up animate-fade-up-delay-1"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.95, color: "#F0EDE8", margin: "0 0 1.5rem" }}
            >
              YOUR STORY<br />
              <span style={{ color: "#E8621A" }}>DESERVES</span><br />
              BETTER.
            </h1>

            {/* Subhead */}
            <p
              className="font-sub animate-fade-up animate-fade-up-delay-2"
              style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.75)", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2.5rem" }}
            >
              I've shot for Boeing, Meow Wolf, and the American Heart Association. I've been to Sundance. I still get nervous before every project. That's how you know it matters.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up animate-fade-up-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-sgf">Let's Make Something →</button>
              </Link>
              <Link href="/work">
                <button className="btn-sgf-ghost">See the Work</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", right: "2rem", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span className="font-sub" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.4)", writingMode: "vertical-rl" }}>Scroll</span>
          <div style={{ width: "1px", height: "3rem", background: "linear-gradient(to bottom, rgba(232,98,26,0.8), transparent)" }} />
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "4rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "#0f0f0f" }}>
        <div className="container">
          <p className="font-sub" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.3)", textAlign: "center", marginBottom: "2.5rem" }}>
            Trusted by
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "3rem 4rem" }}>
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ height: "56px", width: "auto", maxWidth: "160px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.55, transition: "opacity 200ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
              />
            ))}
          </div>
          {/* Note: Thule logo is a 400x400 square — rendered in a constrained box */}
        </div>
      </section>

      {/* ── FEATURED WORK ─────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "7rem 0", background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative" }}>
          {/* Ghosted numeral */}
          <div className="font-display" style={{ position: "absolute", top: "-2rem", right: 0, fontSize: "14rem", color: "rgba(232,98,26,0.04)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>01</div>
          {/* Section header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem", position: "relative" }}>
            <div>
              <span className="accent-line" style={{ marginBottom: "1rem" }} />
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", margin: 0 }}>
                FEATURED WORK
              </h2>
            </div>
            <Link href="/work">
              <button className="btn-sgf-ghost" style={{ fontSize: "0.75rem", padding: "0.6rem 1.5rem" }}>
                Full Portfolio →
              </button>
            </Link>
          </div>

          {/* Video grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {FEATURED_WORK.map((item) => (
              <WorkCard key={item.vimeoId} item={item} onClick={() => setActiveVideo(item.vimeoId)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "3rem 0", background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {[
              { num: "20+", label: "Years in the Game" },
              { num: "1,000+", label: "Projects Completed" },
              { num: "1", label: "Emmy Award" },
              { num: "F500", label: "Client Portfolio" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E8621A", lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,237,232,0.5)", marginTop: "0.5rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BTS GALLERY ───────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "7rem 0", background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative" }}>
          <div className="font-display" style={{ position: "absolute", top: "-2rem", right: 0, fontSize: "14rem", color: "rgba(26,187,232,0.04)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>02</div>
          <div style={{ marginBottom: "3rem", position: "relative" }}>
            <span className="accent-line" style={{ marginBottom: "1rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", margin: "0 0 1rem" }}>
              BEHIND THE LENS
            </h2>
            <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.55)", maxWidth: "480px", lineHeight: 1.7 }}>
              This is what it looks like when we show up. Every shoot is different. Every client gets everything we've got.
            </p>
          </div>

          {/* Masonry-style grid */}
          {/* Editorial grid — row 1: wide + 2 narrow */}
          <div className="bts-row bts-row-4">
            <BtsCell photo={BTS_PHOTOS[0]} colSpan={2} />
            <BtsCell photo={BTS_PHOTOS[1]} />
            <BtsCell photo={BTS_PHOTOS[2]} />
          </div>
          {/* Row 2: 2 narrow + wide */}
          <div className="bts-row bts-row-4" style={{ marginTop: "6px" }}>
            <BtsCell photo={BTS_PHOTOS[3]} />
            <BtsCell photo={BTS_PHOTOS[4]} />
            <BtsCell photo={BTS_PHOTOS[5]} colSpan={2} />
          </div>
          {/* Row 3: narrow + wide + narrow */}
          <div className="bts-row bts-row-4" style={{ marginTop: "6px" }}>
            <BtsCell photo={BTS_PHOTOS[6]} />
            <BtsCell photo={BTS_PHOTOS[7]} colSpan={2} />
            <BtsCell photo={BTS_PHOTOS[8]} />
          </div>
          {/* Row 4: 2 equal wide */}
          <div className="bts-row bts-row-2" style={{ marginTop: "6px" }}>
            <BtsCell photo={BTS_PHOTOS[9]} />
            <BtsCell photo={BTS_PHOTOS[10]} />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "7rem 0", background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative" }}>
          <div className="font-display" style={{ position: "absolute", top: "-2rem", right: 0, fontSize: "14rem", color: "rgba(26,187,232,0.04)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>03</div>
          <div style={{ marginBottom: "4rem", position: "relative" }}>
            <span className="accent-line" style={{ marginBottom: "1rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", margin: 0 }}>
              WHAT CLIENTS SAY
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ position: "relative" }}>
                {/* Large quote mark */}
                <div className="font-display" style={{
                  position: "absolute", top: "-1rem", left: "-0.5rem",
                  fontSize: "10rem", lineHeight: 1, color: i % 2 === 0 ? "rgba(232,98,26,0.15)" : "rgba(26,187,232,0.12)",
                  pointerEvents: "none", userSelect: "none",
                }}>
                  "
                </div>
                <blockquote
                  className="font-quote"
                  style={{
                    fontSize: "1.2rem", lineHeight: 1.8,
                    color: "rgba(240,237,232,0.85)",
                    fontStyle: "italic",
                    margin: "0 0 2rem",
                    position: "relative", zIndex: 1,
                  }}
                >
                  "{t.quote}"
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", border: `2px solid ${i % 2 === 0 ? "#E8621A" : "#1ABBE8"}` }}
                  />
                  <div>
                    <div className="font-sub" style={{ fontSize: "0.875rem", fontWeight: 700, color: "#F0EDE8" }}>{t.name}</div>
                    <div className="font-sub" style={{ fontSize: "0.75rem", color: "rgba(240,237,232,0.5)" }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
        {/* Background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${CTA_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.75) 100%)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <span className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8621A", display: "block", marginBottom: "1.5rem" }}>
            Let's Work Together
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 1.5rem" }}>
            LET'S MAKE<br />
            <span style={{ color: "#1ABBE8" }}>SOMETHING</span><br />
            WORTH WATCHING.
          </h2>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.7)", maxWidth: "480px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
            Tell me about your project. I'll tell you if I'm the right person for it. Cheers.
          </p>
          <Link href="/contact">
            <button className="btn-sgf" style={{ fontSize: "1rem", padding: "1.125rem 3rem" }}>
              Start the Conversation →
            </button>
          </Link>
        </div>
      </section>

      <Footer />

      {/* Vimeo Modal */}
      {activeVideo && (
        <VimeoModal vimeoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}
// ─── BTS Cell ─────────────────────────────────────────────────────────────────
function BtsCell({ photo, colSpan = 1 }: { photo: { src: string; alt: string }; colSpan?: number }) {
  return (
    <div
      style={{
        gridColumn: `span ${colSpan}`,
        overflow: "hidden",
        borderRadius: "2px",
        position: "relative",
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        style={{
          width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          transition: "transform 400ms cubic-bezier(0.23,1,0.32,1)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  );
}

// ─── Work Card ────────────────────────────────────────────────────────────────

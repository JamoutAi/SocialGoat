// The Social Goat — Work / Portfolio Page
// Design: Cinematic Editorial — dark charcoal, orange #E8621A, teal #1ABBE8

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import React, { useState } from "react";

const ALL_WORK = [
  {
    vimeoId: "894617627",
    thumb: "https://i.vimeocdn.com/video/1768906189-33307450e54f1a404a580cd7c0d7d160cbd5c5fe58e1d0a8d95afbd12f0e5f2b-d_640?region=us",
    title: "GitLab VALUES",
    client: "GitLab",
    type: "Brand Film",
    description: "A values-driven brand film exploring what makes GitLab's culture unique.",
  },
  {
    vimeoId: "797133465",
    thumb: "https://i.vimeocdn.com/video/1791340170-a6470a9e0c373a57d77ba4cb8aa001702d698fae2e7195dbc33f42858628450f-d_640?region=us",
    title: "SketchUp Web Cut",
    client: "SketchUp",
    type: "Product Film",
    description: "A sleek product film showcasing SketchUp's web-based design tools.",
  },
  {
    vimeoId: "764995538",
    thumb: "https://i.vimeocdn.com/video/1536093161-cf332111cd1389d4fe2758a8022d51ed989c92081ba89f1cc50594d841ab38d5-d_640?region=us",
    title: "Why We Fly",
    client: "Travis",
    type: "Documentary",
    description: "A documentary-style film about passion, purpose, and what drives people to push limits.",
  },
];

const ALL_BTS = [
  { src: "/images/bts-corporate-interview.jpg", alt: "Video production crew filming corporate interview" },
  { src: "/images/bts-red-camera.webp", alt: "Cinematographer operating RED camera" },
  { src: "/images/bts-cinema-camera-setup.webp", alt: "Video production team setting up cinema camera" },
  { src: "/images/bts-event-multicam.webp", alt: "Corporate event videography multi-camera setup" },
  { src: "/images/bts-dp-reviewing-footage.webp", alt: "Director of photography reviewing footage" },
  { src: "/images/bts-outdoor-commercial.webp", alt: "Video crew filming outdoor commercial" },
  { src: "/images/bts-broll.webp", alt: "Cinematographer capturing B-roll footage" },
  { src: "/images/bts-team-collaborating.webp", alt: "Professional video production team collaborating" },
  { src: "/images/bts-gimbal-rig.webp", alt: "Camera operator with stabilized gimbal rig" },
  { src: "/images/bts-executive-interview-lighting.webp", alt: "Video crew setting up lighting for executive interview" },
  { src: "/images/bts-commercial-crew.webp", alt: "Commercial video production with professional film crew" },
  { src: "/images/bts-cinema-camera-operator.webp", alt: "Cinematographer operating cinema camera" },
  { src: "/images/bts-corporate-testimonial.webp", alt: "Video production team filming corporate testimonial" },
  { src: "/images/bts-shot-composition.webp", alt: "Director of photography reviewing shot composition" },
  { src: "/images/bts-cinematic-crew.webp", alt: "Professional video crew capturing cinematic footage" },
  { src: "/images/bts-event-videography.webp", alt: "Behind the scenes of event videography" },
  { src: "/images/bts-location-commercial.webp", alt: "Video production team on location for commercial shoot" },
];

function VimeoModal({ vimeoId, onClose }: { vimeoId: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "960px", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "-2.5rem", right: 0, background: "none", border: "none", color: "#F0EDE8", fontSize: "1.5rem", cursor: "pointer", opacity: 0.7 }} aria-label="Close">✕</button>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=E8621A`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; fullscreen; picture-in-picture" title="Video" />
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#F0EDE8" }}>
      <Navigation />

      {/* ── PAGE HEADER ───────────────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0 4rem" }}>
        <div className="container">
          <span className="accent-line" style={{ marginBottom: "1.5rem" }} />
          <h1 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 1.5rem" }}>
            THE WORK
          </h1>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            Every project starts with a conversation. Every video ends with something worth watching. Here's a sample of what that looks like.
          </p>
        </div>
      </section>

      {/* ── FEATURED REELS ────────────────────────────────────────────────── */}
      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {ALL_WORK.map((item, i) => (
              <div
                key={item.vimeoId}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1.4fr 1fr" : "1fr 1.4fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                {/* Video thumbnail — left on even, right on odd */}
                {i % 2 !== 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", order: 1 }}>
                    <span className="font-sub" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8621A" }}>
                      {item.client} · {item.type}
                    </span>
                    <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0EDE8", margin: 0 }}>{item.title}</h2>
                    <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.7 }}>{item.description}</p>
                    <button
                      className="btn-sgf-ghost"
                      style={{ alignSelf: "flex-start", fontSize: "0.75rem" }}
                      onClick={() => setActiveVideo(item.vimeoId)}
                    >
                      ▶ Watch Film
                    </button>
                  </div>
                )}

                {/* Thumbnail */}
                <div
                  onClick={() => setActiveVideo(item.vimeoId)}
                  style={{ position: "relative", cursor: "pointer", overflow: "hidden", borderRadius: "2px", order: i % 2 !== 0 ? 2 : 1 }}
                >
                  <div style={{ position: "relative", paddingBottom: "56.25%", background: "#1a1a1a" }}>
                    <img src={item.thumb} alt={item.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                    <div style={{
                      position: "absolute", top: "50%", left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "72px", height: "72px",
                      background: "rgba(232,98,26,0.85)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 200ms, transform 200ms",
                    }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#E8621A"; (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1.1)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(232,98,26,0.85)"; (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)"; }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Text — right on even */}
                {i % 2 === 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <span className="font-sub" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8621A" }}>
                      {item.client} · {item.type}
                    </span>
                    <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0EDE8", margin: 0 }}>{item.title}</h2>
                    <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.7 }}>{item.description}</p>
                    <button
                      className="btn-sgf-ghost"
                      style={{ alignSelf: "flex-start", fontSize: "0.75rem" }}
                      onClick={() => setActiveVideo(item.vimeoId)}
                    >
                      ▶ Watch Film
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL BTS GALLERY ──────────────────────────────────────────────── */}
      <section className="section-grain" style={{ padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="accent-line" style={{ marginBottom: "1rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F0EDE8", margin: "0 0 1rem" }}>
              ON SET
            </h2>
            <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.5)", maxWidth: "480px", lineHeight: 1.7 }}>
              A look at what it actually takes to make something great.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "6px" }}>
            {ALL_BTS.map((photo, i) => (
              <div key={i} style={{ overflow: "hidden", borderRadius: "2px", aspectRatio: "4/3" }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 400ms cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", margin: "0 0 1.5rem" }}>
            YOUR PROJECT NEXT?
          </h2>
          <p className="font-sub" style={{ fontSize: "1.125rem", color: "rgba(240,237,232,0.6)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Every project starts with a conversation. Let's have one.
          </p>
          <p className="font-sub" style={{ fontSize: "0.8rem", color: "rgba(240,237,232,0.35)", marginBottom: "2rem" }}>
            More work coming soon — Mike's portfolio spans 1,000+ projects. Ask him about your industry.
          </p>
          <Link href="/contact">
            <button className="btn-sgf" style={{ fontSize: "1rem", padding: "1.125rem 3rem" }}>
              Start the Conversation →
            </button>
          </Link>
        </div>
      </section>

      <Footer />

      {activeVideo && (
        <VimeoModal vimeoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}

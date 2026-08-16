// The Social Goat — Footer
// Dark, minimal, with orange/teal accents

import { Link } from "wouter";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031092242/uSakOhAYRyFOmiGC.webp";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <img src={LOGO_URL} alt="The Social Goat" style={{ height: "36px" }} />
              <span className="font-display" style={{ fontSize: "1rem", color: "#F0EDE8", letterSpacing: "0.1em" }}>
                THE SOCIAL GOAT
              </span>
            </div>
            <p className="font-sub" style={{ fontSize: "0.85rem", color: "rgba(240,237,232,0.5)", lineHeight: 1.7, maxWidth: "280px" }}>
              Emmy Award-winning video production in Denver. We make things worth watching.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a href="mailto:mike@socialgoat.com" className="font-sub" style={{ fontSize: "0.85rem", color: "#E8621A", fontWeight: 600 }}>
                mike@socialgoat.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.4)", marginBottom: "1.25rem" }}>
              Navigate
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/work", label: "Our Work" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Mike" },
                { href: "/contact", label: "Start a Project" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="font-sub" style={{ fontSize: "0.875rem", color: "rgba(240,237,232,0.6)", cursor: "pointer", transition: "color 200ms" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#E8621A"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(240,237,232,0.6)"}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.4)", marginBottom: "1.25rem" }}>
              What We Do
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Corporate Video", "Documentary Production", "Brand Commercials", "CEO Interviews", "Event Coverage"].map((s) => (
                <span key={s} className="font-sub" style={{ fontSize: "0.875rem", color: "rgba(240,237,232,0.5)" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.4)", marginBottom: "1.25rem" }}>
              Ready to Roll?
            </h4>
            <p className="font-sub" style={{ fontSize: "0.875rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Denver, Colorado — and wherever the story takes us.
            </p>
            <Link href="/contact">
              <button className="btn-sgf" style={{ fontSize: "0.75rem", padding: "0.75rem 1.5rem" }}>
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span className="font-sub" style={{ fontSize: "0.75rem", color: "rgba(240,237,232,0.35)" }}>
            © 2026 The Social Goat. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span className="font-sub" style={{ fontSize: "0.75rem", color: "rgba(240,237,232,0.35)" }}>Denver, Colorado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

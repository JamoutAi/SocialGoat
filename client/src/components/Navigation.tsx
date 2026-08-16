// The Social Goat — Navigation
// Dark cinematic header, NOT sticky per design preferences
// Logo + nav links + CTA button

import { Link, useLocation } from "wouter";

const LOGO_URL = "/images/logo.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Mike" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <header
      style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(15,15,15,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link href="/">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
              <img src={LOGO_URL} alt="The Social Goat" style={{ height: "40px", width: "auto" }} />
              <span
                className="font-display"
                style={{ fontSize: "1.25rem", color: "#F0EDE8", letterSpacing: "0.1em" }}
              >
                THE SOCIAL GOAT
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-sub"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: location === link.href ? "#E8621A" : "rgba(240,237,232,0.7)",
                    transition: "color 200ms",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { if (location !== link.href) (e.target as HTMLElement).style.color = "#F0EDE8"; }}
                  onMouseLeave={(e) => { if (location !== link.href) (e.target as HTMLElement).style.color = "rgba(240,237,232,0.7)"; }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="btn-sgf" style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem" }}>
                Start a Project
              </button>
            </Link>
          </nav>

          {/* Mobile menu — hamburger */}
          <MobileMenu location={location} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ location }: { location: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden" style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", color: "#F0EDE8", padding: "8px" }}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          right: 0,
          background: "#111",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "4px",
          padding: "1rem",
          minWidth: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                onClick={() => setOpen(false)}
                className="font-sub"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: location === link.href ? "#E8621A" : "#F0EDE8",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <button className="btn-sgf" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }} onClick={() => setOpen(false)}>
              Start a Project
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

import React from "react";

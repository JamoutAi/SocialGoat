// The Social Goat — Contact / Project Inquiry Page
// Design: Cinematic Editorial — dark charcoal, orange #E8621A, teal #1ABBE8
// Goal: Conversational questionnaire that makes it easy to start a project

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { trpc } from "@/lib/trpc";

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

const PROJECT_TYPES = [
  "Corporate Video",
  "Documentary / Brand Film",
  "Brand Commercial",
  "CEO / Executive Interview",
  "Event Coverage",
  "Something else",
];

const TIMELINE_OPTIONS = [
  "ASAP (within 4 weeks)",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Just exploring",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      name: form.name,
      company: form.company || undefined,
      email: form.email,
      phone: form.phone || undefined,
      projectType: form.projectType || undefined,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      message: form.message,
    });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "2px",
    padding: "0.875rem 1rem",
    color: "#F0EDE8",
    fontSize: "0.9375rem",
    fontFamily: "'Montserrat', sans-serif",
    outline: "none",
    transition: "border-color 200ms",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(240,237,232,0.5)",
    marginBottom: "0.5rem",
    fontFamily: "'Montserrat', sans-serif",
  };

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#F0EDE8" }}>
      <Navigation />

      <section style={{ padding: "7rem 0 6rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem", alignItems: "start" }}>

            {/* Left: Context */}
            <div style={{ position: "sticky", top: "2rem" }}>
              <span className="accent-line" style={{ marginBottom: "1.5rem" }} />
              <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 2rem" }}>
                LET'S TALK<br />
                <span style={{ color: "#E8621A" }}>ABOUT YOUR</span><br />
                PROJECT.
              </h1>
              <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Fill this out and I'll get back to you within 24 hours. I read every message personally — no auto-responders, no assistants. Just me.
              </p>
              <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Not sure if your project is the right fit? Tell me anyway. The worst I can say is "not this time" — and I'll always point you in the right direction.
              </p>
              <p className="font-quote" style={{ fontSize: "1.125rem", color: "#1ABBE8", fontStyle: "italic", borderLeft: "3px solid #1ABBE8", paddingLeft: "1.25rem" }}>
                "Cheers, Mike"
              </p>
              <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href="mailto:mike@socialgoat.com" className="font-sub" style={{ fontSize: "0.875rem", color: "#E8621A", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                  mike@socialgoat.com
                </a>
                <span className="font-sub" style={{ fontSize: "0.875rem", color: "rgba(240,237,232,0.45)" }}>
                  Denver, Colorado (and wherever the story takes us)
                </span>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                  <div style={{ width: "72px", height: "72px", background: "rgba(232,98,26,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h2 className="font-display" style={{ fontSize: "2.5rem", color: "#F0EDE8", margin: "0 0 1rem" }}>GOT IT. CHEERS.</h2>
                  <p className="font-sub" style={{ fontSize: "1rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.7 }}>
                    I'll be in touch within 24 hours. Looking forward to hearing more about your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

                  {/* Name + Company */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={labelStyle} htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#E8621A")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="company">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Corp"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#E8621A")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={labelStyle} htmlFor="email">Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#E8621A")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(303) 555-0100"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#E8621A")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label style={labelStyle}>What kind of project? *</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          className="font-sub"
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            padding: "0.5rem 1rem",
                            border: `1px solid ${form.projectType === type ? "#E8621A" : "rgba(255,255,255,0.15)"}`,
                            background: form.projectType === type ? "rgba(232,98,26,0.15)" : "transparent",
                            color: form.projectType === type ? "#E8621A" : "rgba(240,237,232,0.65)",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "all 150ms",
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label style={labelStyle}>Budget range</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {BUDGET_OPTIONS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className="font-sub"
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            padding: "0.5rem 1rem",
                            border: `1px solid ${form.budget === b ? "#1ABBE8" : "rgba(255,255,255,0.15)"}`,
                            background: form.budget === b ? "rgba(26,187,232,0.1)" : "transparent",
                            color: form.budget === b ? "#1ABBE8" : "rgba(240,237,232,0.65)",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "all 150ms",
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label style={labelStyle}>Timeline</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {TIMELINE_OPTIONS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, timeline: t })}
                          className="font-sub"
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            padding: "0.5rem 1rem",
                            border: `1px solid ${form.timeline === t ? "#E8621A" : "rgba(255,255,255,0.15)"}`,
                            background: form.timeline === t ? "rgba(232,98,26,0.12)" : "transparent",
                            color: form.timeline === t ? "#E8621A" : "rgba(240,237,232,0.65)",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "all 150ms",
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle} htmlFor="message">Tell me about your project *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What's the story you're trying to tell? Who's the audience? What does success look like?"
                      style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                      onFocus={(e) => (e.target.style.borderColor = "#E8621A")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="btn-sgf"
                    style={{ fontSize: "1rem", padding: "1.125rem", justifyContent: "center", opacity: submitMutation.isPending ? 0.7 : 1 }}
                  >
                    {submitMutation.isPending ? "Sending..." : "Send It Over →"}
                  </button>

                  <p className="font-sub" style={{ fontSize: "0.75rem", color: "rgba(240,237,232,0.35)", textAlign: "center" }}>
                    I respond within 24 hours. No spam. No sales calls. Just a real conversation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

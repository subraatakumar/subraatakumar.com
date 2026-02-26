import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Subrata Kumar Das — Tech Lead and React Native Architect",
};

export default function ContactPage() {
  return (
    <div className="sk-page">

      <h1 className="sk-page-heading">Contact</h1>
      <div className="sk-squiggle" style={{ marginTop: 16 }} />

      <p style={{ fontSize: "1.25rem", color: "#444", maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
        Have a question, a project idea, or want to talk mobile architecture?
        I'm always happy to connect.
      </p>

      {/* ── Contact cards ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 480 }}>

        <div className="sk-card" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.8rem", color: "#2563eb", minWidth: 36 }}>✉</span>
          <div>
            <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.2rem", marginBottom: 2 }}>Email</div>
            <a href="mailto:hello@subraatakumar.com" style={{ fontSize: "1.1rem", color: "#2563eb", textDecoration: "underline", fontFamily: "'Caveat', cursive" }}>
              hello@subraatakumar.com
            </a>
          </div>
        </div>

        <div className="sk-card" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.8rem", color: "#2563eb", minWidth: 36 }}>in</span>
          <div>
            <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.2rem", marginBottom: 2 }}>LinkedIn</div>
            <a href="https://linkedin.com/in/subraatakumar" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.1rem", color: "#2563eb", textDecoration: "underline", fontFamily: "'Caveat', cursive" }}>
              linkedin.com/in/subraatakumar
            </a>
          </div>
        </div>

        <div className="sk-card" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.8rem", color: "#2563eb", minWidth: 36 }}>GH</span>
          <div>
            <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.2rem", marginBottom: 2 }}>GitHub</div>
            <a href="https://github.com/subraatakumar" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.1rem", color: "#2563eb", textDecoration: "underline", fontFamily: "'Caveat', cursive" }}>
              github.com/subraatakumar
            </a>
          </div>
        </div>

      </div>

      <div className="sk-squiggle" />

      {/* ── Sticky note ── */}
      <div style={{
        display: "inline-block",
        background: "#fef9c3",
        border: "2px solid #ca8a04",
        borderRadius: 2,
        padding: "12px 20px",
        fontSize: "1.1rem",
        color: "#713f12",
        transform: "rotate(-1.5deg)",
        boxShadow: "3px 3px 0 #ca8a04",
        fontFamily: "'Caveat', cursive",
        fontWeight: 600,
        lineHeight: 1.7,
      }}>
        📍 Based in India<br />
        🌍 Open to remote collaboration
      </div>

    </div>
  );
}

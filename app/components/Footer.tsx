"use client";
export default function Footer() {
  return (
    <footer style={{ padding: "1.5rem 5%", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", position: "relative", zIndex: 1, background: "#03040a" }}>
      <p style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#8a8fa8" }}>
        © 2025 <span style={{ color: "#00f5c4" }}>Abhishek Bussa Reddy</span> · Built with 🤖 AI &amp; passion
      </p>
      <div style={{ display: "flex", gap: "1.2rem" }}>
        {[
          { label: "GitHub",   href: "https://github.com/AbhishekReddy12-programmer" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/bussareddy-abhishek-51a4b9341" },
          { label: "Email",    href: "mailto:bussareddyabhishekreddy@gmail.com" },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#8a8fa8", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00f5c4")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8a8fa8")}
          >{l.label}</a>
        ))}
      </div>
    </footer>
  );
}

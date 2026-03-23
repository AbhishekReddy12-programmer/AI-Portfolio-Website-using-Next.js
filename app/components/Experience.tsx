"use client";

export default function Experience() {
  const points = [
    "Worked on real-world data analysis tasks, handling and processing large datasets",
    "Extracted actionable insights from structured data using Python and visualization tools",
    "Gained experience in the full data pipeline: cleaning, EDA, modeling, and reporting",
  ];
  return (
    <section id="experience" style={{ padding: "80px 5%", position: "relative", zIndex: 1, color: "#f0f0f0" }}>
      <div className="sec-label">05 — Experience</div>
      <h2 style={{ fontFamily: "Syne,system-ui,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-2px", marginBottom: "3.5rem", color: "#f0f0f0" }}>
        Where I&apos;ve <span style={{ color: "#6c63ff" }}>worked</span> and grown
      </h2>
      <div style={{ position: "relative", paddingLeft: 55 }}>
        <div className="tl-line" />
        <div className="tl-dot"><div className="tl-pulse" /></div>
        <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#00f5c4", letterSpacing: "0.1em", marginBottom: 8 }}>2024 — Present</div>
        <div className="glass" style={{ borderRadius: 14, padding: "1.3rem" }}>
          <div style={{ fontFamily: "Syne,system-ui,sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0f0f0", marginBottom: 3 }}>Data Analyst Trainee Intern</div>
          <div style={{ color: "#6c63ff", fontSize: "0.85rem", marginBottom: "0.9rem" }}>Accelrate</div>
          {points.map(p => (
            <div key={p} style={{ display: "flex", gap: 8, alignItems: "flex-start", color: "#8a8fa8", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: 5 }}>
              <span style={{ color: "#00f5c4", fontSize: "0.5rem", flexShrink: 0, marginTop: 5 }}>◆</span>{p}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "1.5rem", borderRadius: 14, padding: "1.3rem", display: "flex", gap: "1rem", background: "rgba(108,99,255,0.06)", border: "1px solid rgba(108,99,255,0.2)" }}>
        <div style={{ width: 64, height: 64, borderRadius: 12, flexShrink: 0, background: "linear-gradient(135deg,#6c63ff,#00f5c4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem" }}>🏛️</div>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: "0.62rem", color: "#a69bff", letterSpacing: "0.1em", marginBottom: 4 }}>INFOSYS SPRINGBOARD 6.0</div>
          <div style={{ fontFamily: "Syne,system-ui,sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#f0f0f0", marginBottom: 6 }}>Selected Candidate — National Program</div>
          <p style={{ color: "#8a8fa8", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: 10 }}>Recognized by Infosys for the Springboard 6.0 national initiative — identifying top AI/ML talent across India.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            <span style={{ padding: "3px 10px", borderRadius: 8, fontFamily: "monospace", fontSize: "0.62rem", background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", color: "#a69bff" }}>🏅 Official Selection</span>
            <span style={{ padding: "3px 10px", borderRadius: 8, fontFamily: "monospace", fontSize: "0.62rem", background: "rgba(0,245,196,0.07)", border: "1px solid rgba(0,245,196,0.18)", color: "#00f5c4" }}>📜 Certificate in Certs Section</span>
          </div>
        </div>
      </div>
    </section>
  );
}

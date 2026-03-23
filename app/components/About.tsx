"use client";

export default function About() {
  const chips = ["🧠 AI/ML", "📊 Data", "🔍 Anomaly", "⚠️ Risk", "👁️ CV"];
  return (
    <section id="about" style={{ padding: "80px 5%", position: "relative", zIndex: 1, color: "#f0f0f0" }}>
      <div className="sec-label">01 — About Me</div>
      <h2 style={{ fontFamily: "Syne,system-ui,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-2px", marginBottom: "3.5rem", color: "#f0f0f0" }}>
        The Engineer <span style={{ color: "#6c63ff" }}>behind</span> the models
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "4rem", alignItems: "center" }}>
        {/* Card */}
        <div className="glass" style={{ borderRadius: 24, padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", position: "relative", overflow: "hidden", maxWidth: 340, margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%,rgba(0,245,196,0.08),transparent 60%)", pointerEvents: "none" }} />
          <div className="ring-spin" style={{ position: "absolute", width: 150, height: 150, borderRadius: "50%", border: "1px dashed rgba(0,245,196,0.3)" }} />
          <div className="ring-spin-rev" style={{ position: "absolute", width: 185, height: 185, borderRadius: "50%", border: "1px dashed rgba(108,99,255,0.2)" }} />
          <div style={{ position: "relative", zIndex: 1, width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg,#00f5c4,#6c63ff)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne,system-ui,sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#000", boxShadow: "0 0 35px rgba(0,245,196,0.3)" }}>ABR</div>
          <div style={{ fontFamily: "Syne,system-ui,sans-serif", fontWeight: 700, color: "#f0f0f0", textAlign: "center" }}>Abhishek Bussa Reddy</div>
          <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#00f5c4", textAlign: "center", letterSpacing: "0.1em" }}>AI RESEARCHER · ML ENGINEER</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
            {chips.map(c => <span key={c} style={{ background: "rgba(0,245,196,0.08)", border: "1px solid rgba(0,245,196,0.2)", color: "#00f5c4", padding: "3px 10px", borderRadius: 50, fontSize: "0.62rem", fontFamily: "monospace" }}>{c}</span>)}
          </div>
        </div>
        {/* Text */}
        <div style={{ color: "#f0f0f0" }}>
          <p style={{ color: "#8a8fa8", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "1.2rem" }}>I am a <strong style={{ color: "#00f5c4", fontWeight: 500 }}>BTech student specializing in Artificial Intelligence and Machine Learning</strong>, with hands-on experience building ML models for real-world problems.</p>
          <p style={{ color: "#8a8fa8", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "1.2rem" }}>My work focuses on <strong style={{ color: "#f0f0f0", fontWeight: 500 }}>data analysis, anomaly detection, and predictive modeling</strong> — from financial risk systems to gesture-based computer vision.</p>
          <p style={{ color: "#8a8fa8", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "1.2rem" }}>I enjoy working with raw data, extracting meaningful insights, and building end-to-end ML solutions that solve practical problems.</p>
          <div style={{ background: "rgba(255,255,255,0.03)", borderLeft: "2px solid #00f5c4", borderRadius: "0 10px 10px 0", padding: "14px 18px", fontFamily: "monospace", fontSize: "0.78rem", lineHeight: 1.6, color: "#f0f0f0" }}>
            <span style={{ color: "#00f5c4" }}>🎯 Goal: </span>Become an <strong>AI Research Scientist</strong> — pushing ML boundaries to create systems that are genuinely useful for humanity.
          </div>
        </div>
      </div>
    </section>
  );
}

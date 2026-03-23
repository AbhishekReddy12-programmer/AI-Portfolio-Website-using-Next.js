"use client";
export default function Hero() {
  const stats = [{ num: "3+", label: "ML Projects" }, { num: "9", label: "Certifications" }, { num: "AI", label: "Research Goal" }];
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", position: "relative", overflow: "hidden", color: "#f0f0f0" }}>
      {/* Orbs */}
      {[
        { size: 420, color: "rgba(0,245,196,0.12)", top: "-80px", right: "-80px", dur: "8s" },
        { size: 350, color: "rgba(108,99,255,0.1)", bottom: "0", left: "-80px", dur: "10s", rev: true },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute", width: o.size, height: o.size, borderRadius: "50%",
          background: `radial-gradient(circle,${o.color},transparent)`,
          filter: "blur(70px)", pointerEvents: "none",
          top: (o as {top?: string}).top, right: (o as {right?: string}).right,
          bottom: (o as {bottom?: string}).bottom, left: (o as {left?: string}).left,
          animation: `orbF ${o.dur} ease-in-out infinite${o.rev ? " reverse" : ""}`,
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 720 }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 15px", borderRadius: 50, fontFamily: "monospace", fontSize: "0.7rem", color: "#00f5c4", letterSpacing: "0.1em", marginBottom: "1.8rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", animation: "fadeUp 0.6s ease both" }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00f5c4", animation: "pulse 2s infinite" }} />
          🤖 AI Researcher &amp; ML Engineer
        </div>

        <h1 style={{ fontFamily: "Syne,system-ui,sans-serif", fontSize: "clamp(2.8rem,7vw,5rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-3px", marginBottom: "1rem", color: "#f0f0f0", animation: "fadeUp 0.7s ease 0.1s both" }}>
          Abhishek<br /><span className="gradient-text">Bussa Reddy</span>
        </h1>

        <p style={{ fontFamily: "monospace", fontSize: "0.82rem", color: "#00f5c4", letterSpacing: "0.12em", marginBottom: "1.2rem", animation: "fadeUp 0.7s ease 0.2s both" }}>
          ⟨ Machine Learning Engineer · Data Analysis · Risk Modeling ⟩
        </p>

        <p style={{ color: "#8a8fa8", fontSize: "1rem", lineHeight: 1.8, maxWidth: 520, fontWeight: 300, animation: "fadeUp 0.7s ease 0.3s both" }}>
          I build <strong style={{ color: "#f0f0f0", fontWeight: 500 }}>practical machine learning systems</strong> focused on <strong style={{ color: "#f0f0f0", fontWeight: 500 }}>anomaly detection</strong>, risk analysis, and real-world data-driven solutions.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "2.2rem", animation: "fadeUp 0.7s ease 0.4s both" }}>
          <a href="#projects" className="btn-p" style={{ padding: "12px 28px", borderRadius: 50, fontFamily: "Syne,system-ui,sans-serif", fontSize: "0.88rem" }}>🚀 View Projects</a>
          <a href="#contact" className="btn-s" style={{ padding: "12px 28px", borderRadius: 50, fontFamily: "Syne,system-ui,sans-serif", fontSize: "0.88rem", color: "#f0f0f0" }}>✉️ Contact Me</a>
          <a href="https://github.com/AbhishekReddy12-programmer" target="_blank" rel="noopener noreferrer" className="btn-s" style={{ padding: "12px 28px", borderRadius: 50, fontFamily: "Syne,system-ui,sans-serif", fontSize: "0.88rem", color: "#f0f0f0" }}>⭐ GitHub</a>
        </div>

        <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", animation: "fadeUp 0.7s ease 0.5s both" }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "Syne,system-ui,sans-serif", fontSize: "1.8rem", fontWeight: 800, background: "linear-gradient(135deg,#00f5c4,#6c63ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
              <div style={{ fontSize: "0.7rem", color: "#8a8fa8", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

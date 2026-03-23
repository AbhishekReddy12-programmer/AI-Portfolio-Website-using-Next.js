"use client";

const cats = [
  { icon: "💻", title: "Programming",   color: "#00f5c4", tags: ["Python", "SQL"] },
  { icon: "📦", title: "Libraries",     color: "#a69bff", tags: ["NumPy", "Pandas", "Scikit-learn"] },
  { icon: "🤖", title: "ML / AI",       color: "#ff8cb5", tags: ["Machine Learning", "Data Analysis", "Anomaly Detection", "Model Building"] },
  { icon: "📊", title: "Visualization", color: "#80c8ff", tags: ["Power BI", "Matplotlib", "Seaborn"] },
  { icon: "🛠️", title: "Tools",         color: "#ffd666", tags: ["Git", "Jupyter Notebook", "VS Code"] },
  { icon: "🔬", title: "Research",      color: "#00f5c4", tags: ["Feature Engineering", "EDA", "Hypothesis Testing"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 5%", position: "relative", zIndex: 1, color: "#f0f0f0" }}>
      <div className="sec-label">02 — Technical Skills</div>
      <h2 style={{ fontFamily: "Syne,system-ui,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-2px", marginBottom: "3.5rem", color: "#f0f0f0" }}>
        My <span style={{ color: "#6c63ff" }}>toolbox</span> of capabilities
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "1.2rem" }}>
        {cats.map((cat) => (
          <div key={cat.title} className="glass" style={{ borderRadius: 14, padding: "1.3rem", transition: "transform 0.3s, border-color 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}44`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <div style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>{cat.icon}</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.62rem", color: "#8a8fa8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.8rem" }}>{cat.title}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {cat.tags.map(tag => (
                <span key={tag} className="skill-tag" style={{ padding: "3px 9px", borderRadius: 50, fontSize: "0.65rem", fontFamily: "monospace", border: `1px solid ${cat.color}44`, color: cat.color, background: `${cat.color}12` }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

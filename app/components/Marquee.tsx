"use client";
const items = ["Machine Learning","Anomaly Detection","Data Analysis","Python","Risk Modeling","Computer Vision","Scikit-learn","AI Research","Power BI","Predictive Modeling","NumPy","Pandas"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 0", background: "rgba(0,245,196,0.015)", position: "relative", zIndex: 1 }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "monospace", fontSize: "0.7rem", color: "#8a8fa8", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
            <span style={{ color: "#00f5c4", fontSize: "0.5rem" }}>★</span>{item}
          </span>
        ))}
      </div>
    </div>
  );
}

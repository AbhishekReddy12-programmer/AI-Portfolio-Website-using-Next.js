"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "01",
    icon: "💰",
    iconBg: "rgba(255,107,157,0.1)",
    accentColor: "#ff6b9d",
    title: "Financial Risk Detection System",
    desc: "An ML-powered system to detect financial risk patterns in structured datasets, enabling early identification of high-risk profiles.",
    features: [
      "Data cleaning, preprocessing & feature selection on financial datasets",
      "Applied supervised ML algorithms for risk prediction",
      "Identified high-risk patterns with anomaly detection techniques",
      "Model evaluation with precision/recall optimization",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "NumPy"],
    github: "https://github.com/AbhishekReddy12-programmer",
    hasVideo: false,
  },
  {
    num: "02",
    icon: "👋",
    iconBg: "rgba(108,99,255,0.1)",
    accentColor: "#6c63ff",
    title: "Gesture-Based Cursor Control",
    desc: "A real-time computer vision system enabling touchless cursor control via hand gesture recognition — redefining human-computer interaction.",
    features: [
      "Real-time hand tracking using computer vision",
      "Cursor mapping with gesture-to-action translation",
      "Touchless HCI enabling accessible computing",
      "Low-latency processing pipeline for smooth UX",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/AbhishekReddy12-programmer",
    hasVideo: true,
    videoSrc: "/gesture-demo.mp4",
  },
  {
    num: "03",
    icon: "💧",
    iconBg: "rgba(100,180,255,0.1)",
    accentColor: "#64b4ff",
    title: "Water Contamination Detection",
    desc: "An anomaly detection model to identify contamination risks in water quality data, supporting environmental safety decision-making.",
    features: [
      "Anomaly detection in multi-parameter water quality data",
      "Feature analysis to identify contamination indicators",
      "Risk classification with threshold-based alerting",
      "Applied unsupervised & supervised ML approaches",
    ],
    stack: ["Python", "Scikit-learn", "Seaborn", "Pandas", "Anomaly Detection"],
    github: "https://github.com/AbhishekReddy12-programmer",
    hasVideo: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "80px 5%", position: "relative", zIndex: 1, color: "#f0f0f0" }}
    >
      {/* Label */}
      <div style={{
        fontFamily: "monospace", fontSize: "0.65rem", color: "#00f5c4",
        letterSpacing: "0.2em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 10, marginBottom: "0.8rem",
      }}>
        <span style={{ width: 24, height: 1, background: "#00f5c4", display: "inline-block" }} />
        03 — Featured Projects
      </div>

      <h2 style={{
        fontFamily: "Syne, system-ui, sans-serif",
        fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800,
        letterSpacing: "-2px", marginBottom: "0.8rem", color: "#f0f0f0",
      }}>
        Real-world <span style={{ color: "#6c63ff" }}>ML</span> solutions built
      </h2>
      <p style={{ color: "#8a8fa8", marginBottom: "3.5rem", fontSize: "0.9rem", maxWidth: 460 }}>
        Each project solves a concrete problem using data, models, and a practical engineering mindset.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className="reveal"
            style={{
              opacity: 0, transform: "translateY(40px)",
              transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, overflow: "hidden",
              display: "flex", flexDirection: "column",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-7px)";
              el.style.boxShadow = "0 28px 55px rgba(0,0,0,0.45)";
              el.style.borderColor = `${p.accentColor}30`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
              el.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            {/* Accent bar */}
            <div style={{ height: 2, background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }} />

            {/* Video preview for gesture project */}
            {p.hasVideo && (
              <div
                style={{
                  position: "relative", width: "100%", height: 180,
                  background: "#000", overflow: "hidden", cursor: "pointer",
                }}
                onClick={() => setVideoOpen(true)}
              >
                <video
                  src={p.videoSrc}
                  muted
                  loop
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                />
                {/* Play overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.7))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "rgba(108,99,255,0.85)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.3rem", boxShadow: "0 0 20px rgba(108,99,255,0.5)",
                  }}>▶</div>
                </div>
                <div style={{
                  position: "absolute", bottom: 8, left: 10,
                  fontFamily: "monospace", fontSize: "0.6rem", color: "#fff",
                  background: "rgba(108,99,255,0.7)", padding: "3px 8px", borderRadius: 50,
                }}>
                  🎥 Click to watch full demo
                </div>
              </div>
            )}

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 22px 0" }}>
              <span style={{
                fontFamily: "Syne, system-ui, sans-serif", fontSize: "2.8rem",
                fontWeight: 800, opacity: 0.06, lineHeight: 1, userSelect: "none",
                color: "#f0f0f0",
              }}>{p.num}</span>
              <div style={{
                width: 44, height: 44, borderRadius: 11,
                background: p.iconBg,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
              }}>{p.icon}</div>
            </div>

            {/* Body */}
            <div style={{ padding: "14px 22px 0", flex: 1 }}>
              <h3 style={{
                fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700,
                fontSize: "1.05rem", marginBottom: 8, color: "#f0f0f0", lineHeight: 1.3,
              }}>{p.title}</h3>
              <p style={{ color: "#8a8fa8", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: 10 }}>{p.desc}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 5, listStyle: "none", padding: 0 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 7, alignItems: "flex-start", fontSize: "0.78rem", color: "#8a8fa8", lineHeight: 1.5 }}>
                    <span style={{ color: "#00f5c4", flexShrink: 0, fontSize: "0.65rem", marginTop: 3 }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, padding: "14px 22px 0" }}>
              {p.stack.map((s) => (
                <span key={s} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#8a8fa8", padding: "2px 9px", borderRadius: 50,
                  fontSize: "0.62rem", fontFamily: "monospace",
                }}>{s}</span>
              ))}
            </div>

            {/* Footer */}
            <div style={{ display: "flex", gap: 8, padding: "16px 22px" }}>
              <a
                href={p.github} target="_blank" rel="noopener noreferrer"
                style={{
                  flex: 1, textAlign: "center", padding: "8px 14px", borderRadius: 50,
                  fontFamily: "Syne, system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)",
                  color: "#f0f0f0", textDecoration: "none", transition: "all 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
              >⭐ GitHub</a>

              {p.hasVideo ? (
                <button
                  onClick={() => setVideoOpen(true)}
                  style={{
                    flex: 1, padding: "8px 14px", borderRadius: 50,
                    fontFamily: "Syne, system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 700,
                    background: "linear-gradient(135deg, #6c63ff, #00f5c4)", color: "#000",
                    border: "none", cursor: "pointer", transition: "all 0.2s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 5px 20px rgba(108,99,255,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >▶️ Watch Demo</button>
              ) : (
                <a
                  href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{
                    flex: 1, textAlign: "center", padding: "8px 14px", borderRadius: 50,
                    fontFamily: "Syne, system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 700,
                    background: "linear-gradient(135deg, #00f5c4, #6c63ff)", color: "#000",
                    textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  }}
                >🔗 View</a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Full Video Modal */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,0.94)", backdropFilter: "blur(16px)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%", maxWidth: 860,
              background: "#080c18",
              borderRadius: 20,
              border: "1px solid rgba(108,99,255,0.3)",
              overflow: "hidden",
              boxShadow: "0 0 80px rgba(108,99,255,0.25)",
            }}
          >
            {/* Modal header */}
            <div style={{
              padding: "14px 20px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,245,196,0.04))",
            }}>
              <div>
                <div style={{ fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0f0f0" }}>
                  👋 Gesture-Based Cursor Control
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#a69bff", marginTop: 2 }}>
                  Demo Video · Python · OpenCV · MediaPipe
                </div>
              </div>
              <button
                onClick={() => setVideoOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                  color: "#f0f0f0", width: 32, height: 32, borderRadius: "50%",
                  cursor: "pointer", fontSize: "1rem", display: "flex",
                  alignItems: "center", justifyContent: "center",
                }}
              >✕</button>
            </div>

            {/* Video player */}
            <video
              src="/gesture-demo.mp4"
              controls
              autoPlay
              style={{ width: "100%", display: "block", maxHeight: "65vh", background: "#000" }}
            />

            {/* Caption */}
            <div style={{ padding: "12px 20px", display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Python", "OpenCV", "MediaPipe", "Computer Vision", "HCI"].map((t) => (
                <span key={t} style={{
                  padding: "3px 10px", borderRadius: 50, fontSize: "0.62rem", fontFamily: "monospace",
                  background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", color: "#a69bff",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

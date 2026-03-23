"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const certs = [
  {
    org: "Samatrix.io",
    title: "Foundation to AI Data Science & Data Analytics",
    date: "01 Apr 2025",
    img: "/cert-samatrix-ds.png",
    color: "#00f5c4",
    icon: "🧠",
    type: "Course Completion",
  },
  {
    org: "Cisco Networking Academy · IBM SkillsBuild",
    title: "AI Fundamentals with IBM SkillsBuild",
    date: "15 Apr 2025",
    img: "/cert-cisco-ai.png",
    color: "#64b4ff",
    icon: "🤖",
    type: "Certificate",
  },
  {
    org: "Infosys Springboard",
    title: "Introduction to Natural Language Processing",
    date: "10 Jun 2025",
    img: "/cert-infosys-nlp.png",
    color: "#6c63ff",
    icon: "📝",
    type: "Course Completion",
  },
  {
    org: "Infosys Springboard",
    title: "Principles of Generative AI Certification",
    date: "19 Jun 2025",
    img: "/cert-infosys-genai.png",
    color: "#6c63ff",
    icon: "⚡",
    type: "Certificate of Achievement",
  },
  {
    org: "SAGE University Bhopal · SAGE Coding Club",
    title: "3rd Position — Coding Competition",
    date: "13 Jun 2025",
    img: "/cert-sage-coding.png",
    color: "#ffd666",
    icon: "🏆",
    type: "Certificate of Achievement",
  },
  {
    org: "Infosys Springboard",
    title: "Artificial Intelligence Primer Certification",
    date: "16 Sep 2025",
    img: "/cert-infosys-ai-primer.png",
    color: "#6c63ff",
    icon: "🎯",
    type: "Certificate of Achievement",
  },
  {
    org: "Saint Louis University · Excelerate",
    title: "Star Performer — Data Visualization Trainee Internship",
    date: "01 Oct 2025",
    img: "/cert-excelerate-star.png",
    color: "#ffd666",
    icon: "⭐",
    type: "Certificate of Achievement",
  },
  {
    org: "Samatrix.io",
    title: "Data Analysis using Python",
    date: "23 Dec 2025",
    img: "/cert-samatrix-python.png",
    color: "#00f5c4",
    icon: "🐍",
    type: "Course Completion",
  },
  {
    org: "Infosys Springboard",
    title: "Virtual Internship 6.0",
    date: "2025",
    img: "/infosys-springboard.png",
    color: "#6c63ff",
    icon: "🏛️",
    type: "Selected Candidate",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

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
      id="certifications"
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
        04 — Certifications
      </div>

      <h2 style={{
        fontFamily: "Syne, system-ui, sans-serif",
        fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800,
        letterSpacing: "-2px", marginBottom: "0.5rem", color: "#f0f0f0",
      }}>
        Credentials &amp; <span style={{ color: "#6c63ff" }}>Recognition</span>
      </h2>
      <p style={{ color: "#8a8fa8", marginBottom: "3rem", fontSize: "0.9rem" }}>
        {certs.length} certifications earned — click any card to view full certificate
      </p>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1.2rem",
      }}>
        {certs.map((c, i) => (
          <div
            key={i}
            className="reveal"
            onClick={() => setSelected(i)}
            style={{
              opacity: 0, transform: "translateY(40px)",
              transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(255,255,255,0.08)`,
              borderRadius: 16,
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = `${c.color}40`;
              el.style.transform = "translateY(-5px)";
              el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4)`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: 2, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

            {/* Certificate thumbnail */}
            <div style={{ position: "relative", width: "100%", height: 160, overflow: "hidden", background: "#fff" }}>
              <Image
                src={c.img}
                alt={c.title}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              {/* Overlay on hover */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 50%, rgba(3,4,10,0.85))",
                display: "flex", alignItems: "flex-end", padding: "10px 12px",
              }}>
                <span style={{
                  fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.1em",
                  color: "#fff", background: "rgba(0,0,0,0.5)", padding: "3px 8px",
                  borderRadius: 50,
                }}>
                  🔍 Click to view
                </span>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "14px 16px" }}>
              <div style={{
                fontFamily: "monospace", fontSize: "0.58rem", color: c.color,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5,
              }}>
                {c.org}
              </div>
              <div style={{
                fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700,
                fontSize: "0.88rem", color: "#f0f0f0", lineHeight: 1.35, marginBottom: 8,
              }}>
                {c.icon} {c.title}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  fontSize: "0.65rem", color: "#8a8fa8", fontFamily: "monospace",
                }}>
                  📅 {c.date}
                </span>
                <span style={{
                  fontSize: "0.6rem", fontFamily: "monospace", padding: "2px 8px",
                  borderRadius: 50, color: c.color,
                  background: `${c.color}15`, border: `1px solid ${c.color}30`,
                }}>
                  ✅ {c.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative", maxWidth: 750, width: "100%",
              background: "#0d1020", borderRadius: 20,
              border: `1px solid ${certs[selected].color}40`,
              overflow: "hidden",
              boxShadow: `0 0 60px ${certs[selected].color}20`,
            }}
          >
            {/* Close btn */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute", top: 12, right: 12, zIndex: 10,
                background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#f0f0f0", width: 34, height: 34, borderRadius: "50%",
                cursor: "pointer", fontSize: "1rem", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}
            >✕</button>

            {/* Nav arrows */}
            <button
              onClick={() => setSelected((selected - 1 + certs.length) % certs.length)}
              style={{
                position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                zIndex: 10, background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#f0f0f0", width: 36, height: 36, borderRadius: "50%",
                cursor: "pointer", fontSize: "1rem",
              }}
            >‹</button>
            <button
              onClick={() => setSelected((selected + 1) % certs.length)}
              style={{
                position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                zIndex: 10, background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#f0f0f0", width: 36, height: 36, borderRadius: "50%",
                cursor: "pointer", fontSize: "1rem",
              }}
            >›</button>

            {/* Image */}
            <div style={{ position: "relative", width: "100%", height: 460, background: "#fff" }}>
              <Image
                src={certs[selected].img}
                alt={certs[selected].title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Caption */}
            <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontFamily: "monospace", fontSize: "0.6rem", color: certs[selected].color, marginBottom: 4 }}>
                {certs[selected].org}
              </div>
              <div style={{ fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0f0f0" }}>
                {certs[selected].title}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#8a8fa8", marginTop: 4, fontFamily: "monospace" }}>
                {selected + 1} / {certs.length} · {certs[selected].date}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

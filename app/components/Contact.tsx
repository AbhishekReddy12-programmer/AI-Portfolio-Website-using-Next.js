"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    ref.current
      ?.querySelectorAll(".reveal, .reveal-left")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    fontSize: "0.9rem",
    color: "#f0f0f0",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    outline: "none",
    fontFamily: "inherit",
    caretColor: "#00f5c4",
    display: "block",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "monospace",
    fontSize: "0.65rem",
    color: "#8a8fa8",
    letterSpacing: "0.08em",
    marginBottom: 6,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "80px 5%", position: "relative", zIndex: 1, color: "#f0f0f0" }}
    >
      {/* Section label */}
      <div style={{
        fontFamily: "monospace", fontSize: "0.65rem", color: "#00f5c4",
        letterSpacing: "0.2em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 10, marginBottom: "0.8rem",
      }}>
        <span style={{ width: 24, height: 1, background: "#00f5c4", display: "inline-block" }} />
        06 — Get In Touch
      </div>

      <h2 style={{
        fontFamily: "Syne, system-ui, sans-serif",
        fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800,
        letterSpacing: "-2px", marginBottom: "3.5rem", color: "#f0f0f0",
      }}>
        Let&apos;s <span style={{ color: "#6c63ff" }}>build</span> something together
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "3rem", alignItems: "start",
      }}>

        {/* ── LEFT col ── */}
        <div className="reveal-left" style={{
          opacity: 0, transform: "translateX(-40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <p style={{ color: "#8a8fa8", marginBottom: "1.5rem", lineHeight: 1.75, fontSize: "0.9rem" }}>
            I&apos;m actively looking for ML/AI opportunities, internships, and research collaborations. Let&apos;s connect!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: "✉️", bg: "rgba(255,107,157,0.12)", label: "EMAIL",
                value: "bussareddyabhishekreddy@gmail.com",
                href: "mailto:bussareddyabhishekreddy@gmail.com" },
              { icon: "💻", bg: "rgba(0,245,196,0.12)", label: "GITHUB",
                value: "github.com/AbhishekReddy12-programmer",
                href: "https://github.com/AbhishekReddy12-programmer" },
              { icon: "🔗", bg: "rgba(100,180,255,0.12)", label: "LINKEDIN",
                value: "bussareddy-abhishek-51a4b9341",
                href: "https://www.linkedin.com/in/bussareddy-abhishek-51a4b9341" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", borderRadius: 12, textDecoration: "none",
                  color: "#f0f0f0", border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.04)", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,196,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 10, background: l.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", flexShrink: 0,
                }}>{l.icon}</div>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#8a8fa8", letterSpacing: "0.08em", marginBottom: 2 }}>{l.label}</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "#f0f0f0" }}>{l.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Resume */}
          <a href="#" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "14px 18px", borderRadius: 12, textDecoration: "none",
            color: "#f0f0f0", marginTop: "0.8rem",
            background: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,245,196,0.06))",
            border: "1px solid rgba(108,99,255,0.25)", transition: "all 0.3s",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(108,99,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg, #6c63ff, #00f5c4)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
            }}>📄</div>
            <div>
              <div style={{ fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#f0f0f0" }}>Download Resume</div>
              <div style={{ fontSize: "0.72rem", color: "#8a8fa8" }}>PDF · Updated 2025</div>
            </div>
            <span style={{ marginLeft: "auto", color: "#00f5c4" }}>↓</span>
          </a>
        </div>

        {/* ── RIGHT col: Form ── */}
        <div className="reveal" style={{
          opacity: 0, transform: "translateY(40px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text" placeholder="John Doe" required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,196,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email" placeholder="john@company.com" required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,196,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Hi Abhishek, I'd like to discuss..." required rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,196,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#ff6b9d", fontSize: "0.82rem", fontFamily: "monospace" }}>⚠️ {errMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: status === "success"
                  ? "linear-gradient(135deg,#00f5c4,#00c48c)"
                  : "linear-gradient(135deg, #00f5c4, #6c63ff)",
                color: "#000", padding: "13px", borderRadius: 50,
                fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700,
                fontSize: "0.9rem", border: "none", cursor: "pointer", width: "100%",
                transition: "transform 0.2s, box-shadow 0.3s",
                opacity: status === "loading" ? 0.7 : 1,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(0,245,196,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {status === "loading" ? (
                <><span style={{
                  width: 16, height: 16, border: "2px solid #000",
                  borderTopColor: "transparent", borderRadius: "50%",
                  display: "inline-block", animation: "contactSpin 0.7s linear infinite",
                }} />Sending…</>
              ) : status === "success" ? "✅ Message Sent!" : "🚀 Send Message"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes contactSpin { to { transform: rotate(360deg); } }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill {
          -webkit-text-fill-color: #f0f0f0 !important;
          -webkit-box-shadow: 0 0 0px 1000px rgba(30,30,50,0.95) inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        #contact input::placeholder,
        #contact textarea::placeholder {
          color: #8a8fa8 !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

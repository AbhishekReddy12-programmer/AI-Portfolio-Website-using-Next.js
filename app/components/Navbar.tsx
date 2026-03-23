"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: scrolled ? "12px 5%" : "18px 5%",
      background: "rgba(3,4,10,0.88)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      transition: "padding 0.3s",
    }}>
      <a href="#" style={{
        fontFamily: "Syne, system-ui, sans-serif", fontSize: "1.2rem", fontWeight: 800,
        background: "linear-gradient(135deg,#00f5c4,#6c63ff)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        letterSpacing: "-0.5px",
      }}>ABR.</a>

      <div style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            color: "#8a8fa8", textDecoration: "none",
            fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.1em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#00f5c4")}
          onMouseLeave={e => (e.currentTarget.style.color = "#8a8fa8")}
          >{l.label}</a>
        ))}
      </div>

      <a href="#contact" style={{
        background: "linear-gradient(135deg,#00f5c4,#6c63ff)", color: "#000",
        WebkitTextFillColor: "#000",
        padding: "7px 18px", borderRadius: 50,
        fontFamily: "Syne, system-ui, sans-serif", fontSize: "0.78rem", fontWeight: 700,
        textDecoration: "none",
      }}>Contact Me</a>
    </nav>
  );
}

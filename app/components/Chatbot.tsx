"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const suggestions = [
  { label: "📁 Projects", q: "Tell me about your projects" },
  { label: "⚙️ Skills", q: "What are your technical skills?" },
  { label: "✨ Unique?", q: "What makes you different?" },
  { label: "🎯 Goal", q: "What is your career goal?" },
  { label: "📜 Certs", q: "What certifications do you have?" },
  { label: "💼 Experience", q: "Tell me about your experience" },
];

// ── Local knowledge base — instant answers, no API needed ──
const KB: Array<{ keys: string[]; answer: string }> = [
  {
    keys: ["project", "built", "work", "portfolio"],
    answer: `📁 Abhishek has built 3 impressive ML projects:\n\n**1. Financial Risk Detection System** 💰\nML model detecting financial risk patterns using anomaly detection & feature selection on structured datasets.\n\n**2. Gesture-Based Cursor Control** 👋\nReal-time computer vision system for touchless cursor control using OpenCV & MediaPipe. Check the demo video!\n\n**3. Water Contamination Detection** 💧\nAnomaly detection model identifying contamination risks in water quality data using supervised & unsupervised ML.`,
  },
  {
    keys: ["skill", "technolog", "know", "language", "python", "tool"],
    answer: `⚙️ Abhishek's technical skills:\n\n**Programming:** Python, SQL\n**Libraries:** NumPy, Pandas, Scikit-learn\n**ML/AI:** Machine Learning, Anomaly Detection, Predictive Modeling, Model Building\n**Visualization:** Power BI, Matplotlib, Seaborn\n**Tools:** Git, Jupyter Notebook, VS Code\n**Research:** Feature Engineering, EDA, Hypothesis Testing`,
  },
  {
    keys: ["different", "unique", "special", "stand out", "why hire", "why you"],
    answer: `✨ What makes Abhishek stand out:\n\n• **Anomaly Detection specialist** — financial risk + water contamination = rare, high-value ML niche\n• **Selected for Infosys Springboard 6.0** as a fresher — national recognition across India\n• **Star Performer** at Saint Louis University / Excelerate Data Viz Internship\n• Builds **complete end-to-end ML solutions**, not just notebooks\n• Strong **AI Research mindset** — always thinking beyond the model`,
  },
  {
    keys: ["goal", "future", "dream", "aim", "aspir", "research"],
    answer: `🎯 Abhishek's goal is to become an **AI Research Scientist** — pushing the boundaries of machine learning to create systems that are not just intelligent, but genuinely useful for humanity.\n\nHe's building towards this through hands-on ML projects, certifications, and internships in data analysis and AI.`,
  },
  {
    keys: ["cert", "certificat", "course", "accomplishment"],
    answer: `📜 Abhishek has earned **9 certifications**:\n\n1. 🧠 Foundation to AI Data Science & Analytics — Samatrix.io\n2. 🤖 AI Fundamentals with IBM SkillsBuild — Cisco\n3. 📝 Introduction to NLP — Infosys Springboard\n4. ⚡ Principles of Generative AI — Infosys Springboard\n5. 🏆 3rd Position Coding Competition — SAGE University\n6. 🎯 AI Primer Certification — Infosys Springboard\n7. ⭐ Star Performer — Data Viz Internship (Saint Louis University)\n8. 🐍 Data Analysis using Python — Samatrix.io\n9. 🏛️ Virtual Internship 6.0 — Infosys Springboard`,
  },
  {
    keys: ["experience", "intern", "work", "job", "accelrate", "excelerate"],
    answer: `💼 Abhishek's experience:\n\n**Data Analyst Trainee Intern — Accelrate**\n• Handled and processed large real-world datasets\n• Extracted actionable insights using Python & visualization tools\n• Full pipeline: cleaning → EDA → modeling → reporting\n\n**Data Visualization Trainee — Saint Louis University / Excelerate**\n• Recognized as **Star Performer** in the early remote internship\n\n**Infosys Springboard Virtual Internship 6.0**\n• Selected as a candidate in this prestigious national AI/ML program`,
  },
  {
    keys: ["contact", "email", "reach", "hire", "connect", "linkedin", "github"],
    answer: `📬 You can reach Abhishek at:\n\n✉️ **Email:** bussareddyabhishekreddy@gmail.com\n💻 **GitHub:** github.com/AbhishekReddy12-programmer\n🔗 **LinkedIn:** linkedin.com/in/bussareddy-abhishek-51a4b9341\n\nOr use the **Contact Form** on this page — he typically replies within 24–48 hours!`,
  },
  {
    keys: ["background", "about", "who", "introduce", "yourself", "bio"],
    answer: `👤 Abhishek Bussa Reddy is a **BTech student specializing in AI & Machine Learning** with a passion for solving real-world problems through data.\n\n• Focuses on **anomaly detection**, financial risk modeling, and computer vision\n• Has **9 certifications** from Infosys, Cisco/IBM, and Samatrix\n• Interned at Accelrate (data analysis) and earned Star Performer at Excelerate\n• Selected for **Infosys Springboard 6.0** — a national AI talent program\n• Ultimately aims to become an **AI Research Scientist** 🚀`,
  },
  {
    keys: ["infosys", "springboard", "internship 6"],
    answer: `🏛️ Abhishek was **selected for Infosys Springboard Virtual Internship 6.0** — a prestigious national program by Infosys that identifies top AI/ML engineering talent across India.\n\nHe also earned 3 Infosys Springboard course certificates:\n• Introduction to NLP\n• Principles of Generative AI\n• Artificial Intelligence Primer`,
  },
  {
    keys: ["gesture", "cursor", "opencv", "mediapipe", "hand", "vision"],
    answer: `👋 The **Gesture-Based Cursor Control** project is one of Abhishek's most impressive works!\n\nHe built a real-time computer vision system that lets you control your computer cursor using just your hand gestures — no mouse needed!\n\n**Tech:** Python · OpenCV · MediaPipe\n**Features:** Real-time hand tracking, gesture-to-action mapping, low-latency pipeline\n\nCheck out the **demo video** on the Projects section of this portfolio! 🎥`,
  },
  {
    keys: ["financial", "risk", "money", "bank"],
    answer: `💰 The **Financial Risk Detection System** uses machine learning to identify high-risk patterns in financial datasets.\n\nAbhishek performed full data preprocessing, feature selection, and applied supervised ML algorithms for risk prediction — with evaluation focused on precision/recall to minimize false negatives in risk scoring.`,
  },
  {
    keys: ["water", "contamination", "environment", "quality"],
    answer: `💧 The **Water Contamination Detection** project applies anomaly detection to water quality datasets to identify contamination risks.\n\nAbhishek used both supervised and unsupervised ML approaches with threshold-based alerting — a practical application of ML for environmental safety.`,
  },
  {
    keys: ["sage", "coding", "competition", "3rd", "third"],
    answer: `🏆 Abhishek secured **3rd position** in the coding competition organized by **SAGE Coding Club** at SAGE University, Bhopal on June 13, 2025!\n\nThis shows his strong competitive programming and problem-solving abilities alongside his ML expertise.`,
  },
  {
    keys: ["star", "performer", "excelerate", "saint louis", "data visualization"],
    answer: `⭐ Abhishek was recognized as **Star Performer** in the Data Visualization Trainee Early Remote Internship — a program supported by **Saint Louis University** and powered by **Excelerate**, completed on October 1, 2025.\n\nThis highlights his exceptional data visualization skills using tools like Power BI, Matplotlib, and Seaborn!`,
  },
];

function getLocalAnswer(msg: string): string {
  const lower = msg.toLowerCase();
  // Score each KB entry
  let best: { score: number; answer: string } = { score: 0, answer: "" };
  for (const entry of KB) {
    const score = entry.keys.filter((k) => lower.includes(k)).length;
    if (score > best.score) best = { score, answer: entry.answer };
  }
  if (best.score > 0) return best.answer;

  // Generic fallback
  return `🤖 Great question! I'm Abhishek's AI assistant. I can tell you about his:\n\n• **📁 Projects** — Financial Risk Detection, Gesture Control, Water Contamination\n• **⚙️ Skills** — Python, ML, Data Analysis, Computer Vision\n• **📜 Certifications** — 9 certs from Infosys, Cisco/IBM, Samatrix\n• **💼 Experience** — Accelrate intern, Infosys Springboard, Star Performer\n• **🎯 Goal** — AI Research Scientist\n\nTry asking about any of these topics!`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm Abhishek's AI assistant. Ask me anything about his skills, projects, certifications, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLabelVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setLabelVisible(false);
    }
  }, [open]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      // Try the API route (uses OpenAI if key is set)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: "portfolio-visitor" }),
      });
      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
      } else {
        // API returned error — use local KB
        const localAnswer = getLocalAnswer(text);
        setMessages((prev) => [...prev, { role: "bot", text: localAnswer }]);
      }
    } catch {
      // Network error — use local KB immediately
      await new Promise((r) => setTimeout(r, 600)); // small delay for realism
      const localAnswer = getLocalAnswer(text);
      setMessages((prev) => [...prev, { role: "bot", text: localAnswer }]);
    } finally {
      setLoading(false);
    }
  };

  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>

      {/* Chat Window */}
      <div style={{
        width: 340, maxHeight: 540,
        background: "rgba(8,12,24,0.98)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(108,99,255,0.28)",
        borderRadius: 20,
        boxShadow: "0 30px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,245,196,0.04)",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: open ? "scale(1) translateY(0)" : "scale(0.92) translateY(12px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
      }}>

        {/* Header */}
        <div style={{
          padding: "14px 18px", display: "flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg, rgba(108,99,255,0.18), rgba(0,245,196,0.04))",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #6c63ff, #00f5c4)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem",
          }}>🤖</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Syne, system-ui, sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#f0f0f0" }}>
              Abhishek&apos;s AI Assistant
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "monospace", fontSize: "0.6rem", color: "#00f5c4" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00f5c4", animation: "pulse 2s infinite", display: "inline-block" }} />
              Online · Smart AI
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{
            background: "none", border: "none", color: "#8a8fa8",
            fontSize: "1.1rem", cursor: "pointer", lineHeight: 1,
            transition: "color 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8fa8")}
          >✕</button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: "auto", padding: "14px 14px 6px",
          display: "flex", flexDirection: "column", gap: 10, maxHeight: 270,
        }}>
          {messages.map((m, i) => (
            <div key={i} style={{
              maxWidth: "87%", padding: "9px 13px",
              fontSize: "0.8rem", lineHeight: 1.55, color: "#f0f0f0",
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              background: m.role === "user"
                ? "linear-gradient(135deg, #6c63ff, rgba(108,99,255,0.85))"
                : "rgba(255,255,255,0.07)",
              border: m.role === "bot" ? "1px solid rgba(255,255,255,0.08)" : "none",
              borderRadius: m.role === "user" ? "14px 14px 3px 14px" : "14px 14px 14px 3px",
              animation: "msgIn 0.25s ease both",
            }}
              dangerouslySetInnerHTML={{ __html: formatText(m.text) }}
            />
          ))}

          {loading && (
            <div style={{
              alignSelf: "flex-start", display: "flex", gap: 4,
              padding: "10px 14px", borderRadius: "14px 14px 14px 3px",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  width: 6, height: 6, borderRadius: "50%", background: "#00f5c4",
                  display: "inline-block",
                  animation: `bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
                }} />
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion chips */}
        <div style={{
          display: "flex", gap: 5, padding: "6px 10px", overflowX: "auto",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          scrollbarWidth: "none",
        }}>
          {suggestions.map((s) => (
            <button key={s.label} onClick={() => send(s.q)} style={{
              flexShrink: 0, padding: "4px 10px", borderRadius: 50,
              fontFamily: "monospace", fontSize: "0.62rem", whiteSpace: "nowrap",
              background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.22)",
              color: "#a69bff", cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >{s.label}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{
          display: "flex", gap: 7, padding: "10px 12px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.25)",
        }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask about Abhishek…"
            style={{
              flex: 1, borderRadius: 50, padding: "8px 15px",
              fontSize: "0.8rem", color: "#f0f0f0",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              outline: "none", fontFamily: "inherit",
              caretColor: "#00f5c4",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(108,99,255,0.45)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          />
          <button
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            style={{
              width: 34, height: 34, borderRadius: "50%", border: "none",
              background: "linear-gradient(135deg, #6c63ff, #00f5c4)",
              cursor: "pointer", fontSize: "0.85rem", flexShrink: 0,
              transition: "transform 0.2s", opacity: loading || !input.trim() ? 0.5 : 1,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.transform = "scale(1.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >➤</button>
        </div>
      </div>

      {/* Toggle row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Label */}
        {labelVisible && !open && (
          <div style={{
            padding: "7px 14px", borderRadius: 50,
            fontFamily: "Syne, system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#000",
            background: "linear-gradient(135deg, #6c63ff, #00f5c4)",
            boxShadow: "0 4px 18px rgba(108,99,255,0.4)",
            animation: "fadeUp 0.4s ease both",
            whiteSpace: "nowrap",
          }}>✨ Ask AI about me!</div>
        )}

        {/* Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            position: "relative",
            width: 56, height: 56, borderRadius: "50%", border: "none",
            background: "linear-gradient(135deg, #6c63ff, #00f5c4)",
            boxShadow: "0 8px 28px rgba(108,99,255,0.45)",
            cursor: "pointer", fontSize: open ? "1.1rem" : "1.4rem",
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 35px rgba(108,99,255,0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(108,99,255,0.45)";
          }}
          aria-label="Toggle AI Chatbot"
        >
          {/* Pulse ring */}
          <span style={{
            position: "absolute", inset: -8, borderRadius: "50%",
            border: "2px solid rgba(108,99,255,0.28)",
            animation: "chatRing 2s ease-in-out infinite",
          }} />
          <span style={{ transition: "transform 0.3s", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
            {open ? "✕" : "💬"}
          </span>
        </button>
      </div>

      <style>{`
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%           { transform: translateY(-7px); }
        }
        @keyframes chatRing {
          0%, 100% { transform: scale(1);   opacity: 0.5; }
          50%      { transform: scale(1.12); opacity: 0.15; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

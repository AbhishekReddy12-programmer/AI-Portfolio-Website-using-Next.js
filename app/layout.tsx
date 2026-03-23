import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Bussa Reddy — ML Engineer & AI Researcher",
  description: "Portfolio of Abhishek Bussa Reddy — ML Engineer specializing in anomaly detection, financial risk modeling, and data analysis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#03040a", color: "#f0f0f0", fontFamily: "'DM Sans', system-ui, sans-serif", overflowX: "hidden", minHeight: "100vh" }}>
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}

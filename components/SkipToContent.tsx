"use client";
import { useState } from "react";

export default function SkipToContent() {
  const [visible, setVisible] = useState(false);

  return (
    <a
      href="#main-content"
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      style={{
        position: "fixed",
        top: visible ? "0" : "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#2D2D2D",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: "0 0 8px 8px",
        fontSize: "14px",
        fontWeight: 600,
        zIndex: 9999,
        transition: "top 200ms ease",
        textDecoration: "none",
        fontFamily: "var(--font-hebrew)",
      }}
    >
      דלג לתוכן הראשי
    </a>
  );
}

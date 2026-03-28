"use client";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "972523930681";
  const message = encodeURIComponent("שלום מאיה, אשמח לשמוע על הדרכת הורים");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "calc(28px + env(safe-area-inset-bottom, 0px))",
        left: "28px",
        zIndex: 150,
        display: "flex",
        alignItems: "center",
        gap: hovered ? "12px" : "0px",
        background: "#25D366",
        color: "white",
        borderRadius: "9999px",
        padding: hovered ? "14px 24px 14px 18px" : "16px",
        boxShadow: "0 6px 24px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.15)",
        textDecoration: "none",
        transition: "all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        cursor: "pointer",
        overflow: "hidden",
        maxWidth: hovered ? "400px" : "56px",
        whiteSpace: "nowrap",
      }}
      aria-label="שלחו הודעה בוואטסאפ"
    >
      {/* WhatsApp Icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="white" />
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.296-.768.966-.942 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366" />
      </svg>

      {/* Text label — visible on hover */}
      <span
        style={{
          fontFamily: "var(--font-hebrew)",
          fontSize: "14px",
          fontWeight: 600,
          opacity: hovered ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        הכי קל פשוט לכתוב לי מה אתם צריכים
      </span>
    </a>
  );
}

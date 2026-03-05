"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "#E8E0D0", padding: "72px 32px 36px" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "48px", marginBottom: "56px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/logo.png" alt="Path-ly logo" width={44} height={44} style={{ borderRadius: "10px", objectFit: "contain" }} />
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "#F9F7F2", margin: 0, lineHeight: 1.1 }}>מאיה פלטי</p>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "11px", color: "var(--terra-light)", margin: "3px 0 0", letterSpacing: "0.07em" }}>PATH·LY</p>
              </div>
            </div>
            <div style={{ width: "36px", height: "2px", background: "var(--terra)", borderRadius: "2px", marginBottom: "16px" }} />
            <p style={{ fontSize: "14px", lineHeight: 1.85, opacity: 0.72, fontFamily: "var(--font-hebrew)" }}>
              פסיכולוגית חינוכית מומחית עם 20 שנות ניסיון.<br />
              מפתחת מודל ארגז הכלים ההורי.<br />
              מלווה הורים וילדים בישראל ובעולם.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", fontWeight: 700, color: "var(--terra-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "18px" }}>ניווט</h4>
            {[
              { href: "/",         label: "דף הבית" },
              { href: "/model",    label: "ארגז הכלים ההורי" },
              { href: "/services", label: "שירותים" },
              { href: "/library",  label: "הספרייה" },
              { href: "/contact",  label: "צרו קשר" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(232,224,208,0.72)", textDecoration: "none", fontFamily: "var(--font-hebrew)", fontSize: "14px", marginBottom: "10px", transition: "color 180ms ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F9F7F2"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(232,224,208,0.72)"}>
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", fontWeight: 700, color: "var(--terra-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "18px" }}>יצירת קשר</h4>
            {[
              { flag: "🇺🇸", country: "אוסטין, טקסס", detail: "פגישות פרונטליות" },
              { flag: "🌐", country: "ישראל ועולם – זום", detail: "פגישות וידאו בכל מקום" },
              { flag: "📱", country: "WhatsApp", detail: "לשיחת ייעוץ ראשונה חינם (15 דק׳)" },
            ].map(({ flag, country, detail }) => (
              <div key={country} style={{ marginBottom: "18px" }}>
                <p style={{ fontSize: "14px", color: "rgba(232,224,208,0.9)", marginBottom: "3px", fontFamily: "var(--font-hebrew)" }}>{flag} {country}</p>
                <p style={{ fontSize: "13px", color: "rgba(232,224,208,0.55)", fontFamily: "var(--font-hebrew)" }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(249,247,242,0.1)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", opacity: 0.42, fontFamily: "var(--font-hebrew)" }}>
            © {new Date().getFullYear()} מאיה פלטי · PATH-LY · כל הזכויות שמורות
          </p>
          <p style={{ fontSize: "12px", opacity: 0.42, fontFamily: "var(--font-hebrew)" }}>
            פסיכולוגית חינוכית מומחית · רישיון משרד החינוך
          </p>
        </div>
      </div>
    </footer>
  );
}

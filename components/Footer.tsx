"use client";
import Link from "next/link";
import Image from "next/image";
import SiteIcon from "@/components/SiteIcon";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "#E8E0D0", padding: "72px 32px 36px" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "48px", marginBottom: "56px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/logo-transparent.webp" alt="Path-ly logo" width={44} height={44} style={{ objectFit: "contain" }} />
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "#F9F7F2", margin: 0, lineHeight: 1.1 }}>מאיה פלטי</p>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--terra-light)", margin: "3px 0 0", letterSpacing: "0.07em" }}>PATH·LY</p>
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
            <h4 style={{ fontFamily: "var(--font-hebrew)", fontSize: "13px", fontWeight: 700, color: "var(--terra-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "18px" }}>ניווט</h4>
            {[
              { href: "/",         label: "דף הבית" },
              { href: "/about",    label: "עליי" },
              { href: "/model",    label: "ארגז הכלים ההורי" },
              { href: "/research", label: "ביסוס מחקרי" },
              { href: "/services", label: "שירותים" },
              { href: "/library",  label: "הספרייה" },
              { href: "/contact",  label: "צרו קשר" },
              { href: "/en",       label: "English" },
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
            <h4 style={{ fontFamily: "var(--font-hebrew)", fontSize: "13px", fontWeight: 700, color: "var(--terra-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "18px" }}>יצירת קשר</h4>
            <div style={{ marginBottom: "18px" }}>
              <p style={{ fontSize: "14px", color: "rgba(232,224,208,0.9)", marginBottom: "3px", fontFamily: "var(--font-hebrew)" }}><SiteIcon name="house" size={16} /> אוסטין, טקסס</p>
              <p style={{ fontSize: "13px", color: "rgba(232,224,208,0.55)", fontFamily: "var(--font-hebrew)" }}>פגישות פרונטליות</p>
            </div>
            <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" style={{ display: "block", marginBottom: "18px", textDecoration: "none", transition: "opacity 180ms ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.8"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
              <p style={{ fontSize: "14px", color: "rgba(232,224,208,0.9)", marginBottom: "3px", fontFamily: "var(--font-hebrew)" }}><SiteIcon name="video" size={16} /> ישראל ועולם – זום</p>
              <p style={{ fontSize: "13px", color: "rgba(232,224,208,0.55)", fontFamily: "var(--font-hebrew)", margin: 0 }}>פגישות וידאו בכל מקום</p>
            </a>
            <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99" target="_blank" rel="noopener noreferrer" style={{ display: "block", marginBottom: "18px", textDecoration: "none", transition: "opacity 180ms ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.8"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
              <p style={{ fontSize: "14px", color: "rgba(232,224,208,0.9)", marginBottom: "3px", fontFamily: "var(--font-hebrew)" }}><SiteIcon name="phone" size={16} /> WhatsApp</p>
              <p style={{ fontSize: "13px", color: "rgba(232,224,208,0.55)", fontFamily: "var(--font-hebrew)", margin: 0 }}>לשיחת ייעוץ ראשונה חינם (15 דק׳)</p>
            </a>
          </div>
        </div>

        {/* Gender inclusivity note */}
        <p style={{ fontSize: "12px", opacity: 0.55, fontFamily: "var(--font-hebrew)", textAlign: "center", marginBottom: "0", marginTop: "32px", lineHeight: 1.7 }}>
          * ההתייחסות לילד בלשון זכר נובעת מטעמי נוחות בלבד והכוונה תמיד לשני המינים — בנים ובנות.
        </p>

        <div style={{ borderTop: "1px solid rgba(249,247,242,0.1)", paddingTop: "24px", marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", opacity: 0.42, fontFamily: "var(--font-hebrew)" }}>
            © {new Date().getFullYear()} מאיה פלטי · PATH-LY · כל הזכויות שמורות
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/privacy" style={{ fontSize: "12px", opacity: 0.52, fontFamily: "var(--font-hebrew)", color: "#E8E0D0", textDecoration: "none", transition: "opacity 180ms ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0.52"}>
              מדיניות פרטיות
            </Link>
            <p style={{ fontSize: "12px", opacity: 0.42, fontFamily: "var(--font-hebrew)" }}>
              פסיכולוגית חינוכית מומחית · בעלת רישיון מטעם משרד הבריאות
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SiteIcon from "@/components/SiteIcon";

const navLinks = [
  { href: "/",         label: "בית" },
  { href: "/about",    label: "עליי" },
  { href: "/model",    label: "ארגז הכלים" },
  { href: "/research", label: "המחקר" },
  { href: "/services", label: "שירותים" },
  { href: "/library",  label: "הספרייה" },
  { href: "/contact",  label: "צרו קשר" },
];

const WA_FREE_CONSULT = "https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99";
const CALENDLY_FULL_SESSION = "https://calendly.com/maya_palty/50min";

const BOOKING_OPTIONS = [
  { href: WA_FREE_CONSULT,       icon: "phone",    title: "ייעוץ ראשוני חינם", sub: "15 דקות · בוואטסאפ" },
  { href: CALENDLY_FULL_SESSION, icon: "calendar", title: "פגישת הדרכה מלאה",  sub: "קביעה ישירה ביומן" },
];

/* Desktop "קביעת פגישה" button — opens two options:
   free 15-min consult via WhatsApp, or a full session booked directly in Calendly. */
function BookingMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} style={{ position: "relative", marginRight: "10px" }}>
      <button
        ref={btnRef}
        type="button"
        className="btn-rose"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="booking-options"
        onClick={() => setOpen(o => !o)}
        style={{ padding: "9px 20px", fontSize: "13.5px", gap: "6px" }}
      >
        קביעת פגישה
        <SiteIcon name={open ? "chevron-up" : "chevron-down"} size={14} />
      </button>
      {open && (
        <div id="booking-options" style={{
          position: "absolute", top: "calc(100% + 8px)", left: 0, width: "260px",
          background: "var(--paper)", border: "1px solid var(--border)", borderRadius: "16px",
          boxShadow: "0 12px 32px rgba(45,45,45,0.14)", padding: "8px", zIndex: 10,
        }}>
          {BOOKING_OPTIONS.map(o => (
            <a key={o.href} href={o.href} target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", borderRadius: "12px", textDecoration: "none", color: "var(--charcoal)", transition: "background 200ms ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage-faint)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              <span style={{ display: "inline-flex", color: "var(--terra-dark)", marginTop: "2px" }}><SiteIcon name={o.icon} size={18} /></span>
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "var(--font-hebrew)", fontSize: "14.5px", fontWeight: 600 }}>{o.title}</span>
                <span style={{ fontFamily: "var(--font-hebrew)", fontSize: "12.5px", color: "var(--charcoal-muted)" }}>{o.sub}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, right: 0, left: 0, zIndex: 200,
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      background:  scrolled ? "rgba(249,247,242,0.94)" : "rgba(249,247,242,0.65)",
      backdropFilter: scrolled ? "blur(14px)" : "blur(8px)",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(8px)",
      borderBottom: scrolled ? "1px solid #DDD8CE" : "1px solid transparent",
      padding: scrolled ? "8px 0" : "16px 0",
    }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <Image src="/logo-transparent.webp" alt="מאיה פלטי | PATH-LY" width={52} height={52} style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", fontWeight: 600, color: "var(--charcoal)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              מאיה פלטי
            </span>
            <span style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", fontWeight: 500, color: "var(--terra)", letterSpacing: "0.07em" }}>
              PATH·LY · פסיכולוגית חינוכית
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="ניווט ראשי" className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                textDecoration: "none", padding: "8px 15px",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-hebrew)", fontSize: "14px",
                fontWeight: active ? 600 : 400,
                color:  active ? "var(--sage-dark)" : "var(--charcoal-soft)",
                background: active ? "var(--sage-faint)" : "transparent",
                transition: "all 200ms ease",
              }}
              onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "var(--sage-faint)"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}}
              onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--charcoal-soft)"; }}}>
                {label}
              </Link>
            );
          })}
          <BookingMenu />
          <Link href="/en" className="btn-outline" style={{ padding: "9px 18px", fontSize: "13px", letterSpacing: "0.02em" }}>
            For English
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "8px" }} className="show-mobile">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "var(--charcoal)", borderRadius: "2px", transition: "all 0.28s ease",
              transform: i === 0 && menuOpen ? "rotate(45deg) translate(5px,5px)" : i === 2 && menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
              opacity: i === 1 && menuOpen ? 0 : 1 }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "var(--paper)", borderTop: "1px solid var(--border)", padding: "16px 28px 28px" }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "14px 0", fontFamily: "var(--font-hebrew)", fontSize: "17px", color: "var(--charcoal)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
              {label}
            </Link>
          ))}
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <a href={WA_FREE_CONSULT} target="_blank" rel="noopener noreferrer" className="btn-rose" onClick={() => setMenuOpen(false)}>
              <SiteIcon name="phone" size={16} /> ייעוץ ראשוני חינם · 15 דק׳ בוואטסאפ
            </a>
            <a href={CALENDLY_FULL_SESSION} target="_blank" rel="noopener noreferrer" className="btn-outline" onClick={() => setMenuOpen(false)} style={{ fontSize: "14px", padding: "10px 22px" }}>
              <SiteIcon name="calendar" size={16} /> קביעת פגישת הדרכה מלאה
            </a>
          </div>
          <Link href="/en" onClick={() => setMenuOpen(false)} className="btn-outline" style={{ marginTop: "10px", display: "inline-flex", fontSize: "14px" }}>
            For English
          </Link>
        </div>
      )}
    </header>
  );
}

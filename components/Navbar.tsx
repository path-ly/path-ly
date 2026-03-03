"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/",         label: "בית" },
  { href: "/model",    label: "המודל" },
  { href: "/services", label: "שירותים" },
  { href: "/library",  label: "הספרייה" },
  { href: "/contact",  label: "צרו קשר" },
];

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
      background:  scrolled ? "rgba(249,247,242,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid #DDD8CE" : "1px solid transparent",
      padding: scrolled ? "8px 0" : "16px 0",
    }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <Image src="/logo.png" alt="מאיה פלטי | PATH-LY" width={40} height={40} style={{ borderRadius: "8px", objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", fontWeight: 600, color: "var(--charcoal)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              מאיה פלטי
            </span>
            <span style={{ fontFamily: "var(--font-hebrew)", fontSize: "10.5px", fontWeight: 500, color: "var(--terra)", letterSpacing: "0.07em" }}>
              PATH·LY · פסיכולוגית חינוכית
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2px" }}>
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
          <Link href="/contact" className="btn-terra" style={{ marginRight: "10px", padding: "9px 20px", fontSize: "13.5px" }}>
            ייעוץ ראשוני חינם
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
          <Link href="/contact" className="btn-terra" onClick={() => setMenuOpen(false)} style={{ marginTop: "20px", display: "inline-flex" }}>
            ייעוץ ראשוני חינם
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "linear-gradient(148deg, #F9F7F2 0%, #F0EBE1 55%, #EEF0EB 100%)", paddingTop: "100px" }}>
        <div style={{ position:"absolute", top:"8%", left:"3%", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,176,158,0.18) 0%, transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"8%", right:"-4%", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle, rgba(193,127,95,0.13) 0%, transparent 68%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"0 32px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"72px", alignItems:"center", width:"100%", position:"relative", zIndex:1 }}>

          {/* Text */}
          <div>
            <span className="tag-sage" style={{ marginBottom:"28px", display:"inline-block" }}>🌿 &nbsp;כמעט 20 שנות ניסיון קליני</span>
            <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(46px,5.5vw,76px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", marginBottom:"12px", letterSpacing:"-0.02em", lineHeight:1.08 }}>
              הורות טובה דיה
            </h1>
            <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(46px,5.5vw,76px)", fontWeight:600, color:"var(--sage-dark)", marginBottom:"12px", letterSpacing:"-0.02em", lineHeight:1.08 }}>
              היא משימה אפשרית
            </h1>
            <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(22px,3vw,36px)", fontWeight:300, color:"var(--charcoal-soft)", marginBottom:"28px", letterSpacing:"-0.01em", lineHeight:1.3 }}>
              לא מושלמת. לא בדידה. <span style={{ fontStyle:"italic" }}>מדויקת.</span>
            </h2>

            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", marginBottom:"44px", lineHeight:1.82, maxWidth:"480px", fontFamily:"var(--font-hebrew)" }}>
              מאיה פלטי — פסיכולוגית חינוכית מומחית, מדריכת הורים ומפתחת{" "}
              <span style={{ color:"var(--terra-dark)", fontWeight:600 }}>ארגז הכלים ההורי</span>.
              כלים יישומיים שעובדים במציאות של הורים אמיתיים, לילדים בגיל 4–14.
            </p>

            <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"32px" }}>
              <Link href="/contact" className="btn-terra">ייעוץ ראשוני חינם (15 דק׳)</Link>
              <Link href="/model"   className="btn-outline">ארגז הכלים ההורי</Link>
            </div>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)" }}>
              📍 אוסטין, טקסס · 🌐 זום לישראל ולכל העולם
            </p>
          </div>

          {/* Portrait */}
          <div style={{ display:"flex", justifyContent:"center", position:"relative" }}>
            <div style={{
              width:"340px", height:"420px",
              borderRadius:"50% 50% 50% 38% / 52% 52% 48% 48%",
              overflow:"hidden",
              boxShadow:"var(--shadow-float)",
              position:"relative",
            }}>
              <Image src="/maya-photo.png" alt="מאיה פלטי" fill style={{ objectFit:"cover", objectPosition:"center top" }} />
            </div>

            {/* Floating badge */}
            <div style={{ position:"absolute", bottom:"-20px", right:"-28px", background:"#FFFFFF", borderRadius:"var(--radius-card)", padding:"18px 22px", boxShadow:"var(--shadow-card-hover)", border:"1px solid var(--border)", minWidth:"185px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                <Image src="/logo.png" alt="Path-ly" width={28} height={28} style={{ borderRadius:"6px", objectFit:"contain" }} />
                <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"12px", fontWeight:700, color:"var(--terra)", letterSpacing:"0.05em" }}>PATH·LY</span>
              </div>
              {["ארגז הכלים ההורי", "10 כלים יישומיים", "גיל 4–14"].map(item => (
                <p key={item} style={{ fontSize:"13px", color:"var(--sage-dark)", fontFamily:"var(--font-hebrew)", margin:"4px 0", display:"flex", gap:"6px" }}>
                  <span style={{ color:"var(--terra)" }}>✓</span>{item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section style={{ background:"var(--sage)", padding:"44px 32px" }}>
        <div style={{ maxWidth:"960px", margin:"0 auto", display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:"28px", textAlign:"center" }}>
          {[
            { num:"20",   label:"שנות ניסיון" },
            { num:"4–14", label:"גיל הילדים" },
            { num:"10",   label:"כלים בארגז" },
            { num:"2",    label:"יבשות · ישראל & ארה״ב" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontFamily:"var(--font-serif)", fontSize:"40px", fontWeight:600, color:"#FFFFFF", lineHeight:1 }}>{num}</div>
              <div style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"rgba(255,255,255,0.80)", marginTop:"6px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────── */}
      <section style={{ padding:"100px 32px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"72px", alignItems:"center" }}>
          <div>
            <span className="tag-terra" style={{ marginBottom:"16px", display:"inline-block" }}>הגישה שלי</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)", color:"var(--charcoal)", marginBottom:"24px", lineHeight:1.2 }}>
              הורות היא עבודה של דיוקים ומינונים
            </h2>
            <div className="divider-accent" style={{ marginBottom:"24px" }} />
            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"20px", fontFamily:"var(--font-hebrew)" }}>
              להיות רכים אך סמכותיים. אחראים אך מאמינים. מכוונים אך מאפשרים חופש.
              הורות טובה דיה היא משימה מורכבת מאוד — שרובנו מצליחים לעמוד בה.
            </p>
            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"20px", fontFamily:"var(--font-hebrew)" }}>
              המודל שלי, <strong style={{ color:"var(--terra-dark)" }}>ארגז הכלים ההורי</strong>, נולד מהצורך לגשר בין
              התיאוריות הפסיכולוגיות המורכבות לבין ה"כאן ועכשיו" של חיי היומיום.
            </p>
            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"32px", fontFamily:"var(--font-hebrew)" }}>
              עבדתי עם מאות משפחות בישראל ובטקסס — ואני יודעת שכלים טובים, מותאמים לבית, שעובדים במציאות — שינה חיים.
            </p>
            <Link href="/model" style={{ display:"inline-flex", alignItems:"center", gap:"6px", color:"var(--sage-dark)", fontWeight:700, textDecoration:"none", fontSize:"15px", fontFamily:"var(--font-hebrew)", borderBottom:"2px solid var(--sage)", paddingBottom:"2px" }}>
              לארגז הכלים ←
            </Link>
          </div>

          {/* Pullquote card */}
          <div>
            <div style={{ background:"var(--linen)", borderRadius:"var(--radius-card-lg)", padding:"48px 44px", boxShadow:"var(--shadow-card)", border:"1px solid var(--border)", position:"relative" }}>
              <div style={{ position:"absolute", top:"24px", right:"32px", fontSize:"60px", opacity:0.08, fontFamily:"var(--font-serif)", lineHeight:1, color:"var(--terra)" }}>״</div>
              <p style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", fontWeight:300, fontSize:"clamp(18px,2vw,24px)", color:"var(--charcoal)", lineHeight:1.7, marginBottom:"24px" }}>
                אל לנו אף פעם לערער על היותנו ההורים הכי טובים שאנחנו מצליחים להיות, ואל לנו לעולם להפסיק לשאוף להיות טובים יותר.
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                <Image src="/logo.png" alt="Path-ly" width={32} height={32} style={{ borderRadius:"8px", objectFit:"contain" }} />
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--terra)", fontWeight:600, margin:0 }}>מאיה פלטי · "המסגרת"</p>
              </div>
            </div>

            {/* Credentials */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"16px" }}>
              {[
                { icon:"🎓", text:"פסיכולוגית חינוכית מומחית" },
                { icon:"📍", text:"אוסטין, TX & ישראל (זום)" },
                { icon:"👶", text:"מתמחה בגיל 4–14" },
                { icon:"📚", text:"מבוסס מחקר עדכני" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ background:"var(--paper)", borderRadius:"12px", padding:"14px 16px", border:"1px solid var(--border)", display:"flex", gap:"10px", alignItems:"center", boxShadow:"var(--shadow-card)" }}>
                  <span style={{ fontSize:"18px" }}>{icon}</span>
                  <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-soft)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLBOX PREVIEW (10 tools) ────────────────────────────────── */}
      <section style={{ padding:"100px 32px", background:"var(--linen)" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"64px" }}>
            <span className="tag-sage" style={{ marginBottom:"16px", display:"inline-block" }}>הגישה שלנו</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,46px)", color:"var(--charcoal)", marginBottom:"16px" }}>ארגז הכלים ההורי</h2>
            <div className="divider-accent-center" style={{ marginBottom:"20px" }} />
            <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", maxWidth:"520px", margin:"0 auto", fontFamily:"var(--font-hebrew)" }}>
              10 כלים יישומיים שנולדו מהצורך לגשר בין הפסיכולוגיה לחיי היומיום
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:"16px" }}>
            {[
              { num:"01", icon:"🫶", title:"חמלה הורית",      desc:"לסלוח לעצמנו כדי לסלוח לילד", accent:false },
              { num:"02", icon:"🪞", title:"רפלקטיביות",      desc:"להבין את מה שמתחת לפני השטח", accent:true  },
              { num:"03", icon:"🎲", title:"משחקיות",          desc:"להפוך התנגדות לחיבור",          accent:false },
              { num:"04", icon:"👣", title:"מודלינג",           desc:"ילדים לומדים מה שאנחנו עושים",  accent:true  },
              { num:"05", icon:"📏", title:"התאמה התפתחותית",  desc:"לראות בגובה העיניים שלו",       accent:false },
              { num:"06", icon:"⭐", title:"נבואה חיובית",     desc:"ההורה הוא המראה של הילד",        accent:true  },
              { num:"07", icon:"🤝", title:"שיתוף פעולה",      desc:"ממאבק להסכמה משותפת",           accent:false },
              { num:"08", icon:"🌱", title:"חוסן",              desc:"לצמוח ממשבר, יחד",              accent:true  },
              { num:"09", icon:"⏰", title:"זמן קסם",           desc:"נוכחות שבונה אמון ובסיס",       accent:false },
              { num:"10", icon:"💡", title:"פסיכולוגיה חיובית",desc:"להאיר את הטוב ולמנף חוזקות",   accent:true  },
            ].map(({ num, icon, title, desc, accent }) => (
              <div key={num} className="card" style={{ padding:"24px 18px", textAlign:"center" }}>
                <div style={{ width:"52px", height:"52px", borderRadius:"14px", background: accent ? "var(--terra-faint)" : "var(--sage-faint)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", margin:"0 auto 14px", border: accent ? "1px solid rgba(193,127,95,0.15)" : "1px solid rgba(125,132,113,0.15)" }}>
                  {icon}
                </div>
                <div className={accent ? "tag-terra" : "tag-sage"} style={{ fontSize:"9px", marginBottom:"8px", display:"inline-block" }}>כלי {num}</div>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"16px", fontWeight:600, color:"var(--charcoal)", marginBottom:"8px", lineHeight:1.3 }}>{title}</h3>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"12.5px", color:"var(--charcoal-muted)", lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:"48px" }}>
            <Link href="/model" className="btn-primary">לפירוט המלא של כל הכלים</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────────────────── */}
      <section style={{ padding:"100px 32px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)", color:"var(--charcoal)", marginBottom:"16px" }}>כיצד נעבוד יחד?</h2>
            <div className="divider-accent-center" />
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"28px" }}>
            {[
              { emoji:"🇺🇸", title:"אוסטין, TX", sub:"פגישות פרונטליות", desc:"פגישות פנים-אל-פנים בקליניקה באוסטין. הדרכת הורים אישית ומותאמת.", bg:"var(--sage-faint)", accent:"rgba(125,132,113,0.2)" },
              { emoji:"🌐", title:"ישראל ועולם", sub:"פגישות זום", desc:"בזום, מכל מקום בעולם. לקהילה הישראלית בארה״ב ולהורים בישראל.", bg:"var(--terra-faint)", accent:"rgba(193,127,95,0.2)" },
              { emoji:"🏢", title:"ארגונים",  sub:"B2B · מסגרות חינוך", desc:"הכשרות, סדנאות וייעוץ לגני ילדים, בתי ספר וארגוני חינוך.", bg:"var(--parchment)", accent:"var(--border)" },
            ].map(({ emoji, title, sub, desc, bg, accent }) => (
              <div key={title} style={{ background: bg, borderRadius:"var(--radius-card-lg)", padding:"40px 32px", border:`1px solid ${accent}`, boxShadow:"var(--shadow-card)", transition:"transform 300ms ease, box-shadow 300ms ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)"; }}>
                <div style={{ fontSize:"44px", marginBottom:"20px" }}>{emoji}</div>
                <span className="tag-parchment" style={{ marginBottom:"12px", display:"inline-block" }}>{sub}</span>
                <h3 style={{ fontSize:"22px", fontWeight:600, color:"var(--charcoal)", marginBottom:"14px", fontFamily:"var(--font-serif)" }}>{title}</h3>
                <p style={{ fontSize:"15px", color:"var(--charcoal-soft)", lineHeight:1.75, fontFamily:"var(--font-hebrew)" }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"44px" }}>
            <Link href="/services" className="btn-outline">לכל השירותים</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section style={{ padding:"100px 32px", textAlign:"center", position:"relative", overflow:"hidden", background:"linear-gradient(135deg, var(--charcoal) 0%, #3D3530 100%)" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"320px", height:"320px", borderRadius:"50%", background:"rgba(193,127,95,0.10)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:"640px", margin:"0 auto" }}>
          <span className="tag-sage" style={{ marginBottom:"24px", display:"inline-block" }}>מוכנים להתחיל?</span>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,4vw,50px)", color:"#F9F7F2", marginBottom:"18px", fontWeight:300, fontStyle:"italic" }}>
            שיחת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות.
          </h2>
          <p style={{ fontSize:"17px", color:"rgba(249,247,242,0.72)", marginBottom:"40px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
            פשוט שיחה. כדי לראות אם יש כימיה ואם אני יכולה לעזור.
          </p>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#F9F7F2", color:"var(--terra-dark)", padding:"15px 40px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"16px", textDecoration:"none", boxShadow:"0 8px 32px rgba(0,0,0,0.25)", transition:"all 250ms ease" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--terra-faint)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#F9F7F2"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            📱 WhatsApp / צרו קשר
          </Link>
        </div>
      </section>
    </>
  );
}

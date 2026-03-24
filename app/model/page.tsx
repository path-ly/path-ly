"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { EyeInEyeIcon, GrowthRulerIcon, FocusGoodIcon, CooperationIcon, PlantFromRockIcon } from "@/components/ToolIcons";
import { TOOLS } from "@/lib/tools-data";

function ToolIconEl({ icon, size = 28 }: { icon: string; size?: number }) {
  if (icon === "eye")   return <EyeInEyeIcon size={size} />;
  if (icon === "ruler") return <GrowthRulerIcon size={size} />;
  if (icon === "focus") return <FocusGoodIcon size={size} />;
  if (icon === "coop")  return <CooperationIcon size={size} />;
  if (icon === "plant") return <PlantFromRockIcon size={size} />;
  return <span style={{ fontSize: size }}>{icon}</span>;
}


export default function ModelPage() {
  const [openTool, setOpenTool] = useState<string|null>(null);

  useEffect(() => {
    const hash = window.location.hash; // e.g. #tool-03
    if (hash.startsWith("#tool-")) {
      const num = hash.replace("#tool-", "");
      setOpenTool(num);
      // scroll to it after a short delay
      setTimeout(() => {
        document.getElementById(`tool-${num}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="sec-hero" style={{ background:"linear-gradient(150deg, #E8F2F0 0%, #F9F7F2 60%)", textAlign:"center" }}>
        <span className="tag-sage" style={{ marginBottom:"20px", display:"inline-block" }}>הגישה המקורית</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,5.5vw,68px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 12px", letterSpacing:"-0.02em", maxWidth:"720px", marginLeft:"auto", marginRight:"auto" }}>
          ארגז הכלים ההורי
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"580px", margin:"0 auto 8px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          מודל פרקטי המשלב ניסיון עשיר עם מחקר תומך להורות חומלת ומדויקת יותר
        </p>
        <p style={{ fontSize:"14px", color:"var(--charcoal-muted)", fontFamily:"var(--font-hebrew)", marginBottom:"32px" }}>מאיה פלטי · פסיכולוגית חינוכית מומחית</p>
        <div className="divider-accent-center" />
      </section>

      {/* 10 Tools */}
      <section className="sec-std" style={{ background:"var(--paper)" }}>
        <div style={{ maxWidth:"960px", margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", textAlign:"center", marginBottom:"40px" }}>
            לחצו על כל כלי לפירוט מלא, מחקר תומך וקישורים רלוונטיים
          </p>

          {TOOLS.map(({ num, icon, slug, title, accent, short, desc, tips, example, challenge, video, videoLabel, videos, research }) => (
            <div key={num} id={`tool-${num}`} style={{ marginBottom:"12px" }}>
              <button
                onClick={() => setOpenTool(openTool === num ? null : num)}
                aria-expanded={openTool === num}
                aria-controls={`tool-content-${num}`}
                style={{
                  width:"100%", textAlign:"right", background: openTool===num ? (accent ? "var(--terra-faint)" : "var(--sage-faint)") : "#FFFFFF",
                  border:`1.5px solid ${openTool===num ? (accent ? "rgba(196,114,122,0.3)" : "rgba(42,122,110,0.3)") : "var(--border)"}`,
                  borderRadius: openTool===num ? "var(--radius-card) var(--radius-card) 0 0" : "var(--radius-card)",
                  padding:"20px 24px", cursor:"pointer", boxShadow:"var(--shadow-card)",
                  display:"flex", alignItems:"center", gap:"16px", transition:"all 200ms ease",
                }}>
                <div style={{ width:"52px", height:"52px", borderRadius:"12px", overflow:"hidden", flexShrink:0, border:"1px solid var(--border)" }}>
                  <img src={`/tool-${num}-${
                    {
                      "01":"compassion","02":"reflectivity","03":"playfulness","04":"modeling",
                      "05":"developmental","06":"prophecy","07":"cooperation","08":"resilience",
                      "09":"magic-time","10":"strengths"
                    }[num]
                  }.webp`} alt={title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px", justifyContent:"flex-end" }}>
                    <span className={accent ? "tag-terra" : "tag-sage"} style={{ fontSize:"13px" }}>כלי {num}</span>
                    <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"20px", fontWeight:600, color:"var(--charcoal)", margin:0 }}>{title}</h3>
                  </div>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", margin:0, textAlign:"right" }}>{short}</p>
                </div>
                <span style={{ fontSize:"18px", color: accent ? "var(--terra)" : "var(--sage-dark)", flexShrink:0 }}>
                  {openTool===num ? "▲" : "▼"}
                </span>
              </button>

              {openTool===num && (
                <div id={`tool-content-${num}`} role="region" aria-labelledby={`tool-${num}`} style={{ background: accent ? "var(--terra-faint)" : "var(--sage-faint)", border:`1.5px solid ${accent ? "rgba(196,114,122,0.3)" : "rgba(42,122,110,0.3)"}`, borderTop:"none", borderRadius:"0 0 var(--radius-card) var(--radius-card)", padding:"28px 32px" }}>

                  {/* Description */}
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"24px" }}>
                    {desc}
                  </p>

                  <div className="grid-tool-inner">

                    {/* Practical tips */}
                    <div style={{ background:"rgba(255,255,255,0.85)", borderRadius:"12px", padding:"20px 22px", border:"1px solid var(--border)" }}>
                      <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:700, color: accent ? "var(--terra-dark)" : "var(--sage-dark)", marginBottom:"12px", margin:"0 0 12px" }}>
                        🛠️ איך מיישמים בפועל
                      </h4>
                      <ul style={{ margin:0, padding:0, listStyle:"none" }}>
                        {tips.map((tip, i) => (
                          <li key={i} style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.75, marginBottom:"8px", display:"flex", gap:"8px" }}>
                            <span style={{ color: accent ? "var(--terra)" : "var(--sage)", fontWeight:700, flexShrink:0 }}>•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example + Challenge */}
                    <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                      <div style={{ background:"rgba(255,255,255,0.85)", borderRadius:"12px", padding:"18px 20px", border:"1px solid var(--border)", flex:1 }}>
                        <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:700, color: accent ? "var(--terra-dark)" : "var(--sage-dark)", margin:"0 0 8px" }}>
                          💡 דוגמה מהחיים
                        </h4>
                        <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13.5px", color:"var(--charcoal-soft)", lineHeight:1.75, margin:0 }}>
                          {example}
                        </p>
                      </div>
                      <div style={{ background:"rgba(255,255,255,0.75)", borderRadius:"12px", padding:"16px 20px", border:`1px solid ${accent ? "rgba(196,114,122,0.2)" : "rgba(42,122,110,0.2)"}` }}>
                        <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:700, color:"var(--charcoal-muted)", margin:"0 0 6px" }}>
                          ⚠️ אתגר נפוץ
                        </h4>
                        <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", lineHeight:1.7, margin:0 }}>
                          {challenge}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Research + Video */}
                  <div className="grid-research">
                    <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:"10px", padding:"14px 18px", border:"1px solid var(--border)" }}>
                      <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", margin:0, lineHeight:1.7 }}>
                        📚 <strong>ביסוס מחקרי:</strong> {research}
                      </p>
                    </div>
                    {video && (
                      <a href={video} target="_blank" rel="noopener noreferrer"
                        style={{ display:"flex", alignItems:"center", gap:"8px", background: accent ? "var(--terra)" : "var(--sage)", color:"white", padding:"12px 18px", borderRadius:"10px", textDecoration:"none", whiteSpace:"nowrap", fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:600, flexShrink:0, transition:"all 180ms ease" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity="0.85"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity="1"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                        ▶ {videoLabel}
                      </a>
                    )}
                  </div>

                  {/* Additional videos */}
                  {videos && videos.length > 0 && (
                    <div style={{ marginTop:"16px" }}>
                      <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", fontWeight:600, color:"var(--charcoal)", marginBottom:"10px" }}>
                        🎬 סרטונים נוספים
                      </p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                        {videos.map((v, i) => (
                          <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                            style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"rgba(255,255,255,0.7)", color: accent ? "var(--terra-dark)" : "var(--sage-dark)", padding:"8px 14px", borderRadius:"10px", textDecoration:"none", fontFamily:"var(--font-hebrew)", fontSize:"12px", fontWeight:500, border:`1px solid ${accent ? "rgba(196,114,122,0.2)" : "rgba(42,122,110,0.15)"}`, transition:"all 180ms ease" }}>
                            {v.url.includes("tiktok") ? "📱" : v.url.includes("youtube") || v.url.includes("youtu.be") ? "▶" : "🎥"} {v.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Link to full tool page */}
                  <div style={{ marginTop:"20px", textAlign:"center" }}>
                    <Link href={`/model/${slug}`}
                      style={{ display:"inline-flex", alignItems:"center", gap:"6px", color: accent ? "var(--terra-dark)" : "var(--sage-dark)", fontWeight:700, textDecoration:"none", fontSize:"14px", fontFamily:"var(--font-hebrew)", borderBottom:`2px solid ${accent ? "var(--terra)" : "var(--sage)"}`, paddingBottom:"2px" }}>
                      לעמוד המלא של כלי זה ←
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How we train together */}
      <section className="sec-md" style={{ background:"var(--linen)" }}>
        <div style={{ maxWidth:"780px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,38px)", color:"var(--charcoal)", marginBottom:"28px", fontStyle:"italic", fontWeight:300, textAlign:"center" }}>
            איך נתאמן יחד על הכלים הללו?
          </h2>
          <div className="divider-accent-center" style={{ marginBottom:"36px" }} />
          <div style={{ background:"#FFFFFF", borderRadius:"var(--radius-card-lg)", padding:"44px 48px", boxShadow:"var(--shadow-card)", border:"1px solid var(--border)" }}>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.95, margin:0 }}>
              הקשר שלנו מתחיל בפגישת אינטייק במהלכה אני אוספת את כל הרקע הנדרש על מנת להתאים לכם תוכנית אישית המתאימה ל-5–12 מפגשים. בסוף השיחה הראשונה כבר נסכים על 2–3 מטרות ראשיות ונבחר כלי 1 להתחיל להתאמן עליו.
              <br /><br />
              לאורך המפגשים אשמע מכם על התקדמותכם בבית בישום הכלים ונדייק יחד את הדרך תוך שילוב כלים נוספים במידת הצורך — ובעיקר בהמון סבלנות וחמלה.
              <br /><br />
              במידת הצורך אני זמינה לשאלות אישיות בוואטסאפ לכל המודרכים שלי.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px", marginTop:"20px" }}>
            {[
              { icon:"1️⃣", text:"אינטייק — הכרת הסיפור המשפחתי" },
              { icon:"2️⃣", text:"פסיכואדוקציה — בחירת הכלים" },
              { icon:"3️⃣", text:"ליווי בשטח — יישום ודיוק" },
              { icon:"4️⃣", text:"הטמעת שינוי וסיכום" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ background:"var(--paper)", borderRadius:"12px", padding:"14px 18px", border:"1px solid var(--border)", display:"flex", gap:"10px", alignItems:"center" }}>
                <span style={{ fontSize:"20px" }}>{icon}</span>
                <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research basis */}
      <section id="research" className="sec-md" style={{ background:"var(--linen)" }}>
        <div style={{ maxWidth:"780px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,38px)", color:"var(--charcoal)", marginBottom:"16px", fontWeight:400, textAlign:"center" }}>
            הבסיס המחקרי
          </h2>
          <div className="divider-accent-center" style={{ marginBottom:"32px" }} />

          <div style={{ background:"#FFFFFF", borderRadius:"var(--radius-card-lg)", padding:"36px 40px", boxShadow:"var(--shadow-card)", border:"1px solid var(--border)", marginBottom:"28px" }}>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, margin:"0 0 20px" }}>
              ארגז הכלים ההורי מבוסס על שילוב של גישות מחקריות מוכחות מתחום הפסיכולוגיה החיובית, תיאוריית ההתקשרות, מדעי המוח ההתפתחותיים, והגישה ההתנהגותית-קוגניטיבית. כל כלי נשען על ממצאים עדכניים ומיושם בהתאמה אישית לכל משפחה.
            </p>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--charcoal-soft)", lineHeight:1.9, margin:0 }}>
              בין החוקרים והתיאוריות המרכזיים שמנחים את הגישה: Kristin Neff (חמלה עצמית), Peter Fonagy (מנטליזציה ורפלקטיביות), Albert Bandura (למידה חברתית), Piaget & Vygotsky (התפתחות קוגניטיבית), Rosenthal (אפקט פיגמליון), Ross Greene (שיתוף פעולה פרואקטיבי), Ann Masten (חוסן), ו-Martin Seligman (פסיכולוגיה חיובית וחוזקות).
            </p>
          </div>

          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", textAlign:"center", lineHeight:1.7 }}>
            📚 ביסוס מחקרי מפורט מופיע בכל כלי בנפרד —{" "}
            <a href="#tool-01" style={{ color:"var(--sage)", fontWeight:600, textDecoration:"none", borderBottom:"1px solid var(--sage)" }}>
              גללו למעלה לכלים
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-md" style={{ background:"var(--sage)", textAlign:"center" }}>
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,40px)", color:"#FFFFFF", marginBottom:"16px", fontStyle:"italic", fontWeight:300 }}>
          רוצים להתחיל?
        </h2>
        <p style={{ fontSize:"17px", color:"rgba(249,247,242,0.82)", marginBottom:"36px", fontFamily:"var(--font-hebrew)" }}>
          פגישת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות.
        </p>
        <a href="https://calendly.com/maya-palty" target="_blank" rel="noopener noreferrer" className="btn-terra" style={{ display:"inline-block" }}>
          📅 לקביעת פגישה
        </a>
      </section>
    </>
  );
}

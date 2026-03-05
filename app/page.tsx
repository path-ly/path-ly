"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { EyeInEyeIcon, GrowthRulerIcon, FocusGoodIcon, CooperationIcon, PlantFromRockIcon } from "@/components/ToolIcons";

const TOOLS = [
  { num:"01", icon:"🫶", title:"חמלה הורית",       desc:"לסלוח לעצמנו כדי לסלוח לילד",              accent:false },
  { num:"02", icon:"eye", title:"רפלקטיביות",      desc:"להבין מה מתחת לפני השטח",                   accent:true  },
  { num:"03", icon:"🎲", title:"משחקיות",           desc:"להפוך התנגדות לחיבור",                      accent:false },
  { num:"04", icon:"👣", title:"מודלינג",            desc:"ילדים לומדים מה שאנחנו עושים",               accent:true  },
  { num:"05", icon:"ruler", title:"התאמה התפתחותית", desc:"לראות את הילד בגובה העיניים שלו",          accent:false },
  { num:"06", icon:"focus", title:"נבואה חיובית",  desc:"להתמקד בטוב כדי לעזור לו לגדול",           accent:true  },
  { num:"07", icon:"coop",  title:"שיתוף פעולה",   desc:"ממאבק להסכמה משותפת",                       accent:false },
  { num:"08", icon:"plant", title:"חוסן רגשי",     desc:"לצמוח ממשבר, יחד",                          accent:true  },
  { num:"09", icon:"⏳", title:"זמן קסם",            desc:"נוכחות שבונה אמון ובסיס",                   accent:false },
  { num:"10", icon:"✨", title:"צמיחה מחוזקות",     desc:"להכיר ולהשתמש במה שיש",                    accent:true  },
];

function ToolIconEl({ icon, size = 20 }: { icon: string; size?: number }) {
  if (icon === "eye")   return <EyeInEyeIcon size={size} />;
  if (icon === "ruler") return <GrowthRulerIcon size={size} />;
  if (icon === "focus") return <FocusGoodIcon size={size} />;
  if (icon === "coop")  return <CooperationIcon size={size} />;
  if (icon === "plant") return <PlantFromRockIcon size={size} />;
  return <span style={{ fontSize: size }}>{icon}</span>;
}

const ABOUT_SECTIONS = [
  {
    id:"background", label:"רקע מקצועי וניסיון מעשי",
    content:"פסיכולוגית חינוכית מומחית עם 20 שנות ניסיון בעבודה עם ילדים והוריהם. עבדתי עם מאות משפחות בישראל (לפני ואחרי ה-7.10 וגם מאזור העוטף) ובארה\"ב. מלמדת בקורס הארצי לפסיכולוגים חינוכיים ומנחה קבוצות מקצועיות."
  },
  {
    id:"specialties", label:"תחומי התמחות",
    content:"ויסות רגשי והתפרצויות זעם · מאבקי כוח יומיומיים · חרדות ילדים · קשיים בביטחון עצמי · ADHD ולקויות למידה · שיפור האקלים המשפחתי · חרדות בעקבות המצב הביטחוני."
  },
  {
    id:"other", label:"עיסוקים נוספים",
    content:"מרצה בפני אנשי מקצוע, מנחת סדנאות להורים, כותבת שירה ופרוזה על הורות, ומפתחת תכנים דיגיטליים לעולם ההורות."
  },
  {
    id:"personal", label:"בנימה אישית ✨",
    content:"אמא לשתי בנות (10 ו-13), וכאמא — כמו כולכם — אני לומדת כל יום מחדש. גרתי בישראל גם לאחר ה-7.10 ואני מכירה מקרוב את המציאות המורכבת של חיים בשגרת חירום."
  },
];

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeAbout, setActiveAbout] = useState<string|null>(null);
  const [toolboxOpen, setToolboxOpen] = useState(false);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", background:"linear-gradient(148deg, #F9F7F2 0%, #F0EBE1 55%, #EEF0EB 100%)", paddingTop:"100px" }}>
        <div style={{ position:"absolute", top:"8%", left:"3%", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,176,158,0.18) 0%, transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"8%", right:"-4%", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle, rgba(193,127,95,0.13) 0%, transparent 68%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"0 32px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center", width:"100%", position:"relative", zIndex:1 }}>

          {/* ── Text column ── */}
          <div>
            <span className="tag-sage" style={{ marginBottom:"28px", display:"inline-block" }}>🌿 &nbsp;20 שנות ניסיון בעבודה עם ילדים והוריהם</span>

            {/* Name + photo + עוד עליי */}
            <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"22px", position:"relative" }}>
              <div style={{ width:"56px", height:"56px", borderRadius:"50%", overflow:"hidden", border:"2px solid var(--terra-light)", flexShrink:0, boxShadow:"var(--shadow-card)" }}>
                <Image src="/maya-photo.png" alt="מאיה פלטי" width={56} height={56} style={{ objectFit:"cover", objectPosition:"center top", width:"100%", height:"100%" }} />
              </div>
              <div>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", fontWeight:700, color:"var(--charcoal)", margin:0 }}>מאיה פלטי</p>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"12px", color:"var(--charcoal-muted)", margin:0 }}>פסיכולוגית חינוכית מומחית</p>
              </div>
              <button onClick={() => setAboutOpen(!aboutOpen)} style={{ background:"var(--linen)", border:"1.5px solid var(--border)", borderRadius:"var(--radius-pill)", padding:"7px 16px", fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:600, color:"var(--sage-dark)", cursor:"pointer", transition:"all 200ms ease", marginRight:"8px" }}>
                עוד עליי {aboutOpen ? "▲" : "▼"}
              </button>
            </div>

            {/* About dropdown */}
            {aboutOpen && (
              <div style={{ background:"#FFFFFF", border:"1px solid var(--border)", borderRadius:"var(--radius-card)", padding:"20px", marginBottom:"20px", boxShadow:"var(--shadow-card)" }}>
                <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", marginBottom:"14px" }}>
                  {ABOUT_SECTIONS.map(s => (
                    <button key={s.id} onClick={() => setActiveAbout(activeAbout === s.id ? null : s.id)} style={{ background: activeAbout===s.id ? "var(--sage)" : "var(--sage-faint)", color: activeAbout===s.id ? "white" : "var(--sage-dark)", border:"1px solid var(--sage)", borderRadius:"var(--radius-pill)", padding:"6px 14px", fontFamily:"var(--font-hebrew)", fontSize:"12px", fontWeight:600, cursor:"pointer" }}>
                      {s.label}
                    </button>
                  ))}
                </div>
                {activeAbout && (
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.8, margin:0, background:"var(--linen)", borderRadius:"10px", padding:"14px 16px" }}>
                    {ABOUT_SECTIONS.find(s => s.id === activeAbout)?.content}
                  </p>
                )}
              </div>
            )}

            <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,4.5vw,64px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", marginBottom:"12px", letterSpacing:"-0.02em", lineHeight:1.1 }}>
              להיות ההורה שבחרתי
            </h1>
            <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(20px,2.5vw,30px)", fontWeight:400, color:"var(--sage-dark)", marginBottom:"28px", letterSpacing:"-0.01em", lineHeight:1.3 }}>
              הורות חומלת ונאמנה לכוונות בכלים פרקטיים
            </h2>

            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", marginBottom:"44px", lineHeight:1.82, maxWidth:"480px", fontFamily:"var(--font-hebrew)" }}>
              מדריכת הורים ומפתחת{" "}
              <span style={{ color:"var(--terra-dark)", fontWeight:600 }}>ארגז הכלים ההורי</span>.
              כלים יישומיים המותאמים אישית — לילדים בגיל{" "}<span dir="ltr" style={{ display:"inline-block" }}>4–14</span>.
            </p>

            <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"32px" }}>
              <a href="https://calendly.com/maya-palty" target="_blank" rel="noopener noreferrer" className="btn-terra">ייעוץ ראשוני חינם (15 דק׳)</a>
              <Link href="/model" className="btn-outline">ארגז הכלים ההורי</Link>
            </div>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)" }}>
              📍 Cedar Park, אוסטין TX · 🌐 זום לישראל ולכל העולם
            </p>
          </div>

          {/* ── Tools grid (replaces portrait circle) ── */}
          <div>
            <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:"var(--radius-card-lg)", padding:"28px", border:"1px solid var(--border)", boxShadow:"var(--shadow-float)", backdropFilter:"blur(8px)" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"18px" }}>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"17px", fontWeight:600, color:"var(--charcoal)", margin:0 }}>ארגז הכלים ההורי</h3>
                <span className="tag-terra" style={{ fontSize:"11px" }}>10 כלים</span>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
                {TOOLS.map(({ num, icon, title, accent }) => (
                  <Link key={num} href={`/model#tool-${num}`} style={{ textDecoration:"none" }}>
                    <div style={{ background: accent ? "var(--terra-faint)" : "var(--sage-faint)", borderRadius:"12px", padding:"10px 12px", display:"flex", alignItems:"center", gap:"8px", border: accent ? "1px solid rgba(193,127,95,0.15)" : "1px solid rgba(125,132,113,0.15)", transition:"all 180ms ease", cursor:"pointer" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow="none"; }}>
                      <span style={{ display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <ToolIconEl icon={icon} size={20} />
                      </span>
                      <div>
                        <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"11px", color:"var(--charcoal-muted)", display:"block" }}>כלי {num}</span>
                        <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"12.5px", fontWeight:600, color:"var(--charcoal)" }}>{title}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section style={{ background:"var(--sage)", padding:"44px 32px" }}>
        <div style={{ maxWidth:"960px", margin:"0 auto", display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:"28px", textAlign:"center" }}>
          {[
            { num:"20",   label:"שנות ניסיון" },
            { num:"4–14", label:"גיל הילדים" },
            { num:"10",   label:"כלים בארגז" },
            { num:"2",    label:"יבשות · ישראל & ארה״ב" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontFamily:"var(--font-serif)", fontSize:"40px", fontWeight:600, color:"#FFFFFF", lineHeight:1, direction:"ltr" }}>{num}</div>
              <div style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"rgba(255,255,255,0.80)", marginTop:"6px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
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
              הורות טובה דיה היא משימה מורכבת מאוד — שרובנו מצליחים לעמוד בה — ובכל זאת היא מלווה באתגרים יומיומיים ורגשות רבים של לחץ, חרדה ואשמה.
            </p>
            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"20px", fontFamily:"var(--font-hebrew)" }}>
              עבדתי עם מאות משפחות בישראל (לפני ואחרי ה-7.10 וגם מאזור העוטף) ובארה"ב — ואני יודעת שכלים טובים, מותאמים אישית, משפרים את האקלים בבית, מגדילים את הרווחה והנחת ההורית ומסייעים לילדים לצמוח בסביבה תומכת ובטוחה.
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
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--terra)", fontWeight:600, margin:0 }}>מאיה פלטי · ״המסגרת״</p>
              </div>
            </div>

            {/* Credentials */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"16px" }}>
              {[
                { icon:"🎓", text:"פסיכולוגית חינוכית מומחית", href:"/model" },
                { icon:"📍", text:"Cedar Park, TX & ישראל (זום)", href:null },
                { icon:"👶", text:"מתמחה בגיל 4–14", href:null },
                { icon:"📚", text:"מבוסס מחקר עדכני", href:"/model#research" },
              ].map(({ icon, text, href }) => (
                href ? (
                  <Link key={text} href={href} style={{ textDecoration:"none", background:"var(--paper)", borderRadius:"12px", padding:"14px 16px", border:"1px solid var(--border)", display:"flex", gap:"10px", alignItems:"center", boxShadow:"var(--shadow-card)" }}>
                    <span style={{ fontSize:"18px" }}>{icon}</span>
                    <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--sage-dark)", fontWeight:600, textDecoration:"underline dotted" }}>{text}</span>
                  </Link>
                ) : (
                  <div key={text} style={{ background:"var(--paper)", borderRadius:"12px", padding:"14px 16px", border:"1px solid var(--border)", display:"flex", gap:"10px", alignItems:"center", boxShadow:"var(--shadow-card)" }}>
                    <span style={{ fontSize:"18px" }}>{icon}</span>
                    <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-soft)" }}>{text}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ──────────────────────────────────────────────── */}
      <section style={{ padding:"64px 32px", background:"var(--linen)" }}>
        <div style={{ maxWidth:"820px", margin:"0 auto", textAlign:"center" }}>
          <button onClick={() => setToolboxOpen(!toolboxOpen)} style={{ display:"inline-flex", alignItems:"center", gap:"12px", background:"var(--paper)", border:"1.5px solid var(--border)", borderRadius:"var(--radius-card)", padding:"22px 36px", cursor:"pointer", boxShadow:"var(--shadow-card)", transition:"all 220ms ease", width:"100%" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card-hover)"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
            <span style={{ fontSize:"28px" }}>🎯</span>
            <div style={{ textAlign:"right", flex:1 }}>
              <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", color:"var(--charcoal)", margin:0, fontWeight:600 }}>למי ארגז הכלים מתאים?</h3>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", margin:"4px 0 0" }}>לחצו לפירוט</p>
            </div>
            <span style={{ fontSize:"20px", color:"var(--terra)", marginRight:"auto" }}>{toolboxOpen ? "▲" : "▼"}</span>
          </button>

          {toolboxOpen && (
            <div style={{ background:"#FFFFFF", border:"1px solid var(--border)", borderRadius:"var(--radius-card)", padding:"32px", marginTop:"12px", boxShadow:"var(--shadow-card)", textAlign:"right" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
                {[
                  { title:"✅ מתאים להורים", items:["לילדים בגיל ‏14–4", "עם מודעות בסיסית לקשיי הילד", "עם מוטיבציה גבוהה לשינוי", "המסוגלים לתרגל בין פגישות"] },
                  { title:"⚠️ פחות מתאים כאשר", items:["קיים קושי התפתחותי/נוירולוגי משמעותי", "יש פסיכופתולוגיה חמורה הדורשת טיפול פרטני", "מצב חירום אקוטי (גירושין, אבל, לידה)", "דרושה מעטפת פסיכיאטרית לילד"] },
                ].map(col => (
                  <div key={col.title}>
                    <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", fontWeight:700, color:"var(--charcoal)", marginBottom:"12px" }}>{col.title}</h4>
                    {col.items.map(item => (
                      <p key={item} style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.7, margin:"6px 0", display:"flex", gap:"8px" }}>
                        <span style={{ color:"var(--sage)", fontWeight:700, flexShrink:0 }}>•</span>{item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ marginTop:"20px", padding:"16px", background:"var(--terra-faint)", borderRadius:"10px", border:"1px solid rgba(193,127,95,0.2)" }}>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--terra-dark)", margin:0, lineHeight:1.8 }}>
                  <strong>לא בטוחים?</strong> פגישת הייעוץ הראשונה (חינם, 15 דק׳) נועדה בדיוק לזה — להבין יחד מה מתאים לכם.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section style={{ padding:"100px 32px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)", color:"var(--charcoal)", marginBottom:"16px" }}>כיצד נעבוד יחד?</h2>
            <div className="divider-accent-center" />
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
            {[
              {
                emoji:"🏠", title:"Cedar Park, אוסטין TX", sub:"קליניקה פרונטלית",
                desc:"קליניקה פיזית לייעוץ אישי והדרכות הורים. לא טיפול ואבחון.",
                bg:"var(--sage-faint)", accent:"rgba(125,132,113,0.2)",
                href:"https://calendly.com/maya-palty", btnText:"לקביעת פגישה →",
              },
              {
                emoji:"🌐", title:"ישראל ועולם", sub:"פגישות זום",
                desc:"בזום, בעברית, מכל מקום בעולם. לקהילה הישראלית בארה״ב ולהורים בישראל.",
                bg:"var(--terra-faint)", accent:"rgba(193,127,95,0.2)",
                href:"https://calendly.com/maya-palty", btnText:"לקביעת פגישה →",
              },
              {
                emoji:"🏫", title:"ארגונים וצוותים", sub:"הכשרות לאנשי מקצוע",
                desc:"הכשרות לפסיכולוגים, עו\"סים ואנשי טיפול. סדנאות לצוותי חינוך ובתי ספר.",
                bg:"var(--parchment)", accent:"var(--border)",
                href:"/contact?type=org", btnText:"לטופס פניה →",
              },
            ].map(({ emoji, title, sub, desc, bg, accent, href, btnText }) => (
              <div key={title} style={{ background: bg, borderRadius:"var(--radius-card-lg)", padding:"32px 28px", border:`1px solid ${accent}`, boxShadow:"var(--shadow-card)", transition:"transform 300ms ease, box-shadow 300ms ease", display:"flex", flexDirection:"column" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)"; }}>
                <div style={{ fontSize:"36px", marginBottom:"16px" }}>{emoji}</div>
                <span className="tag-parchment" style={{ marginBottom:"10px", display:"inline-block" }}>{sub}</span>
                <h3 style={{ fontSize:"20px", fontWeight:600, color:"var(--charcoal)", marginBottom:"12px", fontFamily:"var(--font-serif)" }}>{title}</h3>
                <p style={{ fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.75, fontFamily:"var(--font-hebrew)", flex:1, marginBottom:"20px" }}>{desc}</p>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"6px", color:"var(--sage-dark)", fontWeight:700, textDecoration:"none", fontSize:"14px", fontFamily:"var(--font-hebrew)", borderBottom:"2px solid var(--sage)", paddingBottom:"2px", alignSelf:"flex-start" }}>
                  {btnText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
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
          <a href="https://calendly.com/maya-palty" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#F9F7F2", color:"var(--terra-dark)", padding:"15px 40px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"16px", textDecoration:"none", boxShadow:"0 8px 32px rgba(0,0,0,0.25)", transition:"all 250ms ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--terra-faint)"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#F9F7F2"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
            📅 לקביעת שיחה ראשונה
          </a>
        </div>
      </section>
    </>
  );
}

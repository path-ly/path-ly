"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SiteIcon from "@/components/SiteIcon";
import { EyeInEyeIcon, GrowthRulerIcon, FocusGoodIcon, CooperationIcon, PlantFromRockIcon } from "@/components/ToolIcons";

const TOOLS = [
  { num:"01", icon:"heart-hands", title:"חמלה הורית",       desc:"לקבל את עצמנו כדי לקבל את הילד",              accent:false },
  { num:"02", icon:"eye", title:"רפלקטיביות",      desc:"להבין מה מתחת לפני השטח",                   accent:true  },
  { num:"03", icon:"dice", title:"משחקיות",           desc:"להפוך התנגדות לחיבור",                      accent:false },
  { num:"04", icon:"footprints", title:"מודלינג",            desc:"ילדים לומדים מה שאנחנו עושים",               accent:true  },
  { num:"05", icon:"ruler", title:"התאמה התפתחותית", desc:"לראות את הילד בגובה העיניים שלו",          accent:false },
  { num:"06", icon:"focus", title:"נבואה חיובית",  desc:"להתמקד בטוב כדי לעזור לו לגדול",           accent:true  },
  { num:"07", icon:"coop",  title:"שיתוף פעולה",   desc:"ממאבק להסכמה משותפת",                       accent:false },
  { num:"08", icon:"plant", title:"חוסן רגשי",     desc:"לצמוח ממשבר, יחד",                          accent:true  },
  { num:"09", icon:"hourglass", title:"זמן קסם",            desc:"נוכחות שבונה אמון ובסיס",                   accent:false },
  { num:"10", icon:"sparkles", title:"צמיחה מחוזקות",     desc:"להכיר ולהשתמש במה שיש",                    accent:true  },
];

function ToolIconEl({ icon, size = 20 }: { icon: string; size?: number }) {
  if (icon === "eye")   return <EyeInEyeIcon size={size} />;
  if (icon === "ruler") return <GrowthRulerIcon size={size} />;
  if (icon === "focus") return <FocusGoodIcon size={size} />;
  if (icon === "coop")  return <CooperationIcon size={size} />;
  if (icon === "plant") return <PlantFromRockIcon size={size} />;
  return <SiteIcon name={icon} size={size} />;
}

export default function Home() {
  const [toolboxOpen, setToolboxOpen] = useState(false);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="hero-full" style={{ minHeight:"calc(100vh - 80px)", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", background:"linear-gradient(148deg, #F9F7F2 0%, #F0EDE6 55%, #E8F2F0 100%)", paddingTop:"80px", paddingBottom:"40px" }}>
        <div style={{ position:"absolute", top:"8%", left:"3%", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle, rgba(42,122,110,0.18) 0%, transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"8%", right:"-4%", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle, rgba(196,114,122,0.13) 0%, transparent 68%)", pointerEvents:"none" }} />

        <div className="container grid-hero" style={{ width:"100%", position:"relative", zIndex:1 }}>

          {/* ── Text column ── */}
          <div>
            <span className="tag-sage" style={{ marginBottom:"28px", display:"inline-flex", alignItems:"center", gap:"6px" }}><SiteIcon name="flower" size={16} /> 20 שנות ניסיון בעבודה עם ילדים והוריהם</span>

            {/* Name + עוד עליי */}
            <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"22px", position:"relative" }}>
              <div>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"22px", fontWeight:700, color:"var(--charcoal)", margin:0 }}>מאיה פלטי</p>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", fontWeight:500, color:"var(--sage-dark)", margin:0 }}>פסיכולוגית חינוכית מומחית-מדריכה</p>
              </div>
              <Link href="/about" style={{ background:"var(--linen)", border:"1.5px solid var(--border)", borderRadius:"var(--radius-pill)", padding:"7px 16px", fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:600, color:"var(--sage-dark)", cursor:"pointer", transition:"all 200ms ease", marginRight:"8px", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:"6px" }}>
                עוד עליי ←
              </Link>
            </div>

            <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,4.5vw,64px)", fontWeight:400, color:"var(--charcoal)", marginBottom:"12px", letterSpacing:"-0.02em", lineHeight:1.1 }}>
              להיות ההורה שבחרתי
            </h1>
            <p style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(20px,2.5vw,30px)", fontWeight:400, color:"var(--sage-dark)", marginBottom:"28px", letterSpacing:"-0.01em", lineHeight:1.3 }}>
              הורות חומלת ונאמנה לכוונות בכלים פרקטיים
            </p>

            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", marginBottom:"12px", lineHeight:1.82, maxWidth:"480px", fontFamily:"var(--font-hebrew)" }}>
              מדריכת הורים ומפתחת{" "}
              <span style={{ color:"var(--terra-dark)", fontWeight:600 }}>ארגז הכלים ההורי</span>.
            </p>
            <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", marginBottom:"16px", lineHeight:1.82, maxWidth:"480px", fontFamily:"var(--font-hebrew)" }}>
              כלים יישומיים המותאמים אישית — לילדים בגיל{" "}<span dir="ltr" style={{ display:"inline-block" }}>4–14</span>.
            </p>
            <p style={{ fontSize:"14px", color:"var(--sage-dark)", fontWeight:500, marginBottom:"36px", lineHeight:1.7, maxWidth:"480px", fontFamily:"var(--font-hebrew)", background:"var(--sage-faint)", padding:"10px 16px", borderRadius:"10px", border:"1px solid rgba(42,122,110,0.15)" }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:"6px" }}><SiteIcon name="dot" size={14} /> מיומנות גבוהה בהדרכה טיפולית אונליין בשעות נוחות להורים ישראלים</span>
            </p>

            <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"32px" }}>
              <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99" target="_blank" rel="noopener noreferrer" className="btn-terra">ייעוץ ראשוני חינם (15 דק׳)</a>
              <Link href="/model" className="btn-outline">ארגז הכלים ההורי</Link>
            </div>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)" }}>
              • Cedar Park, אוסטין TX · זום לישראל ולכל העולם
            </p>
          </div>

          {/* ── Wooden toolbox ── */}
          <div>
            {/* Box lid */}
            <div style={{
              background:"linear-gradient(180deg, #2A7A6E 0%, #4A9E90 100%)",
              borderRadius:"16px 16px 0 0",
              padding:"10px 24px 8px",
              display:"flex", alignItems:"center", justifyContent:"space-between",
              boxShadow:"0 -2px 8px rgba(0,0,0,0.08)",
              border:"1px solid #1D5B52", borderBottom:"none",
            }}>
              <span style={{ fontFamily:"var(--font-serif)", fontSize:"15px", fontWeight:600, color:"#F0FAF8", letterSpacing:"0.02em" }}>ארגז הכלים ההורי</span>
              <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"rgba(255,255,255,0.25)", border:"1px solid rgba(255,255,255,0.4)" }} />
                <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"11px", color:"rgba(255,248,238,0.75)", fontWeight:500 }}>10 כלים</span>
              </div>
            </div>

            {/* Box hinge strip */}
            <div style={{ height:"6px", background:"linear-gradient(180deg, #1D5B52 0%, #4A9E90 100%)", borderLeft:"1px solid #1D5B52", borderRight:"1px solid #1D5B52" }} />

            {/* Box body */}
            <div style={{
              background:"linear-gradient(160deg, #E8F2F0 0%, #D5ECE8 100%)",
              borderRadius:"0 0 16px 16px",
              padding:"20px 20px 24px",
              border:"1px solid #2A7A6E", borderTop:"none",
              boxShadow:"0 8px 32px rgba(120,80,30,0.18), inset 0 2px 12px rgba(180,140,80,0.12)",
              position:"relative",
            }}>
              {/* Wood grain lines */}
              <div style={{ position:"absolute", inset:0, borderRadius:"0 0 16px 16px", overflow:"hidden", pointerEvents:"none", opacity:0.06 }}>
                {[15,35,55,75,90].map(pct => (
                  <div key={pct} style={{ position:"absolute", top:0, bottom:0, left:`${pct}%`, width:"1px", background:"#7A5020" }} />
                ))}
              </div>

              <div className="grid-toolbox" style={{ position:"relative", zIndex:1 }}>
                {TOOLS.map(({ num, title }) => {
                  const imgMap: Record<string, string> = {
                    "01":"/tool-01-compassion.webp", "02":"/tool-02-reflectivity.webp",
                    "03":"/tool-03-playfulness.webp", "04":"/tool-04-modeling.webp",
                    "05":"/tool-05-developmental.webp", "06":"/tool-06-prophecy.webp",
                    "07":"/tool-07-cooperation.webp", "08":"/tool-08-resilience.webp",
                    "09":"/tool-09-magic-time.webp", "10":"/tool-10-strengths.webp",
                  };
                  return (
                  <Link key={num} href={`/model#tool-${num}`} style={{ textDecoration:"none" }}>
                    <div style={{
                      borderRadius:"12px",
                      overflow:"hidden",
                      display:"flex", flexDirection:"column",
                      border:"1px solid rgba(42,122,110,0.2)",
                      boxShadow:"0 2px 8px rgba(42,122,110,0.1)",
                      transition:"all 200ms ease",
                      cursor:"pointer",
                      background:"#FFFFFF",
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform="translateY(-4px)";
                        el.style.boxShadow="0 8px 20px rgba(42,122,110,0.18)";
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform="translateY(0)";
                        el.style.boxShadow="0 2px 8px rgba(42,122,110,0.1)";
                      }}>
                      {/* Full illustration */}
                      <div style={{
                        width:"100%", aspectRatio:"1",
                        backgroundImage:`url(${imgMap[num]})`,
                        backgroundSize:"cover", backgroundPosition:"center",
                      }} />
                      {/* Label */}
                      <span style={{
                        fontFamily:"var(--font-hebrew)", fontSize:"12px", fontWeight:600,
                        color:"var(--charcoal)", textAlign:"center", lineHeight:1.3,
                        display:"block", padding:"8px 6px",
                      }}>{title}</span>
                    </div>
                  </Link>
                  );
                })}
              </div>

              {/* Box bottom latch */}
              <div style={{ display:"flex", justifyContent:"center", marginTop:"16px" }}>
                <div style={{ width:"32px", height:"10px", background:"linear-gradient(180deg, #2A7A6E 0%, #1D5B52 100%)", borderRadius:"0 0 8px 8px", border:"1px solid #1D5B52", borderTop:"none", boxShadow:"0 2px 4px rgba(0,0,0,0.15)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section className="sec-sm" style={{ background:"var(--sage)" }}>
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
      <section className="sec-std reveal" style={{ background:"var(--paper)" }}>
        <div className="container grid-2col-rev">
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

          {/* Photo + pullquote */}
          <div>
            {/* Large portrait */}
            <div style={{ position:"relative", marginBottom:"20px" }}>
              <div style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", boxShadow:"var(--shadow-float)", border:"1px solid var(--border)", aspectRatio:"4/5", maxHeight:"440px" }}>
                <Image
                  src="/maya-photo.webp"
                  alt="מאיה פלטי — פסיכולוגית חינוכית מומחית"
                  width={480} height={560}
                  style={{ objectFit:"cover", objectPosition:"center top", width:"100%", height:"100%" }}
                />
              </div>
              {/* Name badge overlay */}
              <div style={{ position:"absolute", bottom:"20px", right:"20px", background:"rgba(249,247,242,0.92)", backdropFilter:"blur(8px)", borderRadius:"14px", padding:"12px 18px", border:"1px solid var(--border)", boxShadow:"var(--shadow-card)" }}>
                <p style={{ fontFamily:"var(--font-serif)", fontSize:"19px", fontWeight:600, color:"var(--charcoal)", margin:0, lineHeight:1.2 }}>מאיה פלטי</p>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--terra)", margin:"3px 0 0", fontWeight:500 }}>פסיכולוגית חינוכית מומחית-מדריכה</p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid-2col-sm">
              {[
                { iconName:"star", text:"פסיכולוגית חינוכית מומחית", href:"/model" },
                { iconName:"house", text:"Cedar Park, TX & ישראל (זום)", href:null },
                { iconName:"baby", text:"מתמחה בגיל 4–14", href:null },
                { iconName:"book", text:"מבוסס מחקר עדכני", href:"/research" },
              ].map(({ iconName, text, href }) => (
                href ? (
                  <a key={text} href={href} style={{ textDecoration:"none", background:"var(--paper)", borderRadius:"12px", padding:"14px 16px", border:"1px solid var(--border)", display:"flex", gap:"10px", alignItems:"center", boxShadow:"var(--shadow-card)" }}>
                    <SiteIcon name={iconName} size={18} />
                    <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--sage-dark)", fontWeight:600, textDecoration:"underline dotted" }}>{text}</span>
                  </a>
                ) : (
                  <div key={text} style={{ background:"var(--paper)", borderRadius:"12px", padding:"14px 16px", border:"1px solid var(--border)", display:"flex", gap:"10px", alignItems:"center", boxShadow:"var(--shadow-card)" }}>
                    <SiteIcon name={iconName} size={18} />
                    <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-soft)" }}>{text}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ──────────────────────────────────────────────── */}
      <section className="sec-sm reveal" style={{ background:"var(--linen)" }}>
        <div style={{ maxWidth:"820px", margin:"0 auto", textAlign:"center" }}>
          <button onClick={() => setToolboxOpen(!toolboxOpen)} aria-expanded={toolboxOpen} aria-controls="toolbox-fit-panel" style={{ display:"inline-flex", alignItems:"center", gap:"12px", background:"var(--paper)", border:"1.5px solid var(--border)", borderRadius:"var(--radius-card)", padding:"22px 36px", cursor:"pointer", boxShadow:"var(--shadow-card)", transition:"all 220ms ease", width:"100%" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card-hover)"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
            <span style={{ fontSize:"28px", display:"flex", alignItems:"center" }}><SiteIcon name="dot" size={28} /></span>
            <div style={{ textAlign:"right", flex:1 }}>
              <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", color:"var(--charcoal)", margin:0, fontWeight:600 }}>למי ארגז הכלים מתאים?</h3>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", margin:"4px 0 0" }}>לחצו לפירוט</p>
            </div>
            <span style={{ color:"var(--terra)", marginRight:"auto", display:"flex" }}>{toolboxOpen ? <SiteIcon name="chevron-up" size={20} /> : <SiteIcon name="chevron-down" size={20} />}</span>
          </button>

          {toolboxOpen && (
            <div id="toolbox-fit-panel" role="region" aria-label="למי ארגז הכלים מתאים" style={{ background:"#FFFFFF", border:"1px solid var(--border)", borderRadius:"var(--radius-card)", padding:"32px", marginTop:"12px", boxShadow:"var(--shadow-card)", textAlign:"right" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
                <div>
                  <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", fontWeight:700, color:"var(--charcoal)", marginBottom:"8px", display:"flex", alignItems:"center", gap:"6px" }}><SiteIcon name="check-circle" size={16} /> מתאים להורים</h4>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.7, margin:"0 0 12px" }}>
                    לילדים בגיל 4–14 עם מודעות בסיסית לקשיי הילד ומוטיבציה לשינוי המתמודדים עם:
                  </p>
                  {[
                    "הפרעות קשב ולקויות למידה",
                    "עיכוב התפתחותי",
                    "קשיי גמילה ורכישת הרגלים",
                    "קשיים בוויסות רגשי והתנהגותי (התפרצויות זעם וסוגיות שליטה)",
                    "קשיים בדחיית סיפוקים, התמודדות עם תסכול, קבלת סמכות וגבולות",
                    "קשיים הנובעים מהמצב הביטחוני או חשיפה למעגלי פגיעות של ה-7.10 והטראומה הלאומית",
                    "קשיים חברתיים או קשיים בקשר הורה-ילד",
                    "ריבים רבים בין אחים",
                    "התמכרויות למסכים",
                    "קשיים בהתארגנות וניהול משימות יומיום",
                  ].map(item => (
                    <p key={item} style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.7, margin:"6px 0", display:"flex", gap:"8px" }}>
                      <span style={{ color:"var(--sage)", fontWeight:700, flexShrink:0 }}>•</span>{item}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", fontWeight:700, color:"var(--charcoal)", marginBottom:"12px", display:"flex", alignItems:"center", gap:"6px" }}><SiteIcon name="alert" size={16} /> פחות מתאים</h4>
                  {[
                    "התמודדות עם פסיכופתולוגיה קשה ומאובחנת או סיכון גבוה — אובדנות, הפרעות נפשיות קשות, פיגור ו-ASD בתפקוד נמוך",
                    "מצב חירום אקוטי (גירושים לאחרונה, אובדן בן משפחה קרוב, פגיעה מינית חוזרת)",
                  ].map(item => (
                    <p key={item} style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.7, margin:"6px 0", display:"flex", gap:"8px" }}>
                      <span style={{ color:"var(--sage)", fontWeight:700, flexShrink:0 }}>•</span>{item}
                    </p>
                  ))}
                </div>
              </div>
              <div style={{ marginTop:"20px", padding:"16px", background:"var(--terra-faint)", borderRadius:"10px", border:"1px solid rgba(196,114,122,0.2)" }}>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--terra-dark)", margin:0, lineHeight:1.8 }}>
                  <strong>לא בטוחים?</strong> פגישת הייעוץ הראשונה (חינם, 15 דק׳) נועדה בדיוק לזה — להבין יחד מה מתאים לכם.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="sec-std reveal" style={{ background:"var(--paper)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)", color:"var(--charcoal)", marginBottom:"16px" }}>כיצד נעבוד יחד?</h2>
            <div className="divider-accent-center" />
          </div>

          <div className="grid-3col">
            {[
              {
                title:"Cedar Park, אוסטין TX", sub:"קליניקה פרונטלית",
                desc:"קליניקה פיזית לייעוץ אישי והדרכות הורים. לא טיפול ואבחון.",
                href:"https://calendly.com/maya_palty/50min", btnText:"לקביעת פגישה →",
                img:"/service-clinic.webp", highlight: null,
              },
              {
                title:"ישראל ועולם", sub:"פגישות זום",
                desc:"בזום, בעברית, מכל מקום בעולם. לקהילה הישראלית בארה״ב ולהורים בישראל.",
                href:"https://calendly.com/maya_palty/50min", btnText:"לקביעת פגישה →",
                img:"/service-zoom.webp", highlight: "בשעות נוחות להורים בישראל",
              },
              {
                title:"ארגונים וצוותים", sub:"הכשרות לאנשי מקצוע",
                desc:"הכשרות לפסיכולוגים, עו\"סים ואנשי טיפול. סדנאות לצוותי חינוך ובתי ספר.",
                href:"/contact?type=org", btnText:"לטופס פניה →",
                img:"/service-training.webp", highlight: null,
              },
            ].map(({ title, sub, desc, href, btnText, img, highlight }) => (
              <div key={title} style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", boxShadow:"var(--shadow-card)", transition:"transform 300ms ease, box-shadow 300ms ease", display:"flex", flexDirection:"column", position:"relative", minHeight:"380px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)"; }}>
                <Image src={img} alt={title} fill style={{ objectFit:"cover", objectPosition:"center top" }} sizes="(max-width:768px) 100vw, 33vw" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(30,30,30,0.92) 0%, rgba(30,30,30,0.7) 50%, rgba(30,30,30,0.15) 100%)" }} />
                <div style={{ position:"relative", zIndex:1, padding:"28px 24px", marginTop:"auto", display:"flex", flexDirection:"column" }}>
                  <span style={{ display:"inline-block", marginBottom:"8px", alignSelf:"flex-start", background:"rgba(249,247,242,0.15)", color:"#F9F7F2", padding:"4px 14px", borderRadius:"var(--radius-pill)", fontSize:"12px", fontWeight:600, fontFamily:"var(--font-hebrew)", border:"1px solid rgba(249,247,242,0.2)", backdropFilter:"blur(4px)" }}>{sub}</span>
                  <h3 style={{ fontSize:"20px", fontWeight:600, color:"#F9F7F2", marginBottom:"10px", fontFamily:"var(--font-serif)" }}>{title}</h3>
                  <p style={{ fontSize:"14px", color:"rgba(249,247,242,0.85)", lineHeight:1.75, fontFamily:"var(--font-hebrew)", marginBottom:"16px" }}>{desc}</p>
                  {highlight && (
                    <p style={{ fontSize:"13px", fontWeight:600, color:"#F9F7F2", marginBottom:"16px", fontFamily:"var(--font-hebrew)", background:"rgba(42,122,110,0.5)", padding:"7px 14px", borderRadius:"8px", border:"1px solid rgba(42,122,110,0.4)", display:"flex", alignItems:"center", gap:"6px", backdropFilter:"blur(4px)" }}>
                      <SiteIcon name="dot" size={14} /> {highlight}
                    </p>
                  )}
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"6px", color:"#F9F7F2", fontWeight:700, textDecoration:"none", fontSize:"14px", fontFamily:"var(--font-hebrew)", background:"var(--terra)", padding:"10px 22px", borderRadius:"var(--radius-pill)", alignSelf:"flex-start", transition:"background 200ms ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--terra-dark)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--terra)"; }}>
                    {btnText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="sec-std reveal" style={{ background:"var(--linen)" }}>
        <div style={{ maxWidth:"960px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"48px" }}>
            <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,40px)", color:"var(--charcoal)", marginBottom:"12px", fontStyle:"italic", fontWeight:300 }}>מה הורים אומרים</h2>
            <div className="divider-accent-center" />
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"24px" }}>
            {[
              {
                quote: "המפגשים עם מאיה סייעו לי בשינוי תפיסתי כהורה המתקשה בשימת הגבולות הנדרשים עבור בתי ועבורי כהורה.",
                who: "אמא לארבעה, במוקד בת 10 עם קשיים חברתיים",
              },
              {
                quote: "ב-9 מפגשים עם מאיה הצלחנו להתמודד עם מגוון של דילמות ומורכבויות סביב התקשורת ההורית שלנו, אנו מרגישים שיפור משמעותי מאוד וגם חיבור עמוק יותר עם הבת שלנו.",
                who: "הורים ל-3 בנות, במוקד בת 6 עם קשיים בוויסות התנהגותי והתמודדות עם סמכות",
              },
              {
                quote: "הליווי של מאיה עזר לי להרגיש טוב יותר עם ההורות שלי — להיות פחות ביקורתית ויותר בחמלה כלפי עצמי. כאשת מקצוע שעוברת הרבה אתגרים עם הילדים, הטיפול הוא בשבילי מקום יציב ובטוח שמחזיק אותי.",
                who: "אם לשלושה, בגילאי 7, 4 ושנה",
              },
              {
                quote: "מאיה היתה בשבילי הקול החומל וחסר הביקורת לאמא שאני. קול שבעזרתה למדתי להשמיע לעצמי. בעצמי.",
                who: "אמא לבן 4 ובת שנתיים",
              },
              {
                quote: "חשבתי שאני צריכה טיפול ארוך — פגישה אחת נתנה לי כלים שאני משתמשת בהם כל יום.",
                who: "אם לשלושה",
              },
              {
                quote: "במספר בודד של מפגשים למדתי להבין את הבן שלי ברמה עמוקה יותר, להתחבר לרגשות ולתהליכים שעוברים עליו וביחד לעבור מהמורות.",
                who: "אמא לבן 6 עם קשיי ויסות והתנהגות",
              },
            ].map(({ quote, who }, i) => (
              <div key={i} style={{
                background:"#FFFFFF", borderRadius:"var(--radius-card-lg)",
                padding:"36px 32px", border:"1px solid var(--border)",
                boxShadow:"var(--shadow-card)", position:"relative",
              }}>
                <span style={{ position:"absolute", top:"16px", right:"24px", fontFamily:"var(--font-serif)", fontSize:"48px", color:"var(--terra-light)", opacity:0.3, lineHeight:1 }}>״</span>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--charcoal-soft)", lineHeight:1.9, margin:"0 0 20px", paddingTop:"12px" }}>
                  {quote}
                </p>
                <div style={{ borderTop:"1px solid var(--border)", paddingTop:"14px" }}>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", margin:0, fontWeight:500 }}>
                    — {who}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="sec-cta reveal-scale" style={{ textAlign:"center", position:"relative", overflow:"hidden", background:"linear-gradient(135deg, var(--charcoal) 0%, #3D3530 100%)" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"320px", height:"320px", borderRadius:"50%", background:"rgba(196,114,122,0.10)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:"640px", margin:"0 auto" }}>
          <span className="tag-sage" style={{ marginBottom:"24px", display:"inline-block" }}>מוכנים להתחיל?</span>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,4vw,50px)", color:"#F9F7F2", marginBottom:"18px", fontWeight:300, fontStyle:"italic" }}>
            שיחת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות.
          </h2>
          <p style={{ fontSize:"17px", color:"rgba(249,247,242,0.72)", marginBottom:"40px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
            פשוט שיחה. כדי לראות אם יש כימיה ואם אני יכולה לעזור.
          </p>
          <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#F9F7F2", color:"var(--terra-dark)", padding:"15px 40px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"16px", textDecoration:"none", boxShadow:"0 8px 32px rgba(0,0,0,0.25)", transition:"all 250ms ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--terra-faint)"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#F9F7F2"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
            <SiteIcon name="dot" size={16} /> לשיחת ייעוץ ראשונה בוואטסאפ
          </a>
        </div>
      </section>
    </>
  );
}

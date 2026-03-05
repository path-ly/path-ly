"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { EyeInEyeIcon, GrowthRulerIcon, FocusGoodIcon, CooperationIcon, PlantFromRockIcon } from "@/components/ToolIcons";

function ToolIconEl({ icon, size = 28 }: { icon: string; size?: number }) {
  if (icon === "eye")   return <EyeInEyeIcon size={size} />;
  if (icon === "ruler") return <GrowthRulerIcon size={size} />;
  if (icon === "focus") return <FocusGoodIcon size={size} />;
  if (icon === "coop")  return <CooperationIcon size={size} />;
  if (icon === "plant") return <PlantFromRockIcon size={size} />;
  return <span style={{ fontSize: size }}>{icon}</span>;
}

const TOOLS = [
  {
    num:"01", icon:"🫶", title:"חמלה הורית ועצמית",
    accent:false,
    short:"לסלוח לעצמנו כדי לסלוח לילד",
    desc:"90-95% מהאוכלוסיה מנהלים דיבור פנימי יומיומי. הקול שבו אנחנו מדברים לעצמנו הופך לקול שהילדים שלנו מפנימים. חמלה עצמית היא לא פינוק — היא תשתית.",
    research:"Kristin Neff — Self-Compassion Research · מחקרים מראים קשר חזק בין חמלה עצמית לבין ויסות רגשי בתוך מערכות יחסים קרובות.",
  },
  {
    num:"02", icon:"eye", title:"רפלקטיביות הורית",
    accent:true,
    short:"להבין מה מתחת לפני השטח",
    desc:"4 שאלות פשוטות: מה אני חושב? מה אני מרגיש? מה הילד חושב? מה הוא מרגיש? כשאנחנו על אוטומט — מפספסים את המסר האמיתי.",
    research:"מחקר על מנטליזציה (Fonagy, 2002) — רפלקטיביות הורית היא הגורם המנבא ביותר לאיכות ההתקשרות.",
  },
  {
    num:"03", icon:"🎲", title:"משחקיות",
    accent:false,
    short:"להפוך התנגדות לחיבור",
    desc:"משחקיות היא לא פעילות מיוחדת — היא תנוחת נפש. כניסה דרך החלון כשדלת ההתנגדות נסגרת. מנטרלת מאבקי כוח ומאפשרת שיתוף פעולה אמיתי.",
    research:"Anthony Pellegrini, Peter Gray — משחקיות תורמת לויסות עצמי, הפחתת התנגדות ולמידה יעילה.",
  },
  {
    num:"04", icon:"👣", title:"מודלינג הורי",
    accent:true,
    short:"ילדים לומדים מה שאנחנו עושים",
    desc:"ילדים לא לומדים מה שאנחנו אומרים — הם לומדים מה שאנחנו עושים. מודלינג אוטנטי של ויסות רגשי, תיקון אחרי טעות ואנושיות.",
    research:"Bandura Social Learning Theory — תצפית ולמידה חברתית כמנגנון ההשפעה המרכזי בגיל הילדות.",
  },
  {
    num:"05", icon:"ruler", title:"התאמה התפתחותית",
    accent:false,
    short:"לראות את הילד בגובה העיניים שלו",
    desc:"ציפיות שאינן תואמות את שלב ההתפתחות יוצרות תסכול משני הצדדים. לכל גיל — צרכים, יכולות ומגבלות שונות לחלוטין.",
    research:"Piaget, Vygotsky — תיאוריות התפתחות קוגניטיבית ואזורי ההתפתחות הקרובה.",
  },
  {
    num:"06", icon:"focus", title:"נבואה חיובית",
    accent:true,
    short:"להתמקד בטוב כדי לעזור לו לגדול",
    desc:"ההורה הוא המראה הראשונה שהילד רואה את עצמו בה. מה שמתמקדים בו — גדל. להאיר כוחות, לבנות ציפייה חיובית ולחזק את הדימוי העצמי.",
    research:"Pygmalion Effect (Rosenthal) — ציפיות המטפל/המחנך משפיעות ישירות על ביצועי הילד.",
  },
  {
    num:"07", icon:"coop", title:"שיתוף פעולה",
    accent:false,
    short:"ממאבק להסכמה משותפת",
    desc:"מניעה, עצירת הסלמה ותיקון — שלושת השלבים. רוב העבודה נעשית בין האירועים, לא בתוכם. המטרה: אני והילד ביחד מול האתגר — לא אני מול הילד.",
    research:"Stuart Shanker — Self-Reg · מחקרי ה-FFF (Fight, Flight, Freeze) ויציאה ממעגל ההסלמה.",
  },
  {
    num:"08", icon:"plant", title:"חוסן רגשי",
    accent:true,
    short:"לצמוח ממשבר, יחד",
    desc:"צמח הבוקע מתוך סלע. חוסן אינו היעדר קושי — הוא היכולת לשוב לצורה המקורית לאחר לחץ, ולצמוח ממנו. גישת המשאבים.",
    research:"Masten (2001) — Ordinary Magic · מחקרים על חוסן בילדות ותפקיד ההורה כגורם מגן.",
  },
  {
    num:"09", icon:"⏳", title:"זמן קסם",
    accent:false,
    short:"נוכחות שבונה אמון ובסיס",
    desc:"5–20 דקות ביום, קבועות, בטוחות. הילד בוחר. ההורה נוכח. זהו הבסיס לסמכות שמבוססת על כבוד שהורווח — לא על כוח.",
    research:"Grolnick & Ryan (1989) — אוטונומיה וקשר תורמים למוטיבציה פנימית יותר מאשר שליטה חיצונית.",
  },
  {
    num:"10", icon:"✨", title:"צמיחה מחוזקות",
    accent:true,
    short:"להכיר ולהשתמש במה שיש",
    desc:"פסיכולוגיה חיובית מלמדת שהמיקוד בחוזקות קיימות — לא בתיקון חולשות — הוא הדרך הגדולה ביותר לצמיחה. כל משפחה מגיעה עם ארסנל של כוחות.",
    research:"Seligman & Csikszentmihalyi (2000) — Positive Psychology · VIA Character Strengths.",
  },
];

export default function ModelPage() {
  const [openTool, setOpenTool] = useState<string|null>(null);

  return (
    <>
      {/* Hero */}
      <section style={{ padding:"140px 32px 80px", background:"linear-gradient(150deg, #EEF0EB 0%, #F9F7F2 60%)", textAlign:"center" }}>
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
      <section style={{ padding:"64px 32px 100px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"960px", margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", textAlign:"center", marginBottom:"40px" }}>
            לחצו על כל כלי לפירוט מלא, מחקר תומך וקישורים רלוונטיים
          </p>

          {TOOLS.map(({ num, icon, title, accent, short, desc, research }) => (
            <div key={num} id={`tool-${num}`} style={{ marginBottom:"12px" }}>
              <button
                onClick={() => setOpenTool(openTool === num ? null : num)}
                style={{
                  width:"100%", textAlign:"right", background: openTool===num ? (accent ? "var(--terra-faint)" : "var(--sage-faint)") : "#FFFFFF",
                  border:`1.5px solid ${openTool===num ? (accent ? "rgba(193,127,95,0.3)" : "rgba(125,132,113,0.3)") : "var(--border)"}`,
                  borderRadius: openTool===num ? "var(--radius-card) var(--radius-card) 0 0" : "var(--radius-card)",
                  padding:"20px 24px", cursor:"pointer", boxShadow:"var(--shadow-card)",
                  display:"flex", alignItems:"center", gap:"16px", transition:"all 200ms ease",
                }}>
                <span style={{ display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, width:"34px" }}>
                  <ToolIconEl icon={icon} size={28} />
                </span>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
                    <span className={accent ? "tag-terra" : "tag-sage"} style={{ fontSize:"10px" }}>כלי {num}</span>
                    <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"20px", fontWeight:600, color:"var(--charcoal)", margin:0 }}>{title}</h3>
                  </div>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", margin:0 }}>{short}</p>
                </div>
                <span style={{ fontSize:"18px", color: accent ? "var(--terra)" : "var(--sage-dark)", flexShrink:0 }}>
                  {openTool===num ? "▲" : "▼"}
                </span>
              </button>

              {openTool===num && (
                <div style={{ background: accent ? "var(--terra-faint)" : "var(--sage-faint)", border:`1.5px solid ${accent ? "rgba(193,127,95,0.3)" : "rgba(125,132,113,0.3)"}`, borderTop:"none", borderRadius:"0 0 var(--radius-card) var(--radius-card)", padding:"28px 32px" }}>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"20px" }}>
                    {desc}
                  </p>
                  <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:"10px", padding:"16px 20px", border:"1px solid var(--border)" }}>
                    <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", margin:0, lineHeight:1.7 }}>
                      📚 <strong>ביסוס מחקרי:</strong> {research}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How we train together */}
      <section style={{ padding:"80px 32px", background:"var(--linen)" }}>
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

      {/* CTA */}
      <section style={{ padding:"80px 32px", background:"var(--sage)", textAlign:"center" }}>
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

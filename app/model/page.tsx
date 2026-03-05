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
    tips:["שימו לב לדיבור הפנימי שלכם אחרי 'כשלון' הורי — מה אתם אומרים לעצמכם?","נסו 'הצהרת חמלה': 'זה קשה. כל הורה חווה את זה. אני יכול/ה להיות עדין/ה עם עצמי עכשיו'","כשאתם צועקים — זה לא כישלון. זה הזדמנות לתקן ולמדל תיקון עצמי."],
    example:"אחרי יום קשה צעקת על הילדה שלך. במקום לשקוע בבושה — אמרי לעצמך: 'הייתי עייפה ומוצפת. אני אתנצל ואתחיל מחדש'. זה חמלה עצמית בפעולה.",
    challenge:"ההורים שהכי קשה להם עם חמלה עצמית הם לרוב אלה שגדלו עם ביקורת פנימית גבוהה. קח את הזמן — זה שריר שצריך לאמן.",
    video:"https://www.youtube.com/watch?v=IvtZBUSplr4",
    videoLabel:"Kristin Neff — What is Self-Compassion?",
    research:"Kristin Neff — Self-Compassion Research · מחקרים מראים קשר חזק בין חמלה עצמית לבין ויסות רגשי בתוך מערכות יחסים קרובות.",
  },
  {
    num:"02", icon:"eye", title:"רפלקטיביות הורית",
    accent:true,
    short:"להבין מה מתחת לפני השטח",
    desc:"4 שאלות פשוטות: מה אני חושב? מה אני מרגיש? מה הילד חושב? מה הוא מרגיש? כשאנחנו על אוטומט — מפספסים את המסר האמיתי.",
    tips:["לפני תגובה — עצרו 3 שניות ושאלו: 'מה הילד שלי מנסה לומר לי עכשיו?'","נסו לזהות את הרגש שמתחת להתנהגות: מאחורי 'לא' מסתתר לרוב פחד, עייפות, רעב או תחושת חוסר שליטה","כתבו ביומן: מה גרם לי היום לאבד סבלנות? מה קדם לזה אצל הילד?"],
    example:"הבן שלך מסרב לצחצח שיניים כל ערב. במקום 'סתם מתנגד' — שאל את עצמך: האם הוא עייף מדי? האם הוא צריך להרגיש שיש לו שליטה? ומה אני מרגיש כשהוא מסרב?",
    challenge:"הכי קשה לרפלקטיביות כשאנחנו מוצפים רגשית. ברגעים האלה — הגוף מוביל את הראש. כלי זה דורש תרגול בשעות השקטות כדי לשלוף אותו ברגעי סערה.",
    video:"https://www.youtube.com/watch?v=apzXGEbZht0",
    videoLabel:"Still Face Experiment — למה הנוכחות הרגשית חשובה",
    research:"מחקר על מנטליזציה (Fonagy, 2002) — רפלקטיביות הורית היא הגורם המנבא ביותר לאיכות ההתקשרות.",
  },
  {
    num:"03", icon:"🎲", title:"משחקיות",
    accent:false,
    short:"להפוך התנגדות לחיבור",
    desc:"משחקיות היא לא פעילות מיוחדת — היא תנוחת נפש. כניסה דרך החלון כשדלת ההתנגדות נסגרת. מנטרלת מאבקי כוח ומאפשרת שיתוף פעולה אמיתי.",
    tips:["כשהילד מסרב — שאלו: 'איך אפשר לעשות את זה בצורה משעשעת?'","הכניסו תחרות, קצב, קול מצחיק או 'משימה בלתי אפשרית' — הגוף מרפה לפני שהראש מסכים","זכרו: ילדים לומדים, מתחברים ומשתפים פעולה דרך משחק — זה השפה שלהם"],
    example:"הבת שלך לא רוצה לנעול נעלים. במקום 'נעלי עכשיו!' — 'אני מהמר שהנעל השמאלית יכולה להיכנס מהר יותר מהימנית... 3... 2... 1!' — והיא כבר בפנים.",
    challenge:"כשאנחנו עייפים ולחוצים, המשחקיות היא הדבר האחרון שמגיע לנו. כדאי לתרגל זאת ברגעים נוחים, כך שתהפוך לאוטומטית יותר בשעות הקשות.",
    video:"https://www.youtube.com/watch?v=HHjbSGMdKaA",
    videoLabel:"Lawrence Cohen — Playful Parenting",
    research:"Anthony Pellegrini, Peter Gray — משחקיות תורמת לויסות עצמי, הפחתת התנגדות ולמידה יעילה.",
  },
  {
    num:"04", icon:"👣", title:"מודלינג הורי",
    accent:true,
    short:"ילדים לומדים מה שאנחנו עושים",
    desc:"ילדים לא לומדים מה שאנחנו אומרים — הם לומדים מה שאנחנו עושים. מודלינג אוטנטי של ויסות רגשי, תיקון אחרי טעות ואנושיות.",
    tips:["כשאתם מבצעים ויסות רגשי — הגידו בקול: 'אני רגוז עכשיו, אני הולך לנשום קצת'","אחרי טעות — תקנו בפני הילד: 'צעקתי ולא היה צריך. אני מצטער/ת'","שתפו בהצלחות ובכישלונות שלכם — ילדים גדלים על אנושיות, לא על שלמות"],
    example:"אחרי ויכוח עם בן/בת הזוג, אמרי לילד: 'הרגשתי כועסת ולקחתי כמה דקות לעצמי. עכשיו אנחנו נדבר בשלווה'. זו שיעור שלמות רגשית שלא מלמדים בבית ספר.",
    challenge:"קשה למדל ויסות רגשי כשאנחנו עצמנו לא עברנו את זה. אם גדלתם בסביבה שבה רגשות הוסתרו — זה אתגר. אבל גם ניסיון גלוי הוא מודלינג.",
    video:"https://www.youtube.com/watch?v=l-T9LHZW_o4",
    videoLabel:"Brené Brown — The Power of Vulnerability",
    research:"Bandura Social Learning Theory — תצפית ולמידה חברתית כמנגנון ההשפעה המרכזי בגיל הילדות.",
  },
  {
    num:"05", icon:"ruler", title:"התאמה התפתחותית",
    accent:false,
    short:"לראות את הילד בגובה העיניים שלו",
    desc:"ציפיות שאינן תואמות את שלב ההתפתחות יוצרות תסכול משני הצדדים. לכל גיל — צרכים, יכולות ומגבלות שונות לחלוטין.",
    tips:["לפני תגובה לקושי — שאלו: 'האם ציפייה זו מתאימה לגיל שלו?'","ילד בן 4 שמאבד שליטה לא 'מתנהג רע' — מוח ה-prefrontal cortex שלו עדיין בפיתוח","ילד בן 10 שרוצה עצמאות לא 'חצוף' — הוא בדיוק מגיל הנכון לתחיל לנתק"],
    example:"בן 6 שלא יכול לשבת בשקט בארוחה — לא חוסר חינוך. ילדים בגיל זה זקוקים ל-15-20 דקות תנועה לכל שעת ישיבה. הכנסת תנועה קצרה בין ארוחות פותרת 80% מהבעיה.",
    challenge:"הציפיות שלנו לילד מושפעות מאיך גדלנו, ממה חברים אחרים מספרים, ומהמדיה. חשוב לבדוק מול מידע התפתחותי עדכני ולא רק מול 'מה נראה לי הגיוני'.",
    video:"https://www.youtube.com/watch?v=RuSMDxkBME0",
    videoLabel:"Daniel Siegel — The Developing Mind",
    research:"Piaget, Vygotsky — תיאוריות התפתחות קוגניטיבית ואזורי ההתפתחות הקרובה.",
  },
  {
    num:"06", icon:"focus", title:"נבואה חיובית",
    accent:true,
    short:"להתמקד בטוב כדי לעזור לו לגדול",
    desc:"ההורה הוא המראה הראשונה שהילד רואה את עצמו בה. מה שמתמקדים בו — גדל. להאיר כוחות, לבנות ציפייה חיובית ולחזק את הדימוי העצמי.",
    tips:["מצאו כל יום משהו אחד חיובי בהתנהגות הילד — וציינו אותו בקול","החליפו 'למה אתה תמיד...' ב-'שמתי לב שהיום הצלחת...'","שתפו ילדים בציפיות חיוביות: 'אני יודע/ת שאתה יכול להתמודד עם זה'"],
    example:"ילד שמתקשה בשיתוף: במקום 'אתה אנוכי' — 'הבחנתי שחיכית לתורך בזמן המשחק, זה לא קל וזה ממש מרשים'. ה'מראה' שמחזיר לו — משנה את הדימוי העצמי.",
    challenge:"כשאנחנו לחוצים או מתוסכלים מהילד, קשה לראות את הטוב. כדאי לנהל 'יומן חוזקות' קצר — 3 דקות ביום — שמאלץ אותנו לחפש ולמצוא.",
    video:"https://www.youtube.com/watch?v=u6XAPnuFjJc",
    videoLabel:"Martin Seligman — Positive Psychology",
    research:"Pygmalion Effect (Rosenthal) — ציפיות המטפל/המחנך משפיעות ישירות על ביצועי הילד.",
  },
  {
    num:"07", icon:"coop", title:"שיתוף פעולה",
    accent:false,
    short:"ממאבק להסכמה משותפת",
    desc:"מניעה, עצירת הסלמה ותיקון — שלושת השלבים. רוב העבודה נעשית בין האירועים, לא בתוכם. המטרה: אני והילד ביחד מול האתגר — לא אני מול הילד.",
    tips:["בין אירועים — שוחחו על מה קרה בשלווה: 'מה יכולנו לעשות אחרת?'","בזמן אירוע — הנמיכו קול (לא להגביר), כרעו לגובהו, והשתמשו במשפט אחד קצר","אחרי אירוע — תקנו. הגידו 'אני מצטערת על...', גם אם לא הייתם אלה שהתחלתם"],
    example:"הילד מסרב לכבות טלוויזיה. במקום עימות — שבו לידו: 'אני רואה שאתה ממש בעיצומו. בוא נחליט יחד — עוד 5 דקות ואז כיבוי, או שאנחנו עוצרים בנקודת עצירה טבעית בסיפור?' — הוא בחר, הוא שותף.",
    challenge:"שיתוף פעולה אמיתי דורש ויתור על 'לנצח'. להורים שגדלו בסביבה שבה סמכות = ציות, זה עלול להרגיש כמו חולשה. זה לא. זה הבשלה.",
    video:"https://www.youtube.com/watch?v=GUFBaMdTzLc",
    videoLabel:"Ross Greene — Collaborative Problem Solving",
    research:"Stuart Shanker — Self-Reg · מחקרי ה-FFF (Fight, Flight, Freeze) ויציאה ממעגל ההסלמה.",
  },
  {
    num:"08", icon:"plant", title:"חוסן רגשי",
    accent:true,
    short:"לצמוח ממשבר, יחד",
    desc:"צמח הבוקע מתוך סלע. חוסן אינו היעדר קושי — הוא היכולת לשוב לצורה המקורית לאחר לחץ, ולצמוח ממנו. גישת המשאבים.",
    tips:["לאחר משבר — שאלו: 'מה למדנו? מה נעשה אחרת?', לא רק 'מה קרה'","אפשרו לילדים להרגיש קושי — אל תמהרו לתקן. הנוכחות שלכם היא מה שמחזק","ספרו לילדים על קשיים שעברתם ואיך התגברתם — זה בונה מפת דרכים פנימית"],
    example:"הבן שלך נכשל במבחן ובוכה. במקום 'לא נורא, יהיה טוב' (ביטול) או 'אתה צריך ללמוד יותר' (פתרון מהיר) — שבו לידו: 'קשה לך עכשיו. אני כאן. ספר לי מה קרה'. לאחר שנרגע — 'מה חשבת שעזר?' — הוא בונה חוסן.",
    challenge:"ההורה הכי קשה לחוסן הוא ההורה שרואה את כאב ילדו ולא יכול לסבול את זה — הוא ממהר לתקן, לפתור, לנחם. לשבת עם הכאב של הילד מבלי 'לתקן' — זה הכלי.",
    video:"https://www.youtube.com/watch?v=2dM1AiMGDf4",
    videoLabel:"Brené Brown — Rising Strong",
    research:"Masten (2001) — Ordinary Magic · מחקרים על חוסן בילדות ותפקיד ההורה כגורם מגן.",
  },
  {
    num:"09", icon:"⏳", title:"זמן קסם",
    accent:false,
    short:"נוכחות שבונה אמון ובסיס",
    desc:"5–20 דקות ביום, קבועות, בטוחות. הילד בוחר. ההורה נוכח. זהו הבסיס לסמכות שמבוססת על כבוד שהורווח — לא על כוח.",
    tips:["קבעו זמן קסם יומי — אפילו 10 דקות — שהטלפון בכיס והילד בוחר","כלל אחד: ההורה לא מוביל, לא מלמד, לא מתקן — רק נוכח ומגיב","אחרי שבוע סדיר של זמן קסם — תשימו לב שהילד מבקש פחות תשומת לב 'בצורות קשות'"],
    example:"כל יום בשעה 4:30 — עשר דקות עם הבת. היא בוחרת: לצייר, לשחק קלפים, לדבר. ההורה שם, נוכח, לא בטלפון. אחרי שבועיים — הוא שם לב שהיא פחות 'נדבקת' אליו בשעות הלחוצות.",
    challenge:"בעולם עמוס — קשה לשמור על קביעות. אך דווקא ההקפדה על קביעות (גם אם 5 דקות בלבד) היא מה שבונה את תחושת הביטחון. ילד שיודע שה'זמן שלו' מגיע — מחכה לו בשקט.",
    video:"https://www.youtube.com/watch?v=NLuUCJnHGkI",
    videoLabel:"Daniel Hughes — Playfulness, Acceptance, Curiosity, Empathy",
    research:"Grolnick & Ryan (1989) — אוטונומיה וקשר תורמים למוטיבציה פנימית יותר מאשר שליטה חיצונית.",
  },
  {
    num:"10", icon:"✨", title:"צמיחה מחוזקות",
    accent:true,
    short:"להכיר ולהשתמש במה שיש",
    desc:"פסיכולוגיה חיובית מלמדת שהמיקוד בחוזקות קיימות — לא בתיקון חולשות — הוא הדרך הגדולה ביותר לצמיחה. כל משפחה מגיעה עם ארסנל של כוחות.",
    tips:["כתבו יחד עם הילד רשימת 'דברים שאני טוב בהם' — לפחות 10 סעיפים","בשיחות יומיות — שאלו 'מה הדבר שהכי הצלחת בו היום?' לפני 'מה היה קשה?'","מצאו איך להשתמש בחוזקות הקיימות לטיפול בחולשות: ילד שאוהב לצייר — ציירו ביחד תוכנית פעולה"],
    example:"ילד עם קשיי קשב שמסיח דעת — יש לו גם יצירתיות וחשיבה מחוץ לקופסה יוצאת דופן. במקום להתמקד בחיסרון — מצאו פעילויות שמנצלות את היצירתיות שלו. הוא ילמד לנהל את הקשב דרך תחום שהוא אוהב.",
    challenge:"התרבות שלנו מאומנת לתקן חולשות. ציונים נמוכים מקבלים יותר תשומת לב מציונים גבוהים. לשנות את הפוקוס — צריך מאמץ מודע יומיומי.",
    video:"https://www.youtube.com/watch?v=YhnxB_pkOP4",
    videoLabel:"Martin Seligman — What is Well-Being?",
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

          {TOOLS.map(({ num, icon, title, accent, short, desc, tips, example, challenge, video, videoLabel, research }) => (
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

                  {/* Description */}
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"24px" }}>
                    {desc}
                  </p>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"16px" }}>

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
                      <div style={{ background:"rgba(255,255,255,0.75)", borderRadius:"12px", padding:"16px 20px", border:`1px solid ${accent ? "rgba(193,127,95,0.2)" : "rgba(125,132,113,0.2)"}` }}>
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
                  <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"12px", alignItems:"center" }}>
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

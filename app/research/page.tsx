import Link from "next/link";
import SiteIcon from "@/components/SiteIcon";

interface Study {
  author: string;
  finding: string;
}

interface ToolResearch {
  num: string;
  toolTitle: string;
  slug: string;
  accent: boolean;
  studies: Study[];
}

const RESEARCH: ToolResearch[] = [
  {
    num: "01", toolTitle: "חמלה ופגיעות", slug: "self-compassion", accent: false,
    studies: [
      {
        author: "Neff, K. D., & Faso, D. J. (2015). Self-compassion and well-being in parents of children with autism. Mindfulness.",
        finding: "חמלה עצמית הורית נמצאה כגורם מגן מפני שחיקה ודיכאון, ומשפרת משמעותית את איכות האינטראקציה עם הילד.",
      },
      {
        author: "Brown, B. (2012). Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead.",
        finding: "חשיבות המעבר מ״הורות של בושה״ להורות המקבלת פגיעות ואנושיות כבסיס לחיבור רגשי עמוק.",
      },
    ],
  },
  {
    num: "02", toolTitle: "רפלקטיביות ויחסי הורה–ילד", slug: "reflectivity", accent: true,
    studies: [
      {
        author: "Fonagy, P., & Target, M. (1997).",
        finding: "היכולת להבין התנהגות במונחים של רגשות, מחשבות, כוונות וצרכים פנימיים היא בסיס מרכזי להתקשרות בטוחה, לוויסות רגשי ולהתפתחות נפשית תקינה.",
      },
      {
        author: "Menashe-Grinberg, A., Shneor, S., Meiri, G., & Atzaba-Poria, N. (2022).",
        finding: "חיזוק הרפלקטיביות ההורית נמצא קשור לשיפור באיכות האינטראקציה הורה–ילד, לשיפור בוויסות העצמי של הילד ולירידה בבעיות התנהגות, והשפעות אלו נשמרו גם במעקב לאחר שישה חודשים.",
      },
      {
        author: "Menashe-Grinberg, A., & Atzaba-Poria, N. (2023).",
        finding: "שיפור ברפלקטיביות ההורית נמצא קשור לשיפור באינטראקציית הורה–ילד, לשיפור ביכולת הרפלקטיבית של הילד ולירידה בבעיות התנהגות. בנוסף, ילדים רגישים יותר מבחינה טמפרמנטלית הפיקו תועלת רבה יותר מן השינוי ההורי.",
      },
    ],
  },
  {
    num: "03", toolTitle: "משחקיות", slug: "playfulness", accent: false,
    studies: [
      {
        author: "Shorer, M., Swissa, N., Levavi, P., & Atzaba-Poria, N. (2021).",
        finding: "משחקיות הורית גבוהה יותר נמצאה קשורה ליכולת טובה יותר של ילדים לווסת רגשות ולרמות נמוכות יותר של חרדה. הקשר הזה הוסבר בחלקו דרך ויסות רגשי טוב יותר של ההורה ודרך איכות טובה יותר של מערכת היחסים הורה–ילד.",
      },
      {
        author: "Majdandžić, M., de Vente, W., Bögels, S. M., & van den Boom, D. C. (2014).",
        finding: "הורות מאתגרת־משחקית, שבה ההורה מעודד את הילד באופן שובב לצאת מעט מאזור הנוחות, נמצאה קשורה לפחות חרדה חברתית אצל ילדים. עמדה הורית שמשלבת עידוד, אתגר ומשחק עשויה לחזק ביטחון, חקירה והתמודדות.",
      },
    ],
  },
  {
    num: "04", toolTitle: "מודלינג", slug: "modeling", accent: true,
    studies: [
      {
        author: "Bandura, A., Ross, D., & Ross, S. A. (1961).",
        finding: "ילדים לומדים התנהגות במידה רבה באמצעות צפייה וחיקוי של מודלים משמעותיים. כאשר הם נחשפים למודל תוקפני, הם נוטים לחקות יותר התנהגויות תוקפניות.",
      },
      {
        author: "Burstein, M., Ginsburg, G. S., & Tein, J.-Y. (2010).",
        finding: "כאשר הורים מדגימים חרדה, מחשבות מאיימות והימנעות, ילדים נוטים להפגין יותר חרדה, יותר מחשבות חרדתיות ויותר רצון להימנע. גם דפוסי התמודדות נלמדים דרך מודלינג הורי.",
      },
      {
        author: "Yao, C. A., Rhodes, R. E., et al. (2015).",
        finding: "מטא־אנליזה הראתה שמודלינג הורי הוא אחד המשתנים המשמעותיים הקשורים להתנהגויות בריאות של ילדים, ובפרט לפעילות גופנית. מה שההורה עושה בפועל משפיע יותר ממה שהוא רק אומר.",
      },
    ],
  },
  {
    num: "06", toolTitle: "נבואה הורית, דפוס חשיבה ודימוי עצמי", slug: "positive-prophecy", accent: true,
    studies: [
      {
        author: "Dweck, C. S. (2006). Mindset: The New Psychology of Success.",
        finding: "עידוד ״דפוס חשיבה מתפתח״ (Growth Mindset) בהורות משפר את החוסן של הילד מול כישלונות ומגביר מוטיבציה פנימית.",
      },
      {
        author: "Lavoie, R. (2005). It's So Much Work to Be Your Friend.",
        finding: "חשיבות התיווך ההורי בבניית הערכה עצמית בקרב ילדים עם לקויות למידה וקשיים חברתיים; ההורה כ״מתרגם״ של העולם לילד.",
      },
      {
        author: "Madon, S., et al. (1997). Journal of Personality and Social Psychology.",
        finding: "מחקרי שנות ה-90 אישרו כי ציפיות הורים (חיוביות ושליליות) משפיעות על הישגי ילדים לאורך זמן.",
      },
      {
        author: "Willard, J., et al. (2008). Theoretical and empirical advances in self-fulfilling prophecy research.",
        finding: "תיווך הורי חיובי משנה את הדימוי העצמי של הילד ומנבא הצלחה חברתית.",
      },
    ],
  },
  {
    num: "07", toolTitle: "סמכות וגבולות", slug: "cooperation", accent: false,
    studies: [
      {
        author: "Omer, H. (2004). Nonviolent Resistance. Cambridge University Press.",
        finding: "שימוש בנוכחות הורית ללא כוחנות מפחית משמעותית התנהגויות אלימות והתפרצויות.",
      },
    ],
  },
  {
    num: "08", toolTitle: "חוסן (מולי להד)", slug: "resilience", accent: true,
    studies: [
      {
        author: "Lahad, M., & Leykin, D. (2013). The BASIC Ph model of resiliency.",
        finding: "שימוש רב-ערוצי במשאבי התמודדות מגביר את היכולת להסתגל למצבי דחק מתמשכים.",
      },
    ],
  },
  {
    num: "09", toolTitle: "זמן קסם והקשבה פעילה", slug: "magic-time", accent: false,
    studies: [
      {
        author: "Gottman, J. M., & DeClaire, J. (1997). The Heart of Parenting: How to Raise an Emotionally Intelligent Child.",
        finding: "״אימון רגשי״ (Emotion Coaching) מנבא הצלחה לימודית וחברתית ועמידות בפני הפרעות התנהגות.",
      },
    ],
  },
  {
    num: "10", toolTitle: "פסיכולוגיה חיובית וחוזקות", slug: "growth-from-strengths", accent: true,
    studies: [
      {
        author: "Seligman, M. E. P. (2002). Authentic Happiness.",
        finding: "התמקדות בחוזקות אופי כדרך לבניית רווחה נפשית וחוסן משפחתי.",
      },
      {
        author: "Peterson, C., & Seligman, M. E. P. (2004). Character Strengths and Virtues.",
        finding: "זיהוי ומינוף חוזקות אופי הם הדרך היעילה ביותר לצמיחה אישית ומשפחתית.",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="sec-hero" style={{ background:"linear-gradient(150deg, #E8F2F0 0%, #F9F7F2 60%)", textAlign:"center" }}>
        <span className="tag-sage" style={{ marginBottom:"20px", display:"inline-block" }}>ביסוס מחקרי</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(36px,5vw,60px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px" }}>
          המחקר מאחורי ארגז הכלים
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"680px", margin:"0 auto 20px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          ארגז הכלים ההורי מבוסס על עשרות שנים של מחקר בפסיכולוגיה התפתחותית, פסיכולוגיה חיובית, תיאוריית ההתקשרות ומדעי המוח. כל כלי נשען על ממצאים אמפיריים שהוכחו שוב ושוב — שהקשר ההורי הוא הגורם המשפיע ביותר על התפתחות הילד.
        </p>
        <p style={{ fontSize:"15px", color:"var(--charcoal-muted)", maxWidth:"600px", margin:"0 auto", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          להלן רשימת מחקרים נבחרים לכל כלי, עם הממצא המרכזי בעברית.
        </p>
      </section>

      {/* Research by tool */}
      <section className="sec-std" style={{ background:"var(--paper)" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          {RESEARCH.map(({ num, toolTitle, slug, accent, studies }) => (
            <div key={num} id={`tool-${num}`} style={{ marginBottom:"48px", scrollMarginTop:"100px" }}>
              {/* Tool header */}
              <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"20px", flexWrap:"wrap" }}>
                <span style={{
                  display:"inline-flex", alignItems:"center", justifyContent:"center",
                  width:"36px", height:"36px", borderRadius:"50%",
                  background: accent ? "var(--terra-faint)" : "var(--sage-faint)",
                  color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                  fontFamily:"var(--font-serif)", fontSize:"15px", fontWeight:700,
                  border: `1.5px solid ${accent ? "rgba(196,114,122,0.3)" : "rgba(42,122,110,0.25)"}`,
                  flexShrink:0,
                }}>{num}</span>
                <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(20px,3vw,28px)", color:"var(--charcoal)", margin:0 }}>
                  {toolTitle}
                </h2>
                <Link href={`/model#tool-${num}`} style={{
                  fontSize:"13px", color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                  fontFamily:"var(--font-hebrew)", textDecoration:"none", fontWeight:600,
                  marginRight:"auto",
                }}>
                  לכלי ←
                </Link>
              </div>

              {/* Studies */}
              <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
                {studies.map((s, i) => (
                  <div key={i} style={{
                    background:"#FFFFFF", borderRadius:"var(--radius-card)", padding:"22px 24px",
                    border:"1px solid var(--border)", boxShadow:"var(--shadow-card)",
                    borderRight: `3px solid ${accent ? "var(--terra)" : "var(--sage)"}`,
                  }}>
                    <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"12.5px", color:"var(--charcoal-muted)", margin:"0 0 10px", lineHeight:1.6, direction:"ltr", textAlign:"left" }}>
                      {s.author}
                    </p>
                    <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--charcoal-soft)", margin:0, lineHeight:1.82, display:"flex", gap:"8px", alignItems:"flex-start" }}>
                      <span style={{ flexShrink:0, marginTop:"3px", display:"flex" }}><SiteIcon name="dot" size={12} /></span>
                      <span><strong style={{ color:"var(--charcoal)" }}>ממצא עיקרי:</strong> {s.finding}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec-md" style={{ background:"var(--sage)", textAlign:"center" }}>
        <div style={{ maxWidth:"600px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(24px,3vw,36px)", color:"#F9F7F2", marginBottom:"16px", fontStyle:"italic", fontWeight:300 }}>
            רוצים ליישם את המחקר בחיים שלכם?
          </h2>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"rgba(249,247,242,0.8)", marginBottom:"32px", lineHeight:1.82 }}>
            ארגז הכלים ההורי מתרגם את הממצאים האלה לכלים מעשיים — ומאיה מלווה אתכם בתהליך.
          </p>
          <div style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/model" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#F9F7F2", color:"var(--sage-dark)", padding:"13px 28px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
              לארגז הכלים
            </Link>
            <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"var(--terra)", color:"white", padding:"13px 28px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
              <SiteIcon name="dot" size={14} /> שיחת ייעוץ חינם
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

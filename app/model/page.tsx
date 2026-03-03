import Link from "next/link";

export default function ModelPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:"140px 32px 80px", background:"linear-gradient(150deg, #EEF0EB 0%, #F9F7F2 60%)", textAlign:"center" }}>
        <span className="tag-sage" style={{ marginBottom:"20px", display:"inline-block" }}>הגישה המקורית</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,5.5vw,68px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 12px", letterSpacing:"-0.02em", maxWidth:"720px", marginLeft:"auto", marginRight:"auto" }}>
          ארגז הכלים ההוריים
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"580px", margin:"0 auto 32px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          מודל מקורי שפותח על בסיס 20 שנות עבודה קלינית. שש עמדות יסוד שיכולות לשנות את האופן בו אתם רואים את הורותכם.
        </p>
        <div className="divider-accent-center" />
      </section>

      {/* Pullquote */}
      <section style={{ padding:"72px 32px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"820px", margin:"0 auto" }}>
          <div style={{
            background:"var(--linen)",
            borderRadius:"var(--radius-card-lg)",
            padding:"52px 56px",
            boxShadow:"var(--shadow-card)",
            position:"relative",
          }}>
            <div style={{ position:"absolute", top:"28px", right:"36px", fontSize:"64px", opacity:0.10, fontFamily:"var(--font-serif)", lineHeight:1, color:"var(--terra)" }}>״</div>
            <p className="pullquote">
              הורות טובה אינה נמדדת בשלמות, אלא בנוכחות. ביכולת לחזור. בנכונות לראות.
            </p>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--terra)", marginTop:"20px", fontWeight:600 }}>
              — ד״ר מאיה פלטי
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Tools */}
      <section style={{ padding:"64px 32px 100px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,3.5vw,40px)", textAlign:"center", color:"var(--charcoal)", marginBottom:"64px" }}>
            ששת כלי היסוד
          </h2>

          {[
            { num:"01", icon:"💬", title:"שפה רגשית",        accentColor:"var(--sage)",  bg:"var(--sage-faint)",  desc:"ילדים חיים בעולם של רגשות שעדיין אין להם מילים. כשאנחנו לומדים לדבר ברמה הרגשית של הילד — לא להרגיע, לא להסביר, אלא לנכוח — מתחולל קסם.", points:["זיהוי רגשות בלי לשפוט","שפת גוף ועין לעין","קבלת רגש לפני תגובה","מה לא להגיד"] },
            { num:"02", icon:"🌊", title:"ויסות רגשי",        accentColor:"var(--terra)", bg:"var(--terra-faint)", desc:"כשהסערה גדולה, הורה מווסת הוא עוגן. הכלי הזה מלמד כיצד לא להיסחף עם גלי הרגש של הילד, תוך כדי שמירה על קשר אמיתי.", points:["הכרת גורמי ההצתה האישיים","כלי ויסות מהירים","הפרדה בין ויסות לניתוק","ריפוי לאחר הסערה"] },
            { num:"03", icon:"🔗", title:"חיבור והתקשרות",    accentColor:"var(--sage)",  bg:"var(--sage-faint)",  desc:"התיאוריה של התקשרות (Attachment) היא הבסיס למודל. ילד שמרגיש מחובר לומד, מסתכן, וחוזר בביטחה. הקשר הוא הבסיס לכל שאר.", points:["טיפוסי התקשרות ומה לעשות אתם","טקסי חיבור יומיים","לחזק קשר בתקופות מאתגרות","חיבור כשהילד מרחיק"] },
            { num:"04", icon:"🎯", title:"גבולות מפרגנים",    accentColor:"var(--terra)", bg:"var(--terra-faint)", desc:"גבול שנובע מפחד שונה מגבול שנובע מאהבה. הגבולות המפרגנים הם מבנה שמגן ומאפשר גדילה — לא כלא, אלא בית.", points:["גבול לעומת עונש","איך לשמור על גבול מתוך אהבה","מה לעשות כשהגבול נשבר","עקביות בלי קשיחות"] },
            { num:"05", icon:"🪞", title:"שיקוף עצמי",        accentColor:"var(--sage)",  bg:"var(--sage-faint)",  desc:"ההורה הוא המטפל הראשי, ולכן גם חייב להיות מטופל. כלי השיקוף מזמין הורים לפגוש את הילד שהיו — ואת האופן שבו הוא מנהל את המבוגר שהם היום.", points:["ילד פנימי ודפוסי ילדות","שיקוף בלי שיפוטיות","הורות כהזדמנות לריפוי","מה הילד שלך מראה לך על עצמך"] },
            { num:"06", icon:"🤝", title:"שותפות הורית",      accentColor:"var(--terra)", bg:"var(--terra-faint)", desc:"גם כשהקשר בין ההורים קשה — פרוד, חילוקי דעות, תקופות קשות — הילד יכול לגדול בתוך מרחב בטוח. הכלי הזה מלמד כיצד.", points:["תיאום ציפיות בין הורים","הורות לאחר גירושין","שאלות שצריך לענות ביחד","כיצד לדבר על ההורה השני"] },
          ].map(({ num, icon, title, accentColor, bg, desc, points }) => (
            <div key={num} style={{
              display:"grid", gridTemplateColumns:"240px 1fr", gap:"0",
              marginBottom:"28px",
              background:"var(--paper)",
              borderRadius:"var(--radius-card-lg)",
              overflow:"hidden",
              boxShadow:"var(--shadow-card)",
              border:"1px solid var(--border)",
            }}>
              <div style={{
                padding:"44px 32px",
                background: bg,
                display:"flex", flexDirection:"column",
                justifyContent:"center", alignItems:"center", textAlign:"center",
                borderLeft:"1px solid var(--border)",
              }}>
                <div style={{ fontSize:"48px", marginBottom:"14px" }}>{icon}</div>
                <div className="tag-parchment" style={{ marginBottom:"10px" }}>כלי {num}</div>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"24px", fontWeight:600, color:"var(--charcoal)" }}>{title}</h3>
              </div>
              <div style={{ padding:"44px 48px" }}>
                <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"28px", fontFamily:"var(--font-hebrew)" }}>{desc}</p>
                <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:700, color: accentColor, letterSpacing:"0.08em", marginBottom:"14px", textTransform:"uppercase" }}>מה נלמד:</h4>
                <ul style={{ listStyle:"none", padding:0, margin:0, display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
                  {points.map(p => (
                    <li key={p} style={{
                      fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)",
                      display:"flex", alignItems:"center", gap:"8px",
                      background:"var(--linen)", borderRadius:"10px", padding:"8px 14px",
                    }}>
                      <span style={{ color: accentColor, fontWeight:700, flexShrink:0 }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"80px 32px", background:"var(--linen)", textAlign:"center" }}>
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,40px)", color:"var(--charcoal)", marginBottom:"16px", fontStyle:"italic", fontWeight:300 }}>
          רוצים ללמוד לעומק?
        </h2>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", marginBottom:"36px", fontFamily:"var(--font-hebrew)" }}>
          הצטרפו לפגישת הדרכה אישית ונתחיל לעבוד על הכלים שרלוונטיים למשפחה שלכם.
        </p>
        <Link href="/contact" className="btn-terra">לפגישת ייעוץ ראשונה</Link>
      </section>
    </>
  );
}

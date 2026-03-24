import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <section className="sec-hero" style={{ background:"linear-gradient(150deg, #F8ECEE 0%, #F9F7F2 60%)", textAlign:"center", paddingBottom:"32px" }}>
        <p style={{ fontSize:"19px", color:"var(--charcoal-soft)", maxWidth:"520px", margin:"0 auto", lineHeight:1.82, fontFamily:"var(--font-hebrew)", fontWeight:500 }}>
          כל משפחה ראויה לתמיכה שמתאימה לה. בחרו את המסגרת שמתאימה לכם.
        </p>
      </section>

      <section className="sec-std" style={{ background:"var(--paper)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

          {/* ══════════════════════════════════════════════════════
              1. PARENT COACHING — PRIMARY SERVICE
              ══════════════════════════════════════════════════════ */}
          <div style={{ marginBottom:"80px" }}>
            <div style={{ textAlign:"center", marginBottom:"48px" }}>
              <span className="tag-terra" style={{ marginBottom:"16px", display:"inline-block" }}>השירות המרכזי</span>
              <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,3.5vw,44px)", color:"var(--charcoal)", marginBottom:"12px" }}>הדרכת הורים</h2>
              <div className="divider-accent-center" style={{ marginBottom:"20px" }} />
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, fontFamily:"var(--font-hebrew)", maxWidth:"640px", margin:"0 auto" }}>
                הדרכה אישית ומותאמת על בסיס מודל ארגז הכלים ההורי. תהליך קצר מועד (5–12 פגישות) שמביא לשינוי אמיתי בקשר עם ילדכם.
              </p>
            </div>

            {/* Pricing badge */}
            <div style={{ textAlign:"center", marginBottom:"40px" }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"12px", background:"var(--terra-faint)", border:"1px solid rgba(196,114,122,0.25)", borderRadius:"var(--radius-card)", padding:"18px 32px" }}>
                <span style={{ fontFamily:"var(--font-serif)", fontSize:"28px", fontWeight:600, color:"var(--terra-dark)" }}>₪354</span>
                <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)" }}>/</span>
                <span style={{ fontFamily:"var(--font-serif)", fontSize:"28px", fontWeight:600, color:"var(--terra-dark)" }}>$115</span>
                <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", marginRight:"8px" }}>לפגישה</span>
              </div>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", marginTop:"10px" }}>
                פגישת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות
              </p>
            </div>

            {/* 3 Options */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"20px" }}>

              {/* Option 1: Zoom */}
              <div style={{ background:"#FFFFFF", borderRadius:"var(--radius-card-lg)", padding:"36px 32px", border:"1px solid var(--border)", boxShadow:"var(--shadow-card)", display:"flex", flexDirection:"column" }}>
                <div style={{ fontSize:"36px", marginBottom:"14px" }}>🌐</div>
                <span className="tag-terra" style={{ marginBottom:"12px", display:"inline-block", alignSelf:"flex-start" }}>הכי פופולרי</span>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color:"var(--charcoal)", marginBottom:"8px" }}>פגישת זום</h3>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.8, flex:1, marginBottom:"24px" }}>
                  הדרכת הורים אישית בעברית — לישראלים בכל העולם. שעות נוחות להורים עובדים בישראל. גרתי בישראל גם לאחר ה-7.10 ומכירה מקרוב את המציאות המורכבת.
                </p>
                <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" className="btn-terra" style={{ textAlign:"center" }}>
                  📅 לקביעת פגישת זום
                </a>
              </div>

              {/* Option 2: In-person */}
              <div style={{ background:"#FFFFFF", borderRadius:"var(--radius-card-lg)", padding:"36px 32px", border:"1px solid var(--border)", boxShadow:"var(--shadow-card)", display:"flex", flexDirection:"column" }}>
                <div style={{ fontSize:"36px", marginBottom:"14px" }}>🏠</div>
                <span className="tag-sage" style={{ marginBottom:"12px", display:"inline-block", alignSelf:"flex-start" }}>פרונטלי</span>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color:"var(--charcoal)", marginBottom:"8px" }}>פגישה בקליניקה</h3>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.8, flex:1, marginBottom:"24px" }}>
                  קליניקה פיזית ב-Cedar Park, אוסטין TX. ייעוץ אישי והדרכות הורים פנים אל פנים. לא טיפול ואבחון — הדרכת הורים בלבד.
                </p>
                <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign:"center" }}>
                  📅 לקביעת פגישה פרונטלית
                </a>
              </div>

              {/* Option 3: Workshop */}
              <div style={{ background:"linear-gradient(135deg, var(--terra-faint) 0%, #FFF8F4 100%)", borderRadius:"var(--radius-card-lg)", padding:"36px 32px", border:"2px solid var(--terra)", boxShadow:"var(--shadow-card)", display:"flex", flexDirection:"column", position:"relative" }}>
                <div style={{ position:"absolute", top:"-12px", right:"24px", background:"var(--terra)", color:"white", borderRadius:"var(--radius-pill)", padding:"4px 16px", fontFamily:"var(--font-hebrew)", fontSize:"12px", fontWeight:700 }}>
                  חדש!
                </div>
                <div style={{ fontSize:"36px", marginBottom:"14px" }}>👥</div>
                <span className="tag-terra" style={{ marginBottom:"12px", display:"inline-block", alignSelf:"flex-start" }}>קבוצתי</span>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color:"var(--charcoal)", marginBottom:"8px" }}>סדנת הורים בזום</h3>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:1.8, marginBottom:"16px" }}>
                  סדנה קבוצתית להכרות מעמיקה עם ארגז הכלים ההורי. 12 מפגשים בזום, קבוצה אינטימית של 5–8 זוגות הורים.
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"16px" }}>
                  <span style={{ fontFamily:"var(--font-serif)", fontSize:"24px", fontWeight:600, color:"var(--terra-dark)" }}>₪1,200</span>
                  <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)" }}>/</span>
                  <span style={{ fontFamily:"var(--font-serif)", fontSize:"24px", fontWeight:600, color:"var(--terra-dark)" }}>$400</span>
                  <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)" }}>לזוג</span>
                </div>
                <div style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", marginBottom:"20px", lineHeight:1.7 }}>
                  12 מפגשים · 5–8 זוגות · בזום · בעברית
                </div>
                <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A1%D7%93%D7%A0%D7%AA%20%D7%94%D7%94%D7%95%D7%A8%D7%99%D7%9D" target="_blank" rel="noopener noreferrer" className="btn-terra" style={{ textAlign:"center", flex:"none" }}>
                  💬 לפרטים והרשמה
                </a>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              2. B2B — PROFESSIONAL TRAINING (no pricing)
              ══════════════════════════════════════════════════════ */}
          <div style={{ background:"linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%)", borderRadius:"var(--radius-card-lg)", padding:"64px", boxShadow:"var(--shadow-float)" }}>
            <div className="grid-services-img">
              <div style={{ textAlign:"center", fontSize:"64px" }}>🏫</div>
              <div>
                <span className="tag-parchment" style={{ marginBottom:"18px", display:"inline-block", background:"rgba(249,247,242,0.12)", color:"#E8E0D0" }}>ארגונים ומוסדות</span>
                <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3vw,38px)", color:"#F9F7F2", marginBottom:"16px" }}>הכשרות מקצועיות</h2>
                <div style={{ width:"36px", height:"2px", background:"var(--terra)", borderRadius:"2px", marginBottom:"20px" }} />
                <p style={{ fontSize:"16px", color:"rgba(249,247,242,0.78)", lineHeight:1.9, marginBottom:"28px", fontFamily:"var(--font-hebrew)" }}>
                  הכשרות מקצועיות והדרכות לצוותי חינוך — פסיכולוגים, עובדים סוציאליים ואנשי טיפול, גני ילדים ובתי ספר.
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"32px" }}>
                  {["הכשרת פסיכולוגים","הדרכת עו״סים","סדנאות לצוותי חינוך","הרצאות לאנשי מקצוע","ליווי מוסדי","פיתוח תכניות"].map(item => (
                    <div key={item} style={{ background:"rgba(249,247,242,0.08)", borderRadius:"10px", padding:"10px 16px", fontSize:"14px", color:"rgba(249,247,242,0.9)", display:"flex", alignItems:"center", gap:"8px", fontFamily:"var(--font-hebrew)", border:"1px solid rgba(249,247,242,0.10)" }}>
                      <span style={{ color:"var(--terra-light)", fontWeight:700 }}>✓</span>{item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"var(--terra)", color:"white", padding:"13px 28px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
                  צרו קשר להצעה מותאמת
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-md" style={{ background:"var(--linen)" }}>
        <div style={{ maxWidth:"780px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,40px)", textAlign:"center", color:"var(--charcoal)", marginBottom:"48px", fontStyle:"italic", fontWeight:300 }}>
            שאלות נפוצות
          </h2>
          {[
            {
              q:"כמה פגישות בדרך כלל נדרשות?",
              a:"אין תשובה אחת, אבל המודל מיועד להתמודדויות הוריות שגרתיות והכלים הפרקטיים שהוא מציע מאפשרים השגת שינוי בטווח קצר (5–12 פגישות). לאחר פגישת האינטייק ניתן לקבל הערכה ראשונית של משך התהליך.",
            },
            {
              q:"כמה עולה פגישה?",
              a:"פגישה בודדת (זום או פרונטלית) עולה ₪354 / $115. סדנה קבוצתית של 12 מפגשים — ₪1,200 / $400 לזוג. פגישת ייעוץ ראשונה (15 דקות) ללא עלות.",
            },
            {
              q:"האם ניתן לקיים תהליך משמעותי גם מרחוק?",
              a:"בהחלט כן. אני נותנת שירות להורים ישראלים בכל העולם ושעות המפגשים לרוב נוחות יותר להורים עובדים בישראל. התגוררתי בישראל גם לאחר ה-7.10 ואני מכירה מקרוב את המציאות המורכבת.",
            },
            {
              q:"מה ההבדל בין טיפול פסיכולוגי להדרכת הורים?",
              a:"הדרכת הורים מעשית יותר — עובדים על כלים, תגובות ומבנה היחסים עם הילד. טיפול פסיכולוגי מתמקד בעיבוד רגשי עמוק ודפוסים פנימיים. לפעמים שניהם נדרשים, ואני אעזור לכם להבין מה מתאים.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="card" style={{ padding:"28px 32px", marginBottom:"14px" }}>
              <h3 style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", fontWeight:600, color:"var(--charcoal)", marginBottom:"12px" }}>{q}</h3>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--charcoal-soft)", lineHeight:1.82, margin:0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

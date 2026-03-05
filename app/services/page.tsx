import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding:"140px 32px 72px", background:"linear-gradient(150deg, #F5EAE4 0%, #F9F7F2 60%)", textAlign:"center" }}>
        <span className="tag-terra" style={{ marginBottom:"20px", display:"inline-block" }}>מה אני מציעה</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,5vw,64px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px", letterSpacing:"-0.02em" }}>
          שירותים
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"520px", margin:"0 auto", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          שלוש מסגרות שירות — כולן מונחות על ידי אותו עקרון: כל משפחה ראויה לתמיכה שמתאימה לה.
        </p>
      </section>

      <section style={{ padding:"80px 32px 100px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

          {/* 1. Cedar Park Clinic */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center", marginBottom:"80px" }}>
            <div style={{ height:"320px", borderRadius:"var(--radius-card-lg)", background:"linear-gradient(135deg, var(--sage-faint) 0%, var(--sage-light) 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:"64px", boxShadow:"var(--shadow-float)", border:"1px solid rgba(125,132,113,0.15)", gap:"14px" }}>
              🏠
              <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--sage-dark)", fontWeight:600 }}>Cedar Park, Austin TX</span>
            </div>
            <div>
              <span className="tag-sage" style={{ marginBottom:"18px", display:"inline-block" }}>Cedar Park · אוסטין, טקסס</span>
              <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,3.5vw,40px)", color:"var(--charcoal)", marginBottom:"16px" }}>קליניקה פרונטלית</h2>
              <div className="divider-accent" style={{ marginBottom:"20px" }} />
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"16px", fontFamily:"var(--font-hebrew)" }}>
                קליניקה פיזית בCedar Park, אוסטין — לייעוץ אישי והדרכות הורים בלבד.
              </p>
              <p style={{ fontSize:"14px", color:"var(--terra-dark)", background:"var(--terra-faint)", borderRadius:"10px", padding:"10px 16px", marginBottom:"28px", fontFamily:"var(--font-hebrew)", border:"1px solid rgba(193,127,95,0.2)" }}>
                ⚠️ לא טיפול ואבחון — הדרכת הורים בלבד.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"32px" }}>
                {["ייעוץ הורי אישי","הדרכת הורים","פגישות פרונטליות","בגיל 4–14"].map(item => (
                  <div key={item} style={{ background:"var(--sage-faint)", borderRadius:"10px", padding:"10px 16px", fontSize:"14px", color:"var(--sage-dark)", display:"flex", alignItems:"center", gap:"8px", fontFamily:"var(--font-hebrew)", border:"1px solid rgba(125,132,113,0.15)" }}>
                    <span style={{ fontWeight:700 }}>✓</span>{item}
                  </div>
                ))}
              </div>
              <a href="https://calendly.com/maya-palty" target="_blank" rel="noopener noreferrer" className="btn-primary">📅 לקביעת פגישה</a>
            </div>
          </div>

          {/* 2. Zoom - Israel & World */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center", marginBottom:"80px" }}>
            <div>
              <span className="tag-terra" style={{ marginBottom:"18px", display:"inline-block" }}>ישראל ועולם · פגישות זום</span>
              <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,3.5vw,40px)", color:"var(--charcoal)", marginBottom:"16px" }}>הדרכת הורים בזום</h2>
              <div className="divider-accent" style={{ marginBottom:"20px" }} />
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"20px", fontFamily:"var(--font-hebrew)" }}>
                הדרכת הורים אישית ומותאמת בעברית — לישראלים בכל העולם. לא סדנה קבוצתית. אני מקדישה לכל משפחה תשומת לב אישית, עובדת על האתגרים הספציפיים שלכם ובונה יחד אתכם ארגז כלים שמתאים לכם.
              </p>
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"32px", fontFamily:"var(--font-hebrew)" }}>
                שעות המפגשים נוחות במיוחד להורים עובדים בישראל הזקוקים לליווי בשעות הערב. גרתי בישראל גם לאחר ה-7.10 ומכירה מקרוב את המציאות המורכבת.
              </p>
              <div style={{ display:"flex", gap:"14px", flexWrap:"wrap" }}>
                <a href="https://calendly.com/maya-palty" target="_blank" rel="noopener noreferrer" className="btn-terra">📅 קביעת פגישה</a>
                <Link href="/model" className="btn-outline">קרא על המודל</Link>
              </div>
            </div>
            <div style={{ height:"320px", borderRadius:"var(--radius-card-lg)", background:"linear-gradient(135deg, var(--terra-faint) 0%, var(--terra-light) 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:"64px", boxShadow:"var(--shadow-float)", border:"1px solid rgba(193,127,95,0.15)", gap:"14px" }}>
              🌍
              <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--terra-dark)", fontWeight:600 }}>ישראל · ארה״ב · ועולם</span>
            </div>
          </div>

          {/* 3. Organizations */}
          <div style={{ background:"linear-gradient(135deg, var(--charcoal) 0%, #3D3530 100%)", borderRadius:"var(--radius-card-lg)", padding:"64px", boxShadow:"var(--shadow-float)" }}>
            <div style={{ display:"grid", gridTemplateColumns:"100px 1fr", gap:"48px", alignItems:"center" }}>
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
                  📋 לטופס פניה ארגונית
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:"80px 32px", background:"var(--linen)" }}>
        <div style={{ maxWidth:"780px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3.5vw,40px)", textAlign:"center", color:"var(--charcoal)", marginBottom:"48px", fontStyle:"italic", fontWeight:300 }}>
            שאלות נפוצות
          </h2>
          {[
            {
              q:"כמה פגישות בדרך כלל נדרשות?",
              a:"אין תשובה אחת, אבל המודל מיועד להתמודדויות הוריות שגרתיות והכלים הפרקטיים שהוא מציע מאפשרים השגת שינוי בטווח קצר (5–12 פגישות). לאחר פגישת האינטייק ניתן לקבל הערכה ראשונית של משך התהליך ולכל אורכו מתבצעות עצירות להתבוננות על ההישגים והערכת הצורך בהמשך.",
            },
            {
              q:"האם ניתן לקיים תהליך משמעותי גם מרחוק?",
              a:"בהחלט כן. אני נותנת שירות להורים ישראלים בכל העולם ושעות המפגשים לרוב נוחות יותר להורים עובדים בישראל הזקוקים לליווי בשעות הערב ולאחר שהתפנו ממשימות היומיום. יש לציין כי התגוררתי בישראל גם לאחר ה-7.10 ואני מכירה מקרוב ולוקחת בחשבון את המציאות המורכבת של החיים בשגרת חירום.",
            },
            {
              q:"האם השירות מוכר על ידי ביטוחים פרטיים?",
              a:"בישראל הרישיונות שלי תקפים לכל השירותים שאני מספקת. אם הביטוח שלכם מכסה הדרכת הורים/ייעוץ — התשובה היא כן. לתשומת לבכם, ביטוחים מסוימים מחייבים הפניית רופא לאופנות טיפול ספציפית — במקרה כזה מומלץ לבדוק מראש.",
            },
            {
              q:"מה ההבדל בין טיפול פסיכולוגי להדרכת הורים?",
              a:"הדרכת הורים מעשית יותר — עובדים על כלים, תגובות ומבנה היחסים עם הילד. טיפול פסיכולוגי מתמקד בעיבוד רגשי עמוק ודפוסים פנימיים. לפעמים שניהם נדרשים, ואני אעזור לכם להבין מה מתאים.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="card" style={{ padding:"28px 32px", marginBottom:"14px" }}>
              <h4 style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", fontWeight:600, color:"var(--charcoal)", marginBottom:"12px" }}>{q}</h4>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--charcoal-soft)", lineHeight:1.82, margin:0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

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
          שלוש מסגרות שירות, כולן מונחות על ידי אותו עקרון: כל משפחה ראויה לתמיכה שמתאימה לה.
        </p>
      </section>

      <section style={{ padding:"80px 32px 100px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

          {/* Clinical */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center", marginBottom:"80px" }}>
            <div style={{
              height:"360px", borderRadius:"var(--radius-card-lg)",
              background:"linear-gradient(135deg, var(--sage-faint) 0%, var(--sage-light) 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"80px", boxShadow:"var(--shadow-float)",
              border:"1px solid rgba(125,132,113,0.15)",
            }}>🇮🇱</div>
            <div>
              <span className="tag-sage" style={{ marginBottom:"18px", display:"inline-block" }}>ישראל · קליניקה פרטית</span>
              <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,3.5vw,40px)", color:"var(--charcoal)", marginBottom:"16px" }}>טיפול קליני</h2>
              <div className="divider-accent" style={{ marginBottom:"20px" }} />
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"28px", fontFamily:"var(--font-hebrew)" }}>
                בקליניקה פרטית אני מקבלת ילדים, מתבגרים, מבוגרים וזוגות. הגישה שלי משלבת פסיכולוגיה דינמית עם כלים קוגניטיביים-התנהגותיים ועבודה מערכתית.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"32px" }}>
                {["טיפול פרטני","טיפול זוגי","טיפול משפחתי","טיפול בילדים ונוער","אבחונים פסיכולוגיים","ייעוץ חינוכי"].map(item => (
                  <div key={item} style={{ background:"var(--sage-faint)", borderRadius:"10px", padding:"10px 16px", fontSize:"14px", color:"var(--sage-dark)", display:"flex", alignItems:"center", gap:"8px", fontFamily:"var(--font-hebrew)", border:"1px solid rgba(125,132,113,0.15)" }}>
                    <span style={{ fontWeight:700 }}>✓</span>{item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">לפגישה בקליניקה</Link>
            </div>
          </div>

          {/* Parenting */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center", marginBottom:"80px" }}>
            <div>
              <span className="tag-terra" style={{ marginBottom:"18px", display:"inline-block" }}>ישראל וארה״ב · זום ופגישות</span>
              <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(28px,3.5vw,40px)", color:"var(--charcoal)", marginBottom:"16px" }}>הדרכת הורים</h2>
              <div className="divider-accent" style={{ marginBottom:"20px" }} />
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"20px", fontFamily:"var(--font-hebrew)" }}>
                הדרכת הורים אישית ומותאמת — לא סדנה קבוצתית. אני מקדישה לכל משפחה תשומת לב אישית, עובדת על האתגרים הספציפיים שלכם ובונה יחד אתכם ארגז כלים שמתאים לכם.
              </p>
              <p style={{ fontSize:"16px", color:"var(--charcoal-soft)", lineHeight:1.9, marginBottom:"32px", fontFamily:"var(--font-hebrew)" }}>
                הפגישות מתקיימות בזום — כך שמשפחות בכל מקום בעולם יכולות להצטרף, כולל הקהילה הישראלית בארה״ב.
              </p>
              <div style={{ display:"flex", gap:"14px", flexWrap:"wrap" }}>
                <Link href="/contact" className="btn-terra">קביעת פגישה</Link>
                <Link href="/model"   className="btn-outline">קרא על המודל</Link>
              </div>
            </div>
            <div style={{
              height:"360px", borderRadius:"var(--radius-card-lg)",
              background:"linear-gradient(135deg, var(--terra-faint) 0%, var(--terra-light) 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"80px", boxShadow:"var(--shadow-float)",
              border:"1px solid rgba(193,127,95,0.15)",
            }}>🌍</div>
          </div>

          {/* B2B */}
          <div style={{
            background:"linear-gradient(135deg, var(--charcoal) 0%, #3D3530 100%)",
            borderRadius:"var(--radius-card-lg)", padding:"64px",
            boxShadow:"var(--shadow-float)",
          }}>
            <div style={{ display:"grid", gridTemplateColumns:"120px 1fr", gap:"48px", alignItems:"center" }}>
              <div style={{ textAlign:"center", fontSize:"72px" }}>🏢</div>
              <div>
                <span className="tag-parchment" style={{ marginBottom:"18px", display:"inline-block", background:"rgba(249,247,242,0.12)", color:"#E8E0D0" }}>ארגונים ומוסדות · B2B</span>
                <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3vw,38px)", color:"#F9F7F2", marginBottom:"16px" }}>ייעוץ ארגוני</h2>
                <div style={{ width:"36px", height:"2px", background:"var(--terra)", borderRadius:"2px", marginBottom:"20px" }} />
                <p style={{ fontSize:"16px", color:"rgba(249,247,242,0.78)", lineHeight:1.9, marginBottom:"28px", fontFamily:"var(--font-hebrew)" }}>
                  גנים, בתי ספר, ארגוני חינוך, קופות חולים — אני מביאה את ארגז הכלים ההוריים למסגרות שעובדות עם הורים.
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"32px" }}>
                  {["הכשרת צוותים","סדנאות להורים","ייעוץ מנהלים","פיתוח תכניות","הרצאות ואירועים","ליווי שוטף"].map(item => (
                    <div key={item} style={{ background:"rgba(249,247,242,0.08)", borderRadius:"10px", padding:"10px 16px", fontSize:"14px", color:"rgba(249,247,242,0.9)", display:"flex", alignItems:"center", gap:"8px", fontFamily:"var(--font-hebrew)", border:"1px solid rgba(249,247,242,0.10)" }}>
                      <span style={{ color:"var(--terra-light)", fontWeight:700 }}>✓</span>{item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-ghost-white">לייעוץ ארגוני</Link>
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
            { q:"מה ההבדל בין טיפול פסיכולוגי להדרכת הורים?", a:"טיפול פסיכולוגי מתמקד בעיבוד רגשי עמוק ודפוסים פנימיים. הדרכת הורים מעשית יותר — אנחנו עובדים על כלים, תגובות, ומבנה היחסים עם הילד. לפעמים שניהם נדרשים, ואני אעזור לכם להבין מה מתאים." },
            { q:"כמה פגישות בדרך כלל נדרשות?", a:"אין תשובה אחת. לחלק מהמשפחות 6 פגישות מספיקות לשינוי משמעותי. אחרים בוחרים בתהליך ארוך יותר. תמיד נעריך ביחד ונחליט." },
            { q:"האם אפשר לעבוד בזום גם מישראל?", a:"כן, בהחלט. פגישות זום זמינות לכולם, בין אם אתם מישראל, ארה״ב, או כל מקום אחר בעולם." },
            { q:"האם עובדים עם קופות חולים?", a:"חלק מהשירותים ניתנים דרך קופות חולים. צרו קשר ונבדוק יחד מה רלוונטי עבורכם." },
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

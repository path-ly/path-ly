"use client";
import Link from "next/link";
import Image from "next/image";
import SiteIcon from "@/components/SiteIcon";

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
                מחיר בש״ח לתושבי ישראל · מחיר בדולר לתושבי ארה״ב
              </p>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", marginTop:"6px" }}>
                פגישת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות
              </p>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--terra-dark)", fontWeight:600, marginTop:"14px" }}>
                החל מ-1 בספטמבר 2026 מחיר שעת הדרכה יעלה ל-₪400 / $130
              </p>
            </div>

            {/* 3 Options */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"20px" }}>

              {/* Option 1: Zoom */}
              <div style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", boxShadow:"var(--shadow-card)", display:"flex", flexDirection:"column", position:"relative", minHeight:"420px" }}>
                <Image src="/service-zoom.webp" alt="פגישת זום" fill style={{ objectFit:"cover", objectPosition:"center top" }} sizes="(max-width:768px) 100vw, 33vw" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.75) 50%, rgba(30,30,30,0.15) 100%)" }} />
                <div style={{ position:"relative", zIndex:1, padding:"32px 28px", marginTop:"auto", display:"flex", flexDirection:"column" }}>
                  <span style={{ display:"inline-block", marginBottom:"10px", alignSelf:"flex-start", background:"var(--terra)", color:"white", padding:"4px 14px", borderRadius:"var(--radius-pill)", fontSize:"12px", fontWeight:700, fontFamily:"var(--font-hebrew)" }}>הכי פופולרי</span>
                  <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color:"#F9F7F2", marginBottom:"8px" }}>פגישת זום</h3>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"rgba(249,247,242,0.85)", lineHeight:1.8, flex:1, marginBottom:"24px" }}>
                    הדרכת הורים אישית בעברית — לישראלים בכל העולם. שעות נוחות להורים עובדים בישראל. גרתי בישראל גם לאחר ה-7.10 ומכירה מקרוב את המציאות המורכבת.
                  </p>
                  <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", background:"var(--terra)", color:"white", padding:"12px 24px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none", transition:"background 200ms ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--terra-dark)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--terra)"; }}>
                    <SiteIcon name="calendar" size={14} /> לקביעת פגישת זום
                  </a>
                </div>
              </div>

              {/* Option 2: In-person */}
              <div style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", boxShadow:"var(--shadow-card)", display:"flex", flexDirection:"column", position:"relative", minHeight:"420px" }}>
                <Image src="/service-clinic.webp" alt="פגישה בקליניקה" fill style={{ objectFit:"cover", objectPosition:"center" }} sizes="(max-width:768px) 100vw, 33vw" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.75) 50%, rgba(30,30,30,0.15) 100%)" }} />
                <div style={{ position:"relative", zIndex:1, padding:"32px 28px", marginTop:"auto", display:"flex", flexDirection:"column" }}>
                  <span style={{ display:"inline-block", marginBottom:"10px", alignSelf:"flex-start", background:"rgba(42,122,110,0.7)", color:"white", padding:"4px 14px", borderRadius:"var(--radius-pill)", fontSize:"12px", fontWeight:700, fontFamily:"var(--font-hebrew)", border:"1px solid rgba(42,122,110,0.4)" }}>פרונטלי</span>
                  <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color:"#F9F7F2", marginBottom:"8px" }}>פגישה בקליניקה</h3>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"rgba(249,247,242,0.85)", lineHeight:1.8, flex:1, marginBottom:"24px" }}>
                    קליניקה פיזית ב-Cedar Park, אוסטין TX. ייעוץ אישי והדרכות הורים פנים אל פנים. לא טיפול ואבחון — הדרכת הורים בלבד.
                  </p>
                  <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", background:"var(--sage)", color:"white", padding:"12px 24px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none", transition:"background 200ms ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--sage-dark)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--sage)"; }}>
                    <SiteIcon name="calendar" size={14} /> לקביעת פגישה פרונטלית
                  </a>
                </div>
              </div>

              {/* Option 3: Workshop */}
              <div style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", boxShadow:"var(--shadow-card)", display:"flex", flexDirection:"column", position:"relative", minHeight:"420px" }}>
                <Image src="/service-training.webp" alt="סדנת הורים" fill style={{ objectFit:"cover", objectPosition:"center top" }} sizes="(max-width:768px) 100vw, 33vw" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.75) 50%, rgba(30,30,30,0.15) 100%)" }} />
                <div style={{ position:"relative", zIndex:1, padding:"32px 28px", marginTop:"auto", display:"flex", flexDirection:"column" }}>
                  <div style={{ position:"absolute", top:"16px", right:"20px", background:"var(--terra)", color:"white", borderRadius:"var(--radius-pill)", padding:"4px 16px", fontFamily:"var(--font-hebrew)", fontSize:"12px", fontWeight:700, zIndex:2 }}>
                    חדש!
                  </div>
                  <span style={{ display:"inline-block", marginBottom:"10px", alignSelf:"flex-start", background:"rgba(196,114,122,0.5)", color:"white", padding:"4px 14px", borderRadius:"var(--radius-pill)", fontSize:"12px", fontWeight:700, fontFamily:"var(--font-hebrew)", border:"1px solid rgba(196,114,122,0.3)" }}>קבוצתי</span>
                  <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color:"#F9F7F2", marginBottom:"8px" }}>סדנת הורים בזום</h3>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"rgba(249,247,242,0.85)", lineHeight:1.8, marginBottom:"16px" }}>
                    סדנה קבוצתית להכרות מעמיקה עם ארגז הכלים ההורי. 12 מפגשים בזום, קבוצה אינטימית של 5–8 זוגות הורים.
                  </p>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"16px" }}>
                    <span style={{ fontFamily:"var(--font-serif)", fontSize:"24px", fontWeight:600, color:"#F9F7F2" }}>₪1,200</span>
                    <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"rgba(249,247,242,0.6)" }}>/</span>
                    <span style={{ fontFamily:"var(--font-serif)", fontSize:"24px", fontWeight:600, color:"#F9F7F2" }}>$400</span>
                    <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"rgba(249,247,242,0.6)" }}>לזוג</span>
                  </div>
                  <div style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"rgba(249,247,242,0.65)", marginBottom:"20px", lineHeight:1.7 }}>
                    12 מפגשים · 5–8 זוגות · בזום · בעברית
                  </div>
                  <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A1%D7%93%D7%A0%D7%AA%20%D7%94%D7%94%D7%95%D7%A8%D7%99%D7%9D" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", background:"var(--terra)", color:"white", padding:"12px 24px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none", transition:"background 200ms ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--terra-dark)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--terra)"; }}>
                    <SiteIcon name="dot" size={14} /> לפרטים והרשמה
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              2. B2B — PROFESSIONAL TRAINING (no pricing)
              ══════════════════════════════════════════════════════ */}
          <div style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", boxShadow:"var(--shadow-float)", position:"relative", minHeight:"400px" }}>
            <Image src="/service-training.webp" alt="הכשרות מקצועיות" fill style={{ objectFit:"cover", objectPosition:"center" }} sizes="100vw" />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(42,122,110,0.92) 0%, rgba(29,91,82,0.95) 100%)" }} />
            <div className="b2b-inner" style={{ position:"relative", zIndex:1, padding:"64px" }}>
            <div className="grid-services-img">
              <div style={{ textAlign:"center" }}><SiteIcon name="building" size={64} /></div>
              <div>
                <span className="tag-parchment" style={{ marginBottom:"18px", display:"inline-block", background:"rgba(249,247,242,0.12)", color:"#E8E0D0" }}>ארגונים ומוסדות</span>
                <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(26px,3vw,38px)", color:"#F9F7F2", marginBottom:"16px" }}>הכשרות מקצועיות</h2>
                <div style={{ width:"36px", height:"2px", background:"var(--terra)", borderRadius:"2px", marginBottom:"20px" }} />
                <p style={{ fontSize:"16px", color:"rgba(249,247,242,0.78)", lineHeight:1.9, marginBottom:"28px", fontFamily:"var(--font-hebrew)" }}>
                  הכשרות מקצועיות והדרכה בפסיכולוגיה חינוכית לפסיכולוגים, עובדים סוציאליים, אנשי טיפול, צוותי חינוך ובתי ספר.
                </p>
                <div className="grid-2col-sm" style={{ marginBottom:"32px" }}>
                  {["הכשרת פסיכולוגים","הדרכת עו״סים","סדנאות לצוותי חינוך","הרצאות לאנשי מקצוע","ליווי מוסדי","פיתוח תכניות"].map(item => (
                    <div key={item} style={{ background:"rgba(249,247,242,0.08)", borderRadius:"10px", padding:"10px 16px", fontSize:"14px", color:"rgba(249,247,242,0.9)", display:"flex", alignItems:"center", gap:"8px", fontFamily:"var(--font-hebrew)", border:"1px solid rgba(249,247,242,0.10)" }}>
                      <SiteIcon name="check" size={14} className="inline-block" />{item}
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
              a:"פגישה בודדת (זום או פרונטלית) עולה ₪354 / $115. סדנה קבוצתית של 12 מפגשים — ₪1,200 / $400 לזוג. פגישת ייעוץ ראשונה (15 דקות) ללא עלות. החל מ-1 בספטמבר 2026 מחיר שעת הדרכה יעלה ל-₪400 / $130.",
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

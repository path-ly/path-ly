"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section style={{ padding:"140px 32px 72px", background:"linear-gradient(150deg, #F5EAE4 0%, #F9F7F2 60%)", textAlign:"center" }}>
        <span className="tag-terra" style={{ marginBottom:"20px", display:"inline-block" }}>בואו נדבר</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,5vw,64px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px", letterSpacing:"-0.02em" }}>
          צרו קשר
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"500px", margin:"0 auto", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          פגישת ייעוץ ראשונה ללא התחייבות. פשוט שיחה — כדי לראות אם יש כימיה ואם אני יכולה לעזור.
        </p>
      </section>

      <section style={{ padding:"80px 32px 100px", background:"var(--paper)" }}>
        <div style={{ maxWidth:"1040px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"64px", alignItems:"start" }}>

          {/* Info */}
          <div>
            <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"26px", color:"var(--charcoal)", marginBottom:"8px" }}>פרטי התקשרות</h2>
            <div className="divider-accent" style={{ marginBottom:"28px" }} />

            {[
              { emoji:"📍", title:"קליניקה",          lines:["כתובת הקליניקה","עיר, ישראל"] },
              { emoji:"📞", title:"טלפון",             lines:["050-0000000","א׳–ה׳, 09:00–18:00"] },
              { emoji:"📧", title:"אימייל",            lines:["email@example.com","מענה תוך יום עסקים"] },
              { emoji:"💻", title:"זום (ארה״ב ובינלאומי)", lines:["לפגישות וידאו בלבד","לפי זמינות"] },
            ].map(({ emoji, title, lines }) => (
              <div key={title} style={{ display:"flex", gap:"14px", marginBottom:"26px", alignItems:"flex-start" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"var(--terra-faint)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0, border:"1px solid rgba(193,127,95,0.15)" }}>
                  {emoji}
                </div>
                <div>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontWeight:700, color:"var(--charcoal)", margin:"0 0 4px", fontSize:"15px" }}>{title}</p>
                  {lines.map(l => <p key={l} style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", margin:"2px 0" }}>{l}</p>)}
                </div>
              </div>
            ))}

            {/* Note */}
            <div style={{ background:"var(--sage)", borderRadius:"var(--radius-card)", padding:"24px 28px", marginTop:"16px" }}>
              <p style={{ fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", color:"#FFFFFF", marginBottom:"8px" }}>⏰ זמינות</p>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", lineHeight:1.82, color:"rgba(255,255,255,0.88)" }}>
                בדרך כלל אני מגיבה תוך 24 שעות בימי עסקים. במצב חירום נפשי — פנו לקו החירום של עמותת ״ער״ן״.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                background:"linear-gradient(135deg, var(--sage-faint), var(--sage-light))",
                borderRadius:"var(--radius-card-lg)", padding:"72px 48px", textAlign:"center",
                border:"1px solid rgba(125,132,113,0.2)", boxShadow:"var(--shadow-float)",
              }}>
                <div style={{ fontSize:"60px", marginBottom:"24px" }}>🌿</div>
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"32px", color:"var(--charcoal)", marginBottom:"16px", fontStyle:"italic", fontWeight:300 }}>
                  תודה! קיבלתי את פנייתכם.
                </h3>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"var(--sage-dark)", lineHeight:1.82 }}>
                  אחזור אליכם תוך יום עסקים לתיאום המשך.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background:"#FFFFFF", borderRadius:"var(--radius-card-lg)", padding:"48px",
                boxShadow:"var(--shadow-card-hover)", border:"1px solid var(--border)",
              }}>
                <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"26px", color:"var(--charcoal)", marginBottom:"32px", fontStyle:"italic", fontWeight:400 }}>
                  טופס פנייה לייעוץ
                </h2>

                <label className="form-label">שם מלא *</label>
                <input className="form-input" type="text" name="name" required value={form.name} onChange={handleChange} placeholder="שם ושם משפחה" />

                <label className="form-label">כתובת אימייל *</label>
                <input className="form-input" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="email@example.com" />

                <label className="form-label">טלפון</label>
                <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="050-0000000" />

                <label className="form-label">סוג הפנייה</label>
                <select className="form-input" name="service" value={form.service} onChange={handleChange} style={{ cursor:"pointer" }}>
                  <option value="">בחרו סוג שירות</option>
                  <option value="clinical">טיפול קליני (ישראל)</option>
                  <option value="parenting">הדרכת הורים</option>
                  <option value="zoom">פגישת זום (בינלאומי)</option>
                  <option value="b2b">ייעוץ ארגוני / B2B</option>
                  <option value="other">אחר</option>
                </select>

                <label className="form-label">ספרו לי קצת</label>
                <textarea className="form-input" name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="כמה משפטים על המצב, גיל הילד, ומה מחפשים..."
                  style={{ resize:"vertical" }} />

                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"12px", color:"var(--charcoal-muted)", marginBottom:"24px", lineHeight:1.7 }}>
                  המידע נשמר בסודיות מוחלטת ומשמש לצורך מענה בלבד.
                </p>

                <button type="submit" className="btn-terra" style={{ width:"100%", justifyContent:"center" }}>
                  שלחו פנייה
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

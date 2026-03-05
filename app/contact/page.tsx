"use client";
import { useState } from "react";
import Image from "next/image";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#25D366"/>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.296-.768.966-.942 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="sec-hero" style={{ background:"linear-gradient(150deg, #F5EAE4 0%, #F9F7F2 60%)", textAlign:"center" }}>
        <span className="tag-terra" style={{ marginBottom:"20px", display:"inline-block" }}>בואו נדבר</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(38px,5vw,64px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px", letterSpacing:"-0.02em" }}>
          צרו קשר
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"500px", margin:"0 auto", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          פגישת ייעוץ ראשונה ללא התחייבות. פשוט שיחה — כדי לראות אם יש כימיה ואם אני יכולה לעזור.
        </p>
      </section>

      <section className="sec-std" style={{ background:"var(--paper)" }}>
        <div className="container-md grid-contact" style={{ margin:"0 auto" }}>

          {/* Info */}
          <div>
            {/* Portrait */}
            <div style={{ borderRadius:"var(--radius-card-lg)", overflow:"hidden", marginBottom:"28px", border:"1px solid var(--border)", boxShadow:"var(--shadow-card)", aspectRatio:"4/3", maxHeight:"260px" }}>
              <Image src="/maya-photo.png" alt="מאיה פלטי" width={400} height={300}
                style={{ objectFit:"cover", objectPosition:"center 20%", width:"100%", height:"100%" }} />
            </div>

            <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"26px", color:"var(--charcoal)", marginBottom:"8px" }}>פרטי התקשרות</h2>
            <div className="divider-accent" style={{ marginBottom:"28px" }} />

            {/* Address */}
            <div style={{ display:"flex", gap:"14px", marginBottom:"26px", alignItems:"flex-start" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"var(--terra-faint)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0, border:"1px solid rgba(193,127,95,0.15)" }}>
                📍
              </div>
              <div>
                <p style={{ fontFamily:"var(--font-hebrew)", fontWeight:700, color:"var(--charcoal)", margin:"0 0 4px", fontSize:"15px" }}>קליניקה</p>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", margin:"2px 0" }}>1200 Del Roy Dr, Cedar Park, TX</p>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", margin:"2px 0" }}>Austin, Texas, USA</p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display:"flex", gap:"14px", marginBottom:"26px", alignItems:"flex-start" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"var(--terra-faint)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0, border:"1px solid rgba(193,127,95,0.15)" }}>
                📞
              </div>
              <div>
                <p style={{ fontFamily:"var(--font-hebrew)", fontWeight:700, color:"var(--charcoal)", margin:"0 0 6px", fontSize:"15px" }}>טלפון</p>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"4px" }}>
                  <a href="tel:+18624050179" style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", textDecoration:"none", direction:"ltr", display:"inline-block" }}>
                    862-405-0179
                  </a>
                  <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"12px", color:"var(--charcoal-muted)", opacity:0.7 }}>(USA)</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                  <a href="tel:+972523930681" style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", textDecoration:"none", direction:"ltr", display:"inline-block" }}>
                    052-393-0681
                  </a>
                  <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"12px", color:"var(--charcoal-muted)", opacity:0.7 }}>(ישראל)</span>
                  <a href="https://wa.me/972523930681" target="_blank" rel="noopener noreferrer"
                    title="שלחו הודעת WhatsApp"
                    style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"#E8F8EE", border:"1px solid rgba(37,211,102,0.25)", transition:"all 180ms ease", flexShrink:0 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#D0F0DC"; (e.currentTarget as HTMLElement).style.transform="scale(1.1)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#E8F8EE"; (e.currentTarget as HTMLElement).style.transform="scale(1)"; }}>
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ display:"flex", gap:"14px", marginBottom:"26px", alignItems:"flex-start" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"var(--terra-faint)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0, border:"1px solid rgba(193,127,95,0.15)" }}>
                📧
              </div>
              <div>
                <p style={{ fontFamily:"var(--font-hebrew)", fontWeight:700, color:"var(--charcoal)", margin:"0 0 4px", fontSize:"15px" }}>אימייל</p>
                <a href="mailto:imayatadir@gmail.com" style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--sage-dark)", textDecoration:"none", borderBottom:"1px dotted var(--sage)" }}>
                  imayatadir@gmail.com
                </a>
                <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", margin:"4px 0 0" }}>מענה תוך יום עסקים</p>
              </div>
            </div>

            {/* Calendly */}
            <div style={{ display:"flex", gap:"14px", marginBottom:"26px", alignItems:"flex-start" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"var(--sage-faint)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0, border:"1px solid rgba(125,132,113,0.15)" }}>
                📅
              </div>
              <div>
                <p style={{ fontFamily:"var(--font-hebrew)", fontWeight:700, color:"var(--charcoal)", margin:"0 0 8px", fontSize:"15px" }}>קביעת פגישה</p>
                <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer"
                  style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"var(--sage)", color:"white", padding:"9px 18px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"13px", textDecoration:"none", transition:"all 200ms ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--sage-dark)"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--sage)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                  📅 לקביעת פגישה ב-Calendly
                </a>
              </div>
            </div>

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
                  <option value="parenting">הדרכת הורים</option>
                  <option value="zoom">פגישת זום (ישראל / עולם)</option>
                  <option value="clinic">קליניקה פרונטלית (Cedar Park)</option>
                  <option value="org">הכשרה ארגונית / צוות חינוך</option>
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


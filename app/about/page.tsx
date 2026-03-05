import Image from "next/image";
import Link from "next/link";

const SECTIONS = [
  {
    id: "background",
    label: "רקע מקצועי וניסיון מעשי",
    emoji: "🎓",
    content: null, // TODO: להוסיף תוכן
  },
  {
    id: "specialties",
    label: "תחומי התמחות",
    emoji: "🔍",
    content: null, // TODO: להוסיף תוכן
  },
  {
    id: "other",
    label: "עיסוקים נוספים",
    emoji: "✍️",
    content: null, // TODO: להוסיף תוכן
  },
  {
    id: "personal",
    label: "בנימה אישית",
    emoji: "🌿",
    content: null, // TODO: להוסיף תוכן
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        padding: "120px 32px 80px",
        background: "linear-gradient(150deg, #F5EAE4 0%, #F9F7F2 60%)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Photo */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "var(--radius-card-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-float)",
              border: "1px solid var(--border)",
              aspectRatio: "3/4",
              maxHeight: "560px",
            }}>
              <Image
                src="/maya-photo.png"
                alt="מאיה פלטי"
                width={480} height={640}
                style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
                priority
              />
            </div>
            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: "24px", right: "24px",
              background: "rgba(249,247,242,0.95)", backdropFilter: "blur(10px)",
              borderRadius: "16px", padding: "14px 20px",
              border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 600, color: "var(--charcoal)", margin: 0 }}>מאיה פלטי · Maya Palty</p>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--terra)", margin: "3px 0 0", fontWeight: 500 }}>פסיכולוגית חינוכית מומחית · PATH·LY</p>
            </div>
          </div>

          {/* Intro text */}
          <div>
            <span className="tag-sage" style={{ marginBottom: "20px", display: "inline-block" }}>🌿 &nbsp;עוד עליי</span>
            <h1 style={{
              fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 300, fontStyle: "italic", color: "var(--charcoal)",
              margin: "0 0 6px", lineHeight: 1.2,
            }}>
              מאיה פלטי
            </h1>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 300, color: "var(--terra)", margin: "0 0 24px", letterSpacing: "0.01em" }}>
              Maya Palty
            </p>
            <div className="divider-accent" style={{ marginBottom: "28px" }} />

            {/* Placeholder intro — to be filled */}
            <div style={{
              background: "var(--sage-faint)", borderRadius: "var(--radius-card)",
              padding: "28px 32px", border: "1px dashed rgba(125,132,113,0.4)",
              marginBottom: "32px",
            }}>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--sage-dark)", lineHeight: 1.9, margin: 0 }}>
                ✏️ <em>תוכן פסקת ההיכרות יתווסף בקרוב...</em>
              </p>
            </div>

            {/* Quick stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {[
                { num: "20+", label: "שנות ניסיון" },
                { num: "4–14", label: "גיל הילדים", ltr: true },
                { num: "2", label: "יבשות · ישראל & ארה״ב" },
                { num: "10", label: "כלים בארגז" },
              ].map(({ num, label, ltr }) => (
                <div key={label} style={{
                  background: "white", borderRadius: "14px", padding: "18px",
                  border: "1px solid var(--border)", textAlign: "center",
                  boxShadow: "var(--shadow-card)",
                }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 600, color: "var(--terra)", lineHeight: 1, direction: ltr ? "ltr" : undefined }}>{num}</div>
                  <div style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--charcoal-muted)", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" className="btn-rose">
                📅 לקביעת פגישה
              </a>
              <Link href="/model" className="btn-outline">ארגז הכלים ←</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section style={{ padding: "80px 32px 100px", background: "var(--paper)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {SECTIONS.map(({ id, label, emoji, content }) => (
              <div key={id} style={{
                background: "white", borderRadius: "var(--radius-card-lg)",
                border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
                overflow: "hidden",
              }}>
                <div style={{
                  padding: "24px 32px",
                  borderBottom: content ? "1px solid var(--border)" : "none",
                  display: "flex", alignItems: "center", gap: "14px",
                }}>
                  <span style={{ fontSize: "24px" }}>{emoji}</span>
                  <h2 style={{
                    fontFamily: "var(--font-serif)", fontSize: "22px",
                    fontWeight: 600, color: "var(--charcoal)", margin: 0,
                  }}>{label}</h2>
                </div>

                <div style={{ padding: "28px 32px" }}>
                  {content ? (
                    <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "16px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: 0 }}>
                      {content}
                    </p>
                  ) : (
                    <div style={{
                      background: "var(--linen)", borderRadius: "10px",
                      padding: "20px 24px", border: "1px dashed rgba(125,132,113,0.3)",
                    }}>
                      <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-muted)", margin: 0, fontStyle: "italic" }}>
                        ✏️ תוכן יתווסף בקרוב...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 32px", background: "var(--sage)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,38px)", color: "#FFFFFF", marginBottom: "16px", fontStyle: "italic", fontWeight: 300 }}>
          רוצים להכיר אישית?
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(249,247,242,0.82)", marginBottom: "32px", fontFamily: "var(--font-hebrew)" }}>
          שיחת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות.
        </p>
        <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" className="btn-terra" style={{ display: "inline-block" }}>
          📅 לקביעת פגישה
        </a>
      </section>
    </>
  );
}

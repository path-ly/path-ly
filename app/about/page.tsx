import Image from "next/image";
import Link from "next/link";
import SiteIcon from "@/components/SiteIcon";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="sec-hero" style={{
        background: "linear-gradient(150deg, #F8ECEE 0%, #F9F7F2 60%)",
      }}>
        <div className="grid-hero" style={{ maxWidth: "1100px", margin: "0 auto", alignItems: "start" }}>

          {/* Photo (right column) */}
          <div className="mobile-first" style={{ position: "relative" }}>
            <div style={{
              borderRadius: "var(--radius-card-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-float)",
              border: "1px solid var(--border)",
              aspectRatio: "3/4",
              maxHeight: "560px",
            }}>
              <Image
                src="/maya-photo.webp"
                alt="מאיה פלטי — פסיכולוגית חינוכית מומחית ומדריכת הורים"
                width={480} height={640}
                style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
                priority
              />
            </div>
            <div style={{
              position: "absolute", bottom: "24px", right: "24px",
              background: "rgba(249,247,242,0.95)", backdropFilter: "blur(10px)",
              borderRadius: "16px", padding: "14px 20px",
              border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 600, color: "var(--charcoal)", margin: 0 }}>מאיה פלטי · Maya Palty</p>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--terra)", margin: "3px 0 0", fontWeight: 500 }}>פסיכולוגית חינוכית מומחית־מדריכה, מדריכת הורים · PATH·LY</p>
            </div>
          </div>

          {/* Name + Video + Bio (left column) */}
          <div>
            <span className="tag-sage" style={{ marginBottom: "16px", display: "inline-flex", alignItems: "center", gap: "6px" }}><SiteIcon name="flower" size={14} /> עוד עליי</span>
            <h1 style={{
              fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 300, fontStyle: "italic", color: "var(--charcoal)",
              margin: "0 0 4px", lineHeight: 1.2,
            }}>
              מאיה פלטי
            </h1>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,2vw,22px)", fontWeight: 300, color: "var(--terra)", margin: "0 0 20px", letterSpacing: "0.01em" }}>
              פסיכולוגית חינוכית מומחית ומדריכת הורים
            </p>
            <div className="divider-accent" style={{ marginBottom: "20px" }} />

            {/* Video */}
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid var(--border)", background: "#000", marginBottom: "20px" }}>
              <video
                controls
                playsInline
                preload="metadata"
                style={{ width: "100%", display: "block", maxHeight: "400px", objectFit: "contain" }}
              >
                <source src="/maya-intro.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--charcoal-muted)", marginBottom: "24px", textAlign: "center" }}>
              היכרות קצרה · 1 דקה
            </p>

            {/* Bio paragraph */}
            <div style={{
              background: "var(--sage-faint)", borderRadius: "var(--radius-card)",
              padding: "22px 24px", border: "1px solid rgba(42,122,110,0.2)",
              marginBottom: "20px",
            }}>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: 0 }}>
                אני פסיכולוגית חינוכית מומחית־מדריכה ומדריכת הורים, עם כ-20 שנות ניסיון בעבודה עם ילדים, הורים ואנשי חינוך. לאורך השנים ליוויתי משפחות רבות בהתמודדות עם קשיי ויסות והתנהגות, הפרעות קשב ולקויות למידה, קשיים רגשיים וחברתיים ואתגרי הורות מורכבים. מתוך הניסיון המקצועי והאישי פיתחתי את מודל{" "}
                <Link href="/model" style={{ color: "var(--terra-dark)", fontWeight: 600, textDecoration: "none", borderBottom: "1.5px solid var(--terra)" }}>
                  ״ארגז הכלים ההורי״
                </Link>
                {" "}– גישה פרקטית שמנגישה ידע פסיכולוגי להורים ומסייעת להם ליצור שינוי אמיתי בקשר עם ילדיהם.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid-2col-sm" style={{ marginBottom: "20px" }}>
              {[
                { num: "20+", label: "שנות ניסיון" },
                { num: "3–15", label: "גיל הילדים", ltr: true },
                { num: "2", label: "יבשות · ישראל & ארה״ב" },
                { num: "10", label: "כלים בארגז" },
              ].map(({ num, label, ltr }) => (
                <div key={label} style={{
                  background: "white", borderRadius: "14px", padding: "16px",
                  border: "1px solid var(--border)", textAlign: "center",
                  boxShadow: "var(--shadow-card)",
                }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 600, color: "var(--terra)", lineHeight: 1, direction: ltr ? "ltr" : undefined }}>{num}</div>
                  <div style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--charcoal-muted)", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" className="btn-rose">
                <><SiteIcon name="calendar" size={14} /> לקביעת פגישה</>
              </a>
              <Link href="/model" className="btn-outline">ארגז הכלים ←</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAIL SECTIONS ──────────────────────────────────── */}
      <section className="sec-std reveal" style={{ background: "var(--paper)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>

          {/* ── 1. Background ─────────────────────────────────── */}
          <div style={{
            background: "white", borderRadius: "var(--radius-card-lg)",
            border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}>
            <div className="about-detail-header" style={{
              padding: "24px 32px",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "14px",
            }}>
              <SiteIcon name="star" size={24} />
              <h2 style={{
                fontFamily: "var(--font-serif)", fontSize: "22px",
                fontWeight: 600, color: "var(--charcoal)", margin: 0,
              }}>רקע מקצועי וניסיון מעשי</h2>
            </div>
            <div className="about-detail-body" style={{ padding: "28px 32px" }}>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: "0 0 20px" }}>
                פסיכולוגית חינוכית מומחית־מדריכה, עם ניסיון רב שנים בשירותים פסיכולוגיים חינוכיים, בהדרכת הורים ובהדרכת פסיכולוגים. במסגרת עבודתי ליוויתי בתי ספר, גנים ורשויות מקומיות, לצד עבודה פרטנית עם ילדים והורים במצבי שגרה וחירום.
              </p>

              {/* Roles */}
              <div style={{ background: "var(--linen)", borderRadius: "14px", padding: "22px 26px", marginBottom: "20px" }}>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "13px", fontWeight: 700, color: "var(--charcoal)", marginBottom: "12px" }}>בין התפקידים שמילאתי:</p>
                {[
                  "פסיכולוגית בכירה ומדריכת הורים בשירותים פסיכולוגים שונים ברחבי הארץ ובמיוחד בדרום ובעוטף עזה",
                  "ניהול והטמעה של ״מלקות ללמידה״ בשדרות",
                  "פסיכולוגית מערכתית של החינוך החברתי ומערכות הגיל הרך בחלק מקיבוצי העוטף",
                  "רכזת עירונית לתחום חינוך מיוחד וועדות זכאות ואפיון מטעם השירות הפסיכולוגי באילת",
                  "נציגת ועדות התאמה מחוזיות להתאמות בבגרויות",
                ].map(role => (
                  <div key={role} style={{ display: "flex", gap: "10px", marginBottom: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--sage)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>•</span>
                    <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.75, margin: 0 }}>
                      {role}
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: "0 0 20px" }}>
                בנוסף הנחיתי קבוצות הורים ואנשי חינוך, בין היתר במרכז מטיב״ה (מרכז לטיפול בבעיות התנהגות בילדים), במרכז דואט של אוניברסיטת בן גוריון ובהכשרות חוסן לאנשי חינוך בעוטף עזה.
              </p>

              <div style={{ background: "var(--terra-faint)", borderRadius: "12px", padding: "18px 22px", border: "1px solid rgba(196,114,122,0.2)" }}>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--terra-dark)", lineHeight: 1.8, margin: 0 }}>
                   כיום אני גם מרצה במדרשה לפסיכולוגיה תחת מכללת לוינסקי בקורס ״פסיכו-דיאגנוסטיקה של הילד והמתבגר״ לפסיכולוגים בהסבה מקצועית.
                </p>
              </div>
            </div>
          </div>

          {/* ── 2. Specialties ────────────────────────────────── */}
          <div style={{
            background: "white", borderRadius: "var(--radius-card-lg)",
            border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}>
            <div className="about-detail-header" style={{
              padding: "24px 32px",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "14px",
            }}>
              <SiteIcon name="search" size={24} />
              <h2 style={{
                fontFamily: "var(--font-serif)", fontSize: "22px",
                fontWeight: 600, color: "var(--charcoal)", margin: 0,
              }}>תחומי התמחות</h2>
            </div>
            <div className="about-detail-body" style={{ padding: "28px 32px" }}>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: "0 0 20px" }}>
                עבודתי מתמקדת בתחומים המרכזיים הבאים:
              </p>

              <div className="grid-2col-sm" style={{ marginBottom: "24px" }}>
                {[
                  { icon: "heart", text: "קשיי ויסות רגשי והתנהגות", sub: "קשיים בקבלת גבולות וסמכות, התמודדות עם תסכול ודחיית סיפוקים וצורך בשליטה" },
                  { icon: "brain", text: "הפרעות קשב ולקויות למידה", sub: "עיכוב שפתי והתפתחותי, דיסלקציה, דיסגרפיה, ADD ו-ADHD" },
                  { icon: "shield", text: "התמודדות עם טראומה, חרדה וחיזוק חוסן", sub: null },
                  { icon: "clipboard", text: "אבחון ובניית התערבויות מותאמות במערכות החינוך", sub: null },
                ].map(({ icon, text, sub }) => (
                  <div key={text} style={{
                    background: "var(--sage-faint)", borderRadius: "14px", padding: "18px 20px",
                    border: "1px solid rgba(42,122,110,0.15)", display: "flex", gap: "10px", alignItems: "flex-start",
                  }}>
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                        {text}
                      </p>
                      {sub && (
                        <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "12.5px", color: "var(--charcoal-muted)", lineHeight: 1.6, margin: "4px 0 0" }}>
                          {sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: 0 }}>
                בנוסף אני עובדת עם משפחות סביב קשיים חברתיים, חרדה, עבודה עם ילדים על הרצף האוטיסטי (בתפקוד גבוה בלבד), והדרכת הורים בגיל הרך (יצירת הרגלים וגבולות, הקניית מיומנויות יומיום והתארגנות, גמילות ופיתוח יכולת להבעה רגשית מותאמת).
              </p>
            </div>
          </div>

          {/* ── 3. Additional Activities ──────────────────────── */}
          <div style={{
            background: "white", borderRadius: "var(--radius-card-lg)",
            border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}>
            <div className="about-detail-header" style={{
              padding: "24px 32px",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "14px",
            }}>
              <SiteIcon name="pencil" size={24} />
              <h2 style={{
                fontFamily: "var(--font-serif)", fontSize: "22px",
                fontWeight: 600, color: "var(--charcoal)", margin: 0,
              }}>עיסוקים נוספים</h2>
            </div>
            <div className="about-detail-body" style={{ padding: "28px 32px" }}>
              {[
                { text: "מפתחת מודל ״ארגז הכלים ההורי״ – גישה פרקטית וחומלת להדרכת הורים קצרת מועד", accent: true },
                { text: "מדריכת פסיכולוגים מתמחים לקראת מבחן מומחיות", accent: false },
                { text: "מנחת הכשרות וקורסים לפסיכולוגים בתחומי פסיכו-דיאגנוסטיקה והדרכת הורים", accent: false },
                { text: "מרצה בתחומי הורות, פסיכולוגיה חיובית והתפתחות ילדים", accent: false },
              ].map(({ text, accent }) => (
                <div key={text} style={{
                  display: "flex", gap: "12px", marginBottom: "14px", alignItems: "flex-start",
                  ...(accent ? {
                    background: "var(--terra-faint)", borderRadius: "12px", padding: "16px 18px",
                    border: "1px solid rgba(196,114,122,0.2)", marginBottom: "18px",
                  } : {}),
                }}>
                  <span style={{ color: accent ? "var(--terra)" : "var(--sage)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>•</span>
                  <p style={{
                    fontFamily: "var(--font-hebrew)", fontSize: accent ? "15px" : "14px",
                    color: accent ? "var(--terra-dark)" : "var(--charcoal-soft)",
                    fontWeight: accent ? 600 : 400,
                    lineHeight: 1.75, margin: 0,
                  }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4. Personal Note ──────────────────────────────── */}
          <div style={{
            background: "white", borderRadius: "var(--radius-card-lg)",
            border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}>
            <div className="about-detail-header" style={{
              padding: "24px 32px",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "14px",
            }}>
              <SiteIcon name="flower" size={24} />
              <h2 style={{
                fontFamily: "var(--font-serif)", fontSize: "22px",
                fontWeight: 600, color: "var(--charcoal)", margin: 0,
              }}>בנימה אישית</h2>
            </div>
            <div className="about-detail-body" style={{ padding: "28px 32px" }}>
              <p style={{
                fontFamily: "var(--font-serif)", fontSize: "22px", fontStyle: "italic",
                fontWeight: 400, color: "var(--terra-dark)", lineHeight: 1.5,
                margin: "0 0 20px", borderRight: "3px solid var(--terra)", paddingRight: "18px",
              }}>
                לפני שאני פסיכולוגית – אני אמא.
              </p>

              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: "0 0 20px" }}>
                רבים מהעקרונות שמופיעים ב״ארגז הכלים ההורי״ נולדו מתוך החיים עצמם: הורות לשתי בנות, היותנו משפחת אומנה במשך שנתיים וחצי, ועבודה מקצועית עם משפחות וקהילות שחוו מצבי משבר וטראומה.
              </p>

              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9, margin: "0 0 20px" }}>
                החוויות האלו חיזקו בי אמונה פשוטה: הורים רוצים להיות מיטיבים לילדיהם – הם פשוט זקוקים לכלים ברורים, פרקטיים וחומלים.
              </p>

              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-muted)", lineHeight: 1.85, margin: "0 0 20px" }}>
                להיות הורה זה אתגר יומיומי מורכב מאוד ולרב מלווה בתחושות קשות של אשמה, פספוס, בלבול או בושה, אבל בכלים פשוטים ניתן לבסס הורות מיטיבה שמדייקת את עצמה ומתפתחת עם הילד וזה התיקון הכי משמעותי שנעשה עבור הנחת שלנו ועבור עתיד ילדנו.
              </p>

              <div style={{
                background: "linear-gradient(135deg, var(--sage-faint) 0%, var(--terra-faint) 100%)",
                borderRadius: "var(--radius-card)", padding: "24px 28px",
                border: "1px solid var(--border)",
              }}>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal)", lineHeight: 1.9, margin: 0, fontWeight: 500 }}>
                  ״ארגז הכלים ההורי״ נולד מתוך הרצון להנגיש את הידע הפסיכולוגי להורים בצורה פשוטה וישימה, ולסייע להם לבנות קשר יציב, בטוח ומיטיב עם ילדיהם.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────── */}
      <section className="sec-std" style={{ background: "linear-gradient(180deg, var(--paper) 0%, var(--linen) 100%)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SiteIcon name="star" size={28} />
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 600, color: "var(--charcoal)", margin: "12px 0 8px" }}>
              ציר זמן מקצועי
            </h2>
            <div className="divider-accent-center" />
          </div>

          <div style={{ position: "relative", paddingRight: "40px" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", right: "14px", top: "8px", bottom: "8px", width: "2px", background: "linear-gradient(180deg, var(--sage) 0%, var(--terra) 100%)", borderRadius: "2px", opacity: 0.25 }} />

            {[
              {
                year: "2001–2004",
                title: "תואר ראשון במדעי ההתנהגות",
                sub: "אוניברסיטת בן גוריון בנגב · בהצטיינות",
                color: "sage" as const,
              },
              {
                year: "2004–2007",
                title: "תואר שני בנוירו-פסיכולוגיה שיקומית",
                sub: "אוניברסיטת בן גוריון בנגב",
                color: "sage" as const,
              },
              {
                year: "2007–2012",
                title: "פסיכולוגית חינוכית בשירות הציבורי",
                sub: "שער הנגב, באר שבע ורמת גן (התמחות בעבודה עם המגזר הדתי, עם מחוננים ובטיפול בבעיות התנהגות)",
                color: "terra" as const,
              },
              {
                year: "2013–2020",
                title: "פסיכולוגית חינוכית מומחית בהסמכה להדרכה",
                sub: "קריית ביאליק ושדרות (כולל ריכוז עירוני של תחומי הדיאגנוסטיקה וההכשרות הרפלקטיביות לאנשי חינוך, הנחיית קבוצות הורים ותפקיד קבוע כנציגה בוועדות מחוזיות של משרד החינוך)",
                color: "terra" as const,
              },
              {
                year: "2020–2024",
                title: "עבודה עצמאית",
                sub: "הדרכת מתמחים בפסיכולוגיה חינוכית, מרצה בקורס דיאגנוסטיקה ארצי לפסיכולוגים (מכללת לוינסקי והמדרשה לפסיכולוגיה), ריכוז תחום חנ״מ וועדות זכאות ואפיון עירוני, שירות פסיכולוגי מערכתי לגיל הרך ולחינוך חברתי בקיבוצי העוטף, טיפול קצר מועד לבני נוער, הורים ומורים במעגלי הפגיעות של השבעה באוקטובר ועוד",
                color: "sage" as const,
              },
              {
                year: "2024–2025",
                title: "מסע משפחתי סביב העולם",
                sub: "המשך עבודה ומתן שירות פסיכולוגי באונליין",
                color: "sage" as const,
              },
              {
                year: "2026",
                title: "אוסטין, טקסס — PATH-LY",
                sub: "קליניקה פרטית · זום להורים ישראלים בכל העולם · הרצאות באקדמיה",
                color: "terra" as const,
                current: true,
              },
            ].map(({ year, title, sub, color, current }, i) => (
              <div key={i} style={{ position: "relative", marginBottom: i === 8 ? "0" : "28px", paddingRight: "36px" }}>
                {/* Dot on line */}
                <div style={{
                  position: "absolute", right: "6px", top: "18px",
                  width: current ? "18px" : "14px", height: current ? "18px" : "14px",
                  borderRadius: "50%",
                  background: current ? (color === "terra" ? "var(--terra)" : "var(--sage)") : "var(--paper)",
                  border: `2.5px solid ${color === "terra" ? "var(--terra)" : "var(--sage)"}`,
                  zIndex: 2,
                  boxShadow: current ? `0 0 0 4px ${color === "terra" ? "rgba(196,114,122,0.2)" : "rgba(42,122,110,0.2)"}` : "none",
                }} />

                {/* Card */}
                <div style={{
                  background: "white",
                  borderRadius: "var(--radius-card)",
                  padding: "18px 22px",
                  border: current ? `1.5px solid ${color === "terra" ? "var(--terra)" : "var(--sage)"}` : "1px solid var(--border)",
                  boxShadow: current ? "var(--shadow-card-hover)" : "var(--shadow-card)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-hebrew)", fontSize: "12px", fontWeight: 700,
                    color: color === "terra" ? "var(--terra-dark)" : "var(--sage-dark)",
                    letterSpacing: "0.03em",
                    background: color === "terra" ? "var(--terra-faint)" : "var(--sage-faint)",
                    padding: "3px 10px", borderRadius: "var(--radius-pill)",
                    display: "inline-block", marginBottom: "8px",
                    direction: "ltr",
                  }}>
                    {year}
                  </span>
                  <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", fontWeight: 600, color: "var(--charcoal)", margin: "0 0 4px", lineHeight: 1.4 }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "13px", color: "var(--charcoal-muted)", margin: 0, lineHeight: 1.7 }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-md reveal-scale" style={{ background: "var(--sage)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,38px)", color: "#FFFFFF", marginBottom: "16px", fontStyle: "italic", fontWeight: 300 }}>
          רוצים להכיר אישית?
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(249,247,242,0.82)", marginBottom: "32px", fontFamily: "var(--font-hebrew)" }}>
          שיחת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות.
        </p>
        <a href="https://calendly.com/maya_palty/50min" target="_blank" rel="noopener noreferrer" className="btn-terra" style={{ display: "inline-block" }}>
          <><SiteIcon name="calendar" size={14} /> לקביעת פגישה</>
        </a>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר path-ly.com — מאיה פלטי, הדרכת הורים.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="sec-hero" style={{ background: "linear-gradient(150deg, #F0EDE6 0%, #F9F7F2 60%)", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, fontStyle: "italic", color: "var(--charcoal)", margin: "0 0 12px" }}>
          מדיניות פרטיות
        </h1>
        <p style={{ fontSize: "15px", color: "var(--charcoal-muted)", fontFamily: "var(--font-hebrew)" }}>
          עדכון אחרון: אפריל 2026
        </p>
      </section>

      <section className="sec-std" style={{ background: "var(--paper)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{
            background: "white", borderRadius: "var(--radius-card-lg)",
            border: "1px solid var(--border)", boxShadow: "var(--shadow-card)",
            padding: "48px 44px",
            display: "flex", flexDirection: "column", gap: "36px",
          }}>

            {/* Intro */}
            <div>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.9 }}>
                אתר זה (<span dir="ltr" style={{ display: "inline" }}>www.path-ly.com</span>) מופעל על ידי מאיה פלטי, פסיכולוגית חינוכית מומחית-מדריכה. הפרטיות שלכם חשובה לי. מדיניות זו מסבירה אילו פרטים נאספים באתר, כיצד הם משמשים ומהן זכויותיכם.
              </p>
            </div>

            {/* 1. Information collected */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                1. מידע שנאסף באתר
              </h2>
              <div style={{ background: "var(--sage-faint)", borderRadius: "14px", padding: "22px 26px", border: "1px solid rgba(42,122,110,0.15)" }}>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: "0 0 12px" }}>
                  <strong>טופס יצירת קשר</strong> — כאשר אתם שולחים פנייה דרך טופס יצירת הקשר, נאספים הפרטים שמילאתם: שם, כתובת אימייל, טלפון (אופציונלי), סוג שירות ותוכן ההודעה. הטופס מעובד דרך שירות Formspree.
                </p>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: "0 0 12px" }}>
                  <strong>נתוני שרת בסיסיים</strong> — האתר מאוחסן בשירות Vercel, אשר אוסף באופן אוטומטי נתונים טכניים מינימליים (כגון כתובת IP, סוג דפדפן ומערכת הפעלה) לצורך תפעול ואבטחה בלבד.
                </p>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: 0 }}>
                  <strong>האתר אינו משתמש בכלי מעקב או ניתוח</strong> — אין Google Analytics, אין פיקסל של פייסבוק ואין כלי מעקב אחרים.
                </p>
              </div>
            </div>

            {/* 2. How info is used */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                2. כיצד המידע משמש
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
                המידע שנשלח דרך טופס יצירת הקשר משמש אך ורק לצורך מענה לפנייתכם ותיאום שיחה או פגישה. המידע לא נמכר, לא משותף ולא מועבר לצדדים שלישיים, למעט השירותים הטכניים הנדרשים להפעלת האתר (Formspree, Vercel).
              </p>
            </div>

            {/* 3. Cookies */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                3. עוגיות (Cookies)
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
                האתר עצמו אינו מציב עוגיות מעקב. ייתכן ששירותי צד שלישי (Vercel, Formspree) יציבו עוגיות טכניות הכרחיות לתפעול תקין של האתר. ניתן לנהל את העוגיות דרך הגדרות הדפדפן שלכם.
              </p>
            </div>

            {/* 4. External links */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                4. קישורים חיצוניים
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
                האתר כולל קישורים לשירותים חיצוניים כגון WhatsApp, Calendly ו-YouTube. שירותים אלה פועלים תחת מדיניות הפרטיות שלהם, ואני ממליצה לעיין בהן. אין לי שליטה על המידע שנאסף על ידם.
              </p>
            </div>

            {/* 5. Clinical data */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                5. מידע קליני
              </h2>
              <div style={{ background: "var(--terra-faint)", borderRadius: "14px", padding: "22px 26px", border: "1px solid rgba(196,114,122,0.15)" }}>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: 0 }}>
                  מדיניות פרטיות זו מתייחסת לאתר בלבד. מידע קליני שנאסף במסגרת תהליך הדרכה או ייעוץ מקצועי כפוף להצהרת פרטיות נפרדת שתימסר לכם בתחילת התהליך הטיפולי, בהתאם לכללי האתיקה המקצועית ולדין החל.
                </p>
              </div>
            </div>

            {/* 6. Data security */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                6. אבטחת מידע
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
                האתר מאובטח באמצעות חיבור HTTPS מוצפן. אני נוקטת באמצעים סבירים להגנה על המידע שנשלח אליי, אך אין אפשרות להבטיח אבטחה מוחלטת של העברת מידע באינטרנט.
              </p>
            </div>

            {/* 7. Rights */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                7. הזכויות שלכם
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
                אתם רשאים לבקש לעיין במידע שנאסף עליכם, לתקנו או למחוק אותו. לכל בקשה, אנא פנו אליי ישירות באימייל:
                {" "}<a href="mailto:imayatadir@gmail.com" style={{ color: "var(--sage-dark)", fontWeight: 600, textDecoration: "none", borderBottom: "1px dotted var(--sage)" }}>imayatadir@gmail.com</a>
              </p>
            </div>

            {/* 8. Changes */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                8. שינויים במדיניות
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
                מדיניות זו עשויה להתעדכן מעת לעת. השינויים ייכנסו לתוקף עם פרסומם באתר. מומלץ לבדוק דף זה מדי פעם.
              </p>
            </div>

            {/* Contact */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "28px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "var(--charcoal)", marginBottom: "14px" }}>
                יצירת קשר
              </h2>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: "0 0 6px" }}>
                לשאלות בנוגע למדיניות הפרטיות:
              </p>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--charcoal-soft)", lineHeight: 1.85, margin: 0 }}>
                מאיה פלטי · <a href="mailto:imayatadir@gmail.com" style={{ color: "var(--sage-dark)", fontWeight: 600, textDecoration: "none", borderBottom: "1px dotted var(--sage)" }}>imayatadir@gmail.com</a>
              </p>
            </div>

          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/" style={{ fontFamily: "var(--font-hebrew)", fontSize: "14px", color: "var(--sage-dark)", fontWeight: 600, textDecoration: "none" }}>
              ← חזרה לדף הבית
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

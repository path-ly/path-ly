"use client";
import { useState, useMemo } from "react";

type Category = "all" | "professional" | "inspirational";
type ContentType = "song" | "poem" | "article" | "book" | "research";

interface LibraryItem {
  id: number;
  type: ContentType;
  category: "professional" | "inspirational";
  title: string;
  creator: string;
  tag: string;
  emoji: string;
  excerpt: string;
  accentColor: "sage" | "terra";
  featured?: boolean;
  isMine?: boolean;
}

const ITEMS: LibraryItem[] = [
  // ── Maya's own poems ──────────────────────────────────────────────────────
  {
    id:1, type:"poem", category:"inspirational",
    title:"סיזיפית", creator:"מאיה פלטי",
    tag:"הורות אמיתית", emoji:"🌅",
    excerpt:"ממחר בבוקר אני אהיה אמא טובה, אעטוף אותם כל היום בביטוי גאווה ואהבה... שיר על המחזוריות, ההבטחות, והחמלה שאנחנו כל כך זקוקות לה.",
    accentColor:"terra", featured:true, isMine:true,
  },
  {
    id:2, type:"poem", category:"inspirational",
    title:"יום אחד היא התביישה", creator:"מאיה פלטי",
    tag:"פגיעות", emoji:"🕯️",
    excerpt:"יום אחד היא התביישה. והגדולה אמרה: אמא אל תהיה עם עצמך קשה... שיר על האם שנעלמת מעצמה, ועל הילדים שמחכים שתחזור.",
    accentColor:"sage", isMine:true,
  },
  {
    id:3, type:"poem", category:"inspirational",
    title:"העיקר הכוונה?", creator:"מאיה פלטי",
    tag:"ילדות ואמהות", emoji:"🌿",
    excerpt:"פעם, לא כל כך מזמן, כשהייתי קטנה, את היית אלוהים ואני המאמינה... שיר על הבת שנהיית אמא, ועל מה שנשאר בדרך.",
    accentColor:"terra", isMine:true,
  },
  {
    id:4, type:"poem", category:"inspirational",
    title:"הגורו של ארוחות הערב", creator:"מאיה פלטי",
    tag:"הומור ואמת", emoji:"🍽️",
    excerpt:"בפנטזיה היא הגורו של ארוחות הערב המשפחתיות, מזריקה לכל ביס ותבשיל ים של משמעויות... ארוחת ערב כמטפורה לכל הפער בין הפנטזיה להורית למציאות.",
    accentColor:"sage", isMine:true,
  },
  // ── Inspirational – songs ─────────────────────────────────────────────────
  {
    id:5, type:"song", category:"inspirational",
    title:"מה אני רוצה", creator:"שלומי שבן",
    tag:"הורות", emoji:"🌙",
    excerpt:"שיר שמדבר על הרצון להיות נוכח — לא רק פיזית, אלא נוכח בלב.",
    accentColor:"sage", featured:true,
  },
  {
    id:6, type:"song", category:"inspirational",
    title:"ילד טוב", creator:"מאיר אריאל",
    tag:"ילדות", emoji:"⭐",
    excerpt:"מאיר אריאל מתאר את הפגיעות של ילדות בכמה מילים פשוטות ועוצמתיות.",
    accentColor:"terra",
  },
  {
    id:7, type:"song", category:"inspirational",
    title:"Brave", creator:"Sara Bareilles",
    tag:"אומץ", emoji:"🔥",
    excerpt:"אנחנו מלמדים ילדים לדבר — אבל האם מלמדים אותם לומר מה שבאמת בלב?",
    accentColor:"sage",
  },
  {
    id:8, type:"song", category:"inspirational",
    title:"הבן שלי", creator:"מוש בן ארי",
    tag:"אהבה", emoji:"💚",
    excerpt:"שיר על ההבטחה הבלתי נאמרת שכל הורה נושא — להיות שם תמיד.",
    accentColor:"terra", featured:true,
  },
  {
    id:9, type:"song", category:"inspirational",
    title:"The Greatest Love of All", creator:"Whitney Houston",
    tag:"ערך עצמי", emoji:"🌺",
    excerpt:"אם ילד ילמד לאהוב את עצמו — לא יצטרך לחפש אהבה במקומות הלא נכונים.",
    accentColor:"sage",
  },
  {
    id:10, type:"song", category:"inspirational",
    title:"ילדים ממולחים", creator:"אריק איינשטיין",
    tag:"ילדות", emoji:"✨",
    excerpt:"ילדות היא לא שלב לעבור — היא עולם שלם שצריך לכבד ולשמר.",
    accentColor:"terra",
  },
  // ── Inspirational – poems ─────────────────────────────────────────────────
  {
    id:11, type:"poem", category:"inspirational",
    title:"ילדיך אינם שלך", creator:"ח׳ליל ג׳ובראן",
    tag:"שחרור", emoji:"🍃",
    excerpt:"ילדיך אינם ילדיך. הם בני החיים ובנותיו של עצמם. הם מגיעים דרכך אך לא ממך.",
    accentColor:"sage",
  },
  {
    id:12, type:"poem", category:"inspirational",
    title:"The Road Not Taken", creator:"Robert Frost",
    tag:"בחירה", emoji:"🌲",
    excerpt:"Two roads diverged in a yellow wood — and every parent stands at this crossroads daily.",
    accentColor:"terra",
  },
  // ── Professional – Maya's own tools ──────────────────────────────────────
  {
    id:13, type:"article", category:"professional",
    title:"חמלה עצמית והורית — כלי 1", creator:"מאיה פלטי",
    tag:"כלי מרכזי", emoji:"💛",
    excerpt:"90-95% מהאוכלוסיה מנהלים דיבור פנימי יומיומי. הקול שאנחנו מדברים בו אל עצמנו — הוא הקול שהילדים שלנו יפנימו. לכן חמלה עצמית היא לא פינוק — היא תשתית.",
    accentColor:"terra", featured:true, isMine:true,
  },
  {
    id:14, type:"article", category:"professional",
    title:"רפלקטיביות הורית — כלי 2", creator:"מאיה פלטי",
    tag:"כלי מרכזי", emoji:"🪞",
    excerpt:"אנחנו מגיבים על אוטומט — כפתור נלחץ והתגובה מתרחשת. הרפלקטיביות היא ארבע שאלות פשוטות: מה אני חושב? מה אני מרגיש? מה האחר חושב? מה הוא מרגיש?",
    accentColor:"sage", isMine:true,
  },
  {
    id:15, type:"article", category:"professional",
    title:"משחקיות — כלי 3", creator:"מאיה פלטי",
    tag:"יישום מידי", emoji:"🎲",
    excerpt:"משחקיות היא לא פעילות מיוחדת — היא תנוחת נפש. כניסה דרך החלון כשדלת ההתנגדות נסגרת. לנטרל מאבקי כוח, להפחית התנגדות, ולהפוך אינטראקציות יומיומיות לחיבור.",
    accentColor:"terra", isMine:true,
  },
  {
    id:16, type:"article", category:"professional",
    title:"ממאבק לשיתוף פעולה — כלי 7", creator:"מאיה פלטי",
    tag:"מניעה ותיקון", emoji:"🤝",
    excerpt:"רוב העבודה נעשית בין האירועים, לא בתוכם. מניעה, עצירת הסלמה ותיקון — שלושת השלבים שהורים מדווחים שמשנים הכל. המטרה היא לא לנצח — אלא ללכת יחד.",
    accentColor:"sage", featured:true, isMine:true,
  },
  {
    id:17, type:"article", category:"professional",
    title:"זמן קסם — כלי 9", creator:"מאיה פלטי",
    tag:"קשר ואמון", emoji:"⏳",
    excerpt:"5–20 דקות ביום, קבועות, בטוחות, ולא מוטלות בספק. הילד בוחר. ההורה נוכח. זהו הבסיס לסמכות שמבוססת על כבוד שהורווח — לא על כוח.",
    accentColor:"terra", isMine:true,
  },
  // ── Professional – books & research ──────────────────────────────────────
  {
    id:18, type:"book", category:"professional",
    title:"No Drama Discipline", creator:"Daniel J. Siegel",
    tag:"חינוך מוחי", emoji:"🧠",
    excerpt:"המדע מאחורי ויסות רגשי אצל ילדים — וכיצד הורות יכולה לעצב את מבנה המוח.",
    accentColor:"sage",
  },
  {
    id:19, type:"book", category:"professional",
    title:"The Whole-Brain Child", creator:"Siegel & Payne Bryson",
    tag:"נוירולוגיה", emoji:"🔬",
    excerpt:"12 אסטרטגיות לטיפוח מוח ילדכם — מבוססות מחקר, ניתנות ליישום.",
    accentColor:"terra",
  },
  {
    id:20, type:"book", category:"professional",
    title:"How to Talk So Kids Will Listen", creator:"Faber & Mazlish",
    tag:"תקשורת", emoji:"💬",
    excerpt:"ספר קלאסי שמלמד שינוי שפה — ושינוי שפה משנה את כל הדינמיקה.",
    accentColor:"sage",
  },
  {
    id:21, type:"research", category:"professional",
    title:"ACE Study", creator:"CDC & Kaiser Permanente",
    tag:"טראומה", emoji:"📊",
    excerpt:"מחקר ה-ACE על חוויות ילדות שליליות — הבסיס המדעי לחשיבות הורות בריאה.",
    accentColor:"terra",
  },
  {
    id:22, type:"article", category:"professional",
    title:"The Still Face Experiment", creator:"Edward Tronick",
    tag:"התקשרות", emoji:"🎥",
    excerpt:"ניסוי הפנים הדוממות — הדגמה של 3 דקות שמסבירה הכל על הצורך של ילד בקשר.",
    accentColor:"sage",
  },
];

const TYPE_LABELS: Record<ContentType, string> = {
  song:"שיר", poem:"שירה", article:"מאמר/כלי", book:"ספר", research:"מחקר"
};

// ─── AI Chat Bubble ───────────────────────────────────────────────────────────
function AIChatBubble() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { role:"ai", text:"שלום! אני עוזרת ה-AI של מאיה פלטי. אשמח לעזור לכם לחקור את הספרייה, להבין את כלי ארגז הכלים ההורי, או פשוט לחשוב יחד על הורות. מה עולה לכם?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next = [...msgs, { role:"user", text }];
    setMsgs(next);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          system:`אתה עוזר וירטואלי המייצג את מאיה פלטי — פסיכולוגית חינוכית מומחית עם כמעט 20 שנות ניסיון, מפתחת מודל "ארגז הכלים ההורי".
המודל כולל 10 כלים: חמלה הורית, רפלקטיביות, משחקיות, מודלינג, התאמה התפתחותית, נבואה חיובית, ממאבק לשיתוף פעולה, חוסן, זמן קסם, ופסיכולוגיה חיובית.
תפקידך לעזור להורים שמבקרים בספרייה לחשוב על הורות ולהתחבר לכלים הללו.
ענה בעברית בלבד, בחמימות ובמקצועיות, בקצרה (2-4 משפטים).
אל תספק עצות טיפוליות ישירות — הפנה לייעוץ אישי עם מאיה לשאלות מורכבות.`,
          messages: next.slice(1).map(m => ({
            role: m.role === "ai" ? "assistant" : "user",
            content: m.text
          }))
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text ?? "מצטערת, לא הצלחתי לענות כרגע.";
      setMsgs(m => [...m, { role:"ai", text:reply }]);
    } catch(_e) {
      setMsgs(m => [...m, { role:"ai", text:"משהו השתבש. אנא נסו שוב." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ position:"fixed", bottom:"28px", left:"28px", zIndex:1000 }}>
      {open && (
        <div style={{
          position:"absolute", bottom:"72px", left:0, width:"340px",
          background:"#FFFFFF", borderRadius:"var(--radius-card-lg)",
          boxShadow:"0 24px 64px rgba(45,45,45,0.18)",
          border:"1px solid var(--border)", overflow:"hidden",
          animation:"scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards",
          transformOrigin:"bottom left",
        }}>
          <div style={{ background:"linear-gradient(135deg, var(--sage-dark) 0%, #3D3530 100%)", padding:"18px 20px", display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"38px", height:"38px", borderRadius:"50%", background:"rgba(249,247,242,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", border:"1.5px solid rgba(249,247,242,0.25)", flexShrink:0 }}>🌿</div>
            <div style={{ flex:1 }}>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13.5px", fontWeight:700, color:"#F9F7F2", margin:0 }}>התייעצו עם המודל של מאיה פלטי</p>
              <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"11px", color:"rgba(249,247,242,0.6)", margin:"2px 0 0" }}>עוזרת AI | ארגז הכלים ההורי</p>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:"none", border:"none", color:"rgba(249,247,242,0.6)", cursor:"pointer", fontSize:"20px", lineHeight:1, padding:"4px", flexShrink:0 }}>×</button>
          </div>

          <div style={{ height:"300px", overflowY:"auto", padding:"16px", display:"flex", flexDirection:"column", gap:"12px" }}>
            {msgs.map((msg, i) => (
              <div key={i} style={{ display:"flex", justifyContent: msg.role === "user" ? "flex-start" : "flex-end" }}>
                <div style={{
                  maxWidth:"82%",
                  background: msg.role === "user" ? "var(--sage-faint)" : "var(--terra-faint)",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  padding:"10px 14px",
                  border: msg.role === "user" ? "1px solid rgba(125,132,113,0.15)" : "1px solid rgba(193,127,95,0.15)",
                }}>
                  <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13.5px", color:"var(--charcoal-soft)", lineHeight:1.72, margin:0 }}>{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display:"flex", justifyContent:"flex-end" }}>
                <div style={{ background:"var(--terra-faint)", borderRadius:"18px 18px 18px 4px", padding:"12px 16px", border:"1px solid rgba(193,127,95,0.15)", display:"flex", gap:"5px", alignItems:"center" }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width:"6px", height:"6px", borderRadius:"50%", background:"var(--terra)", animation:"float 1.2s ease-in-out infinite", animationDelay:`${i*0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ padding:"12px 16px", borderTop:"1px solid var(--border)", display:"flex", gap:"8px" }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
              placeholder="שאלו על הורות, כלים, שירה..."
              style={{ flex:1, padding:"10px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontSize:"13.5px", color:"var(--charcoal)", background:"var(--paper)", outline:"none", textAlign:"right" }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{ width:"38px", height:"38px", borderRadius:"50%", background:input.trim() ? "var(--sage)" : "var(--parchment)", border:"none", cursor:input.trim() ? "pointer" : "default", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"15px", flexShrink:0, transition:"background 200ms ease" }}>
              ←
            </button>
          </div>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"10px", color:"var(--charcoal-muted)", textAlign:"center", padding:"8px 16px 12px", margin:0, borderTop:"1px solid var(--border)" }}>
            עוזרת AI. לייעוץ אישי — פנו למאיה פלטי ישירות.
          </p>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{
        display:"flex", alignItems:"center", gap:"10px",
        background: open ? "var(--charcoal)" : "linear-gradient(135deg, var(--sage-dark) 0%, #3D3530 100%)",
        color:"#FFFFFF", border:"none", cursor:"pointer",
        padding:"13px 20px", borderRadius:"var(--radius-pill)",
        fontFamily:"var(--font-hebrew)", fontSize:"13.5px", fontWeight:600,
        boxShadow:"0 8px 32px rgba(45,45,45,0.22)",
        transition:"all 280ms ease", whiteSpace:"nowrap",
      }}>
        <span style={{ fontSize:"18px" }}>{open ? "✕" : "🌿"}</span>
        {open ? "סגור" : "התייעצו עם המודל של מאיה"}
      </button>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function LibraryCard({ item }: { item: LibraryItem }) {
  const isSage = item.accentColor === "sage";
  return (
    <div style={{
      background:"#FFFFFF", borderRadius:"var(--radius-card)", border:"1px solid var(--border)",
      boxShadow:"var(--shadow-card)", overflow:"hidden", display:"flex", flexDirection:"column",
      transition:"transform 320ms cubic-bezier(0.4,0,0.2,1), box-shadow 320ms ease",
      position:"relative",
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card-hover)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="var(--shadow-card)"; }}>

      {item.featured && (
        <div style={{ position:"absolute", top:"14px", right:"-1px", background:"var(--terra)", color:"white", fontSize:"10px", fontWeight:700, fontFamily:"var(--font-hebrew)", letterSpacing:"0.06em", padding:"4px 12px 4px 14px", borderRadius:"3px 0 0 3px" }}>
          ★ נבחר
        </div>
      )}
      {item.isMine && (
        <div style={{ position:"absolute", top: item.featured ? "40px" : "14px", right:"-1px", background:"var(--sage)", color:"white", fontSize:"10px", fontWeight:700, fontFamily:"var(--font-hebrew)", letterSpacing:"0.06em", padding:"4px 12px 4px 14px", borderRadius:"3px 0 0 3px" }}>
          ✍️ מאיה פלטי
        </div>
      )}

      <div style={{
        height:"88px",
        background: isSage
          ? "linear-gradient(135deg, var(--sage-faint) 0%, rgba(168,176,158,0.25) 100%)"
          : "linear-gradient(135deg, var(--terra-faint) 0%, rgba(212,160,136,0.25) 100%)",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:"36px", borderBottom:"1px solid var(--border)",
      }}>
        {item.emoji}
      </div>

      <div style={{ padding:"22px", flex:1, display:"flex", flexDirection:"column", gap:"10px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap" }}>
          <span style={{ background:"var(--linen)", color:"var(--charcoal-soft)", fontFamily:"var(--font-hebrew)", fontSize:"10px", fontWeight:700, padding:"3px 10px", borderRadius:"var(--radius-pill)", letterSpacing:"0.06em", border:"1px solid var(--border)" }}>
            {TYPE_LABELS[item.type]}
          </span>
          <span className={isSage ? "tag-sage" : "tag-terra"} style={{ fontSize:"10px" }}>{item.tag}</span>
        </div>
        <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"19px", fontWeight:600, color:"var(--charcoal)", lineHeight:1.25, margin:0 }}>{item.title}</h3>
        <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color: isSage ? "var(--sage-dark)" : "var(--terra-dark)", fontWeight:600, margin:0 }}>— {item.creator}</p>
        <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", lineHeight:1.75, margin:0, flex:1 }}>{item.excerpt}</p>
      </div>
    </div>
  );
}

// ─── Filter constants ──────────────────────────────────────────────────────────
const FILTER_OPTIONS: {value:Category; label:string; emoji:string}[] = [
  { value:"all",           label:"הכל",         emoji:"✦" },
  { value:"professional",  label:"חומר מקצועי", emoji:"📚" },
  { value:"inspirational", label:"השראה",        emoji:"🎵" },
];

const TYPE_FILTERS: {value:ContentType|"all"; label:string}[] = [
  { value:"all",      label:"כל הסוגים" },
  { value:"poem",     label:"שירה" },
  { value:"song",     label:"שירים" },
  { value:"article",  label:"מאמרים וכלים" },
  { value:"book",     label:"ספרים" },
  { value:"research", label:"מחקרים" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function LibraryPage() {
  const [category,   setCategory]   = useState<Category>("all");
  const [typeFilter, setTypeFilter] = useState<ContentType|"all">("all");
  const [search,     setSearch]     = useState("");
  const [mineOnly,   setMineOnly]   = useState(false);

  const filtered = useMemo(() => ITEMS.filter(item => {
    const catMatch  = category === "all"   || item.category === category;
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const mineMatch = !mineOnly || item.isMine;
    const q = search.toLowerCase();
    const textMatch = !q || item.title.toLowerCase().includes(q) || item.creator.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q);
    return catMatch && typeMatch && mineMatch && textMatch;
  }), [category, typeFilter, mineOnly, search]);

  const counts = {
    all: ITEMS.length,
    professional:  ITEMS.filter(i => i.category === "professional").length,
    inspirational: ITEMS.filter(i => i.category === "inspirational").length,
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding:"140px 32px 80px", background:"linear-gradient(150deg, #EEF0EB 0%, #F9F7F2 60%)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle, rgba(125,132,113,0.12) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-40px", left:"-40px", width:"220px", height:"220px", borderRadius:"50%", background:"radial-gradient(circle, rgba(193,127,95,0.10) 0%, transparent 70%)", pointerEvents:"none" }} />

        <span className="tag-sage" style={{ marginBottom:"20px", display:"inline-block" }}>עולם של תוכן</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(40px,5.5vw,68px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px", letterSpacing:"-0.02em" }}>
          הספרייה
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"600px", margin:"0 auto 40px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          שירים, שירה, מאמרים וכלים מקצועיים — כי הורות נוגעת בנשמה, ולפעמים מילה אחת שווה שנה של טיפול.
        </p>

        <div style={{ display:"flex", justifyContent:"center", gap:"12px", flexWrap:"wrap" }}>
          {[
            { n: ITEMS.filter(i=>i.isMine).length, label:"יצירות מאיה פלטי", color:"var(--terra)" },
            { n: counts.inspirational,              label:"יצירות השראה",       color:"var(--sage-dark)" },
            { n: counts.professional,               label:"מקורות מקצועיים",    color:"var(--charcoal)" },
          ].map(({ n, label, color }) => (
            <div key={label} style={{ background:"rgba(255,255,255,0.7)", border:"1px solid var(--border)", borderRadius:"var(--radius-pill)", padding:"8px 20px", display:"flex", gap:"8px", alignItems:"center", backdropFilter:"blur(8px)" }}>
              <span style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color, lineHeight:1 }}>{n}</span>
              <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-soft)" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div style={{ position:"sticky", top:"64px", zIndex:50, background:"rgba(249,247,242,0.95)", backdropFilter:"blur(14px)", borderBottom:"1px solid var(--border)", boxShadow:"0 2px 12px rgba(45,45,45,0.06)" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"flex", gap:"0", borderBottom:"1px solid var(--border)", overflowX:"auto" }}>
            {FILTER_OPTIONS.map(opt => (
              <button key={opt.value}
                onClick={() => { setCategory(opt.value); setTypeFilter("all"); setMineOnly(false); }}
                style={{
                  display:"flex", alignItems:"center", gap:"7px", padding:"16px 20px",
                  background:"none", border:"none", cursor:"pointer",
                  fontFamily:"var(--font-hebrew)", fontSize:"14px",
                  fontWeight: category === opt.value && !mineOnly ? 700 : 400,
                  color: category === opt.value && !mineOnly ? "var(--terra-dark)" : "var(--charcoal-soft)",
                  borderBottom: category === opt.value && !mineOnly ? "2.5px solid var(--terra)" : "2.5px solid transparent",
                  marginBottom:"-1px", transition:"all 200ms ease", whiteSpace:"nowrap",
                }}>
                <span>{opt.emoji}</span>
                <span>{opt.label}</span>
                <span style={{ background: category === opt.value && !mineOnly ? "var(--terra-faint)" : "var(--linen)", color: category === opt.value && !mineOnly ? "var(--terra-dark)" : "var(--charcoal-muted)", fontSize:"11px", fontWeight:700, padding:"2px 8px", borderRadius:"var(--radius-pill)" }}>
                  {counts[opt.value as keyof typeof counts]}
                </span>
              </button>
            ))}

            {/* Maya's content tab */}
            <button onClick={() => { setMineOnly(true); setCategory("all"); setTypeFilter("all"); }} style={{
              display:"flex", alignItems:"center", gap:"7px", padding:"16px 20px",
              background:"none", border:"none", cursor:"pointer",
              fontFamily:"var(--font-hebrew)", fontSize:"14px",
              fontWeight: mineOnly ? 700 : 400,
              color: mineOnly ? "var(--sage-dark)" : "var(--charcoal-soft)",
              borderBottom: mineOnly ? "2.5px solid var(--sage)" : "2.5px solid transparent",
              marginBottom:"-1px", transition:"all 200ms ease", whiteSpace:"nowrap",
            }}>
              <span>✍️</span>
              <span>מאיה פלטי</span>
              <span style={{ background: mineOnly ? "var(--sage-faint)" : "var(--linen)", color: mineOnly ? "var(--sage-dark)" : "var(--charcoal-muted)", fontSize:"11px", fontWeight:700, padding:"2px 8px", borderRadius:"var(--radius-pill)" }}>
                {ITEMS.filter(i=>i.isMine).length}
              </span>
            </button>

            <div style={{ flex:1 }} />

            <div style={{ display:"flex", alignItems:"center", padding:"0 4px", position:"relative" }}>
              <span style={{ position:"absolute", right:"16px", fontSize:"13px", opacity:0.45, pointerEvents:"none" }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="חיפוש..."
                style={{ padding:"7px 36px 7px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal)", background:"var(--linen)", outline:"none", width:"152px", textAlign:"right" }}
              />
            </div>
          </div>

          <div style={{ display:"flex", gap:"6px", padding:"10px 0", overflowX:"auto", scrollbarWidth:"none" }}>
            {TYPE_FILTERS.map(t => (
              <button key={t.value} onClick={() => setTypeFilter(t.value)} style={{
                padding:"5px 14px", borderRadius:"var(--radius-pill)",
                background: typeFilter === t.value ? "var(--sage)" : "transparent",
                color: typeFilter === t.value ? "white" : "var(--charcoal-soft)",
                border: typeFilter === t.value ? "1.5px solid var(--sage)" : "1.5px solid var(--border)",
                fontFamily:"var(--font-hebrew)", fontSize:"12.5px", fontWeight:500,
                cursor:"pointer", transition:"all 180ms ease", whiteSpace:"nowrap",
              }}>
                {t.label}
              </button>
            ))}
            {(category !== "all" || typeFilter !== "all" || search || mineOnly) && (
              <button onClick={() => { setCategory("all"); setTypeFilter("all"); setSearch(""); setMineOnly(false); }} style={{
                padding:"5px 14px", borderRadius:"var(--radius-pill)",
                background:"var(--terra-faint)", color:"var(--terra-dark)",
                border:"1.5px solid rgba(193,127,95,0.25)",
                fontFamily:"var(--font-hebrew)", fontSize:"12.5px", fontWeight:600,
                cursor:"pointer", whiteSpace:"nowrap", marginRight:"auto",
              }}>
                נקה × ({filtered.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding:"52px 32px 100px", background:"var(--paper)", minHeight:"60vh" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", marginBottom:"28px" }}>
            מציג <strong style={{ color:"var(--charcoal)" }}>{filtered.length}</strong> פריטים
            {search && <span> עבור &quot;{search}&quot;</span>}
            {mineOnly && <span> — כתיבה של מאיה פלטי</span>}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign:"center", padding:"80px 0" }}>
              <div style={{ fontSize:"52px", marginBottom:"20px" }}>🔍</div>
              <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"26px", color:"var(--charcoal)", marginBottom:"12px" }}>לא נמצאו תוצאות</h3>
              <p style={{ fontFamily:"var(--font-hebrew)", color:"var(--charcoal-muted)", fontSize:"15px" }}>נסו מילת חיפוש אחרת או נקו את הסינון</p>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(288px, 1fr))", gap:"22px" }}>
              {filtered.map(item => <LibraryCard key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding:"72px 32px", background:"var(--sage)", textAlign:"center" }}>
        <div style={{ maxWidth:"500px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(24px,3.5vw,38px)", color:"#FFFFFF", marginBottom:"14px", fontStyle:"italic", fontWeight:300 }}>קבלו תכנים ישירות למייל</h2>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"rgba(249,247,242,0.82)", marginBottom:"28px", lineHeight:1.82 }}>מדי חודש — שיר, מאמר, ורעיון אחד שיכול לשנות משהו.</p>
          <div style={{ display:"flex", gap:"10px", justifyContent:"center" }}>
            <input type="email" placeholder="כתובת האימייל שלכם" style={{ flex:1, padding:"13px 18px", borderRadius:"var(--radius-pill)", border:"none", fontSize:"15px", fontFamily:"var(--font-hebrew)", textAlign:"right", outline:"none", maxWidth:"260px", background:"#FFFFFF", color:"var(--charcoal)" }} />
            <button style={{ background:"var(--terra)", color:"white", border:"none", padding:"13px 22px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", cursor:"pointer", whiteSpace:"nowrap" }}>הרשמה</button>
          </div>
        </div>
      </section>

      <AIChatBubble />
    </>
  );
}

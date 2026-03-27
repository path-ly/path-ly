import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TOOLS, getToolBySlug, getToolsBySlug } from "@/lib/tools-data";
import SiteIcon from "@/components/SiteIcon";
import { EyeInEyeIcon, GrowthRulerIcon, FocusGoodIcon, CooperationIcon, PlantFromRockIcon } from "@/components/ToolIcons";

// Generate static params for all tool slugs
export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

// Dynamic metadata per tool
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  const url = `https://www.path-ly.com/model/${tool.slug}`;

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: tool.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      url,
      type: "article",
      locale: "he_IL",
    },
    twitter: {
      card: "summary",
      title: tool.title,
      description: tool.seoDescription,
    },
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const relatedTools = getToolsBySlug(tool.relatedTools);
  const toolIndex = TOOLS.findIndex((t) => t.slug === tool.slug);
  const prevTool = toolIndex > 0 ? TOOLS[toolIndex - 1] : null;
  const nextTool = toolIndex < TOOLS.length - 1 ? TOOLS[toolIndex + 1] : null;

  const accentColor = tool.accent ? "var(--terra)" : "var(--sage)";
  const accentDark = tool.accent ? "var(--terra-dark)" : "var(--sage-dark)";
  const accentFaint = tool.accent ? "var(--terra-faint)" : "var(--sage-faint)";
  const accentBorder = tool.accent
    ? "rgba(196,114,122,0.2)"
    : "rgba(42,122,110,0.2)";

  // JSON-LD for this specific tool/article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tool.title,
    description: tool.seoDescription,
    author: {
      "@type": "Person",
      name: "מאיה פלטי",
      url: "https://www.path-ly.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "PATH-LY",
      url: "https://www.path-ly.com",
    },
    mainEntityOfPage: `https://www.path-ly.com/model/${tool.slug}`,
    inLanguage: "he-IL",
    keywords: tool.seoKeywords.join(", "),
    isPartOf: {
      "@type": "CreativeWork",
      name: "ארגז הכלים ההורי",
      url: "https://www.path-ly.com/model",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          background: tool.accent
            ? "linear-gradient(150deg, #F8ECEE 0%, #F9F7F2 60%)"
            : "linear-gradient(150deg, #E8F2F0 0%, #F9F7F2 60%)",
          padding: "140px 32px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            style={{
              marginBottom: "28px",
              fontFamily: "var(--font-hebrew)",
              fontSize: "13px",
              color: "var(--charcoal-muted)",
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--charcoal-muted)", textDecoration: "none" }}
            >
              בית
            </Link>
            {" / "}
            <Link
              href="/model"
              style={{ color: "var(--charcoal-muted)", textDecoration: "none" }}
            >
              ארגז הכלים
            </Link>
            {" / "}
            <span style={{ color: accentDark, fontWeight: 600 }}>
              {tool.title}
            </span>
          </nav>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: accentFaint,
              border: `1px solid ${accentBorder}`,
              borderRadius: "9999px",
              padding: "6px 16px",
              fontFamily: "var(--font-hebrew)",
              fontSize: "13px",
              fontWeight: 600,
              color: accentDark,
              marginBottom: "20px",
            }}
          >
            כלי #{tool.num} מתוך 10
          </span>

          <div style={{ marginBottom: "16px" }}>
            {tool.icon === "eye" ? <EyeInEyeIcon size={48} /> 
              : tool.icon === "ruler" ? <GrowthRulerIcon size={48} />
              : tool.icon === "focus" ? <FocusGoodIcon size={48} />
              : tool.icon === "coop" ? <CooperationIcon size={48} />
              : tool.icon === "plant" ? <PlantFromRockIcon size={48} />
              : <SiteIcon name={tool.icon} size={48} />}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {tool.title}
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: accentDark,
              fontFamily: "var(--font-hebrew)",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            {tool.short}
          </p>

          <p
            style={{
              fontFamily: "var(--font-hebrew)",
              fontSize: "13px",
              color: "var(--charcoal-muted)",
            }}
          >
            מאיה פלטי · פסיכולוגית חינוכית מומחית · ארגז הכלים ההורי
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section style={{ padding: "64px 32px", background: "var(--paper)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {/* Description */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-card-lg)",
              padding: "40px 44px",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--border)",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "24px",
                color: "var(--charcoal)",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              מה זה {tool.title}?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-hebrew)",
                fontSize: "16px",
                color: "var(--charcoal-soft)",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              {tool.desc}
            </p>
          </div>

          {/* Practical Tips */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-card-lg)",
              padding: "36px 40px",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--border)",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "var(--charcoal)",
                marginBottom: "20px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SiteIcon name="hammer" size={16} /> איך מיישמים בפועל
            </h2>
            {tool.tips.map((tip, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "14px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: accentFaint,
                    border: `1px solid ${accentBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-hebrew)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: accentDark,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-hebrew)",
                    fontSize: "15px",
                    color: "var(--charcoal-soft)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {tip}
                </p>
              </div>
            ))}
          </div>

          {/* Real-life Example */}
          <div
            style={{
              background: accentFaint,
              borderRadius: "var(--radius-card-lg)",
              padding: "36px 40px",
              border: `1px solid ${accentBorder}`,
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "var(--charcoal)",
                marginBottom: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SiteIcon name="lightbulb" size={16} /> דוגמה מהחיים
            </h2>
            <p
              style={{
                fontFamily: "var(--font-hebrew)",
                fontSize: "15px",
                color: "var(--charcoal-soft)",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              {tool.example}
            </p>
          </div>

          {/* Common Challenge */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-card-lg)",
              padding: "32px 40px",
              boxShadow: "var(--shadow-card)",
              border: `1px solid ${accentBorder}`,
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                color: "var(--charcoal)",
                marginBottom: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SiteIcon name="alert" size={16} /> אתגר נפוץ
            </h2>
            <p
              style={{
                fontFamily: "var(--font-hebrew)",
                fontSize: "15px",
                color: "var(--charcoal-muted)",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {tool.challenge}
            </p>
          </div>

          {/* Research + Video */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "24px 28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: accentDark,
                  marginBottom: "8px",
                }}
              >
                <><SiteIcon name="book" size={16} /> ביסוס מחקרי</>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "14px",
                  color: "var(--charcoal-muted)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {tool.research}
              </p>
            </div>

            {tool.video && (
              <a
                href={tool.video}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: accentColor,
                  color: "white",
                  padding: "16px 24px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "opacity 180ms ease",
                }}
              >
                <><SiteIcon name="play" size={14} /> צפו בסרטון: {tool.videoLabel}</>
              </a>
            )}

            {tool.videos && tool.videos.length > 0 && (
              <div style={{ marginTop: "16px" }}>
                <p style={{
                  fontFamily: "var(--font-hebrew)", fontSize: "15px", fontWeight: 600,
                  color: "var(--charcoal)", marginBottom: "12px",
                }}>
                  <><SiteIcon name="clapperboard" size={16} /> סרטונים נוספים</>
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {tool.videos.map((v, i) => (
                    <a
                      key={i}
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "var(--sage-faint)",
                        color: "var(--sage-dark)",
                        padding: "10px 16px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        fontFamily: "var(--font-hebrew)",
                        fontSize: "13px",
                        fontWeight: 500,
                        border: "1px solid rgba(42,122,110,0.15)",
                        transition: "all 180ms ease",
                      }}
                    >
                      {v.url.includes("tiktok") ? <SiteIcon name="smartphone" size={12} /> : v.url.includes("youtube") || v.url.includes("youtu.be") ? <SiteIcon name="play" size={12} /> : <SiteIcon name="video" size={12} />} {v.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RELATED TOOLS ───────────────────────────────── */}
          {relatedTools.length > 0 && (
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "24px",
                  color: "var(--charcoal)",
                  marginBottom: "20px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                כלים קשורים בארגז
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "16px",
                }}
              >
                {relatedTools.map((rt) => (
                  <Link
                    key={rt.slug}
                    href={`/model/${rt.slug}`}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "var(--radius-card)",
                      padding: "24px",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-card)",
                      textDecoration: "none",
                      transition: "transform 200ms ease, box-shadow 200ms ease",
                      display: "block",
                    }}
                  >
                    <span style={{ fontSize: "24px", display: "block", marginBottom: "8px" }}>
                      {rt.icon === "eye" ? <EyeInEyeIcon size={20} /> 
                        : rt.icon === "ruler" ? <GrowthRulerIcon size={20} />
                        : rt.icon === "focus" ? <FocusGoodIcon size={20} />
                        : rt.icon === "coop" ? <CooperationIcon size={20} />
                        : rt.icon === "plant" ? <PlantFromRockIcon size={20} />
                        : <SiteIcon name={rt.icon} size={20} />}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "18px",
                        color: "var(--charcoal)",
                        marginBottom: "4px",
                        fontWeight: 600,
                      }}
                    >
                      {rt.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-hebrew)",
                        fontSize: "13px",
                        color: "var(--charcoal-muted)",
                        margin: 0,
                      }}
                    >
                      {rt.short}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ── PREV / NEXT NAVIGATION ──────────────────────── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            {prevTool ? (
              <Link
                href={`/model/${prevTool.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 20px",
                  background: "var(--linen)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "14px",
                  color: "var(--charcoal-soft)",
                }}
              >
                → כלי #{prevTool.num}: {prevTool.title}
              </Link>
            ) : (
              <div />
            )}
            {nextTool ? (
              <Link
                href={`/model/${nextTool.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 20px",
                  background: "var(--linen)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "14px",
                  color: "var(--charcoal-soft)",
                }}
              >
                כלי #{nextTool.num}: {nextTool.title} ←
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* ── CTA ──────────────────────────────────────────── */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--charcoal) 0%, #3D3530 100%)",
              borderRadius: "var(--radius-card-lg)",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "#F9F7F2",
                marginBottom: "12px",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              רוצים ללמוד ליישם את הכלי הזה?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-hebrew)",
                fontSize: "15px",
                color: "rgba(249,247,242,0.72)",
                marginBottom: "28px",
                lineHeight: 1.8,
              }}
            >
              פגישת ייעוץ ראשונה — 15 דקות, חינם, ללא התחייבות.
            </p>
            <a
              href="https://calendly.com/maya_palty/50min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#F9F7F2",
                color: "var(--terra-dark)",
                padding: "14px 36px",
                borderRadius: "9999px",
                fontFamily: "var(--font-hebrew)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <><SiteIcon name="calendar" size={16} /> לקביעת שיחה ראשונה</>
            </a>
          </div>

          {/* Back to all tools */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              href="/model"
              style={{
                fontFamily: "var(--font-hebrew)",
                fontSize: "14px",
                color: "var(--charcoal-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
              }}
            >
              ← חזרה לכל 10 הכלים
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LIBRARY_ARTICLES, getLibraryArticleBySlug } from "@/lib/library-articles";
import { getToolsBySlug } from "@/lib/tools-data";
import SiteIcon from "@/components/SiteIcon";

// Generate static params for all library article slugs
export function generateStaticParams() {
  return LIBRARY_ARTICLES.map((article) => ({ slug: article.slug }));
}

// Dynamic metadata per article
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getLibraryArticleBySlug(params.slug);
  if (!article) return {};

  const url = `https://www.path-ly.com/library/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url,
      type: "article",
      locale: "he_IL",
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.seoDescription,
    },
  };
}

export default function LibraryArticlePage({ params }: { params: { slug: string } }) {
  const article = getLibraryArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedTools = getToolsBySlug(article.relatedToolSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: article.heroImageAlt,
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
    mainEntityOfPage: `https://www.path-ly.com/library/${article.slug}`,
    inLanguage: "he-IL",
    keywords: article.seoKeywords.join(", "),
    about: article.mainCategory,
    isPartOf: {
      "@type": "CreativeWork",
      name: "הספרייה",
      url: "https://www.path-ly.com/library",
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
          background: "linear-gradient(150deg, #E8F2F0 0%, #F9F7F2 60%)",
          padding: "140px 32px 64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
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
            <Link href="/" style={{ color: "var(--charcoal-muted)", textDecoration: "none" }}>
              בית
            </Link>
            {" / "}
            <Link href="/library" style={{ color: "var(--charcoal-muted)", textDecoration: "none" }}>
              הספרייה
            </Link>
            {" / "}
            <span style={{ color: "var(--sage-dark)", fontWeight: 600 }}>{article.title}</span>
          </nav>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--sage-faint)",
              border: "1px solid rgba(42,122,110,0.2)",
              borderRadius: "9999px",
              padding: "6px 16px",
              fontFamily: "var(--font-hebrew)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--sage-dark)",
              marginBottom: "20px",
            }}
          >
            <SiteIcon name={article.icon ?? "clock"} size={14} /> {article.mainCategory}
          </span>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4.5vw, 46px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "var(--sage-dark)",
              fontFamily: "var(--font-hebrew)",
              fontWeight: 500,
              marginBottom: "12px",
              lineHeight: 1.6,
            }}
          >
            {article.kicker}
          </p>

          <p
            style={{
              fontFamily: "var(--font-hebrew)",
              fontSize: "13px",
              color: "var(--charcoal-muted)",
            }}
          >
            מאיה פלטי · פסיכולוגית חינוכית מומחית · הספרייה
          </p>

          {/* Subcategory / tag pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "20px",
            }}
          >
            {article.subcategories.map((sub) => (
              <span
                key={sub}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "12px",
                  color: "var(--charcoal-soft)",
                }}
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="tool-page-section" style={{ padding: "56px 32px", background: "var(--paper)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {/* Share sentence pull-quote */}
          <div
            className="tool-page-card"
            style={{
              background: "var(--terra-faint)",
              border: "1px solid rgba(196,114,122,0.2)",
              borderRadius: "var(--radius-card-lg)",
              padding: "28px 36px",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "18px",
                color: "var(--terra-dark)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {article.shareSentence}
            </p>
          </div>

          {/* Intro */}
          <div
            className="tool-page-card"
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-card-lg)",
              padding: "40px 44px",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--border)",
              marginBottom: "32px",
            }}
          >
            {article.intro.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "16px",
                  color: "var(--charcoal-soft)",
                  lineHeight: 1.9,
                  margin: i === article.intro.length - 1 ? 0 : "0 0 16px",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Sections */}
          {article.sections.map((section, si) => (
            <div
              key={si}
              className="tool-page-card"
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
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                {section.heading}
              </h2>

              {section.body.map((p, pi) => (
                <p
                  key={pi}
                  style={{
                    fontFamily: "var(--font-hebrew)",
                    fontSize: "15px",
                    color: "var(--charcoal-soft)",
                    lineHeight: 1.9,
                    margin: pi === section.body.length - 1 && !section.list ? 0 : "0 0 14px",
                  }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}

              {section.list && (
                <div style={{ marginTop: section.body.length ? "8px" : 0 }}>
                  {section.list.map((item, li) => (
                    <div
                      key={li}
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: "26px",
                          height: "26px",
                          borderRadius: section.listType === "number" ? "50%" : "6px",
                          background: "var(--sage-faint)",
                          border: "1px solid rgba(42,122,110,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-hebrew)",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "var(--sage-dark)",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        {section.listType === "number" ? li + 1 : "•"}
                      </span>
                      <p
                        style={{
                          fontFamily: "var(--font-hebrew)",
                          fontSize: "15px",
                          color: "var(--charcoal-soft)",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Reflection questions */}
          <div
            className="tool-page-card"
            style={{
              background: "var(--sage-faint)",
              borderRadius: "var(--radius-card-lg)",
              padding: "36px 40px",
              border: "1px solid rgba(42,122,110,0.2)",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "var(--charcoal)",
                marginBottom: "16px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SiteIcon name="lightbulb" size={16} /> {article.reflectionHeading ?? "שאלות להתבוננות"}
            </h2>
            {article.reflectionQuestions.map((q, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "1px solid rgba(42,122,110,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-hebrew)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--sage-dark)",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "15px", color: "var(--charcoal-soft)", lineHeight: 1.8, margin: 0 }}>
                  {q}
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div
            className="tool-page-card"
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-card-lg)",
              padding: "36px 40px",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "var(--charcoal)",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              סיכום
            </h2>
            {article.summary.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-hebrew)",
                  fontSize: "15px",
                  color: "var(--charcoal-soft)",
                  lineHeight: 1.9,
                  margin: i === article.summary.length - 1 ? 0 : "0 0 14px",
                }}
              >
                {p}
              </p>
            ))}
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
                      display: "block",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "17px",
                        color: "var(--charcoal)",
                        marginBottom: "4px",
                        fontWeight: 600,
                      }}
                    >
                      {rt.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "13px", color: "var(--charcoal-muted)", margin: 0 }}>
                      {rt.short}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ── CTA ──────────────────────────────────────────── */}
          <div
            className="tool-page-card"
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
              רוצים ליווי בבניית שגרת שינה בריאה?
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
              href="https://wa.me/972523930681"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#F9F7F2",
                color: "var(--sage-dark)",
                padding: "14px 36px",
                borderRadius: "9999px",
                fontFamily: "var(--font-hebrew)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <><SiteIcon name="phone" size={16} /> לייעוץ ראשוני חינם בוואטסאפ</>
            </a>
          </div>

          {/* Back to library */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              href="/library"
              style={{
                fontFamily: "var(--font-hebrew)",
                fontSize: "14px",
                color: "var(--charcoal-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
              }}
            >
              ← חזרה לספרייה
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

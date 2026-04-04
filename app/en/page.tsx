"use client";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_EN =
  "https://wa.me/972523930681?text=Hi%20Maya%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation";
const CALENDLY = "https://calendly.com/maya_palty/50min";

const TOOLS = [
  { num: "01", title: "Parental Compassion", desc: "Accept yourself so you can accept your child" },
  { num: "02", title: "Reflectivity", desc: "Understand what's beneath the surface" },
  { num: "03", title: "Playfulness", desc: "Turn resistance into connection" },
  { num: "04", title: "Modeling", desc: "Kids learn from what we do" },
  { num: "05", title: "Developmental Fit", desc: "See your child at their eye level" },
  { num: "06", title: "Positive Prophecy", desc: "Focus on the good to help it grow" },
  { num: "07", title: "Cooperation", desc: "From power struggles to shared agreements" },
  { num: "08", title: "Emotional Resilience", desc: "Growing through crisis, together" },
  { num: "09", title: "Magic Time", desc: "Presence that builds trust and safety" },
  { num: "10", title: "Growth from Strengths", desc: "Recognize and build on what's already there" },
];

const TESTIMONIALS = [
  {
    quote:
      "In just 9 sessions we managed to deal with a range of challenges around our parenting communication. We feel significant improvement and a much deeper connection with our daughter.",
    who: "Parents of 3 girls, focused on their 6-year-old",
  },
  {
    quote:
      "Maya's guidance helped me feel better about my parenting — less critical and more compassionate toward myself. As a professional who faces many challenges with kids, this is a stable, safe place that holds me.",
    who: "Mother of three (ages 7, 4, and 1)",
  },
  {
    quote:
      "I thought I needed long-term therapy — one session gave me tools I use every single day.",
    who: "Mother of three",
  },
];

export default function EnglishLandingPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-rubik, 'Rubik', sans-serif)",
        color: "#2D2D2D",
        background: "#F9F7F2",
        minHeight: "100vh",
      }}
    >
      {/* ── MINI NAV ──────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(249,247,242,0.94)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid #DDD8CE",
          padding: "12px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/en"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src="/logo-transparent.webp"
              alt="Maya Palty | PATH-LY"
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <span
                style={{
                  fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#2D2D2D",
                  lineHeight: 1.1,
                }}
              >
                Maya Palty
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#C4727A",
                  letterSpacing: "0.06em",
                }}
              >
                PATH·LY · Parent Coaching
              </span>
            </div>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "#4A4A4A",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "9999px",
                transition: "background 200ms",
              }}
            >
              עברית
            </Link>
            <a
              href={WHATSAPP_EN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rose"
              style={{ padding: "8px 18px", fontSize: "13px" }}
            >
              Free Consultation
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(148deg, #F9F7F2 0%, #F0EDE6 55%, #E8F2F0 100%)",
          padding: "80px 28px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "6%",
            right: "3%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(42,122,110,0.15) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "-4%",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,114,122,0.12) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="en-hero-grid"
        >
          {/* Text */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: "#E8F2F0",
                color: "#1D5B52",
                padding: "6px 16px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "24px",
                border: "1px solid rgba(42,122,110,0.2)",
              }}
            >
              20+ years of experience with children &amp; families
            </span>

            <h1
              style={{
                fontFamily:
                  "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: "clamp(34px, 4vw, 56px)",
                fontWeight: 400,
                color: "#2D2D2D",
                marginBottom: "14px",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
              }}
            >
              Parent Coaching for
              <br />
              Israeli Families
            </h1>
            <p
              style={{
                fontFamily:
                  "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: "clamp(18px, 2.2vw, 26px)",
                fontWeight: 400,
                color: "#1D5B52",
                marginBottom: "28px",
                lineHeight: 1.35,
              }}
            >
              Raising kids in America with Israeli roots
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "#4A4A4A",
                lineHeight: 1.85,
                maxWidth: "500px",
                marginBottom: "12px",
              }}
            >
              I&rsquo;m <strong>Maya Palty</strong>, a senior educational
              psychologist specializing in{" "}
              <strong>parent coaching for ages 4&ndash;14</strong>. I work with
              Israeli parents who moved to the US and are navigating the
              unique challenges of raising children between two cultures.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#1D5B52",
                fontWeight: 500,
                marginBottom: "36px",
                lineHeight: 1.7,
                maxWidth: "500px",
                background: "#E8F2F0",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(42,122,110,0.15)",
              }}
            >
              Based in Austin, TX · Zoom sessions worldwide · Hours
              convenient for US time zones
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              <a
                href={WHATSAPP_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terra"
              >
                Free 15-min Consultation
              </a>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Book a Session
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                "0 12px 40px rgba(42,122,110,0.12), 0 4px 12px rgba(45,45,45,0.08)",
              border: "1px solid #DDD8CE",
              aspectRatio: "3/4",
              maxHeight: "520px",
              position: "relative",
            }}
          >
            <Image
              src="/maya-photo.webp"
              alt="Maya Palty — Educational Psychologist"
              width={480}
              height={640}
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                width: "100%",
                height: "100%",
              }}
              priority
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "rgba(249,247,242,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "14px",
                padding: "12px 18px",
                border: "1px solid #DDD8CE",
              }}
            >
              <p
                style={{
                  fontFamily:
                    "var(--font-playfair, 'Playfair Display', serif)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#2D2D2D",
                  margin: 0,
                }}
              >
                Maya Palty
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "#C4727A",
                  margin: "2px 0 0",
                  fontWeight: 500,
                }}
              >
                Senior Educational Psychologist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────── */}
      <section style={{ padding: "72px 28px 80px", background: "#F9F7F2" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              color: "#2D2D2D",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            Does this sound familiar?
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: "#C4727A",
              margin: "0 auto 40px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "Your child has tantrums or emotional outbursts that leave you feeling helpless",
              "You and your partner disagree on parenting — Israeli intensity meets American approaches",
              "Sibling fights are escalating and nothing you try seems to work",
              "Screen time battles are becoming a daily struggle",
              "Your child is anxious, withdrawn, or having trouble at school",
              "You feel like you're constantly yelling and then feeling guilty about it",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "22px 24px",
                  border: "1px solid #DDD8CE",
                  boxShadow:
                    "0 2px 16px rgba(42,122,110,0.06), 0 1px 4px rgba(45,45,45,0.04)",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#C4727A",
                    fontSize: "18px",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✦
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4A4A4A",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE TOOLBOX ──────────────────────────────────── */}
      <section
        style={{
          padding: "72px 28px 80px",
          background:
            "linear-gradient(180deg, #E8F2F0 0%, #F9F7F2 100%)",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 600,
              color: "#1D5B52",
              marginBottom: "10px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            The Method
          </span>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              color: "#2D2D2D",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            The Parental Toolbox
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "16px",
              color: "#4A4A4A",
              maxWidth: "600px",
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            10 research-based practical tools that help parents create real
            change in their relationship with their children.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {TOOLS.map(({ num, title, desc }) => (
              <div
                key={num}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "20px 18px",
                  border: "1px solid #DDD8CE",
                  boxShadow:
                    "0 2px 12px rgba(42,122,110,0.05)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#2A7A6E",
                    letterSpacing: "0.04em",
                  }}
                >
                  {num}
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#2D2D2D",
                    margin: "6px 0 4px",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#6B6B64",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "32px",
              fontSize: "14px",
              color: "#4A4A4A",
            }}
          >
            <Link
              href="/model"
              style={{
                color: "#1D5B52",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1.5px solid #2A7A6E",
              }}
            >
              Explore the full toolbox (Hebrew) →
            </Link>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ padding: "72px 28px 80px", background: "#F9F7F2" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              color: "#2D2D2D",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            How We Work Together
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: "#C4727A",
              margin: "0 auto 44px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "A 15-minute WhatsApp call to understand your situation and see if we're a good fit. No commitment.",
                accent: false,
              },
              {
                step: "2",
                title: "Personalized Coaching",
                desc: "5–12 Zoom sessions tailored to your family. We build a toolbox specific to your child's needs and your parenting style.",
                accent: true,
              },
              {
                step: "3",
                title: "Real Change",
                desc: "Parents typically see meaningful shifts within the first few sessions. You'll leave with practical tools you can use every day.",
                accent: false,
              },
            ].map(({ step, title, desc, accent }) => (
              <div
                key={step}
                style={{
                  background: accent ? "#E8F2F0" : "white",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: accent
                    ? "1px solid rgba(42,122,110,0.2)"
                    : "1px solid #DDD8CE",
                  boxShadow: "0 2px 16px rgba(42,122,110,0.06)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: accent ? "#2A7A6E" : "#F8ECEE",
                    color: accent ? "white" : "#9E4F58",
                    fontWeight: 700,
                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  {step}
                </span>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-playfair, 'Playfair Display', serif)",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#2D2D2D",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4A4A4A",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              background: "white",
              borderRadius: "20px",
              padding: "28px 32px",
              border: "1px solid #DDD8CE",
              boxShadow: "0 2px 16px rgba(42,122,110,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "var(--font-playfair, 'Playfair Display', serif)",
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "#9E4F58",
                }}
              >
                $115
              </span>
              <span style={{ fontSize: "14px", color: "#6B6B64" }}>
                per session (50 min)
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#6B6B64",
                  padding: "4px 12px",
                  background: "#F0EDE6",
                  borderRadius: "9999px",
                }}
              >
                First consultation is free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section
        style={{
          padding: "72px 28px 80px",
          background:
            "linear-gradient(180deg, #F8ECEE 0%, #F9F7F2 100%)",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              color: "#2D2D2D",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            What Parents Say
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: "#C4727A",
              margin: "0 auto 40px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {TESTIMONIALS.map(({ quote, who }, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: "1px solid #DDD8CE",
                  boxShadow: "0 2px 16px rgba(42,122,110,0.06)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "22px",
                    fontFamily:
                      "var(--font-playfair, 'Playfair Display', serif)",
                    fontSize: "48px",
                    color: "#C4727A",
                    opacity: 0.2,
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4A4A4A",
                    lineHeight: 1.85,
                    margin: "0 0 20px",
                    paddingTop: "10px",
                    fontStyle: "italic",
                  }}
                >
                  {quote}
                </p>
                <div
                  style={{
                    borderTop: "1px solid #DDD8CE",
                    paddingTop: "14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6B6B64",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    — {who}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "24px",
              fontSize: "13px",
              color: "#6B6B64",
              fontStyle: "italic",
            }}
          >
            Testimonials translated from Hebrew with permission
          </p>
        </div>
      </section>

      {/* ── ABOUT MAYA (brief) ───────────────────────────── */}
      <section style={{ padding: "72px 28px 80px", background: "#F9F7F2" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "white",
            borderRadius: "24px",
            padding: "44px 40px",
            border: "1px solid #DDD8CE",
            boxShadow: "0 2px 16px rgba(42,122,110,0.06)",
          }}
        >
          <h2
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              color: "#2D2D2D",
              marginBottom: "20px",
            }}
          >
            About Maya
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: "#C4727A",
              marginBottom: "24px",
            }}
          />

          <p
            style={{
              fontSize: "16px",
              color: "#4A4A4A",
              lineHeight: 1.85,
              marginBottom: "16px",
            }}
          >
            Maya Palty is a <strong>senior educational psychologist</strong> with
            over 20 years of experience working with children, parents, and
            educators across Israel. She has served as a lead psychologist in
            school systems, led parent groups, and developed training programs
            for educators — including resilience programs for communities in
            southern Israel.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#4A4A4A",
              lineHeight: 1.85,
              marginBottom: "16px",
            }}
          >
            She created <strong>The Parental Toolbox</strong> — a practical,
            research-based model with 10 tools that help parents build a
            stronger, more compassionate connection with their children. Her
            approach is short-term (5–12 sessions) and focused on real,
            everyday results.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#4A4A4A",
              lineHeight: 1.85,
              marginBottom: "0",
            }}
          >
            Maya lives in Austin, Texas, and works with Israeli families both
            in-person and via Zoom. She understands the unique reality of
            raising Israeli kids in America — the cultural gaps, the language
            challenges, and the parenting dilemmas that come with it.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section
        style={{
          padding: "72px 28px 80px",
          background:
            "linear-gradient(150deg, #1D5B52 0%, #2A7A6E 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "#F9F7F2",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Ready to make a change?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(249,247,242,0.85)",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Start with a free 15-minute consultation. No commitment — just a
            conversation about your family and how I can help.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={WHATSAPP_EN}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "white",
                color: "#1D5B52",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 200ms ease",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              💬 Free Consultation via WhatsApp
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#F9F7F2",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "2px solid rgba(249,247,242,0.5)",
                transition: "all 200ms ease",
              }}
            >
              Book a Paid Session
            </a>
          </div>

          <p
            style={{
              marginTop: "24px",
              fontSize: "14px",
              color: "rgba(249,247,242,0.7)",
            }}
          >
            Also available in{" "}
            <Link
              href="/"
              style={{ color: "rgba(249,247,242,0.9)", fontWeight: 600 }}
            >
              Hebrew (עברית)
            </Link>
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer
        style={{
          padding: "28px",
          textAlign: "center",
          background: "#F0EDE6",
          borderTop: "1px solid #DDD8CE",
        }}
      >
        <p style={{ fontSize: "13px", color: "#6B6B64", margin: 0 }}>
          © {new Date().getFullYear()} Maya Palty · PATH-LY ·{" "}
          <a
            href="mailto:imayatadir@gmail.com"
            style={{ color: "#2A7A6E", textDecoration: "none" }}
          >
            imayatadir@gmail.com
          </a>
        </p>
      </footer>

      {/* ── RESPONSIVE STYLES ────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .en-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}

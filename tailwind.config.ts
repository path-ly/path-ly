import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Warm & Organic Palette ───────────────────────────────────────────
      colors: {
        paper:      "#F9F7F2",   // page background — warm linen white
        linen:      "#F0EBE1",   // subtle section tint
        parchment:  "#E8E0D0",   // card/surface background
        sage: {
          DEFAULT:  "#7D8471",   // muted sage green — primary accent
          light:    "#A8B09E",   // lighter sage for hover states
          dark:     "#5C6352",   // deeper sage for pressed / headings accent
          faint:    "#EEF0EB",   // near-white tinted sage for badges / chips
        },
        terra: {
          DEFAULT:  "#C17F5F",   // terracotta — warm secondary accent
          light:    "#D4A088",   // lighter terracotta
          dark:     "#9A5E41",   // deep terracotta for hover
          faint:    "#F5EAE4",   // blush tint for tag backgrounds
        },
        charcoal: {
          DEFAULT:  "#2D2D2D",   // primary text
          soft:     "#555555",   // secondary text / meta
          muted:    "#888880",   // placeholders / captions
        },
        border:     "#DDD8CE",   // subtle warm border
        shadow:     "#C4B9A8",   // used in box-shadows
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        serif:  ["'Cormorant Garamond'", "Georgia", "serif"],  // headings — academic, established
        sans:   ["'DM Sans'", "system-ui", "sans-serif"],       // body — clean, modern
        hebrew: ["'Heebo'", "sans-serif"],                      // Hebrew glyphs fallback
      },

      fontSize: {
        "display-xl": ["clamp(52px, 7vw, 88px)",  { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(40px, 5vw, 64px)",  { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "display-md": ["clamp(30px, 4vw, 48px)",  { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(22px, 3vw, 32px)",  { lineHeight: "1.25" }],
        "body-lg":    ["18px",                    { lineHeight: "1.75" }],
        "body-md":    ["16px",                    { lineHeight: "1.7"  }],
        "body-sm":    ["14px",                    { lineHeight: "1.65" }],
        "caption":    ["12px",                    { lineHeight: "1.5",  letterSpacing: "0.06em" }],
      },

      // ─── Spacing ─────────────────────────────────────────────────────────
      spacing: {
        "section":   "100px",
        "section-sm": "64px",
        "18":  "72px",
        "22":  "88px",
        "26": "104px",
      },

      // ─── Border Radius — generous, organic ────────────────────────────────
      borderRadius: {
        "card":   "20px",   // standard card
        "card-lg":"32px",   // large hero cards
        "pill":   "9999px", // tags, badges, buttons
        "blob":   "60% 40% 55% 45% / 50% 45% 55% 50%", // organic shape
      },

      // ─── Box Shadows — soft and warm ──────────────────────────────────────
      boxShadow: {
        "card":     "0 2px 16px 0 rgba(196,185,168,0.18), 0 1px 4px 0 rgba(45,45,45,0.06)",
        "card-hover":"0 12px 40px 0 rgba(196,185,168,0.28), 0 4px 12px 0 rgba(45,45,45,0.08)",
        "float":    "0 24px 64px 0 rgba(196,185,168,0.32), 0 8px 24px 0 rgba(45,45,45,0.10)",
        "button":   "0 4px 16px 0 rgba(125,132,113,0.30)",
        "button-terra": "0 4px 16px 0 rgba(193,127,95,0.32)",
        "inset":    "inset 0 1px 3px 0 rgba(45,45,45,0.08)",
        "none":     "none",
      },

      // ─── Transitions ──────────────────────────────────────────────────────
      transitionTimingFunction: {
        "organic": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth":  "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "450": "450ms",
      },

      // ─── Backdrop Blur ────────────────────────────────────────────────────
      backdropBlur: {
        "nav": "14px",
      },
    },
  },
  plugins: [],
};

export default config;

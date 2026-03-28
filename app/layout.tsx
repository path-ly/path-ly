import type { Metadata } from "next";
import { Rubik, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SkipToContent from "@/components/SkipToContent";
import ScrollReveal from "@/components/ScrollReveal";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-rubik",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const BASE_URL = "https://www.path-ly.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "מאיה פלטי | פסיכולוגית חינוכית מומחית · הדרכת הורים",
    template: "%s | מאיה פלטי — PATH-LY",
  },
  description:
    "מאיה פלטי, פסיכולוגית חינוכית מומחית עם 20 שנות ניסיון. הדרכת הורים בגישה חומלת ומבוססת מחקר לילדים בגיל 4-14. ארגז הכלים ההורי — כלים פרקטיים להורות מדויקת.",
  keywords: [
    "פסיכולוגית חינוכית",
    "הדרכת הורים",
    "ארגז כלים הורי",
    "מאיה פלטי",
    "ייעוץ הורים",
    "חינוך ילדים",
    "טנטרום",
    "חרדות אצל ילדים",
    "מאבקי כוח עם ילדים",
    "סמכות הורית",
    "מריבות בין אחים",
    "התנהגות ילדים",
    "הדרכת הורים בזום",
    "פסיכולוגית חינוכית אוסטין",
    "הדרכת הורים ישראלים בארהב",
  ],
  authors: [{ name: "מאיה פלטי", url: BASE_URL }],
  creator: "מאיה פלטי",
  publisher: "PATH-LY",
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "he-IL": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: BASE_URL,
    siteName: "מאיה פלטי · PATH-LY",
    title: "מאיה פלטי | פסיכולוגית חינוכית מומחית · הדרכת הורים",
    description:
      "הדרכת הורים מבוססת מחקר לילדים בגיל 4-14. ארגז הכלים ההורי — 10 כלים פרקטיים להורות חומלת ומדויקת.",
    images: [
      {
        url: `${BASE_URL}/maya-photo.png`,
        width: 800,
        height: 600,
        alt: "מאיה פלטי — פסיכולוגית חינוכית מומחית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "מאיה פלטי | פסיכולוגית חינוכית מומחית",
    description:
      "ארגז הכלים ההורי — 10 כלים מבוססי מחקר להורות חומלת לילדים בגיל 4-14.",
    images: [`${BASE_URL}/maya-photo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${BASE_URL}/#business`,
        name: "מאיה פלטי — הדרכת הורים",
        alternateName: "PATH-LY",
        url: BASE_URL,
        logo: `${BASE_URL}/logo-transparent.png`,
        image: `${BASE_URL}/maya-photo.png`,
        description:
          "הדרכת הורים מבוססת מחקר לילדים בגיל 4-14. פסיכולוגית חינוכית מומחית עם 20 שנות ניסיון.",
        priceRange: "$$",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Cedar Park",
            addressRegion: "TX",
            addressCountry: "US",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.505,
          longitude: -97.82,
        },
        areaServed: [
          { "@type": "Country", name: "Israel" },
          { "@type": "Country", name: "United States" },
          { "@type": "AdministrativeArea", name: "Worldwide (via Zoom)" },
        ],
        serviceType: [
          "הדרכת הורים",
          "ייעוץ חינוכי",
          "Parent Coaching",
          "Educational Psychology Consultation",
        ],
        knowsLanguage: ["he", "en"],
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "מאיה פלטי",
        alternateName: "Maya Palty",
        url: `${BASE_URL}/about`,
        image: `${BASE_URL}/maya-photo.png`,
        jobTitle: "פסיכולוגית חינוכית מומחית",
        description:
          "פסיכולוגית חינוכית מומחית עם 20 שנות ניסיון בעבודה עם ילדים והוריהם. מפתחת מודל ארגז הכלים ההורי.",
        knowsAbout: [
          "Educational Psychology",
          "Parent Coaching",
          "Child Development",
          "Parental Guidance",
          "Emotional Resilience",
        ],
        worksFor: {
          "@id": `${BASE_URL}/#business`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "מאיה פלטי · PATH-LY",
        description: "הדרכת הורים מבוססת מחקר",
        publisher: { "@id": `${BASE_URL}/#person` },
        inLanguage: "he-IL",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <JsonLd />
      </head>
      <body className={rubik.className}>
        <SkipToContent />
        <ScrollReveal />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

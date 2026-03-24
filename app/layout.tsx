import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SkipToContent from "@/components/SkipToContent";

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
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <JsonLd />
      </head>
      <body>
        <SkipToContent />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var emojiRegex = /(?:\\u{1F600}-\\u{1F64F}|[\\u{1F300}-\\u{1F5FF}]|[\\u{1F680}-\\u{1F6FF}]|[\\u{1F900}-\\u{1F9FF}]|[\\u{1FA00}-\\u{1FA6F}]|[\\u{1FA70}-\\u{1FAFF}]|[\\u{2600}-\\u{27BF}]|[\\u{2300}-\\u{23FF}]|[\\u{2B50}]|[\\u{FE00}-\\u{FE0F}]|[\\u{200D}]|[\\u{20E3}]|[\\u{E0020}-\\u{E007F}]|[\\u{2702}-\\u{27B0}]|[\\u{1F1E0}-\\u{1F1FF}])+/gu;
                function toTwemojiUrl(emoji) {
                  var cp = [];
                  for (var i = 0; i < emoji.length; i++) {
                    var c = emoji.codePointAt(i);
                    if (c > 0xFFFF) i++;
                    if (c !== 0xFE0F) cp.push(c.toString(16));
                  }
                  return 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/' + cp.join('-') + '.svg';
                }
                function replaceEmojis(root) {
                  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
                  var nodes = [];
                  while (walker.nextNode()) nodes.push(walker.currentNode);
                  nodes.forEach(function(node) {
                    if (!node.textContent || node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE') return;
                    var text = node.textContent;
                    if (!emojiRegex.test(text)) return;
                    emojiRegex.lastIndex = 0;
                    var frag = document.createDocumentFragment();
                    var lastIdx = 0;
                    var match;
                    while ((match = emojiRegex.exec(text)) !== null) {
                      if (match.index > lastIdx) frag.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
                      var img = document.createElement('img');
                      img.className = 'emoji';
                      img.alt = match[0];
                      img.src = toTwemojiUrl(match[0]);
                      img.draggable = false;
                      frag.appendChild(img);
                      lastIdx = match.index + match[0].length;
                    }
                    if (lastIdx < text.length) frag.appendChild(document.createTextNode(text.slice(lastIdx)));
                    if (frag.childNodes.length > 0) node.parentNode.replaceChild(frag, node);
                  });
                }
                function run() { try { replaceEmojis(document.body); } catch(e) {} }
                setTimeout(run, 50);
                setTimeout(run, 300);
                setTimeout(run, 1000);
                setTimeout(run, 2500);
                if (typeof MutationObserver !== 'undefined') {
                  var t = null;
                  new MutationObserver(function() { clearTimeout(t); t = setTimeout(run, 100); })
                    .observe(document.documentElement, { childList: true, subtree: true });
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

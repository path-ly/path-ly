import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ארגז הכלים ההורי | 10 כלים מבוססי מחקר להדרכת הורים",
  description:
    "מודל ארגז הכלים ההורי: 10 כלים פרקטיים מבוססי מחקר להורות חומלת ומדויקת. חמלה עצמית, רפלקטיביות, משחקיות, חוסן רגשי ועוד. מאיה פלטי, פסיכולוגית חינוכית מומחית.",
  openGraph: {
    title: "ארגז הכלים ההורי — 10 כלים להורות מדויקת",
    description:
      "כלים פרקטיים מבוססי מחקר להורים לילדים בגיל 4-14. חמלה, רפלקטיביות, משחקיות, חוסן ועוד.",
    url: "https://www.path-ly.com/model",
  },
};

export default function ModelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

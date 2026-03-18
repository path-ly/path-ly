import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותים | הדרכת הורים · קליניקה באוסטין · זום לישראל",
  description:
    "הדרכת הורים אישית בקליניקה ב-Cedar Park, אוסטין TX, בזום לישראל ולכל העולם, והכשרות לאנשי מקצוע. מאיה פלטי, פסיכולוגית חינוכית מומחית.",
  openGraph: {
    title: "שירותי הדרכת הורים — מאיה פלטי",
    description:
      "קליניקה באוסטין TX, פגישות זום לישראל, והכשרות לצוותי חינוך. הדרכת הורים מותאמת אישית לילדים בגיל 4-14.",
    url: "https://www.path-ly.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

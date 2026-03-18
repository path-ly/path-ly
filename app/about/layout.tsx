import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות מאיה פלטי | פסיכולוגית חינוכית מומחית-מדריכה · 20 שנות ניסיון",
  description:
    "מאיה פלטי, פסיכולוגית חינוכית מומחית-מדריכה עם 20 שנות ניסיון. תואר שני בנוירופסיכולוגיה שיקומית. מפתחת ארגז הכלים ההורי. הדרכת הורים, אבחון, קשיי ויסות, הפרעות קשב וחוסן.",
  openGraph: {
    title: "מאיה פלטי — פסיכולוגית חינוכית מומחית",
    description:
      "20 שנות ניסיון בעבודה עם ילדים והוריהם. מפתחת ארגז הכלים ההורי. Cedar Park, Austin TX + זום לישראל.",
    url: "https://www.path-ly.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

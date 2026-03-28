import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ביסוס מחקרי | ארגז הכלים ההורי — מאיה פלטי",
  description: "המחקר מאחורי ארגז הכלים ההורי: רשימת מחקרים נבחרים לכל כלי עם הממצא המרכזי בעברית. מבוסס על מחקר בפסיכולוגיה התפתחותית, תיאוריית ההתקשרות ופסיכולוגיה חיובית.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

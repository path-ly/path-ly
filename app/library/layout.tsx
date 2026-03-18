import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הספרייה | שירים, שירה ומאמרים מקצועיים · מאיה פלטי",
  description:
    "ספריית תוכן מקצועית: שירים ושירה על הורות וילדות, מאמרים מקצועיים וחומרי העשרה בנושאי חינוך ופסיכולוגיה חינוכית.",
  openGraph: {
    title: "הספרייה — שירים, שירה וחומרים מקצועיים",
    description:
      "אוסף אישי של שירים, שירה ומאמרים על הורות, ילדות ופסיכולוגיה חינוכית. מאיה פלטי.",
    url: "https://www.path-ly.com/library",
  },
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

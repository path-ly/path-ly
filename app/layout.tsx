import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ד״ר מאיה פלטי | פסיכולוגית קלינית ומומחית להורות",
  description: "20 שנות ניסיון בפסיכולוגיה קלינית, הדרכת הורים, וייעוץ ארגוני. ארגז הכלים ההוריים.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

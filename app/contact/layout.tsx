import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צרו קשר | ייעוץ ראשוני חינם · מאיה פלטי",
  description:
    "צרו קשר עם מאיה פלטי לייעוץ ראשוני חינם (15 דקות). הדרכת הורים אישית בקליניקה באוסטין או בזום. טלפון, וואטסאפ ו-Calendly.",
  openGraph: {
    title: "צרו קשר — מאיה פלטי · הדרכת הורים",
    description:
      "ייעוץ ראשוני חינם, 15 דקות, ללא התחייבות. קליניקה באוסטין TX או זום לישראל ולכל העולם.",
    url: "https://www.path-ly.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

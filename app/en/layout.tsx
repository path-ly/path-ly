import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maya Palty | Parent Coaching for Israeli Families in the US",
  description:
    "Research-based parent coaching for Israeli families raising kids in America. 20+ years of experience, ages 3-15. Zoom sessions at convenient hours.",
  alternates: {
    canonical: "https://www.path-ly.com/en",
    languages: {
      "en-US": "https://www.path-ly.com/en",
      "he-IL": "https://www.path-ly.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.path-ly.com/en",
    siteName: "Maya Palty · PATH-LY",
    title: "Maya Palty | Parent Coaching for Israeli Families in the US",
    description:
      "Research-based parent coaching for Israeli families raising kids in America. 20+ years of experience. The Parental Toolbox — 10 practical tools.",
    images: [
      {
        url: "https://www.path-ly.com/maya-photo.png",
        width: 800,
        height: 600,
        alt: "Maya Palty — Educational Psychologist",
      },
    ],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" lang="en" style={{ direction: "ltr", textAlign: "left" }}>
      {children}
    </div>
  );
}

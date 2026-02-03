import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mangati | منصة قراءة المانجا والمانهوا",
  description: "منصة احترافية لقراءة المانجا والمانهوا مع تحديثات فورية وقارئ عمودي سريع.",
  openGraph: {
    title: "Mangati | منصة قراءة المانجا والمانهوا",
    description: "استكشف أشهر الأعمال وتابع الفصول الجديدة بسرعة.",
    locale: "ar_AR",
    type: "website"
  },
  metadataBase: new URL("https://mangati.example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
      </body>
    </html>
  );
}

import Script from "next/script";
import { Noto_Sans_Devanagari, Tiro_Devanagari_Hindi } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_NAME, chapters, shortTitle } from "@/data/chapters";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const sans = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], variable: "--font-sans", display: "swap" });
const serif = Tiro_Devanagari_Hindi({ subsets: ["devanagari", "latin"], weight: "400", variable: "--font-serif", display: "swap" });

const ADS = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME}: श्लोक, अर्थ और सार`, template: `%s | ${SITE_NAME}` },
  description: "चाणक्य नीति के श्लोक, सरल हिंदी अर्थ और जीवन-सार, अध्याय-दर-अध्याय। श्लोकों को फेंटकर नए क्रम में पढ़ें।",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "hi_IN", siteName: SITE_NAME, title: `${SITE_NAME}: श्लोक, अर्थ और सार`, description: "चाणक्य नीति के श्लोक, सरल हिंदी अर्थ और जीवन-सार।" },
  twitter: { card: "summary", title: `${SITE_NAME}: श्लोक, अर्थ और सार` },
};

export const viewport = { themeColor: "#7a1f2b" };

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${sans.variable} ${serif.variable}`}>
      <body>
        {ADS && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <Sidebar chapters={chapters.map((c) => ({ number: c.number, titles: c.slokas.map((s) => shortTitle(s.title)) }))} />
        <div className="content">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

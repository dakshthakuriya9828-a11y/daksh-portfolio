import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const handFont = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAKSH THAKURIYA | Aspiring Entrepreneur & Business Leader",
  description:
    "Official personal brand and executive portfolio of Daksh Thakuriya. Undergraduate scholar at IIM Bangalore and IIM Udaipur, National Gold Medalist in Roller Skating, CUET 99.79%ile, student leader, and aspiring venture builder based in Jaipur, Rajasthan, India.",
  keywords: [
    "Daksh Thakuriya",
    "Daksh Thakuriya Jaipur",
    "IIM Bangalore BBA DBE",
    "IIM Udaipur BBA",
    "Entrepreneurship",
    "Business Leadership",
    "National Gold Medalist Roller Skating",
    "CUET 99.79 Percentile",
    "Triangle Events and Caterers",
    "Student Leader",
  ],
  authors: [{ name: "Daksh Thakuriya" }],
  openGraph: {
    title: "DAKSH THAKURIYA — Aspiring Entrepreneur | Business & Leadership Enthusiast",
    description:
      "Driven by ambition. Built through experience. Focused on creating what comes next. Explore the journey, achievements, athletic rigor, and strategic vision of Daksh Thakuriya.",
    url: "https://dakshthakuriya.com",
    siteName: "Daksh Thakuriya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAKSH THAKURIYA — Aspiring Entrepreneur",
    description:
      "Undergraduate at IIM Bangalore & IIM Udaipur | National Gold Medalist | 50+ Institutional Events Anchored | Venture Builder",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} ${handFont.variable} dark`}
    >
      <body className="bg-brand-bg text-brand-text min-h-screen selection:bg-gold-500/30 selection:text-gold-300">
        {children}
      </body>
    </html>
  );
}

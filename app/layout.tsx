import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import ApolloTracker from "@/components/apollo-tracker";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Complimentary Trip · A Thank You from Ownly ONCE",
  description:
    "A personal thank-you from Dave Ivery and the Ownly ONCE team. Choose the complimentary getaway you'd like to enjoy — it's on us.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#FDFCF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <ApolloTracker />
        {children}
      </body>
    </html>
  );
}

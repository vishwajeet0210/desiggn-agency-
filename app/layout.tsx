import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://desiggn-v2.vercel.app"),

  title: {
    default: "DES!GGN | Creative Digital Agency",
    template: "%s | DES!GGN",
  },

  description:
    "Creative digital agency specializing in branding, UI/UX, web design, and premium digital experiences.",

  keywords: [
    "DES!GGN",
    "Creative Agency",
    "Web Design",
    "UI UX",
    "Branding",
    "Next.js",
    "Portfolio",
  ],

  authors: [{ name: "DES!GGN" }],
  creator: "DES!GGN",

  openGraph: {
    title: "DES!GGN",
    description:
      "Creative Digital Agency building premium digital experiences.",
    url: "https://desiggn-v2.vercel.app",
    siteName: "DES!GGN",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DES!GGN",
    description:
      "Creative Digital Agency building premium digital experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#050816] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
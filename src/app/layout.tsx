import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'CrispyCrunch | Premium Gourmet Chips',
  description: 'Experience the ultimate crunch with our farm-fresh, hand-crafted chips. Explore our signature flavors today.',
  openGraph: {
    "title": "CrispyCrunch | Premium Gourmet Chips",
    "description": "Discover the finest artisan chips made from farm-fresh ingredients.",
    "siteName": "CrispyCrunch",
    "type": "website"
  },
};

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

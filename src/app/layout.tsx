import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import "./fonts.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Oudom's site",
  description: "Oudom portfolio website",
  icons: {
    icon: "/drill.svg",
    apple: "/drill.svg",
    shortcut: "/drill.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} antialiased`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}

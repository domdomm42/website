import type { Metadata } from "next";
import { Instrument_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import { ThemeProvider } from "../components/ThemeProvider";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
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

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${instrumentSerif.variable} ${sourceSerif.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}

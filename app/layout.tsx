import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/navbar/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { siteConfig } from "@/config/site-config";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [
    {
      url: "/tanay.png",
      href: "/tanay.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Navbar />
            <main className="pt-36 md:pt-40 pb-20">{children}</main>
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

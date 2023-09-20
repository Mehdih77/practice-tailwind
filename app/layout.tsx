import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";
const firaSans = Fira_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Css",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={firaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Plaster, Prompt } from "next/font/google";
import "./globals.css";

import { ProductMenuProvider } from "@/context/ProductMenuContext";
import MainContentWrapper from "@/Component/MainContentWrapper";

import NavBar from "@/Component/Navbar";
import Footer from "@/Component/Footer";


const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-prompt',
});
const plaster = Plaster({
  weight: ['400'], // Plaster มีแค่ weight 400 (Regular)
  subsets: ['latin'], // Plaster ไม่มี subset 'thai'
  display: 'swap',
  variable: '--font-plaster', // กำหนด CSS variable สำหรับ Plaster
});

export const metadata: Metadata = {
  title: 'Eis Shop',
  description: 'เว็บไซต์สำหรับคนที่อยากหาคนช่วยกดสั่งของ preorder ',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'pwa', 'web app'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${prompt.variable} ${plaster.variable}`}>
      <body className={`${prompt.className}`}>
         <ProductMenuProvider>
        {children}
</ProductMenuProvider>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Plaster, Prompt } from "next/font/google";
import "./globals.css";

import { ProductMenuProvider } from "@/context/ProductMenuContext";
import { PreOrderModalProvider } from "@/context/PreOrderModalContext";


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
          <PreOrderModalProvider>
            {children}
          </PreOrderModalProvider>
        </ProductMenuProvider>
      </body>
    </html>
  );
}

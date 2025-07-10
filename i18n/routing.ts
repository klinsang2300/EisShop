// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing'; // นำเข้า defineRouting จาก next-intl/routing

// รายการ Locale ทั้งหมดที่แอปพลิเคชันรองรับ
export const locales = ['en', 'th']; // ควรตรงกับ locales ที่คุณใช้ใน NextIntlClientProvider

// Locale เริ่มต้นที่จะใช้เมื่อไม่มีการระบุ Locale
export const defaultLocale = 'en'; // ควรเป็นหนึ่งใน locales ข้างบน

// กำหนด Pathnames สำหรับการ Routing
// Key คือ Path ที่คุณต้องการให้ผู้ใช้เข้าถึง หรือ Path ที่ถูก Rewrite ภายใน
// Value คือ Path ที่ตรงกันในแต่ละ Locale (ถ้าเป็น Object) หรือ Path เดียวกันสำหรับทุก Locale (ถ้าเป็น String)
export const pathnames = {
  // หน้า Home (ไม่มี Locale Prefix): ผู้ใช้เข้าถึงที่ / และจะไปแสดงผลจาก app/(main)/page.tsx
  '/': '/',
  // หน้า Product Index (ไม่มี Locale Prefix): ผู้ใช้เข้าถึงที่ /product และจะไปแสดงผลจาก app/(main)/product/page.tsx
  '/product': '/product',
  // หน้า Product รายละเอียดแบบ Dynamic (ไม่มี Locale Prefix): ผู้ใช้เข้าถึงที่ /product/some-band-slug
  // จะไปแสดงผลจาก app/(main)/product/[bandSlug]/page.tsx
  '/product/[bandSlug]': '/product/[bandSlug]',

  // หน้า Login (มี Locale Prefix):
  // ผู้ใช้เข้าถึงที่ /login จะถูก Middleware Redirect ไป /en/login (ถ้า defaultLocale เป็น en)
  // หรือผู้ใช้เข้าถึงที่ /en/login, /th/login โดยตรง
  // และจะถูก next-intl Rewrite ภายในเพื่อไปหา page.tsx ที่ app/[locale]/(auth)/login/page.tsx
  '/login': { en: '/login', th: '/login' },

  // หน้า Signup (มี Locale Prefix) - ทำงานคล้ายกับ Login
  '/signup': { en: '/signup', th: '/signup' },
};

// ใช้ defineRouting เพื่อรวม Configuration ทั้งหมดเข้าด้วยกัน
// ซึ่งจะถูกนำไปใช้โดย next-intl middleware และ Navigation APIs
export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames,
});
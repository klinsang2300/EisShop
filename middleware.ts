// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/routing';
// ไม่ต้อง import { URLPattern } from 'next/server'; แล้ว เพราะเราจะไม่ใช้ตรงๆ ในการ test dynamic paths


const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // จะเติม locale prefix เมื่อจำเป็น
  localeDetection: false, // ปิดการตรวจจับ locale อัตโนมัติจาก browser
});

// Paths สำหรับ Authentication ที่จะถูก Redirect/Rewrite ถ้าเข้าถึงโดยไม่มี Locale Prefix
const authPathsWithoutLocale = ['/login', '/signup'];

// Paths ที่ต้องการให้ "ข้าม" การประมวลผล Locale โดย next-intl middleware
// เนื่องจากเราต้องการให้ Path เหล่านี้ไม่มี Locale Prefix และถูกจัดการโดย app/(main)
const nonLocaleExactPaths = [ // สำหรับ Exact Match Paths
    '/',
    '/product',
];

// Paths สำหรับ Dynamic Routes ที่ต้องการให้ "ข้าม" Locale Prefix
// เราจะใช้ String startsWith() แทน URLPattern เพราะ URLPattern ดูเหมือนจะทำงานไม่สมบูรณ์
const nonLocaleDynamicPathPrefixes = [
    '/product/', // สำหรับ /product/BTS, /product/Tw7
];


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(`[Middleware] Request received for: ${pathname}`);
  console.log(`[Middleware] Full URL: ${request.url}`);
  console.log(`[Middleware] Method: ${request.method}`);
  console.log(`[Middleware] Query Params: ${request.nextUrl.searchParams.toString()}`);

  // 1. จัดการ Static Assets และ Internal Next.js Files
  if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname.startsWith('/Bts/') || // รูปภาพของคุณ
      pathname.includes('.') ||        // ไฟล์ที่มีนามสกุลอื่นๆ (.css, .js, .json, .png, etc.)
      pathname.startsWith('/manifest.json') ||
      pathname.startsWith('/.well-known/')
  ) {
      console.log(`[Middleware] Skipping next-intl middleware for static/internal asset: ${pathname}`);
      return NextResponse.next();
  }

  // 2. ตรวจสอบว่า Path เป็น Non-Locale Path หรือไม่
  //    - ตรวจสอบ Exact Paths ก่อน
  const isExactNonLocalePath = nonLocaleExactPaths.includes(pathname);

  //    - ตรวจสอบ Dynamic Paths โดยใช้ startsWith
  //      เช่น ถ้า pathname คือ /product/BTS, จะตรงกับ '/product/'
  const isDynamicNonLocalePath = nonLocaleDynamicPathPrefixes.some(prefix => pathname.startsWith(prefix));

  //    - ตรวจสอบว่า Path ปัจจุบันมี Locale Prefix อยู่แล้วหรือไม่
  const hasLocalePrefix = locales.some(locale => pathname.startsWith(`/${locale}/`));

  //    - ถ้าเป็น Non-Locale Path (Exact หรือ Dynamic) และยังไม่มี Locale Prefix
  const shouldSkipNextIntl = (isExactNonLocalePath || isDynamicNonLocalePath) && !hasLocalePrefix;


  if (shouldSkipNextIntl) {
      console.log(`[Middleware] Handling non-locale path: ${pathname}. Skipping nextIntlMiddleware.`);
      return NextResponse.next(); // ปล่อยให้ Next.js จัดการ Route นี้โดยตรง
  }


  // 3. จัดการ Path ที่เป็น Auth ที่ต้องการ Locale Prefix
  //    (ถ้า Request ยังไม่ถูกข้ามในขั้นตอนก่อนหน้า)
  if (authPathsWithoutLocale.includes(pathname)) {
    console.log(`[Middleware] Handling auth path without locale: ${pathname}`);
    return nextIntlMiddleware(request); // ให้ next-intl จัดการการ redirect/rewrite ไปยัง default locale
  }

  // 4. สำหรับ Path อื่นๆ ทั้งหมดที่คาดว่าจะมี Locale Prefix หรือควรถูกจัดการโดย next-intl
  const response = nextIntlMiddleware(request);
  console.log(`[Middleware] nextIntlMiddleware processed, status: ${response.status}`);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/internal|favicon.ico|manifest.json|.well-known|Bts).*)',
  ],
};
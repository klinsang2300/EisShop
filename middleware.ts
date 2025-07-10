// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, pathnames } from './i18n/routing'; // <--- Path นี้ถูกต้องสำหรับโครงสร้างของคุณ

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames,
});

// Paths สำหรับ Authentication ที่จะถูก Redirect/Rewrite ถ้าเข้าถึงโดยไม่มี Locale Prefix
const authPathsWithoutLocale = ['/login', '/signup'];

// Paths ที่ต้องการให้ "ข้าม" การประมวลผล Locale โดย next-intl middleware
// เนื่องจากเราต้องการให้ Path เหล่านี้ไม่มี Locale Prefix และถูกจัดการโดย app/(main)
const nonLocalePaths = [
    '/', // <--- หน้า Home
    '/product',
    '/product/[bandSlug]',
    // เพิ่ม Path อื่นๆ ที่อยู่ใน app/(main) ที่ไม่ต้องการ locale prefix ที่นี่
];


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(`[Middleware] Request received for: ${pathname}`);
  console.log(`[Middleware] Full URL: ${request.url}`);
  console.log(`[Middleware] Method: ${request.method}`);
  console.log(`[Middleware] Query Params: ${request.nextUrl.searchParams.toString()}`);
  // สำหรับ headers ที่ละเอียดแบบนั้น ลอง console.log(request.headers) แล้วค่อยๆ ดูใน Object
  // หรือใช้ request.headers.get('header-name') เพื่อดึงค่าที่ต้องการ


  // ขั้นแรก: จัดการ Static Assets และ Internal Next.js Files
  // ถ้าเป็น Path เหล่านี้ ไม่ต้องให้ next-intl middleware เข้าไปยุ่ง
  if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname.startsWith('/Bts/') || // รูปภาพของคุณ
      pathname.includes('.') ||       // ไฟล์ที่มีนามสกุลอื่นๆ (.css, .js, .json, .png, etc.)
      pathname.startsWith('/manifest.json') ||
      pathname.startsWith('/.well-known/')
  ) {
      console.log(`[Middleware] Skipping next-intl middleware for static/internal asset: ${pathname}`);
      return NextResponse.next(); // ปล่อยให้ Next.js จัดการ
  }

  // ขั้นที่สอง: จัดการ Path ที่เราต้องการให้ไม่มี Locale Prefix
  // ถ้า Path ที่เข้ามาอยู่ใน nonLocalePaths และไม่มี Locale Prefix (เช่น '/')
  // ให้ปล่อยผ่านไปยัง Next.js โดยตรง เพื่อให้ app/(main)/page.tsx จัดการ
  // โดยไม่ต้องให้ next-intl middleware ทำการ Rewrite
  if (nonLocalePaths.includes(pathname) && !locales.some(locale => pathname.startsWith(`/${locale}/`))) {
      console.log(`[Middleware] Handling non-locale path: ${pathname}. Skipping nextIntlMiddleware.`);
      return NextResponse.next();
  }


  // ขั้นที่สาม: จัดการ Path ที่เป็น Auth ที่ต้องการ Locale Prefix
  // ถ้า Request มาที่ Path ที่อยู่ใน authPathsWithoutLocale โดยตรง (ไม่มี locale prefix)
  // ให้ next-intl จัดการการ redirect ไปยัง default locale (เช่น /login -> /en/login)
  if (authPathsWithoutLocale.includes(pathname)) {
    console.log(`[Middleware] Handling auth path without locale: ${pathname}`);
    return nextIntlMiddleware(request); // next-intl จะทำการ redirect/rewrite ให้
  }

  // ขั้นสุดท้าย: สำหรับ Path อื่นๆ ทั้งหมดที่คาดว่าจะมี Locale Prefix หรือควรถูกจัดการโดย next-intl
  // ให้ next-intl middleware จัดการการ Rewrite หรือการแสดงผลตามปกติ
  const response = nextIntlMiddleware(request);
  console.log(`[Middleware] nextIntlMiddleware processed, status: ${response.status}`);
  
  return response;
}

export const config = {
  // Matcher เพื่อให้ middleware เห็นเฉพาะ request ที่เราต้องการให้มันจัดการ
  // และยกเว้น Path ที่เราไม่ต้องการให้มันยุ่ง
  matcher: [
    // Match all paths except those starting with:
    // - /api (API routes)
    // - /_next/static (Next.js static assets)
    // - /_next/image (Next.js image optimization files)
    // - /_next/internal (Next.js internal files)
    // - /favicon.ico (Favicon)
    // - /manifest.json (PWA manifest)
    // - /.well-known (Standard web paths)
    // - /Bts (โฟลเดอร์รูปภาพของคุณใน public)
    '/((?!api|_next/static|_next/image|_next/internal|favicon.ico|manifest.json|.well-known|Bts).*)',
  ],
};

import type { NextConfig } from "next";
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public', // ตำแหน่งที่จะสร้างไฟล์ PWA
  register: true, // ลงทะเบียน Service Worker
  skipWaiting: true, // ข้ามขั้นตอนการรอ Service Worker ใหม่
  disable: process.env.NODE_ENV === 'development', // ปิดการใช้งาน PWA ในโหมดพัฒนา
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;


import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public', // ตำแหน่งที่จะสร้างไฟล์ PWA
  register: true, // ลงทะเบียน Service Worker
  skipWaiting: true, // ข้ามขั้นตอนการรอ Service Worker ใหม่
  disable: process.env.NODE_ENV === 'development', // ปิดการใช้งาน PWA ในโหมดพัฒนา
});


const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withPWA(nextConfig);

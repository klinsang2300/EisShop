
const config = {
  plugins: {
    // ใช้ Object syntax สำหรับ plugins
    "@tailwindcss/postcss": {}, // <-- **ลองเปลี่ยนกลับมาใช้แบบนี้**
    "autoprefixer": {}, // <-- แนะนำให้ใส่ autoprefixer ด้วยเสมอ
  },
};

export default config;
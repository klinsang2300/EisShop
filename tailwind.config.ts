// tailwind.config.ts
import type { Config } from 'tailwindcss'; // แนะนำให้ import type Config เพื่อให้ได้ Type Checking

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-custom-gradient-gray': 'linear-gradient(to left, rgba(128, 179, 255, 0.3) 0%, rgba(228, 239, 255, 0.3) 32%, rgba(228, 239, 255, 0.3) 64%, rgba(128, 179, 255, 0.3) 100%)',
        'my-custom-gradient-red': 'linear-gradient(to right, rgba(93, 4, 3, 1) 0%, rgba(187, 187, 187, 1) 52%, rgba(92, 2, 1, 1) 100%)',
      },
    },
  },
  plugins: [],
};

export default config; // ใช้ export default แทน module.exports
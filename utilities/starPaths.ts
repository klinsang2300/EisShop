// utilities/starPaths.ts

export type StarType = 'full' | 'half' | 'outline';

interface StarPathData {
  d: string;
  viewBox: string;
}

export const STAR_PATHS: Record<StarType, StarPathData> = {
  full: {
    // Path Data ของดาวเต็ม
    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
    viewBox: "0 0 24 24"
  },
  half: {
    // ใช้ Path Data ของดาวเต็มเหมือนกัน แต่จะถูก clip ใน CustomStar.tsx
    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
    viewBox: "0 0 24 24"
  },
  outline: {
    // Path Data ของดาวเปล่า (ยังคงเป็นโครงดาวเหมือนเดิม)
    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
    viewBox: "0 0 24 24"
  }
};
// components/CustomStar.tsx
import { STAR_PATHS, StarType } from '@/utilities/starPaths';
import React from 'react';

interface CustomStarProps {
  type: StarType;
  size?: number;
  gradientColors?: [string, string]; // สำหรับดาวเต็มและครึ่งเท่านั้น
  emptyStarColor?: string; // สำหรับดาวเปล่าและส่วนที่เหลือของดาวครึ่ง
  uniqueId: string; // ID ที่ไม่ซ้ำกันสำหรับ gradient และ clipPath
}

const CustomStar: React.FC<CustomStarProps> = ({
  type,
  size = 24,
  gradientColors,
  emptyStarColor = '#ccc', // กำหนด default color ตรงนี้
  uniqueId
}) => {
  const starData = STAR_PATHS[type];

  if (!starData) {
    console.warn(`Star type "${type}" not found in STAR_PATHS.`);
    return null;
  }

  const gradientId = `star-gradient-${uniqueId}`;
  const clipPathId = `star-clip-${uniqueId}`;

  // กำหนด fill และ stroke สำหรับ <path>
  let pathFill: string = 'none'; // Default to no fill
  let pathStroke: string | undefined = undefined; // Default to no stroke
  let strokeWidth: number | undefined = undefined; // Default stroke width

  if (type === 'full') {
    pathFill = gradientColors ? `url(#${gradientId})` : (emptyStarColor || 'currentColor');
  } else if (type === 'half') {
    // สำหรับดาวครึ่งดวง เราจะ Render 2 Path:
    // 1. ดาวเปล่าเป็นพื้นหลัง
    // 2. ดาวเต็มที่มี gradient/สีด้านหน้า ถูก clip ครึ่งนึง
  } else { // type === 'outline'
    pathFill = 'none'; // ดาวเปล่าไม่มี fill
    pathStroke = emptyStarColor || 'currentColor'; // ใช้สีสำหรับเส้นขอบ
    strokeWidth = 1.5; // กำหนดความหนาของเส้นขอบ
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={starData.viewBox}
      className="custom-star-svg"
      role="img"
      aria-label={`${type} star`}
    >
      <defs>
        {/* Linear Gradient สำหรับดาวเต็มและส่วนที่มีสีของดาวครึ่ง */}
        {(type === 'full' || type === 'half') && gradientColors && (
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        )}

        {/* Clip Path สำหรับดาวครึ่ง */}
        {type === 'half' && (
          <clipPath id={clipPathId}>
            {/* สี่เหลี่ยมที่ตัดครึ่งจากซ้ายไปขวา (ครึ่งซ้าย) */}
            <rect x="0" y="0" width={size / 2} height={size} />
          </clipPath>
        )}
      </defs>

      {/* Render Path Data ของดาว */}
      {type === 'half' ? (
        <>
          {/* Path ของดาวเปล่าเป็นพื้นหลัง */}
          <path
            d={STAR_PATHS.full.d} // ใช้ path ของดาวเต็ม
            fill={emptyStarColor} // เติมด้วยสีเทาสำหรับดาวเปล่า
          />
          {/* Path ของดาวเต็มที่มี gradient/สี และถูก clip ด้วย clipPathId */}
          <path
            d={STAR_PATHS.full.d} // ใช้ path ของดาวเต็ม
            fill={gradientColors ? `url(#${gradientId})` : (emptyStarColor || 'currentColor')}
            clipPath={`url(#${clipPathId})`} // ใช้ clipPath ที่สร้างไว้
          />
        </>
      ) : (
        <path
          d={starData.d}
          fill={pathFill}
          stroke={pathStroke}
          strokeWidth={strokeWidth}
        />
      )}
    </svg>
  );
};

export default CustomStar;
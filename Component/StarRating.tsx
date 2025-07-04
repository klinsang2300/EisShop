// components/StarRating.tsx
'use client';
import React, { JSX, useId } from 'react';
import CustomStar from './CustomStar'; // นำเข้า CustomStar Component

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  gradientColors?: [string, string]; // สีสำหรับดาวเต็ม
  emptyStarColor?: string; // สีสำหรับดาวเปล่า/ครึ่ง
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  gradientColors = ['#FFD700', '#FFA500'], // Default gradient gold to orange
  emptyStarColor = '#ccc' // Default color for empty/half stars
}) => {
  const stars: JSX.Element[] = [];
  const fullStars: number = Math.floor(rating);
  const hasHalfStar: boolean = rating % 1 !== 0;

  const baseId = useId();

  for (let i: number = 1; i <= totalStars; i++) {
    const isSolid = i <= fullStars;
    const isHalf = hasHalfStar && i === fullStars + 1;

    const uniqueStarId = `${baseId}-${i}`;

    if (isSolid) {
      stars.push(
        <CustomStar
          key={i}
          type="full"
          gradientColors={gradientColors}
          emptyStarColor={emptyStarColor} // เพิ่ม emptyStarColor ให้ดาวเต็มเผื่อกรณีไม่มี gradientColors
          uniqueId={uniqueStarId}
        />
      );
    } else if (isHalf) {
      stars.push(
        <CustomStar
          key={i}
          type="half"
          emptyStarColor={emptyStarColor} // <--- แก้ตรงนี้จาก 'color' เป็น 'emptyStarColor'
          gradientColors={gradientColors} // ส่ง gradientColors ไปให้ดาวครึ่งด้วย
          uniqueId={uniqueStarId}
        />
      );
    } else {
      stars.push(
        <CustomStar
          key={i}
          type="outline"
          emptyStarColor={emptyStarColor} // <--- แก้ตรงนี้จาก 'color' เป็น 'emptyStarColor'
          uniqueId={uniqueStarId}
        />
      );
    }
  }

  return <div className="review-star-container flex">{stars}</div>;
};

export default StarRating;
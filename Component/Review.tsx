
'use client'
import React from "react";
import StarRating from './StarRating'; // ตรวจสอบเส้นทางให้ถูกต้อง
import './Css/Review.css'

interface ReviewItem {
    name: string;
    rating: number;
    reviewDetail: string; 
}

// กำหนด Type สำหรับ Props ของ Review Component
interface ReviewProps {
    reviews: ReviewItem[]; // เปลี่ยนชื่อ prop จาก rating เป็น reviews เพื่อความชัดเจน
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
    return (
        <div className="content">
            <label className="review-name">REVIEW</label>
            <div className="review-main">
                {reviews.map((item, index) => ( // เพิ่ม index เป็น key หรือใช้ item.name, item.id ถ้ามี

                    <div key={index} className={`review-card ${index === 1 ? "scale-115" : 'scale-95'} `}>
                        <div className="review-header">
                            <p className="reviewer-name">{item.name}</p>
                            <div className="review-star">
                                {/* เรียกใช้ StarRating Component ตรงๆ */}
                                <StarRating
                                    rating={item.rating} />
                            </div>
                        </div>
                        <div className="review-detail-wrapper">

                            <p className="review-text">{item.reviewDetail}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Review;
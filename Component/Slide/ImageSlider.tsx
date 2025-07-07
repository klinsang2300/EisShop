'use client';

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Slide.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SlideImage {
    src: string | StaticImageData;
    alt: string;
}

interface ImageSliderProps {
    images: SlideImage[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    autoPlay = false,
    autoPlayInterval = 4000,
}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    // สถานะใหม่สำหรับเก็บ index ของรูปภาพ "ก่อนหน้า" ที่กำลังเฟดออก
    // เริ่มต้นเป็น null หรือ -1 เพื่อระบุว่ายังไม่มีภาพก่อนหน้า
    const [previousSlideIndex, setPreviousSlideIndex] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // refs สำหรับ div ของแต่ละ slide (เพื่อจัดการ animation/class)
    const currentSlideRef = useRef<HTMLDivElement>(null);
    const previousSlideRef = useRef<HTMLDivElement>(null);

    // ฟังก์ชันหลักในการเปลี่ยนสไลด์พร้อมแอนิเมชัน
    const goToSlideWithAnimation = useCallback((newIndex: number) => {
        if (isTransitioning || newIndex === currentSlideIndex) return;
        setIsTransitioning(true);

        // 1. ตั้งค่ารูปภาพปัจจุบันให้เป็นรูปภาพ "ก่อนหน้า"
        setPreviousSlideIndex(currentSlideIndex);


        // 2. หน่วงเวลาเล็กน้อยเพื่อให้ React อัปเดต DOM และแสดงรูปภาพเก่าใน div "previous"
        setTimeout(() => {
            console.log(previousSlideRef.current)
            if (previousSlideRef.current) {
                // เริ่ม animation fade-out บน div รูปภาพเก่า
                previousSlideRef.current.classList.add('fade-out');
            }

            // 3. เปลี่ยน index ของรูปภาพ "ปัจจุบัน"
            setCurrentSlideIndex(newIndex);
            
            // 4. ตั้งค่าให้ div รูปภาพปัจจุบันเริ่ม fade-in
            // Note: เนื่องจาก div รูปภาพปัจจุบันถูกสร้างขึ้นใหม่เมื่อ currentSlideIndex เปลี่ยน
            // เราจะใช้ keyframes ที่ถูกกำหนดไว้ใน CSS เพื่อให้มันเริ่ม fade-in ทันทีที่ถูก render
            // ไม่ต้อง add class 'fade-in' ตรงนี้โดยตรง เพราะ animation จะเริ่มเมื่อ element ปรากฏ

            const animationDuration = 1000; // ระยะเวลาของ animation (ควรตรงกับ CSS)

            // 5. หลังจาก animation ของรูปภาพเก่าเสร็จสิ้น
            setTimeout(() => {
                setPreviousSlideIndex(null); // ลบรูปภาพเก่าออกจาก DOM
                setIsTransitioning(false); // สิ้นสุดสถานะ transitioning
            }, animationDuration); // ระยะเวลาที่รูปเก่าเฟดออก (ควรตรงกับ animation duration ใน CSS)

        }, 0); 

    }, [currentSlideIndex, isTransitioning]);

    const goToNextSlide = useCallback(() => {
        goToSlideWithAnimation((currentSlideIndex + 1) % images.length);
    }, [currentSlideIndex, images.length, goToSlideWithAnimation]);

    const goToPrevSlide = useCallback(() => {
        goToSlideWithAnimation((currentSlideIndex - 1 + images.length) % images.length);
    }, [currentSlideIndex, images.length, goToSlideWithAnimation]);

    const goToSlide = useCallback((index: number) => {
        goToSlideWithAnimation(index);
    }, [goToSlideWithAnimation]);

    // Effect สำหรับ AutoPlay
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (autoPlay && !isTransitioning) {
            interval = setInterval(goToNextSlide, autoPlayInterval);
        }
        return () => {
            if (interval)
                clearInterval(interval);
        };
    }, [autoPlay, autoPlayInterval, isTransitioning, goToNextSlide]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="slider-container">
            <div className="slider-con">
                <button className="slider-arrow prev" onClick={goToPrevSlide} disabled={isTransitioning}>
                    <IoIosArrowBack/>
                </button>
                <div className="slider-image-wrapper">
                    <div 
                        key={`current-slide-div-${currentSlideIndex}`} 
                        ref={currentSlideRef} 
                        className={`slide-item current-slide`}
                    >
                        <Image
                            src={images[currentSlideIndex].src}
                            alt={images[currentSlideIndex].alt}
                            className="slide-image"
                        />
                    </div>

                    {/* DIV สำหรับรูปภาพเก่าที่กำลังเฟดออก */}
                    {previousSlideIndex !== null && (
                        <div 
                            key={`previous-slide-div-${previousSlideIndex}`} 
                            ref={previousSlideRef} 
                            className={`slide-item previous-slide `}
                        >
                            <Image
                                src={images[previousSlideIndex].src}
                                alt={images[previousSlideIndex].alt}                           
                                className="slide-image"
                            />
                        </div>
                    )}
                </div>
                <button className="slider-arrow next" onClick={goToNextSlide} disabled={isTransitioning}>
                    <IoIosArrowForward/>
                </button>
            </div>
            {/* Pagination Dots */}
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        style={{ cursor: isTransitioning ? 'not-allowed' : 'pointer' }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
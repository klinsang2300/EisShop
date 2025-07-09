// components/ImageSlider/ImageSlider.tsx
'use client'; // กำหนดให้เป็น Client Component

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import sty from './css/Slide.module.css'; // Import CSS Modules

interface ImageSliderProps {
    slides: SlideContent[];
}
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SlideContent } from '@/types/product';
const AUTO_PLAY_INTERVAL = 4000;
const SlidePorduct: React.FC<ImageSliderProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [previousSlideIndex, setPreviousSlideIndex] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Refs สำหรับ div ของ imageWrapper ของสไลด์เก่า (ที่กำลังจะเฟดออก)
    const previousLeftImageRef = useRef<HTMLDivElement>(null);
    const previousRightImageRef = useRef<HTMLDivElement>(null);


    // ฟังก์ชันหลักในการเปลี่ยนสไลด์พร้อมแอนิเมชัน
    const goToSlideWithAnimation = useCallback((newIndex: number) => {
        if (isTransitioning || newIndex === currentSlideIndex) return;

        setIsTransitioning(true);
        setPreviousSlideIndex(currentSlideIndex); // เก็บ index ของรูปเก่า

        // ตั้งเวลาเล็กน้อยเพื่อให้ React อัปเดต DOM พร้อมรูปภาพเก่า
        // ก่อนที่เราจะสั่งให้มัน fade-out
        setTimeout(() => {
            if (previousLeftImageRef.current) {
                previousLeftImageRef.current.classList.add(sty['fade-out']);
            }
            if (previousRightImageRef.current) {
                previousRightImageRef.current.classList.add(sty['fade-out']);
            }

            // ตั้งค่า index รูปภาพใหม่
            setCurrentSlideIndex(newIndex);

            const animationDurationMs = 1000; // ควรตรงกับ CSS animation duration

            // เมื่อ animation ของรูปเก่าเสร็จสิ้น
            setTimeout(() => {
                setPreviousSlideIndex(null); // ลบรูปภาพเก่าออกจาก DOM
                setIsTransitioning(false); // สิ้นสุดสถานะ transitioning
            }, animationDurationMs);

        }, 1000); // หน่วงเวลาเล็กน้อยให้ DOM อัปเดตก่อนใส่ class
    }, [currentSlideIndex, isTransitioning]);

    const goToNextSlide = useCallback(() => {
        goToSlideWithAnimation((currentSlideIndex + 1) % slides.length);
    }, [currentSlideIndex, slides.length, goToSlideWithAnimation]);

    const goToPrevSlide = useCallback(() => {
        goToSlideWithAnimation((currentSlideIndex - 1 + slides.length) % slides.length);
    }, [currentSlideIndex, slides.length, goToSlideWithAnimation]);
    const goToSlide = useCallback((index: number) => {
        goToSlideWithAnimation(index);
    }, [goToSlideWithAnimation]);
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isTransitioning && slides.length > 1) {
            interval = setInterval(goToNextSlide, AUTO_PLAY_INTERVAL);
        }
        return () => {
            if (interval)
                clearInterval(interval);
        }
    }, [slides.length, isTransitioning, goToNextSlide])
    const currentSlideData = slides[currentSlideIndex];
    const previousSlideData = previousSlideIndex !== null ? slides[previousSlideIndex] : null;

    return (
        <div className={sty.sliderContainer}>
            <div className={sty.slidesWrapper}>
                <div
                    key={`current-left-${currentSlideIndex}`}
                    className={`${sty.imageWrapper} ${sty.left} ${sty['fade-in']}`}
                >
                    <Image
                        src={currentSlideData.image1.src}
                        alt={currentSlideData.image1.alt}
                        fill
                        className={sty.slideImage}
                    />
                </div>
                <div
                    key={`current-right-${currentSlideIndex}`}
                    className={`${sty.imageWrapper} ${sty.right} ${sty['fade-in']}`}
                >
                    <Image
                        src={currentSlideData.image2.src}
                        alt={currentSlideData.image2.alt}
                        fill
                        className={sty.slideImage}
                    />
                </div>
                 {previousSlideData && (
                    <div className={`${sty.slidePage} ${sty['previous-slide-overlay']}`}>
                        <div
                            key={`previous-left-${previousSlideIndex}`}
                            ref={previousLeftImageRef}
                            className={`${sty.imageWrapper} ${sty.left}`}
                        >
                            <Image
                                src={previousSlideData.image1.src}
                                alt={previousSlideData.image1.alt}
                                fill
                                className={sty.slideImage}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div
                            key={`previous-right-${previousSlideIndex}`}
                            ref={previousRightImageRef}
                            className={`${sty.imageWrapper} ${sty.right}`}
                        >
                            <Image
                                src={previousSlideData.image2.src}
                                alt={previousSlideData.image2.alt}
                                fill
                                className={sty.slideImage}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                )}
                <button
                    className={`${sty.navButton} ${sty.prevButton}`}
                    onClick={goToPrevSlide}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    className={`${sty.navButton} ${sty.nextButton}`}
                    onClick={goToNextSlide}
                >
                    <IoIosArrowForward />
                </button>
            </div>






            {/* Indicators/Dots */}
            <div className={sty.dotsContainer}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${sty.dot} ${index === currentSlideIndex ? sty.active : ''}`}
                        onClick={() => setCurrentSlideIndex(index)}
                    ></span>
                ))}
            </div>
        </div >
    );
};

export default SlidePorduct;
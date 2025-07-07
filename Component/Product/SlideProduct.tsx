// components/ImageSlider/ImageSlider.tsx
'use client'; // กำหนดให้เป็น Client Component

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sty from './css/Slide.module.css'; // Import CSS Modules

interface ImageSliderProps {
    slides: SlideContent[]; 
}
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SlideContent } from '@/types/product';

const SlidePorduct: React.FC<ImageSliderProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };
 
    return (
        <div className={sty.sliderContainer}>
            <div className={sty.slidesWrapper}>
                {/* รูปภาพที่ 1 */}
                <div className={`${sty.imageWrapper} ${sty.left}`}>
                    <Image
                        src={slides[currentSlideIndex].image1.src}
                        alt={slides[currentSlideIndex].image1.alt}
                        fill
                        className={sty.slideImage}
                    />
                </div>
                {/* รูปภาพที่ 2 */}
                <div className={`${sty.imageWrapper} ${sty.right}`}>
                    <Image
                        src={slides[currentSlideIndex].image2.src}
                        alt={slides[currentSlideIndex].image2.alt}
                        fill
                        className={sty.slideImage}
                    />
                </div>

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
        </div>
    );
};

export default SlidePorduct;
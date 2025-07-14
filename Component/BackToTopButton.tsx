// components/BackToTopButton.tsx
'use client'; // <--- ต้องมีบรรทัดนี้

import React, { useState, useEffect } from 'react';
import { LuCircleArrowUp } from 'react-icons/lu';

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <> 
      {showButton && (
        <div
          className="icon-to-top"
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          aria-label="Scroll to top"
        >
          <LuCircleArrowUp />
        </div>
      )}
    </>
  );
}
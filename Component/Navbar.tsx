// components/NavBar.tsx
'use client'
import React, { useEffect, useRef } from 'react'; // <-- Import useRef ด้วย
import Link from 'next/link';
import Image from 'next/image';
import './Css/NavBar.css'; // ตรวจสอบชื่อไฟล์ CSS ให้ถูกต้อง

// Import รูปภาพ (ตรวจสอบ Path ให้ถูกต้อง)
import rec1 from '@/public/rec1.png';
import rec2 from '@/public/rec2.png';
import rec3 from '@/public/rec3.png';
import rec4 from '@/public/rec4.png';

// Import Context Hook
import { useProductMenu } from '@/context/ProductMenuContext';
import { RiArrowDownSFill } from 'react-icons/ri';
import { usePreOrderModal } from '@/context/PreOrderModalContext';

const NavBar: React.FC = () => {
  const { isProductMenuOpen, setIsProductMenuOpen } = useProductMenu();
  const menuLeaveTimeout = useRef<NodeJS.Timeout | null>(null); // สำหรับ delay การปิดเมนู
    const {openPreOrderModal} = usePreOrderModal();
  const handleMouseEnterNavProductItem = () => {
    // เมื่อเมาส์เข้าที่ li ที่ครอบปุ่ม PRODUCT หรือตัว Dropdown
    if (menuLeaveTimeout.current) {
      clearTimeout(menuLeaveTimeout.current);
      menuLeaveTimeout.current = null;
    }
    setIsProductMenuOpen(true);
  };

  const handleMouseLeaveNavProductItem = () => {
    // เมื่อเมาส์ออกจาก li ที่ครอบปุ่ม PRODUCT หรือตัว Dropdown
    // ตั้ง timeout เพื่อปิดเมนู ให้เวลาเมาส์เคลื่อนที่
    menuLeaveTimeout.current = setTimeout(() => {
      setIsProductMenuOpen(false);
    }, 150); // ดีเลย์ 150ms (ปรับค่าได้ตามความเหมาะสม)
  };

  // Optional: หากต้องการปิดเมนูเมื่อขนาดหน้าจอเปลี่ยนเป็น Mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsProductMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsProductMenuOpen]);

  return (
    <nav>
      <div className='nav-logo'>
        <div className='nav-logo-text'>
          <Link href="/"><p>SG</p></Link>
        </div>
        <div className='nav-logo-luge'>
          <button>EN</button>
          <p>|</p>
          <button>TH</button>
        </div>

      {/* <div className='nav-select'>
          <button className='nav-menu-button'>
            PRODUCT<RiArrowDownSFill/>
          </button>

      </div> */}

      </div>

      <ul className='nav-menu'>
        <li> <Link href="/" className='nav-menu-link'>HOME</Link></li>

        {/* Dropdown Section: li ที่รวมปุ่ม PRODUCT และ menu-recommend */}
        {/* ให้ li นี้จัดการ onMouseEnter/onMouseLeave */}
        <li
          onMouseEnter={handleMouseEnterNavProductItem}
          onMouseLeave={handleMouseLeaveNavProductItem}
          className="nav-menu-item-with-dropdown"
        >
          <button className='nav-menu-button'>
            PRODUCT<RiArrowDownSFill/>
          </button>

          {/* แสดง menu-recommend เมื่อ isProductMenuOpen เป็น true */}
          {isProductMenuOpen && (
            <div className='main-menu'>
              <div className='menu-recommend'>
                <p className='menu-recommend-text'>RECOMMEND</p>
                <div className='menu-recommend-img'>
                  <Link href="/" >
                    <div className="main-div-logo">
                      <Image src={rec1} alt="Product 1" fill></Image>
                    </div>
                  </Link>
                  <Link href="/" >
                    <div className="main-div-logo">
                      <Image src={rec2} alt="Product 2" fill></Image>
                    </div>
                  </Link>
                  <Link href="/" >
                    <div className="main-div-logo">
                      <Image src={rec3} alt="Product 3" fill></Image>
                    </div>
                  </Link>
                  <Link href="/" >
                    <div className="main-div-logo">
                      <Image src={rec4} alt="Product 4" fill></Image>
                    </div>
                  </Link>
                </div>
                <div className='menu-showmore-porduct'>
                  <Link href='/product' className='button-showmore-porduct'>SHOW MORE</Link>
                </div>

              </div>
              <div className='menu-show-artis' role='button' onClick={openPreOrderModal}>
                Select Artist <RiArrowDownSFill />
              </div>
            </div>
          )}
        </li>

        <li><Link href="/" className='nav-menu-link'>CART</Link></li>
        <li><Link href="/" className='nav-menu-link'>NEWS</Link></li>
        <li><Link href="/" className='nav-menu-link'>CONTACT</Link></li>
      </ul>

      <div className='nav-button'>
        <Link href="/login" className="nav-button-link">LOGIN</Link>
        <p>|</p>
        <button className="nav-button-link">SIGN UP</button>
      </div>

    </nav>
  );
};

export default NavBar;

'use client'; // Component นี้ต้องเป็น Client Component


import React from 'react';
import { useProductMenu } from '@/context/ProductMenuContext';

interface MainContentWrapperProps {
  children: React.ReactNode;
}

const MainContentWrapper: React.FC<MainContentWrapperProps> = ({ children }) => {
  const { isProductMenuOpen } = useProductMenu() // <--- ใช้ Context เพื่ออ่านสถานะ

  return (
    <main className={isProductMenuOpen ? 'main-content-blurred' : ''}>
      {children}
    </main>
  );
};

export default MainContentWrapper;
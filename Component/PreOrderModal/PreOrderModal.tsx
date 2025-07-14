// components/PreOrderModal.tsx
'use client';

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePreOrderModal } from '@/context/PreOrderModalContext';

import styles from './PreOrderModal.module.css'; 

// ข้อมูล Artist สำหรับ Pre-order
interface PreOrderArtist {
  src: string | StaticImageData;
  name: string;
  link: string;
}

// Import รูปภาพ Artist (สมมติว่าคุณมีไฟล์เหล่านี้)
import logoBTS from '@/public/logo/Bts.png';
import logoNCT from '@/public/logo/Nct.png';
import logoPLAVE from '@/public/logo/Plave.png';
import logoTXT from '@/public/logo/Tmw.png';
import logoTREASURE from '@/public/logo/Treasure.png';
import logoENHYPEN from '@/public/logo/EN.png';
import logoSEVENTEEN from '@/public/logo/7t.png';
import logoAESPA from '@/public/logo/Aespa.png';

const PRE_ORDER_ARTISTS: PreOrderArtist[] = [
  { src: logoBTS, name: 'BTS', link: '/product/BTS' },
  { src: logoTXT, name: 'TOMORROW X TOGETHER', link: '#tomorrow-x-together-products' },
  { src: logoENHYPEN, name: 'ENHYPEN', link: '#enhypen-products' },
  { src: logoSEVENTEEN, name: 'SEVENTEEN', link: '#seventeen-products' },
  { src: logoNCT, name: 'NCT', link: '#nct-products' },
  { src: logoTREASURE, name: 'TREASURE', link: '/product?artist=treasure' },
  { src: '/logo/Baby.png', name: 'BABY MONSTER', link: '/' },
  { src: logoAESPA, name: 'AESPA', link: '/product?artist=aespa' },
  { src: logoPLAVE, name: 'PLAVE', link: '/product?artist=plave' },
];

const PreOrderModal: React.FC = () => {
  const { isPreOrderModalOpen, closePreOrderModal } = usePreOrderModal();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePreOrderModal();
      }
    };

    if (isPreOrderModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPreOrderModalOpen, closePreOrderModal]);

  if (!isPreOrderModalOpen) return null;

  return (
    <>
      {/* Overlay: ใช้ styles.modalOverlay */}
      <div className={styles.modalOverlay} onClick={closePreOrderModal}></div>

      {/* Modal Content: ใช้ styles.preOrderModalContent */}
      <div className={styles.preOrderModalContent}>


        {/* หัวข้อ Modal: ใช้ styles.modalTitle */}
        <p className={styles.modalTitle}>ARTIST OPEN FOR PRE-ORDER</p>

        {/* Grid สำหรับแสดง Artist: ใช้ styles.modalArtistsGrid */}
        <div className={styles.modalArtistsGrid}>
          {PRE_ORDER_ARTISTS.map((artist, index) => (
            <Link
              href={artist.link}
              key={index}
              className={styles.modalArtistItem} /* ใช้ styles.modalArtistItem */
              onClick={closePreOrderModal}
            >
              <div className={styles.modalArtistLogo}> {/* ใช้ styles.modalArtistLogo */}
                <Image
                  src={artist.src}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <p className={styles.modalArtistName}>{artist.name}</p> 
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreOrderModal;
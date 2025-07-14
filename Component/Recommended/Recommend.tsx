'use client'
import Image, { StaticImageData } from "next/image"
import React from "react";
import './Recommend.css' // ตรวจสอบให้แน่ใจว่า import ถูกต้อง
import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { usePreOrderModal } from "@/context/PreOrderModalContext";

interface Artists {
    src: string | StaticImageData,
    name: string,
    id:string
}
interface ArtistsProps {
    RecArtists: Artists[];
}

const RecommendArtists: React.FC<ArtistsProps> = ({ RecArtists }) => {
    const {openPreOrderModal} = usePreOrderModal();
    return (
        <div className="rec-container">
            <div className="rec-bg">
            <div className="rec-header">
                <p>RECOMMENDED ARTISTS</p>
                <div role="button" className="rec-button-container" onClick={openPreOrderModal}>
                  <HiMagnifyingGlass/> <p>ARTIST OPEN FOR PRE-ORDER</p></div>
            </div>
            <div className="rec-mainlogo">
                {RecArtists.map((item, index) => (
                    <Link href={`#${item.id}`}key={index} >
                    <div  className="rec-arc">
                        <div className="rec-arc-logo">
                            <Image
                                src={item.src}
                                alt={item.name}
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // เพิ่ม sizes เพื่อประสิทธิภาพ
                                style={{ objectFit: 'cover', borderRadius: '50%' }} // ทำให้รูปเป็นวงกลมและครอบคลุมพื้นที่
                            />
                        </div>
                        <p className="rec-act-name">{item.name}</p>
                    </div>
                    </Link>
                ))}
            </div>
            </div>
        </div>
    )
}
export default RecommendArtists;
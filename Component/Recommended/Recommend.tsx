import Image, { StaticImageData } from "next/image"
import React from "react";
import './Recommend.css' // ตรวจสอบให้แน่ใจว่า import ถูกต้อง

interface Artists {
    src: string | StaticImageData,
    name: string,
}
interface ArtistsProps {
    RecArtists: Artists[];
}

const RecommendArtists: React.FC<ArtistsProps> = ({ RecArtists }) => {
    return (
        <div className="rec-container">
            <div className="rec-bg">
            <div className="rec-header">
                <p>RECOMMENDED ARTISTS</p>
            </div>
            <div className="rec-mainlogo">
                {RecArtists.map((item, index) => (
                    <div key={index} className="rec-arc">
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
                ))}
            </div>
            </div>
        </div>
    )
}
export default RecommendArtists;
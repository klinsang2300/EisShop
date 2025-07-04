'use client'

import Image, { StaticImageData } from "next/image"
import React from "react"
import './RecPro.css'
interface Product {
    src: string | StaticImageData,
    nameProduct: string,
    price: string,
    Remark: string
}
interface RecommendProductProps {
    AstistName: string,
    productData: Product[],
    headColorStr:string,
}
const RecommendProduct: React.FC<RecommendProductProps> =
    ({ AstistName, productData, headColorStr }) => {
        return (
                <div className="pro-container">
                     <div
                    className="pro-art-name"
                    style={{ backgroundImage: `var(${headColorStr})` }} // <--- การเปลี่ยนแปลงตรงนี้
                >
                        <p>{AstistName}</p>
                    </div>
                    <div className="box-product-container">
                        {productData.map((item, index) => (
                            <div className="box-product" key={index}>
                                <div className="box-product-image">
                                    <Image
                                        src={item.src}
                                        alt={item.nameProduct}
                                        fill
                                        className="box-image" />
                                </div>
                                <div className="box-product-name">
                                    <p>{item.nameProduct}</p>
                                </div>
                                <div className="box-product-price">
                                    PRICE<p> {item.price}  ฿</p>
                                </div>
                                <div className="box-product-remask">
                                    {item.Remark}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="box-product-button">See All Product</div>
                </div>

           
        )
    }
export default RecommendProduct;
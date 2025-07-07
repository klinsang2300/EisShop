'use client'

import Image, { StaticImageData } from "next/image"
import React from "react"
import './css/RecPro.css'
import Link from "next/link"
interface Product {
    src: string | StaticImageData,
    nameProduct: string,
    price: string,
    Remark: string
}
interface RecommendProductProps {
    AstistName: string,
    productData: Product[],
    headColorStr: string,
}
const RecommendProduct: React.FC<RecommendProductProps> =
    ({ AstistName, productData, headColorStr }) => {
        return (
            <div className="pro-container">
                <div
                    className="pro-art-name"
                    style={{ backgroundImage: `var(${headColorStr})` }} 
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
                <div className="box-product-button">
                    <Link href={`/product/${AstistName}`}>See All Product</Link>
                </div>
            </div>


        )
    }
export default RecommendProduct;
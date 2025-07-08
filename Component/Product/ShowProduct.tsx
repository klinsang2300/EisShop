'use client'
import { ProductProp, ProductType } from "@/types/product"
import React, { useEffect, useMemo, useState } from "react"
import sty from './css/ShowProduct.module.css'
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
interface ShowProductProp {
    product: ProductProp,
    headername: string
}
interface tabData {
    tabindex: number,
    tabname: string,
    tabsname: string
}
const ITEMS_PER_PAGE = 16;
const TabData: tabData[] = [
    { tabindex: 0, tabname: 'PRODUCT RECCOMEND', tabsname: 'RECCOMEND' },
    { tabindex: 1, tabname: 'BAST SEALLER', tabsname: 'BAST' },
    { tabindex: 2, tabname: 'ALBUM BEST SELLER', tabsname: 'ALBUM' },
    { tabindex: 3, tabname: 'LIVE', tabsname: 'LIVE' }];
const ShowProduct: React.FC<ShowProductProp> = ({ product, headername }) => {

    const [tabindex, setTabIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);

    const currentTabProducts: ProductType[] = useMemo(() => {
        const Tabname = TabData[tabindex].tabsname;
        return product[Tabname]?.sliderImages || [];
    }, [tabindex, product])

    const productsToDisplay: ProductType[] = useMemo(() => {
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return currentTabProducts.slice(startIndex, endIndex);
    }, [currentPage, currentTabProducts])

    const totalPages: number = useMemo(() => {
        return Math.ceil(currentTabProducts.length / ITEMS_PER_PAGE);
    }, [currentTabProducts])

    const toggleTabindex = (item: tabData) => {
        setTabIndex(item.tabindex);
    }
    useEffect(() => {
        setCurrentPage(0)
    }, [tabindex])
    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    // ใช้สำหรับปุ่ม Previous และ Next (ถ้าคุณจะเพิ่ม)
    const goToPrevPage = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
    };
    return (
        <div className={sty.container}>
            <div className={sty.header}>
                <p>{headername}</p>
            </div>
            <div className={sty.tabdataContainer}>
                {TabData.map((item, index) => (
                    <div
                        key={index}
                        className={`${sty.tabdata} ${tabindex === item.tabindex ? sty.active : ''}`}
                        onClick={() => toggleTabindex(item)}
                    >
                        {item.tabname}
                    </div>
                ))}
            </div>
            <div className={sty.ProductContainer}>
                {productsToDisplay.length > 0 ? (
                    productsToDisplay.map((item, index) => (
                        <div className={sty.ProductBox} key={index}>
                            <div className={sty.ProductImg}>
                                <Image src={item.src} alt={item.nameProduct} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw" />
                            </div>
                            <div className={sty.ProductName}>{item.nameProduct}</div>
                            <div className={sty.ProductPrice}>PRICE<p> {item.price} ฿</p></div>
                            <div className={sty.ProductRemark}>{item.Remark}</div>
                        </div>
                    ))
                ) : (
                    <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
                        No products available in this category.
                    </p>
                )}
       
            </div>
                     {totalPages > 1 && ( // แสดง Dots เมื่อมีมากกว่า 1 หน้า
                    <div className={sty.paginationDotsContainer}>
                        <button className={`${sty.navButton} ${sty.prevPageButton}`} onClick={goToPrevPage}>
                            <IoIosArrowBack />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <span
                                key={index}
                                className={`${sty.paginationDot} ${currentPage === index ? sty.activeDot : ''}`}
                                onClick={() => goToPage(index)}
                            ></span>
                        ))}

                        <button className={`${sty.navButton} ${sty.nextPageButton}`} onClick={goToNextPage}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                )}

        </div>
    );
}

export default ShowProduct
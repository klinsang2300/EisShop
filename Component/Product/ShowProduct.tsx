'use client'
import { ProductType, tabData } from "@/types/product"
import React, { useEffect, useMemo, useState } from "react"
import sty from './css/ShowProduct.module.css'
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io"
import { RiArrowDownSFill } from "react-icons/ri"
import { usePreOrderModal } from "@/context/PreOrderModalContext"
import { Taviraj } from "next/font/google"
interface ShowProductProp {
    tabData: tabData[],
    headername: string
}

const ITEMS_PER_PAGE = 16;
const TABMENU_COUNT: number = 7;
const ShowProduct: React.FC<ShowProductProp> = ({ tabData, headername }) => {
    const [tabindex, setTabIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const { openPreOrderModal } = usePreOrderModal();
    const [isshowtaball, setIsshowTaball] = useState(false);

    const { TabShow, IsshowButton } = useMemo(() => {
        const TotalTab = tabData.length;
        if (isshowtaball) {
            return { TabShow: tabData.slice(0, TABMENU_COUNT), IsshowButton: true }
        }
        if (TotalTab <= TABMENU_COUNT) {
            return { TabShow: tabData, IsshowButton: false };
        }

        let start = 0;
        let end = TABMENU_COUNT - 1;
        const middleOffset = Math.floor(TABMENU_COUNT / 2);
        if (tabindex <= middleOffset) {
            start = 0;
            end = TABMENU_COUNT - 1;
        } else if (tabindex >= TotalTab - (TABMENU_COUNT - middleOffset)) {
            start = TotalTab - TABMENU_COUNT;
            end = TotalTab - 1;
        } else {
            start = tabindex - middleOffset
            end = tabindex + (TABMENU_COUNT - 1 - middleOffset)
        }

        return { TabShow: tabData.slice(start, end + 1), IsshowButton: true };
    }, [tabindex, tabData, isshowtaball])


    const currentTabProducts: ProductType[] = useMemo(() => {

        return tabData[tabindex].products || [];
    }, [tabindex, tabData])

    const productsToDisplay: ProductType[] = useMemo(() => {
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return currentTabProducts.slice(startIndex, endIndex);
    }, [currentPage, currentTabProducts])

    const totalPages: number = useMemo(() => {
        return Math.ceil(currentTabProducts.length / ITEMS_PER_PAGE);
    }, [currentTabProducts])

    const isProductAll: Boolean = useMemo(() => {
        return headername === 'PRODUCT';
    }, [headername])

    const toggleTabindex = (item: tabData) => {
        setTabIndex(item.tabindex);
        setIsshowTaball(false);
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

    const toggleShowTabMenu = () => {
        setIsshowTaball(!isshowtaball);
    }



    return (
        <div className={sty.container}>
            <div className={sty.header}>
                <p>{headername}</p>
                {isProductAll && (
                    <div className={sty.buttonArtis} role="button" onClick={openPreOrderModal}>
                        Select Artust <RiArrowDownSFill />

                    </div>)}

            </div>



            <div className={sty.tabMenuWrapper}>

                <div className={sty.tabdataContainer}>
                    {TabShow.map((item, index) => (
                        <div
                            key={item.tabindex || `tab-${index}`} // ใช้ tabindex เป็น key ที่ไม่ซ้ำกัน
                            className={`${sty.tabdata} ${tabindex === item.tabindex ? sty.active : ''}`}
                            onClick={() => toggleTabindex(item)}
                        >
                            {item.tabname}
                        </div>
                    ))}

                    {IsshowButton && !isshowtaball && (
                        <div className={sty.tabbutton} role="button" onClick={toggleShowTabMenu}>
                             <IoIosArrowDown />
                        </div>
                    )}

                </div>

                {isshowtaball && (
                    <div className={sty.overlayTabContainer}>
                        <div className={sty.tabdataContainer}>
                            {tabData.slice(TABMENU_COUNT).map((item, index) => (
                                <div
                                    key={item.tabindex || `tab-${index}`} // ใช้ tabindex เป็น key ที่ไม่ซ้ำกัน
                                    className={`${sty.tabdata} ${tabindex === item.tabindex ? sty.active : ''}`}
                                    onClick={() => toggleTabindex(item)}
                                >
                                    {item.tabname}
                                </div>
                            ))}

                            {IsshowButton && isshowtaball && (
                                <div className={sty.tabbutton} role="button" onClick={toggleShowTabMenu}>
                                    <IoIosArrowUp /> 
                                </div>
                            )}

                        </div>
                    </div>
                )}


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
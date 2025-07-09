
import SlidePorduct from "@/Component/Product/SlideProduct";
import { getProductHilglight } from "@/lib/product";
import sty from '../product.module.css'
import ShowProduct from "@/Component/Product/ShowProduct";
import React from "react";


const BrandPage = async({params}:{ params: Promise<{bandSlug: string}>})=> {
  const { bandSlug } = await params;

  const GetProduct = await getProductHilglight(bandSlug);
  return (
    <div className={sty.container}>
      <div className={sty.slide}>
        <SlidePorduct slides={GetProduct.ImageSlide} />
      </div>
      <div className={sty.BoxProduct}>
        <ShowProduct
          tabData={GetProduct.TabDataProduct}
          headername="BTS"
        />
      </div>
    </div>
  )
}
export default BrandPage;



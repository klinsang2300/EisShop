
import SlidePorduct from "@/Component/Product/SlideProduct";
import { getProductHilglight } from "@/lib/product";
import sty from '../product.module.css'
import ShowProduct from "@/Component/Product/ShowProduct";

interface BandPageProps {
  params: {
    bandSlug: string;
  };
}
export default async function BrandPage({ params }: BandPageProps) {
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
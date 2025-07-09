import SlidePorduct from "@/Component/Product/SlideProduct";
import { getProductHilglight } from "@/lib/product"
import sty from './product.module.css'
import ShowProduct from "@/Component/Product/ShowProduct";
const ProductPage = async () => {
  const getProduct = await getProductHilglight('');
  return (
  <div className={sty.container}>
        <div className={sty.slide}>
            <SlidePorduct slides={getProduct .ImageSlide} />
        </div>
        <div className={sty.BoxProduct}>
          <ShowProduct
            tabData={getProduct.TabDataProduct}
            headername="PRODUCT"
          />
        </div>
    </div>
  )
}
export default ProductPage
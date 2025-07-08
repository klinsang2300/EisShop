import SlidePorduct from "@/Component/Product/SlideProduct";
import { getProductHilglight } from "@/lib/product"
import sty from './product.module.css'
import ShowProduct from "@/Component/Product/ShowProduct";
const ProductPage = async () => {
  const getproductHilglight = await getProductHilglight('');
  return (
  <div className={sty.container}>
        <div className={sty.slide}>
            <SlidePorduct slides={getproductHilglight.ImageSlide} />
        </div>
        <div className={sty.BoxProduct}>
          <ShowProduct
            product={getproductHilglight.Product}
            headername="PRODUCT"
          />
        </div>
    </div>
  )
}
export default ProductPage
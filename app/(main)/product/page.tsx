import SlidePorduct from "@/Component/Product/SlideProduct";
import { getProductHilglight } from "@/lib/product"
import sty from './product.module.css'
const ProductPage = () => {
  const getproductHilglight = getProductHilglight();
  return (
  <div className={sty.container}>
        <div className={sty.slide}>
            <SlidePorduct slides={getproductHilglight} />
        </div>
    </div>
  )
}
export default ProductPage
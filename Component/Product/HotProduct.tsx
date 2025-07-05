import Image, { StaticImageData } from "next/image"
import './css/HotPro.css'
import Link from "next/link"
interface Product {
    src: string | StaticImageData,
    nameProduct: string,
    price: string,
    Remark: string
}
interface RecommendProductProps {
    productData: Product[],
}
const HotProduct: React.FC<RecommendProductProps> = ({ productData }) => {
    return (
        <div className="hot-product-container">
            <div className="hot-product-header">
                <p>HOT</p>
            </div>
            <div className="hot-product-box">
                {productData.map((item, index) => ((
                    <div className="box-main" key={index}>
                        <div className="box-image">
                            <Image
                                src={item.src}
                                alt={item.nameProduct}
                                className="box-img"
                            />
                        </div>
                        <div className="box-name">{item.nameProduct}</div>
                        <div className="box-price">PRICE<p> {item.price}  ฿</p></div>
                        <div className="box-remask">{item.Remark}</div>
                    </div>
                )))}
            </div>
                <div className="box-product-button">
                    <Link href="/">See All Product</Link>
                </div>
        </div>
    )
}
export default HotProduct;
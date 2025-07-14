import ImageSlider from "@/Component/Slide/ImageSlider";
import RecommendArtists from "@/Component/Recommended/Recommend";
import HotProduct from "@/Component/Product/HotProduct";
import Review from "@/Component/Review";
import slide1 from '@/public/slide/1.png'
import slide2 from '@/public/slide/2.png'
import slide3 from '@/public/slide/3.png'
import slide4 from '@/public/slide/4.png'
import slide5 from '@/public/slide/5.png'
import logo1 from '@/public/logo/Bts.png'
import logo2 from '@/public/logo/Tmw.png'
import logo3 from '@/public/logo/EN.png'
import logo4 from '@/public/logo/7t.png'
import logo5 from '@/public/logo/Nct.png'
import { ProductBts, ProductEn, ProductHot, ProductNct, ProductSt, ProductTwm } from "@/lib/data";
import RecommendProduct from "@/Component/Product/Recproduct";
import BackToTopButton from "@/Component/BackToTopButton";

export default async function Home() {
  const slides = [
    { src: slide1, alt: 'Knit Cardigan Beige' },
    { src: slide2, alt: 'Product Merchandise' },
    { src: slide3, alt: 'Another Product' },
    { src: slide4, alt: 'Another Product' },
    { src: slide5, alt: 'Another Product' },
    // เพิ่มรูปภาพอื่นๆ
  ];

  const dummyReviews = [
    { name: 'Rosalin', rating: 5, reviewDetail: 'แอดมินตอบแชทไวมากเลยค่ะ' },
    { name: 'Eisliz', rating: 4.5, reviewDetail: 'ร้านแพ๊คสินค้ามาหนาแน่นมากค่ะ ขนาดกล่องบู้บี้แต่ข้างในไม่ซึกหลอเลย' },
    { name: 'Wanvisa', rating: 3, reviewDetail: 'แจ้งสถานะสินค้าชัดเจนดีค่ะ ไม่ต้องคอยกังวล หรือคอยสอบถาม' },
  ];
 
  const RecArtists = [
    { src: logo1, name: 'BTS', id: 'bts-products' }, // เพิ่ม id ที่ตรงกับส่วนสินค้า
    { src: logo2, name: 'TOMMORROW X TOGETHER', id: 'tomorrow-x-together-products' },
    { src: logo3, name: 'ENHYPEN', id: 'enhypen-products' },
    { src: logo4, name: 'SEVENTEEN', id: 'seventeen-products' },
    { src: logo5, name: 'NCT', id: 'nct-products' },
  ];
  const productBts = await ProductBts();
  const productTmw = await ProductTwm();
  const productEn = await ProductEn();
  const productSt = await ProductSt();
  const productNct = await ProductNct();
  const productHot = await ProductHot();
  return (
    <div className="page-container">
      <div className="container-slide">
        <div>
          <ImageSlider images={slides} autoPlay={true} />
        </div>
        <div className="my-[3.2%] ">
          <Review reviews={dummyReviews} />
        </div>
      </div>
      <div className="container-product">
        <div className="my-[3%] ">
          <RecommendArtists RecArtists={RecArtists} />

        </div>
        <div id="bts-products" className="my-[3%] pt-[1%]">
          <RecommendProduct
            AstistName="BTS"
            productData={productBts}
            headColorStr="--my-custom-gradient-gray" />
        </div>
        <div id="tomorrow-x-together-products"  className="my-[3%] pt-[1%]">
          <RecommendProduct
            AstistName="TOMMORROW X TOGETHER"
            productData={productTmw}
            headColorStr="--my-custom-gradient-red" />
         
        </div>
        <div id="enhypen-products"  className="my-[3%]  pt-[1%]">
          <RecommendProduct
            AstistName="ENHYPEN"
            productData={productEn}
            headColorStr="--my-custom-gradient-grays" />
        </div>
        <div id="seventeen-products" className="my-[3%]  pt-[1%]">
          <RecommendProduct
            AstistName="SEVENTEEN"
            productData={productSt}
            headColorStr="--my-custom-gradient-pink" />
        </div>
        <div id="nct-products" className="my-[3%]  pt-[1%]">
          <RecommendProduct
            AstistName="NCT"
            productData={productNct}
            headColorStr="--my-custom-gradient-green" />
        </div>

        <div className="my-[3%]  pt-[1%]">
          <HotProduct
            productData={productHot} />
        </div>
      </div>
      <BackToTopButton />

    </div>
  );
}

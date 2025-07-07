
import SlidePorduct from "@/Component/Product/SlideProduct";
import { getProductHilglight } from "@/lib/product";
import sty from '../product.module.css'

interface BandPageProps {
  params: {
    bandSlug: string;
  };
}
export default async function BrandPage({params}:BandPageProps){
  const slideHighlight = await getProductHilglight();
    return(
    <div className={sty.container}>
        <div className={sty.slide}>
            <SlidePorduct slides={slideHighlight} />
        </div>
    </div>
    )



}
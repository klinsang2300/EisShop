import type {   ProductData, SlideContent } from '@/types/product'
import { slide } from './slide';
import { ProductShowAll } from './ProductAll';





interface ProductShow {
    ImageSlide:SlideContent[],
    Product:{ [key: string]: ProductData }
}


export const getProductHilglight =  async  (bandSlug: string) => {
    const slides = await slide(bandSlug);
    const Products = ProductShowAll(bandSlug);

    const mockData:ProductShow={
        ImageSlide : slides.sliderImages,
        Product:Products[bandSlug]
    }





    return mockData;
}
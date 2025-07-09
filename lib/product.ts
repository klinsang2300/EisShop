import type { ProductData, SlideContent, tabData } from '@/types/product'
import { slide } from './slide';
import { ProductShowAll } from './ProductAll';
import { GetTabData } from './tabData';

interface ProductShow {
    ImageSlide: SlideContent[],
    TabDataProduct: tabData[]
}


export const getProductHilglight = async (bandSlug: string) => {
    const slides = await slide(bandSlug);
    const TabData = GetTabData(bandSlug);
    const mockData: ProductShow = {
        ImageSlide: slides.sliderImages,
        TabDataProduct: TabData.TabData

    }
    return mockData;
}
import { StaticImageData } from "next/image";

export interface ImageItem {
    src: string | StaticImageData;
    alt: string;
}

export interface SlideContent {
    image1: ImageItem;
    image2: ImageItem;
}

export interface ProductType {
    src: string | StaticImageData,
    nameProduct: string,
    price: string,
    Remark: string
}

export interface ProductData {
    sliderImages: ProductType[];
}
export interface ProductProp {
    [key: string]: ProductType[];
}


export interface ProductDetail {
    [key: string]: ProductType
}
export interface tabData {
    tabindex: number,
    tabname: string,
    products: ProductType[],
}
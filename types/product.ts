import { StaticImageData } from "next/image";

export interface ImageItem {
    src: string | StaticImageData;
    alt: string; 
}

export interface SlideContent {
    image1: ImageItem;
    image2: ImageItem;
}


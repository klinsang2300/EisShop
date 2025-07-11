import { SlideContent } from "@/types/product"

interface BandData {
    sliderImages: SlideContent[];
}

export const slide = (bandSlug: string) => {
    const mockData: { [key: string]: BandData } = {
        '': {
            sliderImages:
                [{
                    image1: { src: '/Bts/slide/sl1.png', alt: 'sl1' },
                    image2: { src: '/Bts/slide/sl2.png', alt: 'sl2' },
                }, {
                    image1: { src: '/Bts/slide/sl3.png', alt: 'sl3' },
                    image2: { src: '/Bts/slide/sl4.png', alt: 'sl4' },
                }, {
                    image1: { src: '/Bts/slide/sl5.png', alt: 'sl5' },
                    image2: { src: '/Bts/slide/sl6.png', alt: 'sl6' },
                }, {
                    image1: { src: '/Bts/slide/sl7.png', alt: 'sl7' },
                    image2: { src: '/Bts/slide/sl8.png', alt: 'sl8' },
                }]
            },
            'BTS': {
            sliderImages:
                [{
                    image1: { src: '/Bts/slide/sl1.png', alt: 'sl1' },
                    image2: { src: '/Bts/slide/sl2.png', alt: 'sl2' },
                }, {
                    image1: { src: '/Bts/slide/sl3.png', alt: 'sl3' },
                    image2: { src: '/Bts/slide/sl4.png', alt: 'sl4' },
                }, {
                    image1: { src: '/Bts/slide/sl5.png', alt: 'sl5' },
                    image2: { src: '/Bts/slide/sl6.png', alt: 'sl6' },
                }, {
                    image1: { src: '/Bts/slide/sl7.png', alt: 'sl7' },
                    image2: { src: '/Bts/slide/sl8.png', alt: 'sl8' },
                }]
            }
    }
    return mockData[bandSlug];
}


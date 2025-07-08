import { ProductData } from "@/types/product"

export const ProductShowAll = () => {
    const mockData: { [key: string]: ProductData } =
    {
        'RECCOMEND': {
            sliderImages: [
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
            ]
        },
        'BAST': {
            sliderImages: [
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },

            ]
        }
        ,
        'ALBUM': {
            sliderImages: [
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },

            ]
        },
        'LIVE': {
            sliderImages: [
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts2.png', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
                { src: '/Bts/bts1', nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
            ]
        }

    }


    return mockData;
}
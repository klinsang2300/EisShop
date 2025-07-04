import bts1 from '@/public/Bts/bts1.png'
import bts2 from '@/public/Bts/bts2.png'
import bts3 from '@/public/Bts/bts3.png'
import bts4 from '@/public/Bts/bts4.png'

import tmw1 from '@/public/Tmw/twm1.png'
import tmw2 from '@/public/Tmw/twm2.png'
import tmw3 from '@/public/Tmw/twm3.png'
import tmw4 from '@/public/Tmw/twm4.png'

import en1 from '@/public/En//en1.png'
import en2 from '@/public/En//en2.png'
import en3 from '@/public/En//en3.png'
import en4 from '@/public/En//en4.png'

import ST1 from '@/public/ST/ST1.png'
import ST2 from '@/public/ST/ST2.png'
import ST3 from '@/public/ST/ST3.png'
import ST4 from '@/public/ST/ST4.png'

import Nct1 from '@/public/Nct/Nct1.png'
import Nct2 from '@/public/Nct/Nct2.png'
import Nct3 from '@/public/Nct/Nct3.png'
import Nct4 from '@/public/Nct/Nct4.png'
import { StaticImageData } from 'next/image'
interface Product {
    src: string | StaticImageData,
    nameProduct: string,
    price: string,
    Remark: string
}

export const ProductBts = async (): Promise<Product[]> => {
    return [{ src: bts1, nameProduct: 'Face Keyring', price: '790', Remark: 'Shipped from Korea to Thailand' },
        {src:bts2,nameProduct:'Lucky Draw (Random)',price:'390',Remark:'Shipped from Korea to Thailand'},
        {src:bts3,nameProduct:'Knit Cardigan (Beige)',price:' 5,990',Remark:'Shipped from Korea to Thailand'},
        {src:bts4,nameProduct:'[CAPSULE ALBUM Vol.1] \nule Merch Full Package',price:'1490',
            Remark:'Shipped from Korea to Thailand'
        }
    ];
}
export const ProductTwm = async (): Promise<Product[]> => {
    return [{ src: tmw1, nameProduct: 'Photocard Holder', price: '790', Remark: 'Shipped from Korea to Thailand' },
        {src:tmw2,nameProduct:'Lucky Draw (Random)',price:'390',Remark:'Shipped from Korea to Thailand'},
        {src:tmw3,nameProduct:'Lunch Box',price:'980',Remark:'Shipped from Korea to Thailand'},
        {src:tmw4,nameProduct:'OFFICIAL LIGHT STICK STAND',price:'1490',
            Remark:'Shipped from Korea to Thailand'
        }
    ];
}
export const ProductEn = async (): Promise<Product[]> => {
    return [{ src: en1, nameProduct: 'Instant Photo Set', price: '490', Remark: 'Shipped from Korea to Thailand' },
        {src:en2,nameProduct:'Printed Photo',price:'100',Remark:'Shipped from Korea to Thailand'},
        {src:en3,nameProduct:'Rain Poncho',price:'1690',Remark:'Shipped from Korea to Thailand'},
        {src:en4,nameProduct:'S/S T-shirt (MINE)',price:'1490',
            Remark:'Shipped from Korea to Thailand'
        }
    ];
}

export const ProductSt = async (): Promise<Product[]> => {
    return [{ src: ST1, nameProduct: 'SEVENTEEN UNIT \nPHOTOBOOK ‘EPISODE C’', price: '1080', Remark: 'Shipped from Korea to Thailand' },
        {src:ST2,nameProduct:'SEVENTEEN UNIT \nPHOTOBOOK ‘EPISODE D’',price:'1080',Remark:'Shipped from Korea to Thailand'},
        {src:ST3,nameProduct:'SEVENTEEN UNIT PHOTOBOOK ‘EPISODE C,D SET',price:'1990',Remark:'Shipped from Korea to Thailand'},
        {src:ST4,nameProduct:'NANA bnb with SEVENTEEN 2025 KIT',price:'1490',
            Remark:'Shipped from Korea to Thailand'
        }
    ];
}


export const ProductNct = async (): Promise<Product[]> => {
    return [{ src: Nct1, nameProduct: '[Go Back To The Future] \n(Digipack Ver.) Random', price: '690', Remark: 'Shipped from Korea to Thailand' },
        {src:Nct2,nameProduct:'[Go Back To The Future] \n(Ultimate Park Ver.)',price:'890',Remark:'Shipped from Korea to Thailand'},
        {src:Nct3,nameProduct:'MINI FANLIGHT KEYRING',price:'690',Remark:'Shipped from Korea to Thailand'},
        {src:Nct4,nameProduct:'OFFICIAL LIGHT TOK',price:'990',Remark:'Shipped from Korea to Thailand'
        }
    ];
}



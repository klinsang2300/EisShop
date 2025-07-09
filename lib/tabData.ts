import { ProductData, ProductProp, tabData } from "@/types/product";
import { ProductShowAll } from "./ProductAll";

interface tabDataProp {
    TabData: tabData[]
}

export const GetTabData = (bandSlug: string) => {
    const ProductAll: ProductProp = ProductShowAll(bandSlug)
    const mockdata: { [key: string]: tabDataProp } = {
        '': {
            TabData: [
                { tabindex: 0, tabname: 'PRODUCT RECCOMEND', products: ProductAll['RECCOMEND'] || null },
                { tabindex: 1, tabname: 'BAST SEALLER', products: ProductAll['BAST'] || null },
                { tabindex: 2, tabname: 'ALBUM BEST SELLER', products: ProductAll['ALBUM'] || null },
                { tabindex: 3, tabname: 'LIVE', products: ProductAll['LIVE'] || null }
            ]
        },
        'BTS': {
            TabData: [
                { tabindex: 0, tabname: 'MEMBERSHIP', products: ProductAll['MEMBER'] || null },
                { tabindex: 1, tabname: 'COLLAB', products: ProductAll['COLLAB'] || null },
                { tabindex: 2, tabname: 'ALBUM', products: ProductAll['ALBUM'] || null },
                { tabindex: 3, tabname: 'DVD/MEDIA', products: ProductAll['DVD'] || null },
                { tabindex: 4, tabname: 'PHOTOBOOK', products: ProductAll['PHOTO'] || null },
                { tabindex: 5, tabname: 'LIVE', products: ProductAll['LIVE'] || null },
                { tabindex: 6, tabname: 'MERCH', products: ProductAll['MERCH'] || null },
            ]
        }
    }

    return mockdata[bandSlug]
}
import { ProductData, ProductDetail, ProductProp } from "@/types/product"
import { ProductDetaildata } from "./ProductDetaildata";

export const ProductShowAll = (bandSlug: string) => {
  const ProductDetail: ProductDetail = ProductDetaildata();
  const mockData: { [key: string]: ProductProp } =
  {
    '': {
      'RECCOMEND': [
        ProductDetail['hot3'], ProductDetail['pd5'], ProductDetail['pd4'],
        ProductDetail['pd3'], ProductDetail['pd2'], ProductDetail['hot1'],
        ProductDetail['hot6'], ProductDetail['pd1'], ProductDetail['pd12'],
        ProductDetail['pd11'], ProductDetail['pd10'], ProductDetail['hot2'],
        ProductDetail['pd9'], ProductDetail['pd8'], ProductDetail['pd7'],
        ProductDetail['pd6'],

      ],
      'BAST': [ProductDetail['pd5'], ProductDetail['pd4'],
      ProductDetail['pd3'], ProductDetail['pd2'],
      ProductDetail['hot1'], ProductDetail['hot6'],
      ProductDetail['pd1'], ProductDetail['pd12'],
      ProductDetail['pd11'], ProductDetail['pd10'],
      ProductDetail['hot2'], ProductDetail['hot3'],
      ProductDetail['pd9'], ProductDetail['pd8'],
      ProductDetail['pd7'], ProductDetail['pd6'],
      ]

      ,
      'ALBUM': [
        ProductDetail['pd9'], ProductDetail['pd8'],
        ProductDetail['pd7'], ProductDetail['pd6'], ProductDetail['pd3'],
        ProductDetail['pd22'], ProductDetail['pd21'],
        ProductDetail['pd20'], ProductDetail['pd23'],
        ProductDetail['pd16'], ProductDetail['pd17'],
        ProductDetail['pd19'], ProductDetail['pd18'],
        ProductDetail['pd13'], ProductDetail['pd14'], ProductDetail['pd15'],
        ProductDetail['pd35'], ProductDetail['pd36'],
        ProductDetail['pd37'], ProductDetail['pd38'],
        ProductDetail['pd39'], ProductDetail['pd40'],
        ProductDetail['pd34'], ProductDetail['pd33'],
        ProductDetail['pd32'], ProductDetail['pd31'],
        ProductDetail['pd30'], ProductDetail['pd29'],
        ProductDetail['pd27'], ProductDetail['pd28'],
        ProductDetail['pd25'], ProductDetail['pd26'],
        ProductDetail['pd41'], ProductDetail['pd42'],
        ProductDetail['pd43'], ProductDetail['pd44'],
        ProductDetail['pd45'], ProductDetail['pd46'],
        ProductDetail['pd47'], ProductDetail['pd48'],
        ProductDetail['pd49'], ProductDetail['pd50'],
      ]
      ,
      'LIVE': [
        ProductDetail['pd5'], ProductDetail['pd24'],
      ]

    },
    'BTS': {
      'MEMEBR': [],
      'COLLAB': [],
      'ALBUM': [],
      'DVD': [],
      'PHOTO': [],
      'LIVE': [],
      'MERCH': []
    },
  }


  return mockData[bandSlug];
}
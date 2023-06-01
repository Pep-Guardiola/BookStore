// export class Product {

//   constructor(
//     public productId?: number,
//     public title: string = '',
//     public author: string = '',
//     public price?: number,
//     public description: string = '',
//     public imageUrl: string = '',
//     public starRating?: number,
//     public topList: boolean = false,
//     public qty?: number,
//     public id?: number) { }
// }

export interface Product {
  id?: number;
  book: {
    productId: number;
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    starRating: number;
    topList: boolean;
    qty: number;
  };
}

export interface CartItem {
  id?: number;
  book: {
    productId: number;
    title: string;
    author: string;
    price: number;
    qty: number;
  };
}

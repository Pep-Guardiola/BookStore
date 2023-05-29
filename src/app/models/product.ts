export interface Product {
  id?: number,
  productId: number,
  title: string,
  author: string,
  price: number,
  description: string,
  imageUrl: string,
  starRating: string,
  topList: boolean,
  quote1: string,
  quote2: string,
  qty: number
}

export interface CartItem {
  productId: number,
  title: string,
  author: string,
  price: number,
  qty: number
}

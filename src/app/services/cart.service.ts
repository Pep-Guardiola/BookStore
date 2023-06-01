
import { CartItem, Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartApiUrl, productsApiUrl } from '../config/api';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

constructor(private http: HttpClient) { }

getCartItems(): Observable<CartItem[]> {
  return this.http.get<CartItem[]>(cartApiUrl).pipe(
    map((result: CartItem[]) => {
      let cartItems: CartItem[] = [];

      for (let item of result) {
        let productExists = false;

      for (let i in cartItems) {
        if (cartItems[i].productId === item.productId) {
          cartItems[i].qty++
          productExists = true;
          break;
        }
      }
      if (!productExists) {
        cartItems.push(item)
        }
      }

      return cartItems;

    })
)}


addBookToCart(productItem: CartItem): Observable<CartItem> {
  return this.http.post<CartItem>(cartApiUrl, productItem)
}

// testToCart(): Observable<number> {
//   return this.http.post<number>(cartApiUrl, {book: 1})
// }

deleteBookFromCart(productItem: CartItem): Observable<CartItem> {
  const url = `${productsApiUrl}/${productItem.id}`
  console.log(url);


  return this.http.delete<CartItem>(url);
}

}

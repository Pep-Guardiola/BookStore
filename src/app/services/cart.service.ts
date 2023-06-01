import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartItem } from 'src/app/models/product';
import { cartApiUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartApiUrl).pipe(
      map((result: CartItem[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].book.productId === item.book.productId) {
              cartItems[i].book.qty++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(item);
          }
        }

        return cartItems;
      })
    );
  }

  addBookToCart(productItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(cartApiUrl, productItem);
  }

  // testToCart(): Observable<number> {
  //   return this.http.post<number>(cartApiUrl, {book: 1})
  // }

  deleteBookFromCart(productItem: CartItem): Observable<CartItem> {
    const url = `${cartApiUrl}/${productItem.id}`;
    console.log(url);
    // return of(productItem);
    return this.http.delete<CartItem>(url);
  }
}

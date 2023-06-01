import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsApiUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsApiUrl);
  }

  // deleteBook(): Observable<any> {
  //   return this.http.delete<number>(`${productsApiUrl}/1`);
  // }

  // saveBook(): Observable<number> {
  //   return this.http.post<number>(productsApiUrl, { book: 1 });
  // }
  saveBook(book: Product): Observable<Product> {
    return this.http.post<Product>(productsApiUrl, { book });
  }
}

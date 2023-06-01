import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsApiUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsApiUrl)
  }

  saveBook(book: Product): Observable<Product> {
    return this.http.post<Product>(productsApiUrl, book)
  }
}

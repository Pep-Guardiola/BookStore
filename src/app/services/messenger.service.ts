import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  subject = new Subject<CartItem>()

  constructor() { }

  sendMsg(product: CartItem) {
    console.log(product);

    this.subject.next(product)
  }

  getMsg(): any {
    return this.subject.asObservable()
  }
}

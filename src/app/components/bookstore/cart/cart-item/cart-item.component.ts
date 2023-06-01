import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productsApiUrl } from 'src/app/config/api';
import { CartItem } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  constructor(private cartService: CartService,
    private http: HttpClient) {}

  @Input() cartItem!: CartItem;
  @Output() deleteClicked: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  deleteBtnClicked(): void {
    // this.deleteClicked.emit(this.cartItem);
    console.log(this.cartItem);
    // this.cartService.deleteBookFromCart(this.cartItem).subscribe(response => {
    //   console.log(response);

    // })

    this.http.post(productsApiUrl, 1)

  }

}

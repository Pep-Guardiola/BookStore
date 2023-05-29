import { Component, Input, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  imageHeight: number = 280;

  cartItem!: CartItem;

  constructor(
    private msgService: MessengerService,
    private cartService: CartService) {}

  ngOnInit(): void {

    }

  handleAddToCart() {
  //  console.log('handleAddToCart pressed. ProductItem is' +JSON.stringify(this.productItem));
    // this.cartItem = {
    //   author: this.productItem.author,
    //   price: this.productItem.price,
    //   productId: this.productItem.productId,
    //   qty: this.productItem.qty,
    //   title: this.productItem.title

    // }
    // this.cartService.addBookToCart(this.cartItem).subscribe(() => {
    //   this.msgService.sendMsg(this.cartItem)
    // })

    this.cartService.testToCart().subscribe()

  }

}

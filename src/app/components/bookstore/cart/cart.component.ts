import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: CartItem[] = []
  constructor(
    private cartService: CartService,
    private msgService: MessengerService) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(): void {
    this.msgService.getMsg().subscribe(() => {
      this.loadCartItems()
    })
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      //TODO: this.calculateCartTotal()
    })
  }



  }




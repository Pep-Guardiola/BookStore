import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit{

  productItem: Product =
  {
      productId: 101,
      title: '',
      author: '',
      price: 203,
      description: '',
      imageUrl: '',
      starRating: 4.5,
      topList: false,
      qty: 1
    }

    //how instantiate the product item without filling in default values. Do I need to create a class Product


  constructor (private productService: ProductService) {}

    ngOnInit(): void {

    }


  handleAddBook(bookInput: NgForm): void {
    console.log(bookInput.form)
    console.log('Saved: ' + JSON.stringify(bookInput.value))

    this.productService.saveBook(bookInput.value).subscribe()

  }

}

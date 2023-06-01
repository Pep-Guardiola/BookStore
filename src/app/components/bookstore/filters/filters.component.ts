import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { productsApiUrl } from 'src/app/config/api';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  /**
   *
   */
  constructor(private http: HttpClient) {


  }

  addStuff(){
    let a = {
      id:1
    }

    let b = {
      id:2
    }

    this.http.post(productsApiUrl, a).subscribe()
    this.http.post(productsApiUrl, b).subscribe()

  }

  removeStuff() {
    this.http.delete(productsApiUrl+'/'+3).subscribe()

  }

}

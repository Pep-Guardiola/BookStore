import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { FiltersComponent } from './components/bookstore/filters/filters.component';
import { ProductListComponent } from './components/bookstore/product-list/product-list.component';
import { CartComponent } from './components/bookstore/cart/cart.component';
import { FavoritesComponent } from './components/bookstore/favorites/favorites.component';
import { TopListComponent } from './components/bookstore/top-list/top-list.component';
import { ProductItemComponent } from './components/bookstore/product-list/product-item/product-item.component';
import { CartItemComponent } from './components/bookstore/cart/cart-item/cart-item.component';
import { BookManagerComponent } from './components/book-manager/book-manager.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    FavoritesComponent,
    TopListComponent,
    ProductItemComponent,
    CartItemComponent,
    BookManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: BookstoreComponent },
      { path: 'bookmanager', component: BookManagerComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productcomponent } from './product/product.component';
import { productscomponent } from './product/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    productcomponent,
    productscomponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

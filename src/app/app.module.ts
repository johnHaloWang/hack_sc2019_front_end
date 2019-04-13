import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { HttpClientModule } from '@angular/common/http'; 
import { ProductService } from "./service/product.service";
import { StoreService } from "./service/store.service";
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    EditProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  	ProductService,
    StoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { UserService } from "./service/user.service";
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ListStoresComponent } from './list-stores/list-stores.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    EditProductComponent,
    AddProductComponent,
    LoginComponent,
    ListStoresComponent
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
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

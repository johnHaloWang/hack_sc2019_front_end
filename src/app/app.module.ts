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
import { AuthenticationService } from "./service/auth.service";

import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { SearchComponent } from './search/search.component';


// map import
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction
import {} from 'googlemaps';
import {} from 'google-distance-matrix';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    EditProductComponent,
    AddProductComponent,
    LoginComponent,
    ListStoresComponent,
    ProductDashboardComponent,
    RegisterComponent,
    EditStoreComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxTOS3n58ZQtjnV35n4q-oxgqXkFV0MBI',
      // apiKey: 'AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190&libraries',
      libraries: ['geometry']
    }),
    AgmDirectionModule,
  ],
  providers: [
  	ProductService,
    StoreService,
    UserService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

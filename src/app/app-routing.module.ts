import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from "./list-products/list-products.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddProductComponent } from "./add-product/add-product.component";


import { ListStoresComponent } from "./list-stores/list-stores.component";
import { EditStoreComponent } from "./edit-store/edit-store.component";


import { ProductDashboardComponent} from "./product-dashboard/product-dashboard.component";

import { RegisterComponent} from "./register/register.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
  { path: 'list-products',                    component: ListProductsComponent},
  { path: 'edit-product',                     component: EditProductComponent},
  { path: 'add-product',                      component: AddProductComponent},
  { path: 'list-stores',                      component: AddProductComponent},
  { path: 'login',		                      component: LoginComponent},
  { path: 'list-stores',		              component: ListStoresComponent},
  { path: 'product-dashboard',		          component: ProductDashboardComponent},
  { path: 'edit-store',                       component: EditStoreComponent},
  { path: 'register',		          		  component: RegisterComponent},
  { path: '',                    component: SearchComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

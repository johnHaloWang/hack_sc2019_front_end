import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from "./list-products/list-products.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddProductComponent } from "./add-product/add-product.component";


import { ListStoresComponent } from "./list-stores/list-stores.component";
import { EditStoreComponent } from "./edit-store/edit-store.component";


import { ProductDashboardComponent} from "./product-dashboard/product-dashboard.component";

import { RegisterComponent} from "./register/register.component";
<<<<<<< HEAD
import { AppComponent} from "./app.component";
import { SearchComponent} from "./search/search.component";
=======
import { LoginComponent } from "./login/login.component";


>>>>>>> df26ace3e79c202508654572451949c002cdf90b
const routes: Routes = [
  { path: 'list-products',                    component: ListProductsComponent},
  { path: 'edit-product',                     component: EditProductComponent},
  { path: 'add-product',                      component: AddProductComponent},
  { path: 'list-stores',                      component: AddProductComponent},
  { path: 'login',		                      component: LoginComponent},
  { path: 'list-stores',		              component: ListStoresComponent},
  { path: 'product-dashboard',		          component: ProductDashboardComponent},
  { path: 'edit-store',                     component: EditStoreComponent},
  { path: 'register',		          		  component: RegisterComponent},
<<<<<<< HEAD
  { path: 'home',		          		  	  component: SearchComponent}
=======
 
>>>>>>> df26ace3e79c202508654572451949c002cdf90b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

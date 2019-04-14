import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from "./list-products/list-products.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { LoginComponent } from "./login/login.component";
import { ListStoresComponent } from "./list-stores/list-stores.component";
import { ProductDashboardComponent} from "./product-dashboard/product-dashboard.component";
import { RegisterComponent} from "./register/register.component";
import { AppComponent} from "./app.component";
const routes: Routes = [
  { path: 'list-products',                    component: ListProductsComponent},
  { path: 'edit-product',                     component: EditProductComponent},
  { path: 'add-product',                      component: AddProductComponent},
  { path: 'login',		                      component: LoginComponent},
  { path: 'list-stores',		              component: ListStoresComponent},
  { path: 'product-dashboard',		          component: ProductDashboardComponent},
  { path: 'register',		          		  component: RegisterComponent},
  { path: 'home',		          		  	  component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
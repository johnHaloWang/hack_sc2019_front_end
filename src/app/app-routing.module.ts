import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from "./list-products/list-products.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddProductComponent } from "./add-product/add-product.component";

const routes: Routes = [
  { path: 'list-products',                    component: ListProductsComponent},
  { path: 'edit-product',                    component: EditProductComponent},
  { path: 'add-product',                    component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
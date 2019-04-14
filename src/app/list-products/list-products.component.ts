import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../service/product.service";
import { Product } from "../model/product.model";
import { Geolocation } from "../model/geolocation.model";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Product[];
  storeName: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService){}

  ngOnInit() {
  	this.productService.getProducts()
  	.subscribe( data => {
        this.products = data;
        this.storeName = sessionStorage.getItem("storeName");
      });
  }

  deleteProduct(product: Product): void {
      this.productService.deleteUser(product._id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
        this.router.navigate(['list-products']);
      })

  };

  editProduct(product: Product): void {
    sessionStorage.removeItem("editProductId");
    sessionStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['edit-product']);
  };

   addProduct(): void {
    this.router.navigate(['add-product']);
  };

  onLogout(){

  };

}

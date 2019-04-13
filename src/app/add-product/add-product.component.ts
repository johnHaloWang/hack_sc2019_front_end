import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import {ProductService} from "../service/product.service";
import {StoreService} from "../service/Store.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {Store} from "../model/store.model";



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
//constructor() { }
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router, private productService: ProductService, private storeService: StoreService) { }

  product: Product;
  stores: Store[];
  addForm: FormGroup;
  lists = []
  //username = "";
  ngOnInit() {
    //this.username = sessionStorage.getItem('username');
    this.storeService.getStore()
  	.subscribe( data => {
        this.stores = data;
      });


    this.addForm = new FormGroup(
    {
         name: new FormControl(),
         address: new FormControl(),
         city: new FormControl(),
         zipcode: new FormControl(),
         state: new FormControl(),
         geolocation: new FormGroup({
               latitude: new FormControl(),
	       	   longitude: new FormControl()
          })
      })
  };

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.addForm.invalid){
        return ;
    }
    this.productService.addProduct(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-products']);
      });
  };

  onLogout(){
    // this.authService.logout();
    // this.router.navigate(['login']);
  };

}

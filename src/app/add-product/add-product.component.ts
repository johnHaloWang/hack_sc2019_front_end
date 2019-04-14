import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import {ProductService} from "../service/product.service";
import {StoreService} from "../service/store.service";
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
  storeName: string;

  lists = [
  			{value: 0, label: "testing"},
  			{value: 1, label: "testing2"},
  			];
  //username = "";
  ngOnInit() {
    //this.username = sessionStorage.getItem('username');
    this.storeService.getStore()
  	.subscribe( data => {
       this.storeName = sessionStorage.getItem("storeName");
        this.stores = data;
      });
  	// var len = 3
  	// for(var i = 0; i< len; i++){
  	// 	let s = this.stores[i];
  	// 	//this.lists.push({value: s._id, label: s.name});
  	// }
  	

    this.addForm = new FormGroup(
    {
         name: new FormControl(),
         address: new FormControl(),
         brand: new FormControl(),
         price: new FormControl(),
         store_id: new FormControl(),
         stocked_date: new FormControl(),
         available: new FormControl(),
         geolocation: new FormGroup({
               latitude: new FormControl(),
	       	   longitude: new FormControl()
          }),
         pictureFileName: new FormControl(),
      })
    //this.addForm.controls['name'].value = "testing";
  };



  // convenience getter for easy access to fom fields
  // get f() { return this.addForm.controls; }r

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

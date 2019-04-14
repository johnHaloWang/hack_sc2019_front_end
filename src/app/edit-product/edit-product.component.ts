import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";
import { Router } from "@angular/router";
import { Product } from "../model/product.model";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import { first} from "rxjs/operators";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  storeName: string;
  editProductForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private productService: ProductService) { }

  _id = "";
  ngOnInit() {
        this.storeName = sessionStorage.getItem("storeName");
  	this._id = sessionStorage.getItem('_id');
  	let productId = sessionStorage.getItem("editProductId");
  	if(!productId) {
      alert("Invalid action.")
      this.router.navigate(['list-products']);
      return;
    }
    this.editProductForm = this.formBuilder.group({
      id: ['', Validators.required],
    });
    this.productService.getProductById(productId)
      .subscribe( data => {
         this.editProductForm.setValue(data);
    });

     this.editProductForm = new FormGroup(
      {
         objectID: new FormControl(),
         _id: new FormControl(),
       	 store_id: new FormControl(),
         price: new FormControl(),
         name: new FormControl,
         brand: new FormControl,
         available: new FormControl,
         stocked_date: new FormControl,
         pictureFileName: new FormControl,
	     gasCost: new FormControl,
         
          geolocation: new FormGroup({
               latitude: new FormControl(),
	       	   longitude: new FormControl()
          }),
          totalCost: new FormControl,
          creationTime: new FormControl
      }
   )


  }
  onSubmit() {
    //this.userTemp.id = this.editForm.form-control.id.value;
    //this.userTemp.title = this.editForm.form-control.title.value;
    //this.userTemp.password = this.editForm.form-control['password'].value;
    //this.userTemp.user_type = this.editForm.user_type.value;

    this.productService.updateProduct(this.editProductForm.value)
                    .subscribe(
                        
   			data => {

          		this.router.navigate(['list-products']);
                     }
                    );
    
  }
	onLogout(){
	}

}

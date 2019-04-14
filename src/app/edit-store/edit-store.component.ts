import { Component, OnInit } from '@angular/core';
import { StoreService } from "../service/store.service";
import { Router } from "@angular/router";
import { Store } from "../model/store.model";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import { first} from "rxjs/operators";

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  store: Store;
  editStoreForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private storeService: StoreService) { }

  _id = "";

  ngOnInit() {
  	this._id = sessionStorage.getItem('_id')
  	let storeId = sessionStorage.getItem("editStoreId");
  	if(!storeId) {
      alert("Invalid action.")
      this.router.navigate(['list-stores']);
      return;
    }
    this.editStoreForm = this.formBuilder.group({
      id: ['', Validators.required],
    });
    this.storeService.getProductById(storeId)
      .subscribe( data => {
         this.editStoreForm.setValue(data);
    });

     this.editStoreForm = new FormGroup(
      {
 
         _id: new FormControl(),
       	 name: new FormControl(),
       	 pictureFileName: new FormControl,
         address: new FormControl(),
         zipcode: new FormControl,
         city: new FormControl,
         state: new FormControl,
         
          geolocation: new FormGroup({
               latitude: new FormControl(),
	       	   longitude: new FormControl()
          }),
          creationTime: new FormControl
      }
   )
  }
  onSubmit() {
    //this.userTemp.id = this.editForm.form-control.id.value;
    //this.userTemp.title = this.editForm.form-control.title.value;
    //this.userTemp.password = this.editForm.form-control['password'].value;
    //this.userTemp.user_type = this.editForm.user_type.value;

    this.storeService.updateStore(this.editStoreForm.value)
                    .subscribe(
                        
   			data => {

          		this.router.navigate(['list-stores']);
                     }
                    );
    
  }

}

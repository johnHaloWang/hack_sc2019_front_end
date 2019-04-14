import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import {StoreService} from "../service/store.service";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {Store} from "../model/store.model";
import {User} from "../model/user.model";
import {Register} from "../model/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
submitted = false;
  		constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService, private storeService: StoreService) { }

  		lists = [
  			{value: "ROLE_USER", label: "ROLE_USER"},
  			{value: "ROLE_ADMIN", label: "ROLE_ADMIN"},
  			{value: "ANONYMOUS", label: "ANONYMOUS"},
  		];

    registerForm: FormGroup;
	ngOnInit() {
		this.registerForm = new FormGroup(
		    {

		    	 contactNumber: new FormControl(),
		         username: new FormControl(),
		         password: new FormControl(),
		         role: new FormControl(),
		         email: new FormControl(),
		         
		         stocked_date: new FormControl(),
		         available: new FormControl(),
		         
		         pictureFileName: new FormControl(),
		         store: new FormGroup({
		    		name: new FormControl(),
				    pictureFileName: new FormControl(),
				    address: new FormControl(),
				    geolocation: new FormGroup({
		               latitude: new FormControl(),
			       	   longitude: new FormControl()
		          	}),
	    			zipcode: new FormControl(),
	    			city: new FormControl(),
	    			state: new FormControl()
		    	})
		      })
	};

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
        return ;
    }
    this.userService.register(this.registerForm.value)
      .subscribe( data => {
        this.router.navigate(['login']);
      });
  };

  onLogout(){
    this.router.navigate(['login']);
  };

}

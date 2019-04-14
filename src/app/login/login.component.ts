import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthenticationService   } from "../service/auth.service";
import { UserService } from "../service/user.service";
import { StoreService } from "../service/store.service";

import { User } from "../model/user.model";
import { Token } from "../model/token.model" 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor() { }
  loginForm: FormGroup;
  submitted: boolean = false;
  logouted:  boolean = false;
  invalidLogin: boolean = false;
  token: string;
  user:User;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private userService: UserService, private storeService: StoreService) { }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.controls.username.value, 
                          this.loginForm.controls.password.value)
        .pipe(first())
            .subscribe(
                login => {
                    this.userService.getUserByUsername(this.loginForm.controls.username.value).subscribe(data =>{
                      
                      this.storeService.getStoreById(data.store_id).subscribe(data2 =>
                        { sessionStorage.setItem("storeName", data2.name)} );
                      sessionStorage.setItem("userstore_id", data.store_id);
                      sessionStorage.setItem("user_id", data._id);
                      this.router.navigate(['product-dashboard']);
                    });
                    
                },
                error => {
                    this.invalidLogin = true;
        });
   };

  onLogout(){
    this.logouted = true;
    this.authService.logout();
    //this.router.navigate(['login']);
    this.invalidLogin = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group( {
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
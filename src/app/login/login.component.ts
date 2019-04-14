import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthenticationService   } from "../service/auth.service";
import { UserService } from "../service/user.service";

import { User } from "../model/user.model";


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
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private userService: UserService ) { }
  user: User;
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // this.authService.login(this.loginForm.controls.username.value, 
    //                       this.loginForm.controls.password.value)
    //     .pipe(first())
    //         .subscribe(
    //             login => {
                  
    //                 this.userService.getUserById(login.userId)
    //                     .subscribe( data => {
    //                       sessionStorage.setItem('user_type', data.user_type.toString());
			 //  sessionStorage.setItem('username', data.username.toString()); 
    //     		   if(data.user_type  == 2 ) {
    //                             this.router.navigate(['admin-user']);
    //                        }else if(data.user_type  == 1 ) {
    //                             this.router.navigate(['regular-user']);
    //                        }else{
    //                             this.router.navigate(['client-user']);
    //                       }
    //                   });
    //             },
    //             error => {
    //                 this.invalidLogin = true;
    //     });
 };

  onLogout(){
    this.logouted = true;
    this.authService.logout();
    this.router.navigate(['login']);
    this.invalidLogin = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group( {
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from  "../model/user.model";


@Injectable()

export class AuthenticationService {
      API_URL = "http://springapp4-dev.us-west-1.elasticbeanstalk.com:5000/api/auth";

      constructor(private http: HttpClient) { }
      token: string;
      login(username: string, password: string) {
         return this.http.post<any>(this.API_URL + '/' + 'login', {username: username, password: password})
                .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.id) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    //sessionStorage.setItem("s", user);
                }

                return user;
        }));
      }
      logout() { 
        if(sessionStorage.getItem('accessToken')!=null){
            this.http.post<any>(this.API_URL + '/' + 'logout?', {access_token: sessionStorage.getItem('accessToken')});
        }
        sessionStorage.clear();
      }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Token } from  "../model/token.model";


@Injectable()

export class AuthenticationService {
      API_URL = "http://springapp4-dev.us-west-1.elasticbeanstalk.com:5000/api/auth";

      constructor(private http: HttpClient) { }
      token: Token;
      login(username: string, password: string) {
         return this.http.post<any>(this.API_URL, {username: username, password: password})
                .pipe(map(token => {
                // login successful if there's a jwt token in the response
                if (token && token.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('accessToken', token.token);
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('password', password);
                    //sessionStorage.setItem("s", user);
                }else{
                  console.log("failed");
                }
        }));
      }
      logout() { 
        sessionStorage.removeItem('accessToken');
        sessionStorage.clear();
      }
}
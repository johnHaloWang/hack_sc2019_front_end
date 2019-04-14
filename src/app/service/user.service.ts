import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User}        from "../model/user.model";
import { Register }   from "../model/register.model";


 const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      
  };


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    baseUrl: string = 'http://springapp4-dev.us-west-1.elasticbeanstalk.com:5000/api/user';
    baseUrlRegister: string = 'http://springapp4-dev.us-west-1.elasticbeanstalk.com:5000/api/register';
    testfile: string;
    configUrl = 'assets/config.json';
  getUsers() {
    return this.http.get<User[]>(this.baseUrl + '/list');
  }

  getUserById(id: string){
    return this.http.post<User>(this.baseUrl + '/get', {_id: id}, httpOptions);
  }

  getUserByUsername(usernameInput: string){
     let token = sessionStorage.getItem("accessToken");
     const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    }
    let body = {
        username: usernameInput, 
        password: "password",
    }
    return  this.http.post<User>(this.baseUrl + '/getUsername', body, httpOptions2);
    
      
  }
  

  updateUser(user: User){
    /*
    { 
              "_id": "5c9ed68a0e3a5f165f8446c0",
              "name": "daiso", 
              "creationTime": "Sun Apr07 04:35:09 PDT 2019", 
              "pictureFileName":"cat.jpg", 
              "geolocation": { 
                "latitude":34.55, 
                "longitude": -17.22 }, 
              "address":"sdfa", 
              "zipcode": "sfdasdf", 
              "city":"sfdasdf", 
              "state": "ca" 
          }
     */
    let body = {
        _id: user._id,
        username: user.username, 
        password: user.password,
        contactNumber: user.contactNumber, 
        role: user.role, 
        email: user.email, 
        store_id: user.store_id,
        enable: true
    }
    return this.http.post<User>(this.baseUrl + '/update', body);
  }

  deleteUser(id: string) {
    return this.http.post(this.baseUrl + '/delete', {_id: id }, httpOptions);
  }

/*
{ 
    "username": "halo5", 
    "password": "halo5",
    "contactNumber":"6262678982", 
    "role": "ROLE_ADMIN", 
    "email":"halo@gamil.com", 
    "store":{ 
      "name": "new Xxxx-v5", 
      "pictureFileName":"sdfa", 
      "address": "asdfa", 
      "zipcode": "afdsa", 
      "city": "adfadfs",
      "state": "afdsasf", 
      "geolocation":{ 
        "latitude": 23.229999542236328,
        "longitude": 32.22999954223633 
        }, 
      "storeAddress": "asdfa adfadfsafdsa, afdsasf" 
  }

}
*/
  addUserToStore(user: User){
      let body = {
        username: user.username, 
        password: user.password,
        contactNumber: user.contactNumber, 
        role: user.role, 
        email: user.email, 
        store_id: user.store_id,
        store:{ 
        
         }, 
      }
    
    return this.http.post<User>(this.baseUrl + '/addUserToStore', body);
  }

  /*
   { 
     "username": "halo10", 
     "password": "halo10", 
     "contactNumber":"6262678982",
      "role": "ROLE_ADMIN", 
      "email":"halo@gamil.com", 
      "store": { 
        "name": "newXxxx-v10", 
        "pictureFileName": "sdfa",
        "address": "asdfa", 
        "zipcode": "afdsa",
        "city": "adfadfs", 
        "state": "afdsasf",
        "geolocation":{ 
            "latitude":23.229999542236328, 
            "longitude":32.22999954223633 
        }, 
      }
   }
   */
  register(register: Register){
    let body = {
         username: register.username, 
         password: register.password, 
         contactNumber: register.contactNumber,
         role: register.role, 
         email: register.email, 
         store: { 
            name: register.store.name, 
            pictureFileName: register.store.pictureFileName,
            address: register.store.address, 
            zipcode: register.store.zipcode,
            city: register.store.city, 
            state: register.store.state,
            
            geolocation:{ 
                latitude: register.store.geolocation.latitude, 
                longitude: register.store.geolocation.longitude 
            }
          }

       }  
       const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    }
      
    return this.http.post<User>(this.baseUrlRegister, body,httpOptions2);
  }

  
 }
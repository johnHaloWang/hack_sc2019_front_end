import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Product } from "../model/product.model";
import { Store }  from "../model/store.model";
import { Geolocation } from "../model/geolocation.model"


 const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        // 'access-control-allow-origin': '*',
        // 'access-control-allow-credentials': 'true'
      })
 };

@Injectable()
export class StoreService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://springapp4-dev.us-west-1.elasticbeanstalk.com:5000/api/store';
  //configUrl = 'assets/config.json';

  getStore() {
    return this.http.get<Store[]>(this.baseUrl + '/list');
  }

  getStoreById(id: string){
    return this.http.post<Store>(this.baseUrl + '/get', {_id: id}, httpOptions);
  }

  updateStore(store: Store){
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
      _id: store._id,
      name: store.name,
      address: store.address,
      zipcode: store.zipcode,
      city: store.city,
      state: store.state,
      pictureFileName: store.pictureFileName,
      geolocation: {
            latitude: store.geolocation.latitude,
            longitude: store.geolocation.longitude
      },
      creationTime: store.creationTime,
    }
    return this.http.post<Store>(this.baseUrl + '/update', body);
  }

  deleteStore(id: string) {
    return this.http.post(this.baseUrl + '/delete', {_id: id }, httpOptions);
  }

  addStore(store: Store){
      let body = {
      name: store.name,
      address: store.address,
      zipcode: store.zipcode,
      city: store.city,
      state: store.state,
      pictureFileName: store.pictureFileName,
      geolocation: {
            latitude: store.geolocation.latitude,
            longitude: store.geolocation.longitude
      },
      creationTime: store.creationTime,
    }
    return this.http.post<Product>(this.baseUrl + '/add', body);
  }

  listGeo(geolocation: Geolocation, nameInput: string, radiusInput: number, mpgInput: number){
    let body = {
        name: nameInput, 
        radius: radiusInput,
        mpg: mpgInput,
        geolocation: {
            latitude: geolocation.latitude,
            longitude: geolocation.longitude
        }
    }
    return this.http.post<Store[]>(this.baseUrl + '/listGeo', body);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Product } from "../model/product.model";
import { Store }  from "../model/store.model";
import {Geolocation } from "../model/geolocation.model"


 const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        // 'access-control-allow-origin': '*',
        // 'access-control-allow-credentials': 'true'
      })
 };

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://springapp4-dev.us-west-1.elasticbeanstalk.com:5000/api/product';
  //configUrl = 'assets/config.json';

  getProducts() {
    return this.http.get<Product[]>(this.baseUrl + '/list');
  }

  getProductById(id: string){
    return this.http.post<Product>(this.baseUrl + '/get', {_id: id}, httpOptions);
  }

  updateProduct(product: Product){
    let body = {
      _id: product._id,
      store_id: product.store_id,
      price: product.price,
      gasCost: product.gasCost,
      name: product.name,
      brand: product.brand,
      available: product.available,
      stocked_date: product.stocked_date,
      pictureFileName: product.pictureFileName,
      geolocation: {
            latitude: product.geolocation.latitude,
            longitude: product.geolocation.longitude
      },
      creationTime: product.creationTime,
      totalCost: product.totalPrice
    }
    return this.http.post<Product>(this.baseUrl + '/update', body);
  }

  deleteUser(id: string) {
    return this.http.post(this.baseUrl + '/delete', {_id: id }, httpOptions);
  }

  addProduct(product: Product){
      let body = {
      _id: product._id,
      store_id: product.store_id,
      price: product.price,
      gasCost: product.gasCost,
      name: product.name,
      brand: product.brand,
      available: product.available,
      stocked_date: product.stocked_date,
      pictureFileName: product.pictureFileName,
      geolocation: {
            latitude: product.geolocation.latitude,
            longitude: product.geolocation.longitude
      },
      creationTime: product.creationTime,
      totalCost: product.totalPrice
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
    return this.http.post<Product[]>(this.baseUrl + '/listGeo', body);
  }

}
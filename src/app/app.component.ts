import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from "./service/product.service";
import { Product } from "./model/product.model";
import { Geolocation } from "./model/geolocation.model";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private formBuilder: FormBuilder, private productService: ProductService){}
  title = 'hackSCApp';
  locationChosen = false;
  keypress = false;

  public origin: any
  public destination: any
  public Store_latitude: any
  public Store_longitude: any
  public Search_product_name: string

  distance:any;
  currentLat:any;
  currentLong:any;
  distanceInMiles:any;
  searchForm: FormGroup;
  products:Product[]
  ngOnInit(){
    // this.currentLat = 34.040605;
    // this.currentLong = -118.255398;
    this.searchForm = this.formBuilder.group( {
      result: ['', Validators.required],
      mph: ['', Validators.required]
    });
    this.setCurrentPosition();
  }

  getDirection(event) {
    // this.origin = { lat: 24.799448, lng: 120.979021 }
    // this.destination = { lat: 24.799524, lng: 120.975017 }

    this.origin = { lat: this.currentLat , lng: this.currentLong }
    // this.destination = { lat: 34.03672, lng:  -118.255334 }
    this.destination = { lat: event.coords.lat, lng: event.coords.lng }
    console.log(event);
    this.Store_latitude = event.coords.lat;
    this.Store_longitude = event.coords.lng;

    this.locationChosen = true;

    const markerLoc = new google.maps.LatLng(this.Store_latitude, this.Store_longitude);
    const center = new google.maps.LatLng(this.currentLat, this.currentLong);

    this.distanceInMiles = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000 *0.621372;
    //console.info(this.distanceInKm);
  }

  private setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
    }
  }

  onSubmit(){
	// this.productService.listGeo2(this.currentLat,this.currentLong , this.searchForm.controls.result.value, 10.0, this.searchForm.controls.mph.value)
	// .subscribe( data => 
	// 	       { this.products = data; this.router.navigate(['home']);
 //               });

  };




}

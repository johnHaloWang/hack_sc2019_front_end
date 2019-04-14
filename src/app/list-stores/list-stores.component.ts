import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StoreService } from "../service/store.service";
import { Store } from "../model/store.model";
import { Geolocation } from "../model/geolocation.model";

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.css']
})
export class ListStoresComponent implements OnInit {
  stores: Store[];
  constructor(private formBuilder: FormBuilder, private router: Router, private storeService: StoreService) { }

  ngOnInit() {
  	this.storeService.getStore()
  	.subscribe( data =>{
  		this.stores = data;
  	});
  }

  deleteStore(store: Store): void {	
  	this.storeService.deleteStore(store._id)
  	.subscribe( data => {
  		this.stores = this.stores.filter(u => u !== store);
  		this.router.navigate(['list-stores']);
  	})
  }

  editStore(store: Store): void {
  	sessionStorage.removeItem("editStoreId");
    sessionStorage.setItem("editStoreId", store._id.toString());
    this.router.navigate(['edit-store']);
  }

  //addStore(store: Store)
}


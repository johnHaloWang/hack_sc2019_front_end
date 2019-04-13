import {Geolocation} from "./geolocation.model"

export class Store{

    _id: string;  
	name: string;
    pictureFileName: string;
    geolocation: Geolocation;
    creationTime: string
    address: string;
    zipcode: string;
    city: string;
    state: string;
}
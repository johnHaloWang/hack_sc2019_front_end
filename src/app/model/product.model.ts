import {Geolocation} from "./geolocation.model"

export class Product{

    _id: string;
	store_id: string;
    price: number;
    gasCost: number;
    totalPrice: number;
    name: string;
    brand: string;
    available: boolean;
    stocked_date: string;
    pictureFileName: string;
    geolocation: Geolocation;
    creationTime: string;
    distance: number;
}

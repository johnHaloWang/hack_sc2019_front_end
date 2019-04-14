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
<<<<<<< HEAD
    creationTime: string;
    distance: number;
=======
    creationTime: string
    distance: number
>>>>>>> df26ace3e79c202508654572451949c002cdf90b
}

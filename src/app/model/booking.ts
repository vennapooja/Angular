

import { Hotels } from "./hotels";
import { User } from "./user";

export class Booking {
  bookingId: number; 
    totalPrice: number;
    noOfRooms: number;
    user: User;
    bookingDate: Date;
    bookingTime: Date;
    hotel: Hotels;
    status: string;
     

    constructor( bookingId: number ,user:User ,bookingDate: Date,bookingTime: Date,hotel: Hotels,noOfRooms: number,status: string){}
   
}

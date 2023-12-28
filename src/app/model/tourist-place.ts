export class TouristPlace {
    placeId:number;
    placeName:string;
    location:string;
    timings:string;
    ticketPriceChildren:Number;
    ticketPriceAdults:Number;
    description:string;
    contact:string;
    emailid:string;
    rating:Number;
    img:string
    constructor( placeId:number,placeName:string,location:string,timings:string,ticketPriceChildren:Number,ticketPriceAdults:Number, description:string,contact:string,emailid:string, rating:Number,img:string)
    {
    this.placeId = placeId;
    this.placeName = placeName;
    this.location = location;
    this.timings = timings;
    this.ticketPriceChildren = ticketPriceChildren;
    this.ticketPriceAdults = ticketPriceAdults;
    this.description = description;
    this.contact = contact;
    this.emailid = emailid;
    this.rating = rating;
    this.img=img;
    }
}

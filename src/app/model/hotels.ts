export class Hotels{
  
    hotelId:number;
    hotelName:string;
    facilities:string;
    //hotelImage:string;
    hotelPrice:number;
    location:string;
    noOfRooms:number;
    about:string;
    rating:number;
    images:string;
    
        constructor(hotelId:number,hotelName:string ,
          facilities:string,//hotelImage:string,
          hotelPrice:number,
          location:string,noOfRooms:number,about:string,rating:number,images:string
        ){
		this.hotelId = hotelId;
		this.hotelName = hotelName;
		this.facilities = facilities;
		//this.hotelImage = hotelImage;
		this.hotelPrice = hotelPrice;
		this.noOfRooms = noOfRooms;
		this.location = location;
		this.about=about;
		this.rating = rating;
        this.images=images;
        }
    
    }


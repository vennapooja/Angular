import { Component } from '@angular/core';
import { HotelsService } from '../../service/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrl: './view-hotel.component.css'
})
export class ViewHotelComponent {
 /* hotel: any;
  user: any;
  numberOfGuests: any;
  Hotels: any;
  hasSearchName: boolean;
  searchName: string;
  p: number = 1;
  count: number = 3;
  
  

   constructor(private hotelsService: HotelsService, public router: Router, private activeRoute: ActivatedRoute) { }
   ngOnInit():void{
    this.getAllHotels();
  }
  bookHotel() {
    const hotelId = this.hotel.hotelId;
    const userId = this.user.userId;

    const Guests = { numberOfGuests: this.numberOfGuests };

    this.hotelsService.bookHotel(hotelId, userId, Guests).subscribe(

      (response: { bookingId: string; }) => {

        console.log('Hotel Booked successfully', response);
        alert("Hotel Successfully Booked")

        localStorage.setItem("generatedBookingId", response.bookingId);

        this.router.navigateByUrl("/user/addpayments")
      },
      (error: any) => {

        console.error('Error while booking', error);
      }
    );
  }
  getAllHotels():void
  {
    this.hasSearchName=this.activeRoute.snapshot.paramMap.has("hotelName");
    if(this.hasSearchName)
    {
      this.searchName=this.activeRoute.snapshot.paramMap.get("hotelName");
      console.log(this.searchName)
      this.hotelsService.getHotelsByhotelName(this.searchName).subscribe(data=>{
        console.log(data);
        this.Hotels=data;
      })
    }
  else{
    this.hotelsService.getAllHotels().subscribe(data=>{
      console.log(data);
      this.Hotels=data;
    });
  }
  }
 
}*/
user: User;
  hasSearchName: any;
  searchName: string;
  hotel:any;
  p: number = 1;
  count: number = 1;
  constructor(private hotelsService:HotelsService,public router:Router, private activeRoute:ActivatedRoute) { }
    ngOnInit(): void 
     {
      this.activeRoute.paramMap.subscribe(()=>this.getAllHotel());
      this.activeRoute.paramMap.subscribe(()=>this.user=JSON.parse(sessionStorage.getItem("user")));
      this.checkSessionAndNavigate();
    }
    getAllHotel():void
    {
      this.hasSearchName=this.activeRoute.snapshot.paramMap.has("hotelName");
      if(this.hasSearchName)
      {
        this.searchName=this.activeRoute.snapshot.paramMap.get("hotelName");
        console.log(this.searchName)
        this.hotelsService.getHotelByhotelName(this.searchName).subscribe(data=>{
          console.log(data);
          this.hotel=data;
        })
      }
    else{
      this.hotelsService.getAllHotel().subscribe(data=>{
        console.log(data);
        this.hotel=data;
      });
    }
    }

  BookHotel(id:number)
  {
    this.router.navigateByUrl("/user/addbooking/"+id);
  
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl("/user/login");
    }

  }
  back(){
    this.router.navigateByUrl("user/hotelwelcome");
  }


}


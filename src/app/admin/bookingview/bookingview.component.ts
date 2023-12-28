import { Component } from '@angular/core';
import { Admin } from '../../model/admin';
import { Hotels } from '../../model/hotels';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../../service/hotels.service';

@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrl: './bookingview.component.css'
})
export class BookingviewComponent {
  booking : any;
  hasSearchId: boolean;
  searchId: number;
  p: number = 1;
  count: number = 5;
  admin: Admin;
  constructor(private hotelService:HotelsService,public router:Router, private activeRoute:ActivatedRoute) { }
  ngOnInit(): void 
      {
        this.activeRoute.paramMap.subscribe(()=>this.getAllBookings());
        this.activeRoute.paramMap.subscribe(()=>this.admin=JSON.parse(sessionStorage.getItem("admin")))
        this.checkSessionAndNavigate();
      }
      getAllBookings()
    {
      this.hasSearchId = this.activeRoute.snapshot.paramMap.has("bookingId");
         if(this.hasSearchId)
         {this.searchId  = Number(this.activeRoute.snapshot.paramMap.get("bookingId"));
          console.log(this.searchId)
          this.hotelService.getbookingbyid(this.searchId).subscribe(data=>{
          console.log(data);
          this.booking= data;
          })
        }
        else{
        this.hotelService.getAllBookings().subscribe(data=>{
          console.log(data);
          this.booking=data;
        });
      }
    }
    deleteBooking(id:number):void{
      console.log(id);
      if(confirm("Do you want to delete ?")){
        this.hotelService.deleteBooking(id).subscribe(data=>{
          console.log(data);
          this.getAllBookings();
        })
      };
    }
    logout() {
      if (sessionStorage.getItem("admin")) {
        sessionStorage.clear()
        localStorage.clear()
        alert("Logout Successfully")
        this.router.navigateByUrl("/login")
      }
      else {
        alert("No user loged in")
      }
    }
    checkSessionAndNavigate() {
      if (!this.admin) {
        this.router.navigateByUrl("/login");
      }
    }
}



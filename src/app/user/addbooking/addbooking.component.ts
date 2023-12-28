import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../service/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { Booking } from '../../model/booking';
import { Hotels } from '../../model/hotels';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrl: './addbooking.component.css'
})
export class AddbookingComponent implements OnInit {
  userId: number;
  hotelId: number;
  noOfRooms: number;
  user: User;
  booking: Booking;
  hotel: Hotels = new Hotels(0, '', '', 0, '', 0, '', 0, '');
  
  isEditable: boolean;
 
  
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient, public router: Router, private bookingservice: BookingService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user")));
    this.getHotelsById();
  }
  getHotelsById()
   {
    console.log("Hi")
    const hotelId = parseFloat(this.activeRoute.snapshot.paramMap.get("id"));

    console.log(hotelId);
    if (hotelId > 0) {
      this.isEditable = true;
      this.bookingservice.getHotelsById(hotelId).subscribe((data: any) => {
        this.hotel = data;
        console.log(this.hotel)
      });
    }

  }
  logout() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.router.navigateByUrl("/user/login")
    }
    else {
      alert("No user loged in")
    }
  }
  BookHotel() {
    const hotelId = this.hotel.hotelId;
    const userId = this.user.userId;

    const noOfRooms = { noOfRooms: this.noOfRooms };

    this.bookingservice.BookHotel(hotelId, userId, noOfRooms).subscribe({
      next: (response) => {
        // Handle next value
        console.log('Hotel Booked successfully', response);
        alert('Hotel Successfully Booked');
        localStorage.setItem('generatedBookingId', response.bookingId);
        this.router.navigateByUrl('/user/addpayments');
      },
      error: (error) => {
        // Handle error
        console.error('Error In Booking Hotel', error);
      }
    });
    
  }
  /*BookHotel() {
    // Ensure hotel and user are properly initialized
    if (!this.hotel || !this.user) {
      console.error('Hotel or user is not properly initialized.');
      return;
    }
  
    const hotelId = this.hotel.hotelId;
    const userId = this.user.userId;
  
    // Include noOfRooms as a property of an object
    const requestBody = { noOfRooms: this.noOfRooms };
  
    this.bookingservice.BookHotel(hotelId, userId, requestBody).subscribe(
      (response: { bookingId: any }) => {
        console.log('Hotel Booked successfully', response);
        alert('Hotel Successfully Booked');
  
        localStorage.setItem('generatedBookingId', response.bookingId);
  
        this.router.navigateByUrl('/user/addpayment');
      },
      (error: any) => {
        console.error('Error placing order', error);
      }
    );
  }*/
  
  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl("/user/login");
    }
  }
}
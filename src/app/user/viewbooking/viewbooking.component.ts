import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { BookingService } from '../../service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrl: './viewbooking.component.css'
})
export class ViewbookingComponent implements OnInit {
  p: number = 1;
  count: number = 5;
  isEditable: boolean;
  bookings: any; 
  user: User; 


  constructor(
    private bookingService: BookingService, 
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user"))); // Update session key
    this.activateRoute.paramMap.subscribe(() => this.getBookingsByUserId());
    this.checkSessionAndNavigate();
  }

  getBookingsByUserId() {
    const userId = this.user.userId; // Update property name

    if (userId > 0) {
      this.isEditable = true;
      this.bookingService.getbookingbyuserid(userId).subscribe((data: any) => {
        this.bookings = data;
        console.log(this.bookings);
      });
    }
  }

  logout() {
    if (sessionStorage.getItem("user")) { 
      sessionStorage.clear();
      localStorage.clear();
      alert("Logout Successfully");
      this.router.navigateByUrl("/user/home"); 
    } else {
      alert("No user logged in");
    }
  }

  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl("/user/login"); 
    }
  }

}

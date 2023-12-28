import { Component, OnInit } from '@angular/core';
import { Payment } from '../../model/payment';
import { PaymentService } from '../../service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { Booking } from '../../model/booking';
import { HotelsService } from '../../service/hotels.service';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrl: './addpayment.component.css'
})
export class AddpaymentComponent  implements OnInit {
    user: User;
    booking: Booking;
    bookingId: number;
    userId: number;
    payment: any = {
      nameOnCard: '',
      cardNumber: '',
      expYear: '',
      cvv: '',
      paidAmount: 0
    };
  
    constructor(private activeRoute: ActivatedRoute, private router: Router, private hotelsService: HotelsService) {}
  
    ngOnInit(): void {
      this.bookingId = Number(localStorage.getItem("generatedBookingId"));
      this.getBookingByBookingId();
      this.activeRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user")));
      this.userId = this.user.userId;
      this.checkSessionAndNavigate();
    }
  
    onSubmit() {
      this.hotelsService.addPayment(this.payment, this.bookingId, this.userId).subscribe({
        next: () => {
          console.log(this.payment);
          console.log('Payment added successfully');
          alert('Payment added successfully');
          localStorage.clear();
          this.router.navigateByUrl('/user/viewbooking');
        },
        error: (error: any) => {
          console.error('Error adding payment', error);
        },
      });
    }
    
  
    getBookingByBookingId() {
      this.hotelsService.getBookingById(this.bookingId).subscribe({
        next: (data: Booking) => {
          console.log(data);
          this.booking = data;
          this.payment.paidAmount = this.booking.totalPrice;
        },
        error: (error: any) => {
          console.error('Error fetching booking', error);
        },
        complete: () => {
          // Optional: Handle completion if needed
        },
      });
    }
    
  
    checkSessionAndNavigate() {
      if (!this.user) {
        this.router.navigateByUrl("/user/login");
      }
    }
  }
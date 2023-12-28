import { Component, OnInit } from '@angular/core';
import { Payment } from '../../model/payment';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { HotelsService } from '../../service/hotels.service';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrl: './viewpayment.component.css'
})
export class ViewpaymentComponent implements OnInit {
  payments: any;
  user: User;
  isEditable: boolean;
  p: number = 1;
  count: number = 4;

  constructor(private hotelService: HotelsService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user")));
    this.activateRoute.paramMap.subscribe(() => this.getPaymentsByUserId());
    this.checkSessionAndNavigate();
  }

  getPaymentsByUserId() {
    const userId = this.user.userId;

    console.log(userId);
    if (userId > 0) {
      this.isEditable = true;
      this.hotelService.getpaymentbyuserid(userId).subscribe(data => {
        this.payments = data;
        console.log(this.payments);
      });
    }
  }

  logout() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.clear();
      localStorage.clear();
      alert("Logout Successfully");
      this.router.navigateByUrl("/user/login");
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